<script lang="ts">
    import type { PageProps, ActionData } from './$types'

    import Stepper from '$lib/components/Stepper.svelte'
    import Intro from '$lib/components/stepper/Intro.svelte'
    import Design from '$lib/components/stepper/Design.svelte'
    import Record from '$lib/components/stepper/Record.svelte'
    import Review from '$lib/components/stepper/Review.svelte'
    import { ss } from '$lib/state.svelte'

    let { data, form }: PageProps & { form: ActionData } = $props()
</script>

<svelte:head>
    <title>{'Създаи Картичка'}</title>
</svelte:head>

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
