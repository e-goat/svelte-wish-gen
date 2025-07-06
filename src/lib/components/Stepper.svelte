<script lang="ts">
    import Button from '$lib/components/Button.svelte'
    import { defineStepperEvent } from '$lib/controller/StepController'
    import { ss } from '$lib/state.svelte'

    let { children, steps = 0 } = $props();
    let initialStep: number = (steps + 1) - steps
    ss.currentStep = initialStep
</script>

<article class="p-6 md:p-12 shadow rounded-xl flex flex-col justify-between bg-white/70 w-full">
    <div>
        <span>{`Step ${ss.currentStep} of ${steps}`}</span>
        <div class="flex items-center justify-between">
            {@render children()}
        </div>
    </div>
    <div class="flex justify-between pt-12 md:pt-16">
            <Button 
                ariaLabel="Previous Step" 
                text={"Back"} 
                clickEvent={(e) => defineStepperEvent('prev', steps, initialStep)}
                disabled={ss.currentStep == initialStep}
            />
            {#if ss.currentStep != steps}
                <Button 
                    ariaLabel="Next Step"
                    text={"Next"}
                    clickEvent={(e) => defineStepperEvent('next', steps, initialStep)}
                    disabled={ss.currentStep == steps}
                />
                {:else}
                <Button 
                    ariaLabel="Submit button" 
                    text={"Submit form"}
                    clickEvent={(e) => defineStepperEvent('submit', steps, initialStep)}
                    disabled={ss.currentStep != steps}
                />
            {/if}
    </div>
</article>
