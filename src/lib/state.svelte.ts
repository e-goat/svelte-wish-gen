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

interface RecordingState {
    isRecording: boolean
    hasRecording: boolean
    timer: string
    progress: number
    recordingStartTime: number
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

export const rs: RecordingState = $state({
    isRecording: false,
    hasRecording: false,
    timer: '00:00',
    progress: 0,
    recordingStartTime: 0,
})

export function resetCardState() {
    // Reset card state
    cs.title = ''
    cs.sender = ''
    cs.receiver = ''
    cs.description = ''
    cs.templateId = 0
    cs.slug = ''
    cs.audioUrl = null

    // Reset stepper state
    ss.currentStep = 1
    ss.isSubmitting = false

    // Reset recording state
    rs.isRecording = false
    rs.hasRecording = false
    rs.timer = '00:00'
    rs.progress = 0
    rs.recordingStartTime = 0
}
