import slug from 'slug'
import { error } from '@sveltejs/kit'

interface Template {
    icon: string
    title: string
    background: string
}

interface CurrentCard {
    template: string | null
    message: string
    audioBlob: Blob | null
    audioUrl: string | null
}

interface CardData {
    template: string
    message: string
    audio: string | null
}

interface CardPayload {
    base64: string
    cardType: string
    description: string
    slug: string
}

type TemplateNames = 'birthday' | 'love' | 'celebration'

let currentCard: CurrentCard = {
    template: null,
    message: '',
    audioBlob: null,
    audioUrl: null,
}

let mediaRecorder: MediaRecorder | null = null
let recordingTimer: number | null = null
let recordingStartTime: number = 0
let isRecording: boolean = false

const templates: Record<TemplateNames, Template> = {
    birthday: {
        icon: '🎂',
        title: 'Happy Birthday!',
        background: 'linear-gradient(135deg, #ff9a9e, #fecfef)',
    },
    love: {
        icon: '💕',
        title: 'With Love',
        background: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
    },
    celebration: {
        icon: '🎉',
        title: 'Congratulations!',
        background: 'linear-gradient(135deg, #a8edea, #fed6e3)',
    },
}

function randomStringWithSpaces(length: number): string {
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 '
    let result = ''
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }
    return result
}

export function selectTemplate(templateName: TemplateNames): void {
    // Remove previous selection
    document.querySelectorAll('.template-card').forEach((card: Element) => {
        card.classList.remove('selected')
    })

    // Add selection to clicked template
    const target = event?.target as HTMLElement
    const templateCard = target?.closest('.template-card') as HTMLElement
    templateCard?.classList.add('selected')

    currentCard.template = templateName
}

export async function toggleRecording(): Promise<void> {
    if (!isRecording) {
        await startRecording()
    } else {
        stopRecording()
    }
}

async function startRecording(): Promise<void> {
    try {
        const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        })
        mediaRecorder = new MediaRecorder(stream)

        const chunks: BlobPart[] = []

        mediaRecorder.ondataavailable = (event: BlobEvent): void => {
            chunks.push(event.data)
        }

        mediaRecorder.onstop = (): void => {
            const blob = new Blob(chunks, { type: 'audio/wav' })
            currentCard.audioBlob = blob
            currentCard.audioUrl = URL.createObjectURL(blob)

            const audioElement = document.getElementById(
                'audioElement'
            ) as HTMLAudioElement
            const audioPlayer = document.getElementById(
                'audioPlayer'
            ) as HTMLElement

            if (audioElement && currentCard.audioUrl) {
                audioElement.src = currentCard.audioUrl
            }

            if (audioPlayer) {
                audioPlayer.classList.remove('hidden')
            }

            // Stop all tracks
            stream
                .getTracks()
                .forEach((track: MediaStreamTrack) => track.stop())
        }

        mediaRecorder.start()
        isRecording = true

        const recordBtn = document.getElementById(
            'recordBtn'
        ) as HTMLButtonElement
        if (recordBtn) {
            recordBtn.textContent = '⏹️ Stop Recording'
            recordBtn.classList.add('recording')
        }

        recordingStartTime = Date.now()
        recordingTimer = setInterval(updateTimer, 1000)

        // Auto-stop after 2 minutes
        setTimeout((): void => {
            if (isRecording) {
                stopRecording()
            }
        }, 120000)
    } catch (err: unknown) {
        console.error('Error accessing microphone:', err)
        alert('Unable to access microphone. Please check your permissions.')
    }
}

function stopRecording(): void {
    if (mediaRecorder && isRecording) {
        mediaRecorder.stop()
        isRecording = false

        const recordBtn = document.getElementById(
            'recordBtn'
        ) as HTMLButtonElement
        if (recordBtn) {
            recordBtn.textContent = '🎤 Record Again'
            recordBtn.classList.remove('recording')
        }

        if (recordingTimer) {
            clearInterval(recordingTimer)
            recordingTimer = null
        }
    }
}

