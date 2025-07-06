import { ss } from '$lib/state.svelte'
import { error } from '@sveltejs/kit'

export function defineStepperEvent(
    stepEvent: string,
    steps: number,
    initialStep: number
): void {
    switch (stepEvent) {
        case 'next':
            if (!(ss.currentStep == steps)) ss.currentStep += 1
            break
        case 'prev':
            if (ss.currentStep != initialStep) ss.currentStep -= 1
            break
        case 'submit':
            alert('Submit!')
            break
        default:
            error(406, `Wrong event: ${stepEvent}`)
    }
}
