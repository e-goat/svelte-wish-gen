interface CardState {
    title: string
    sender: string
    receiver: string
    description: string
    templateId: number
    slug: string
    audioUrl: string | null
}

interface StepperState {
    initialStep: number
    currentStep: number
    finalStep: number
    steps: number
    isSubmitting: boolean
}

export const cs: CardState = $state({
    title: '',
    sender: '',
    receiver: '',
    description: '',
    templateId: 0,
    slug: '',
    audioUrl: null,
})

export const ss: StepperState = $state({
    initialStep: 0,
    currentStep: 0,
    finalStep: 0,
    steps: 0,
    isSubmitting: false,
})

export function resetCardState() {
    cs.title = ''
    cs.sender = ''
    cs.receiver = ''
    cs.description = ''
    cs.templateId = 0
    cs.slug = ''
    cs.audioUrl = null

    ss.currentStep = 1
    ss.isSubmitting = false
}