function updateTimer(): void {
    const elapsed: number = Math.floor((Date.now() - recordingStartTime) / 1000)
    const minutes: number = Math.floor(elapsed / 60)
    const seconds: number = elapsed % 60

    const timerElement = document.getElementById('timer') as HTMLElement
    if (timerElement) {
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }
}

export function deleteRecording(): void {
    currentCard.audioBlob = null
    if (currentCard.audioUrl) {
        URL.revokeObjectURL(currentCard.audioUrl)
        currentCard.audioUrl = null
    }

    const audioPlayer = document.getElementById('audioPlayer') as HTMLElement
    const recordBtn = document.getElementById('recordBtn') as HTMLButtonElement
    const timer = document.getElementById('timer') as HTMLElement

    if (audioPlayer) {
        audioPlayer.classList.add('hidden')
    }

    if (recordBtn) {
        recordBtn.textContent = '🎤 Start Recording'
    }

    if (timer) {
        timer.textContent = '00:00'
    }
}

export function createPreview(): void {
    const messageInput = document.getElementById(
        'messageInput'
    ) as HTMLInputElement
    const message: string = messageInput?.value.trim() || ''

    if (!currentCard.template) {
        alert('Please select a card template first!')
        return
    }

    if (!message) {
        alert('Please write a message!')
        return
    }

    currentCard.message = message

    const template: Template = templates[currentCard.template as TemplateNames]
    const previewContent = document.getElementById(
        'previewContent'
    ) as HTMLElement

    if (previewContent) {
        previewContent.innerHTML = `
            <div style="background: ${template.background}; border-radius: 15px; padding: 30px; margin-bottom: 20px;">
                <div style="font-size: 4em; margin-bottom: 15px;">${template.icon}</div>
                <h3 style="color: #333; margin-bottom: 20px;">${template.title}</h3>
                <p style="color: #555; font-size: 1.1em; line-height: 1.6;">${message}</p>
                ${
                    currentCard.audioUrl
                        ? `
                    <div style="margin-top: 20px;">
                        <p style="color: #666; font-size: 0.9em; margin-bottom: 10px;">🎵 Voice Message:</p>
                        <audio controls style="width: 100%; border-radius: 10px;">
                            <source src="${currentCard.audioUrl}" type="audio/wav">
                        </audio>
                    </div>
                `
                        : ''
                }
            </div>
        `
    }

    const previewCard = document.getElementById('previewCard') as HTMLElement
    if (previewCard) {
        previewCard.classList.remove('hidden')
    }
}

export async function generateShareCode(): Promise<void> {
    if (!currentCard.template || !currentCard.message) {
        alert('Please complete your card first!')
        return
    }

    const getSlug = slug(randomStringWithSpaces(6))

    const cardData: CardData = {
        template: currentCard.template,
        message: currentCard.message,
        audio: null,
    }

    let shareCode: string = ''

    if (currentCard.audioBlob) {
        const reader = new FileReader()
        reader.onload = function (): void {
            cardData.audio = reader.result as string
            shareCode = btoa(JSON.stringify(cardData))

            const shareCodeElement = document.getElementById(
                'shareCode'
            ) as HTMLElement
            const shareSection = document.getElementById(
                'shareSection'
            ) as HTMLElement

            if (shareCodeElement) {
                shareCodeElement.textContent = getSlug
            }
            if (shareSection) {
                shareSection.classList.remove('hidden')
            }
        }
        reader.readAsDataURL(currentCard.audioBlob)
    } else {
        shareCode = btoa(JSON.stringify(cardData))

        const shareCodeElement = document.getElementById(
            'shareCode'
        ) as HTMLElement
        const shareSection = document.getElementById(
            'shareSection'
        ) as HTMLElement

        if (shareCodeElement) {
            shareCodeElement.textContent = getSlug
        }
        if (shareSection) {
            shareSection.classList.remove('hidden')
        }
    }

    try {
        await createCard({
            base64: shareCode,
            cardType: currentCard.template!,
            description:
                'Random description for ' + currentCard.template + ' card',
            slug: getSlug,
        })
    } catch (error: unknown) {
        console.error('Error saving card to database:', error)
        alert('Failed to save card. Please try again later.')
    }
}

