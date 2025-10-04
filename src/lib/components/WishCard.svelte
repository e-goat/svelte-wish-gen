<script lang="ts">
    export let cardFront: string = "";
    export let cardBack: string = "";
    export let title: string = "";
    export let description: string = "";

    $: hasCardFront = cardFront != "";
    $: hasCardBack = cardBack != "";
</script>

<div class="wishcard-container">
    <div
        class="box-holder"
        style="--card-front-img: url({cardFront}); --card-back-img: url({cardBack});"
    >
        <div
            class="box--front border-2 border-black"
            class:bg-custom-teal-300={!hasCardFront}
            class:card-front-img={hasCardFront}
        >
            <h2 class="text-black">{title}</h2>
            <!-- <p class="">{description}</p> -->
        </div>
        <div
            class="box--side-left bg-custom-teal-300 border-2 border-black"
        ></div>
        <div
            class="box--side-right bg-custom-teal-300 border-2 border-black"
        ></div>
        <div class="box--top bg-custom-teal-300"></div>
        <div class="box--bottom bg-custom-teal-300 border-2 border-black"></div>
        <div
            class="box--back border-2 border-black bg-white"
            class:bg-custom-teal-300={!hasCardBack}
            class:card-back-img={hasCardBack}
        >
            {#if !hasCardBack}
                <div
                    class="flex flex-col items-center justify-center h-full p-4 text-center"
                >
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
            {/if}
        </div>
    </div>
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
        width: 100%;
        height: 400px;
        margin: 2rem 0;
    }

    .box-holder {
        transform: rotateY(20deg);
        animation: 10000ms rotatingAnimation linear infinite;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.3s ease;
    }

    .wishcard-container:hover .box-holder {
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

    .card-back-img {
        background-image: var(--card-back-img);
        background-size: auto 100%;
        background-position: center;
    }
</style>
