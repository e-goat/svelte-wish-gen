<script lang="ts">
    import Button from '$lib/components/Button.svelte'
    import { defineStepperEvent } from '$lib/controller/Stepper'
    import { cs, ss } from '$lib/state.svelte'
    import Breadcrumb from './stepper/Breadcrumb.svelte'
	import { enhance } from '$app/forms';

    let { children, steps = 0, form } = $props()
    let initialStep: number = steps + 1 - steps
    ss.currentStep = initialStep
</script>

<article class="shadow rounded-xl bg-white/70 w-full flex flex-col">
    <form id="step-form" method="POST" action="?/create" enctype="multipart/form-data" use:enhance class="flex flex-col">
        <div class="p-8 flex flex-col min-h-[85vh]">
            <div class="mb-10">
                <Breadcrumb {steps} />
            </div>
            <div class="flex-1 overflow-y-auto flex items-center justify-center">
                <div class="w-full">
                    {@render children()}
                </div>
            </div>
        </div>
        <div class="flex justify-between px-8 pb-8 flex-shrink-0">
            <Button
                ariaLabel="Предишна стъпка"
                text={'Назад'}
                clickEvent={(e) => defineStepperEvent('prev', steps, initialStep)}
                disabled={ss.currentStep == initialStep}
                buttonType="button"
            />
            {#if ss.currentStep != steps}
                <Button
                    ariaLabel="Следваща стъпка"
                    text={'Напред'}
                    clickEvent={(e) =>
                        defineStepperEvent('next', steps, initialStep)}
                    disabled={ss.currentStep == steps}
                    buttonType="button"
                />
            {:else}
                <input type="hidden" name="card" value={JSON.stringify(cs)} />
                <Button
                    ariaLabel="Бутон за запазване на картата"
                    text={'Запази'}
                    buttonType="submit"
                    disabled={true}
                    loading={ss.isSubmitting}
                />
                {/if}
        </div>
    </form>
</article>
