<script lang="ts">
    import Button from '$lib/components/Button.svelte'
    import { defineStepperEvent } from '$lib/controller/StepController'
    import { cs, ss } from '$lib/state.svelte'
    import Breadcrumb from './stepper/Breadcrumb.svelte'

    let { children, steps = 0, form } = $props()
    let initialStep: number = steps + 1 - steps
    ss.currentStep = initialStep
</script>

<article class="shadow rounded-xl bg-white/70 w-full">
    <form id="step-form" method="POST" action="?/createCard">
        <div class="p-8 flex flex-col">
            <div class="mb-10">
                <Breadcrumb {steps} />
            </div>
            {@render children()}
        </div>
        <div class="flex justify-between px-8 pb-8">
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
