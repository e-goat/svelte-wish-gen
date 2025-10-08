<script lang="ts">
    import { cs } from "$lib/state.svelte";
    import { getContrastingColor } from "$lib/utils/helpers";

    interface Props {
        cardFront?: string;
        cardBack?: string;
        title?: string;
        description?: string;
    }

    let {
        cardFront = "",
        cardBack = "",
        title = "",
        description = "",
    }: Props = $props();

    let isOpened = $state(false);
    let isTransitioning = $state(false);
    let textColor = $state("black");
    let frontElement: HTMLDivElement;

    let hasCardFront = $derived(cardFront != "");
    let hasCardBack = $derived(cardBack != "");

    function toggleCard() {
        if (isTransitioning) return;
        isTransitioning = true;
        isOpened = !isOpened;
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }

    // Update text color when front element or cardFront changes
    $effect(() => {
        if (frontElement) {
            const computedStyle = window.getComputedStyle(frontElement);
            const bgColor = computedStyle.backgroundColor;

            if (hasCardFront) {
                // For background images, default to white text with text shadow for readability
                textColor = "white";
            } else {
                // For solid colors, calculate the appropriate contrast
                textColor = getContrastingColor(bgColor);
            }
        }
    });
</script>

<div
    class="wishcard-container"
    onclick={toggleCard}
    onkeydown={(e) => e.key === "Enter" && toggleCard()}
    role="button"
    tabindex="0"
