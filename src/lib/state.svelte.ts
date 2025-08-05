interface CardState {
    title: string
    sender: string
    receiver: string
    description: string
    templateId: number
    slug: string
}

interface StepperState {
    initialStep: number
    currentStep: number
    finalStep: number
    steps: number
}

export const cs: CardState = $state({
    title: '',
    sender: '',
    receiver: '',
    description: '',
    templateId: 0,
    slug: '',
})

export const ss: StepperState = $state({
    initialStep: 0,
    currentStep: 0,
    finalStep: 0,
    steps: 0,
})
