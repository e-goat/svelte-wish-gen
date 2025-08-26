<script lang="ts">
    import type { PageProps, ActionData } from './$types'
    import { goto } from '$app/navigation'
    import Swal from 'sweetalert2'

    import Stepper from '$lib/components/Stepper.svelte'
    import Intro from '$lib/components/stepper/Intro.svelte'
    import Design from '$lib/components/stepper/Design.svelte'
    import Record from '$lib/components/stepper/Record.svelte'
    import Review from '$lib/components/stepper/Review.svelte'
    import { ss, resetCardState } from '$lib/state.svelte'

    let { data, form }: PageProps & { form: ActionData } = $props()

    // React to form submission results
    $effect(() => {
        if (form) {
            ss.isSubmitting = false
            
            if (form.success) {
                Swal.fire({
                    title: 'Успех!',
                    text: 'Картичката беше създадена успешно!',
                    icon: 'success',
                    confirmButtonText: 'Към началната страница',
                    customClass: {
                        confirmButton: 'swal-confirm-button'
                    },
                    buttonsStyling: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        resetCardState()
                        goto('/')
                    }
                })
            } else if (form.error) {
                Swal.fire({
                    title: 'Грешка!',
                    text: `${form.error}`,
                    icon: 'error',
                    confirmButtonText: 'Разбрано',
                    customClass: {
                        confirmButton: 'swal-confirm-button'
                    },
                    buttonsStyling: false
                })
            } else if (form.missing) {
                Swal.fire({
                    title: 'Липсват данни!',
                    text: 'Моля, попълнете всички необходими полета.',
                    icon: 'warning',
                    confirmButtonText: 'Разбрано',
                    customClass: {
                        confirmButton: 'swal-confirm-button'
                    },
                    buttonsStyling: false
                })
            }
        }
    })
</script>

<svelte:head>
    <title>{'Създаи Картичка'}</title>
</svelte:head>

<style>
    :global(.swal-confirm-button) {
        background-color: var(--color-custom-orange-400) !important;
        border: 2px solid var(--color-custom-orange-600) !important;
        color: white !important;
        padding: 0.75rem 1.5rem !important;
        border-radius: 0.75rem !important;
        font-weight: 600 !important;
        font-size: 1rem !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
    }
    
    :global(.swal-confirm-button:hover) {
        background-color: var(--color-custom-orange-600) !important;
        transform: translateY(-1px) !important;
        box-shadow: 0 4px 12px rgba(145, 115, 25, 0.3) !important;
    }
    
    :global(.swal-confirm-button:active) {
        transform: translateY(0) !important;
        box-shadow: 0 2px 4px rgba(145, 115, 25, 0.2) !important;
    }
</style>

<Stepper steps={4} {form}>
    {#if ss.currentStep == 1}
        <Intro />
    {:else if ss.currentStep == 2}
        <Design {data} />
    {:else if ss.currentStep == 3}
        <Record />
    {:else if ss.currentStep == 4}
        <Review />
    {/if}
</Stepper>
