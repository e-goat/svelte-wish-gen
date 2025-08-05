import { ss, cs } from '$lib/state.svelte'
import { error } from '@sveltejs/kit'

export async function defineStepperEvent(
    stepEvent: string,
    steps: number,
    initialStep: number
): Promise<void> {
    switch (stepEvent) {
        case 'next':
            if (!(ss.currentStep == steps)) ss.currentStep += 1
            break
        case 'prev':
            if (ss.currentStep != initialStep) ss.currentStep -= 1
            break
        case 'submit':
            break
        default:
            error(406, `Wrong event: ${stepEvent}`)
    }
}
