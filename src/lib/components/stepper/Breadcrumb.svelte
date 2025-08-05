<script lang="ts">
    import { ss } from '$lib/state.svelte'
    export let steps: number = 0
</script>

<div class="flex items-center justify-center">
    {#each Array(steps) as _, index}
        {@const stepNum = index + 1}
        {@const isActive = stepNum === ss.currentStep}
        {@const isCompleted = stepNum < ss.currentStep}

        <div class="flex items-center">
            <div
                class="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-xs xs:text-sm sm:text-base md:text-lg font-semibold border-2 transition-colors duration-300 ease-in-out
                {isActive
                    ? 'bg-custom-orange-400 text-white border-custom-orange-600 shadow-[0_0_0_3px_rgba(202,167,78,0.2)]'
                    : ''}
                {isCompleted
                    ? 'bg-custom-orange-600 text-white border-custom-orange-600'
                    : ''}
                {!isActive && !isCompleted
                    ? 'bg-gray-100 text-gray-400 border-gray-200'
                    : ''}">
                {#if isCompleted}
                    ✓
                {:else}
                    {stepNum}
                {/if}
            </div>

            {#if index < steps - 1}
                <div
                    class="w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 h-0.5 transition-colors duration-300 ease-in-out
                    {isCompleted
                        ? 'bg-custom-orange-600'
                        : 'bg-gray-200'}">
                </div>
            {/if}
        </div>
    {/each}
</div>