>
    {#if isOpened}
        <div class="opened-card">
            <div class="flex flex-col justify-around md:flex-row md:divide-x-1">
                <!-- Front -->
                <div
                    class="inner-section px-4 flex justify-around items-center not-md:min-h-[250px]"
                >
                    <section>
                        <h1 class="text-black text-xl mb-4">
                            {cs.title || title}
                        </h1>
                        <p class="text-gray-700">
                            {cs.description || description}
                        </p>
                    </section>
                </div>
                <div
                    class="not-md:border-b-1 not-md:border-dotted not-md:w-full not-md:mt-5 not-md:mb-5"
                ></div>
                <!-- Back -->
                <div class="back-section px-4 text-center not-md:min-h-[250px]">
                    <div class="default-back-content">
                        <div class="mb-4">
                            <p class="text-sm text-gray-700 mb-2">
                                Благодарим ви за използването на
                            </p>
                            <p class="text-lg font-bold text-gray-800">
                                KartichkaQR
                            </p>
                        </div>
                        <div class="mb-4">
                            <p class="text-xs text-gray-600 mb-1">Контакт:</p>
                            <a
                                href="mailto:example@yahoo.com"
                                class="text-sm text-blue-600 underline"
                                >example@yahoo.com</a
                            >
                        </div>
                        <div class="qr-code-template p-2">
                            <div
                                class="w-16 h-16 flex items-center justify-center"
                            >
                                <div class="text-xs text-gray-400">QR</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {:else}
        <div
            class="box-holder"
            class:transitioning={isTransitioning}
            style="--card-front-img: url({cardFront}); --card-back-img: url({cardBack});"
        >
            <div
                bind:this={frontElement}
                class="box--front border-2 border-black flex flex-col text-center justify-center gap-8"
                class:bg-custom-teal-300={!hasCardFront}
                class:card-front-img={hasCardFront}
            >
                <h1
                    class="text-lg px-2"
                    class:text-white={textColor === "white"}
                    class:text-black={textColor === "black"}
                    class:text-shadow={hasCardFront}
                >
                    {cs.title || title}
                </h1>
                <p
                    class="px-2"
                    class:text-white={textColor === "white"}
                    class:text-black={textColor === "black"}
                    class:text-shadow={hasCardFront}
                >
                    {cs.description || description}
                </p>
            </div>
            <div
                class="box--side-left bg-custom-teal-300 border-2 border-black"
            ></div>
            <div
                class="box--side-right bg-custom-teal-300 border-2 border-black"
            ></div>
            <div class="box--top bg-custom-teal-300"></div>
            <div
                class="box--bottom bg-custom-teal-300 border-2 border-black"
            ></div>
            <div class="box--back border-2 border-black bg-white">
                <div
                    class="flex flex-col items-center justify-center h-full p-4 text-center"
                >
                    <div class="mb-4">
                        <p class="text-sm text-gray-700 mb-2">
                            Благодарим ви че се доверихте на
                        </p>
                        <p class="text-lg font-bold text-gray-800">
                            KartichkaQR
                        </p>
                    </div>

                    <div class="mb-4">
                        <a
                            href="mailto:example@yahoo.com"
                            class="text-sm text-blue-600 underline"
                            >example@yahoo.com</a
                        >
                    </div>

                    <!-- QR Code Template -->
                    <div
                        class="qr-code-template bg-gray-100 border-2 border-gray-300 rounded-lg p-2"
                    >
                        <div
                            class="w-16 h-16 bg-white border border-gray-200 rounded flex items-center justify-center"
                        >
                            <div class="text-xs text-gray-400">QR</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
    @keyframes rotatingAnimation {
        0% {
            transform: rotateX(16deg) translate3d(0, 0, 0px) rotateY(0deg);
        }
        100% {
            transform: rotateX(16deg) translate3d(0, 0, 0px) rotateY(360deg);
        }
    }

    .wishcard-container {
        position: relative;
        perspective: 1200px;
        background: radial-gradient(
                ellipse at center,
                rgba(255, 255, 255, 0.75) 0%,
                rgba(255, 255, 255, 0) 75%
            )
            center center;
        background-size: contain;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 400px;
        margin: 2rem 0;
        cursor: pointer;
    }

    .wishcard-container:has(.opened-card) {
        min-height: fit-content;
        margin: 1rem 0;
    }

    .box-holder {
        transform: rotateY(20deg);
        animation: 10000ms rotatingAnimation linear infinite;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.6s ease;
    }

    .box-holder.transitioning {
        animation-play-state: paused;
        transform: rotateY(0deg);
    }

    .wishcard-container:hover .box-holder:not(.transitioning) {
        animation-play-state: paused;
        transform: rotateY(0deg);
    }

    .box-holder > div {
        position: absolute;
        top: 50%;
        left: 50%;
        backface-visibility: hidden;
    }

    .box--front {
        width: 200px;
        height: 300px;
        /* background: url({cardFront})
            no-repeat center right; */
        background-size: auto 100%;
        transform: translate3d(-100px, -150px, 0) translate3d(0, 0, 0)
            rotateY(0deg);
    }

    .box--back {
        width: 200px;
        height: 300px;
        background-size: auto 100%;
        transform: translate3d(-100px, -150px, 0) translate3d(0, 0, -16px)
            rotateY(180deg);
    }

    .box--side-left {
        width: 16px;
        height: 300px;
        background-size: auto 100%;
        transform: translate3d(-100px, -150px, 0) translate3d(-8px, 0, -8px)
            rotateY(-90deg);
    }

    .box--side-right {
        width: 16px;
        height: 300px;
        background-size: cover;
        transform: translate3d(-100px, -150px, 0) translate3d(192px, 0px, -8px)
            rotateY(90deg);
    }

    .box--top {
        width: 200px;
        height: 16px;
        background-size: cover;
        transform: translate3d(-100px, -150px, 0) translate3d(0px, -8px, 8px)
            rotateX(90deg);
    }

    .box--bottom {
        width: 200px;
        height: 16px;
        background-size: cover;
        transform: translate3d(-100px, -150px, 0) translate3d(0px, 292px, -8px)
            rotateX(-90deg);
    }

    .card-front-img {
        background-image: var(--card-front-img);
        background-size: auto 100%;
        background-position: center;
    }

    /* Opened card styles */
    .opened-card {
        width: 100%;
        max-width: 600px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        padding: 1.5rem;
        animation: slideIn 0.6s ease-out;
        border: 2px solid #e5e7eb;
    }

    @media (max-width: 767px) {
        .opened-card {
            padding: 1rem;
        }
    }

    .default-back-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
    }

    .inner-section {
        background-color: rgba(
            147,
            197,
            253,
            0.15
        ); /* Light blue transparent */
        border-radius: 8px;
    }

    .back-section {
        background-color: rgba(
            167,
            139,
            250,
            0.15
        ); /* Light purple transparent */
        border-radius: 8px;
    }

    @keyframes slideIn {
        0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .text-shadow {
        text-shadow:
            0 2px 4px rgba(0, 0, 0, 0.8),
            0 1px 2px rgba(0, 0, 0, 0.6);
    }
</style>
