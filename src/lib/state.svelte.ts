interface CardState {
    from: string
    to: string
    description: string
}

interface StepperState {
    initialStep: number
    currentStep: number
    finalStep: number
    steps: number
}

/**
 * Card state
 */
export const cs: CardState = $state({
    from: '',
    to: '',
    description: '',
})

/**
 * Steper state
 */
export const ss: StepperState = $state({
    initialStep: 0,
    currentStep: 0,
    finalStep: 0,
    steps: 0,
})
