<script lang="ts">
    import Stepper from "$lib/components/Stepper.svelte";
    import Intro from "$lib/components/stepper/Intro.svelte";
    import Design from "$lib/components/stepper/Design.svelte";
    import Record from "$lib/components/stepper/Record.svelte";
    import Review from "$lib/components/stepper/Review.svelte";
    import { ss } from "$lib/state.svelte";
</script>

<Stepper steps={4}>
    {#if ss.currentStep == 1}
        <Intro />
    {:else if ss.currentStep == 2}
        <Design />
    {:else if ss.currentStep == 3}
        <Record />
    {:else if ss.currentStep == 4}
        <Review />
    {/if}
</Stepper>