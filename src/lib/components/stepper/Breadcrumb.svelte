<script lang="ts">
    import { ss } from "$lib/state.svelte";
    export let steps: number = 0;

    const stepLabels = [
        "Базова информация",
        "Изберете дизайн",
        "Добавете съдържание",
        "Добавете гласово съобщение",
    ];

    const stepIcons = [
        "https://api.builder.io/api/v1/image/assets/4a0213629c3d4d16819d485544a6041f/e6bf875351107d468749db12006274e0cab93142?placeholderIfAbsent=true",
        "https://api.builder.io/api/v1/image/assets/4a0213629c3d4d16819d485544a6041f/57a03bd1ea96d8719df6910a8116870c47b7013b?placeholderIfAbsent=true",
        "https://api.builder.io/api/v1/image/assets/4a0213629c3d4d16819d485544a6041f/929b9bd167072096954f3eb1c7b16534fffc4571?placeholderIfAbsent=true",
        "https://api.builder.io/api/v1/image/assets/4a0213629c3d4d16819d485544a6041f/898ab4fe0428339fbbb29aeb04fa2d7f6ee05dfd?placeholderIfAbsent=true",
    ];

    const connectorIcon =
        "https://api.builder.io/api/v1/image/assets/4a0213629c3d4d16819d485544a6041f/219e2131ec7006cb724fa4b68eb36f4a88fc4cf3?placeholderIfAbsent=true";
</script>

<!-- Mobile/Tablet view: single item with swipe animation -->
<div class="block lg:hidden">
    <div class="relative overflow-hidden h-16">
        <div
            class="flex transition-transform duration-300 ease-in-out"
            style="transform: translateX(-{(ss.currentStep - 1) * 100}%)"
        >
            {#each Array(steps) as _, index}
                {@const stepNum = index + 1}
                {@const isActive = stepNum === ss.currentStep}
                {@const isCompleted = stepNum < ss.currentStep}

                <div
                    class="w-full flex-shrink-0 flex gap-3 items-center justify-center text-base font-medium text-zinc-800"
                >
                    <img
                        src={stepIcons[index]}
                        alt="Step {stepNum} icon"
                        class="object-contain shrink-0 {index === 0
                            ? 'w-8 aspect-square'
                            : index === 1
                              ? 'aspect-[0.93] w-[30px]'
                              : index === 2
                                ? 'w-9 aspect-[1.1]'
                                : 'aspect-[1.05] w-[34px]'} {isActive
                            ? 'opacity-100'
                            : isCompleted
                              ? 'opacity-100'
                              : 'opacity-50'}"
                    />
                    <div
                        class={isActive
                            ? "text-zinc-800"
                            : isCompleted
                              ? "text-zinc-800"
                              : "text-zinc-400"}
                        data-name={stepLabels[index]}
                    >
                        {stepLabels[index]}
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- Step indicator dots -->
    <div class="flex justify-center gap-2 mt-3">
        {#each Array(steps) as _, index}
            {@const stepNum = index + 1}
            {@const isActive = stepNum === ss.currentStep}
            {@const isCompleted = stepNum < ss.currentStep}

            <div
                class="w-2 h-2 rounded-full transition-colors duration-200 {isActive
                    ? 'bg-custom-orange-400'
                    : isCompleted
                      ? 'bg-custom-orange-600'
                      : 'bg-gray-300'}"
            ></div>
        {/each}
    </div>
</div>

<!-- Desktop view: full horizontal layout -->
<div
    class="hidden lg:flex overflow-hidden gap-6 items-center text-xl font-medium text-zinc-800"
>
    {#each Array(steps) as _, index}
        {@const stepNum = index + 1}
        {@const isActive = stepNum === ss.currentStep}
        {@const isCompleted = stepNum < ss.currentStep}

        <div
            class="flex gap-4 items-center self-stretch my-auto {index === 0 ||
            index === 2
                ? 'min-w-60'
                : ''}"
        >
            <img
                src={stepIcons[index]}
                alt="Step {stepNum} icon"
                class="object-contain shrink-0 self-stretch my-auto {index === 0
                    ? 'w-10 aspect-square'
                    : index === 1
                      ? 'aspect-[0.93] w-[37px]'
                      : index === 2
                        ? 'w-11 aspect-[1.1]'
                        : 'aspect-[1.05] w-[42px]'} {isActive
                    ? 'opacity-100'
                    : isCompleted
                      ? 'opacity-100'
                      : 'opacity-50'}"
            />
            <div
                class="self-stretch my-auto {isActive
                    ? 'text-zinc-800'
                    : isCompleted
                      ? 'text-zinc-800'
                      : 'text-zinc-400'}"
                data-name={stepLabels[index]}
            >
                {stepLabels[index]}
            </div>
        </div>

        {#if index < steps - 1}
            <img
                src={connectorIcon}
                alt="Step connector"
                class="object-contain shrink-0 self-stretch my-auto aspect-[20.83] w-[42px] {isCompleted
                    ? 'opacity-100'
                    : 'opacity-30'}"
            />
        {/if}
    {/each}
</div>
