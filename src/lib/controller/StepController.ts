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

export async function stepperSubmit(event: Event): Promise<void> {
    event.preventDefault()
    const formButton = event.currentTarget as HTMLElement | null
    if (!formButton) return
    const form = formButton.closest('form') as HTMLFormElement
    const data = new FormData()
    data.append('card', JSON.stringify(cs))
    const response = await fetch(form.action, {
        method: 'POST',
        body: data,
    })
    if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Failed to create card: ${errorText}`)
    }
}
