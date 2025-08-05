<script lang="ts">
    import Button from '$lib/components/Button.svelte'
    import { defineStepperEvent } from '$lib/controller/StepController'
    import { cs, ss } from '$lib/state.svelte'
    import Breadcrumb from './stepper/Breadcrumb.svelte'

    let { children, steps = 0, form } = $props()
    let initialStep: number = steps + 1 - steps
    ss.currentStep = initialStep
</script>
<article class="p-6 md:p-12 shadow rounded-xl flex flex-col justify-between bg-white/70 w-full">
    <form id="step-form" method="POST" action="?/createCard">
        <div class="mb-6 md:mb-8">
            <Breadcrumb {steps} />
        </div>
        <div>
            <div class="flex items-center justify-between">
                {@render children()}
            </div>
        </div>
        <div class="flex justify-between pt-12 md:pt-16">
            <Button
                ariaLabel="Previous Step"
                text={'Back'}
                clickEvent={(e) => defineStepperEvent('prev', steps, initialStep)}
                disabled={ss.currentStep == initialStep}
                buttonType="button"
            />
            {#if ss.currentStep != steps}
                <Button
                    ariaLabel="Next Step"
                    text={'Next'}
                    clickEvent={(e) =>
                        defineStepperEvent('next', steps, initialStep)}
                    disabled={ss.currentStep == steps}
                    buttonType="button"
                />
            {:else}
                <input type="hidden" name="card" value={JSON.stringify(cs)} />
                <Button
                    ariaLabel="Submit button"
                    text={'Submit form'}
                    disabled={ss.currentStep != steps}
                    buttonType="submit"
                />
            {/if}
        </div>
    </form>
</article>