export async function copyShareCode(): Promise<void> {
    const shareCodeElement = document.getElementById('shareCode') as HTMLElement
    const shareCode: string = shareCodeElement?.textContent || ''

    try {
        await navigator.clipboard.writeText(shareCode)
        alert('Share code copied to clipboard!')
    } catch (err: unknown) {
        console.error('Failed to copy share code:', err)
        alert('Failed to copy share code to clipboard.')
    }
}

export function downloadCardAsSVG(): void {
    if (!currentCard.template || !currentCard.message) {
        alert('Please complete your card first!')
        return
    }

    const template: Template = templates[currentCard.template as TemplateNames]
    const message: string = currentCard.message

    // Create SVG with embedded styling
    const svgContent: string = `
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600">
            <defs>
                <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    ${getGradientStops(currentCard.template as TemplateNames)}
                </linearGradient>
                <style>
                    .card-text { 
                        font-family: 'Segoe UI', Arial, sans-serif; 
                        text-anchor: middle; 
                        dominant-baseline: middle;
                    }
                    .title-text { 
                        font-size: 32px; 
                        font-weight: bold; 
                        fill: #333; 
                    }
                    .message-text { 
                        font-size: 16px; 
                        fill: #555; 
                        line-height: 1.4;
                    }
                    .icon-text { 
                        font-size: 80px; 
                    }
                </style>
            </defs>
            
            <!-- Card Background -->
            <rect width="400" height="600" rx="30" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
            
            <!-- Card Content Background -->
            <rect x="40" y="80" width="320" height="440" rx="20" fill="url(#cardGradient)"/>
            
            <!-- Icon -->
            <text x="200" y="160" class="card-text icon-text">${template.icon}</text>
            
            <!-- Title -->
            <text x="200" y="240" class="card-text title-text">${template.title}</text>
            
            <!-- Message -->
            ${createMessageLines(message, 200, 300)}
            
            <!-- Voice Note Indicator -->
            ${
                currentCard.audioBlob
                    ? `
                <rect x="80" y="450" width="240" height="40" rx="20" fill="rgba(255,255,255,0.8)" stroke="#ccc"/>
                <text x="200" y="475" class="card-text" style="font-size: 14px; fill: #666;">🎵 Voice message included</text>
            `
                    : ''
            }
            
            <!-- Footer -->
            <text x="200" y="560" class="card-text" style="font-size: 12px; fill: #999;">Created with Digital Wish Cards ✨</text>
        </svg>
    `.trim()

    // Create download
    const blob = new Blob([svgContent], { type: 'image/svg+xml' })
    const url: string = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = `wish-card-${currentCard.template}-${Date.now()}.svg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
}

function getGradientStops(templateName: TemplateNames): string {
    const gradients: Record<TemplateNames, string> = {
        birthday:
            '<stop offset="0%" stop-color="#ff9a9e"/><stop offset="100%" stop-color="#fecfef"/>',
        love: '<stop offset="0%" stop-color="#ffecd2"/><stop offset="100%" stop-color="#fcb69f"/>',
        celebration:
            '<stop offset="0%" stop-color="#a8edea"/><stop offset="100%" stop-color="#fed6e3"/>',
    }
    return gradients[templateName] || gradients.birthday
}

function createMessageLines(
    message: string,
    x: number,
    startY: number
): string {
    const words: string[] = message.split(' ')
    const lines: string[] = []
    let currentLine: string = ''
    const maxWordsPerLine: number = 6 // Approximate words per line

    for (let i = 0; i < words.length; i++) {
        const testLine: string =
            currentLine + (currentLine ? ' ' : '') + words[i]
        const wordsInLine: number = testLine.split(' ').length

        if (wordsInLine <= maxWordsPerLine) {
            currentLine = testLine
        } else {
            if (currentLine) {
                lines.push(currentLine)
            }
            currentLine = words[i]
        }
    }

    if (currentLine) {
        lines.push(currentLine)
    }

    // Limit to 8 lines max
    const displayLines: string[] = lines.slice(0, 8)
    if (lines.length > 8) {
        displayLines[7] = displayLines[7] + '...'
    }

    return displayLines
        .map(
            (line: string, index: number) =>
                `<text x="${x}" y="${startY + index * 24}" class="card-text message-text">${escapeXml(line)}</text>`
        )
        .join('\n                    ')
}

function escapeXml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

export async function importCard(): Promise<void> {
    const importInput = document.getElementById(
        'importInput'
    ) as HTMLInputElement
    const slug: string = importInput?.value.trim() || ''
    if (!slug) {
        alert('Please paste a card code!')
        return
    }

    try {
        const card = await getCard(slug)
        const getBase64 = card.base64

        if (!getBase64) {
            console.info(getBase64)
            throw new Error('Base 64 code was not generated')
        }
        const cardData: CardData = JSON.parse(atob(getBase64))
        // Validate imported data
        if (
            !cardData.template ||
            !templates[cardData.template as TemplateNames]
        ) {
            throw new Error('Invalid template')
        }

        // Display the imported card
        const template: Template = templates[cardData.template as TemplateNames]
        const previewContent = document.getElementById(
            'previewContent'
        ) as HTMLElement

        let audioHtml: string = ''
        if (cardData.audio) {
            audioHtml = `
                <div style="margin-top: 20px;">
                    <p style="color: #666; font-size: 0.9em; margin-bottom: 10px;">🎵 Voice Message:</p>
                    <audio controls style="width: 100%; border-radius: 10px;">
                        <source src="${cardData.audio}" type="audio/wav">
                    </audio>
                </div>
            `
        }

        if (previewContent) {
            previewContent.innerHTML = `
                <div style="background: ${template.background}; border-radius: 15px; padding: 30px; margin-bottom: 20px;">
                    <div style="font-size: 4em; margin-bottom: 15px;">${template.icon}</div>
                    <h3 style="color: #333; margin-bottom: 20px;">${template.title}</h3>
                    <p style="color: #555; font-size: 1.1em; line-height: 1.6;">${cardData.message}</p>
                    ${audioHtml}
                </div>
                <p style="color: #888; font-style: italic;">This is a shared card from someone special! ✨</p>
            `
        }

        const previewCard = document.getElementById(
            'previewCard'
        ) as HTMLElement
        if (previewCard) {
            previewCard.classList.remove('hidden')
            const actionButtons = previewCard.querySelector(
                '.action-buttons'
            ) as HTMLElement
            if (actionButtons) {
                actionButtons.innerHTML = `
                    <button class="btn btn-primary" onclick="resetCard()">Create Your Own Card</button>
                `
            }
        }

        if (importInput) {
            importInput.value = ''
        }
    } catch (err: unknown) {
        console.error('Error importing card:', err)
        error(401, 'Invalid card code. Please check and try again.')
    }
}

export function resetCard(): void {
    currentCard = {
        template: null,
        message: '',
        audioBlob: null,
        audioUrl: null,
    }

    document.querySelectorAll('.template-card').forEach((card: Element) => {
        card.classList.remove('selected')
    })

    const messageInput = document.getElementById(
        'messageInput'
    ) as HTMLInputElement
    const audioPlayer = document.getElementById('audioPlayer') as HTMLElement
    const previewCard = document.getElementById('previewCard') as HTMLElement
    const shareSection = document.getElementById('shareSection') as HTMLElement
    const recordBtn = document.getElementById('recordBtn') as HTMLButtonElement
    const timer = document.getElementById('timer') as HTMLElement

    if (messageInput) messageInput.value = ''
    if (audioPlayer) audioPlayer.classList.add('hidden')
    if (previewCard) previewCard.classList.add('hidden')
    if (shareSection) shareSection.classList.add('hidden')
    if (recordBtn) recordBtn.textContent = '🎤 Start Recording'
    if (timer) timer.textContent = '00:00'

    if (recordingTimer) {
        clearInterval(recordingTimer)
        recordingTimer = null
    }
}

function createCard(data: CardPayload): Promise<Response> {
    return fetch('/api/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

async function getCard(slug: string) {
    let url: string = '/api/get/' + slug
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()
    return json
}
