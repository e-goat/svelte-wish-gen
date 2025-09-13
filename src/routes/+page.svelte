<script lang="ts">
    import LandingImage from '$lib/components/LandingImage.svelte'
    import Loader from '$lib/components/Loader.svelte'
    import { goto } from '$app/navigation';
    import {
        onMount
    } from "svelte";

    let isLoading = false;

    function handleCreateCard() {
        isLoading = true;
        goto('/card/create');
    }

    onMount(() => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.floating-animation');
            if (parallax) {
                const isMobile = window.innerWidth < 640;
                const speed = scrolled * (isMobile ? 0.2 : 0.5);
                (parallax as HTMLElement).style.transform = `translateY(${speed}px)`;
            }
        });
    });
</script>

<svelte:head>
    <title>{'КартичкаQR - Поздравителна картичка с вашия личен почерк'}</title>
    <meta name="description" content="Създайте персонализирана поздравителна картичка с вашия почерк и глас. Изберете дизайн, запишете съобщение и споделете с близките си. Create personalized greeting cards with handwriting and voice messages.">
</svelte:head>

<div class="max-w-7xl">
    <div class="bounce-in">
        <div class="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 md:p-10 lg:p-16">
            <div class="flex flex-col h-full justify-center order-1 md:order-2">
                <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight mb-3 sm:mb-4 drop-shadow-sm">
                    Поздравителна картичка с
                    <span class="text-green-600">вашия личен почерк</span>
                </h1>

                <p class="text-sm sm:text-base lg:text-lg text-gray-600 italic leading-relaxed mb-4 sm:mb-6">
                    Създайте персонализирана картичка за секунди, изберете дизайн,
                    добавете съобщението си и запишете гласова поздрав.
                </p>
                <div class="flex-1"></div>
                <div class="pt-3 sm:pt-4">
                    <button
                        on:click={handleCreateCard}
                        disabled={isLoading}
                        class="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg duration-300 bg-gradient-to-r from-custom-orange-400 to-custom-orange-600 text-white focus:outline-none focus:ring-2 focus:ring-custom-orange-400 focus:ring-offset-2 text-center text-base sm:text-lg md:text-base font-medium disabled:opacity-70 disabled:cursor-not-allowed touch-manipulation {isLoading ? '' : 'hover:scale-105 active:scale-95'}"
                    >
                        <span class="inline-block align-middle">
                            {#if isLoading}
                                <div class="flex items-center">
                                    <div class="mr-2">
                                        <Loader size="sm" color="white" />
                                    </div>
                                    <span>Зареждане...</span>
                                </div>
                            {:else}
                                <svg class="w-5 h-5 mr-2 inline-block -mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
                                </svg>
                                Създайте картичката си
                            {/if}
                        </span>
                    </button>
                </div>
            </div>
            <div class="hidden justify-center items-center order-2 md:order-2 md:flex">
                <LandingImage/>
            </div>
        </div>
    </div>
    <section class="py-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                <div class="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:bg-white/80 touch-manipulation">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                        <svg class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                    <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Бързо и лесно</h3>
                    <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Създавайте красиви картички за секунди с нашите интуитивни инструменти за дизайн.</p>
                </div>

                <div class="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:bg-white/80 touch-manipulation">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-orange-500 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                        <svg class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                            <path
                                d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                        </svg>
                    </div>
                    <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Гласови съобщения</h3>
                    <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Добавете лична гласова поздрав, за да направите картичката си наистина специална.</p>
                </div>

                <div class="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:bg-white/80 touch-manipulation sm:col-span-2 lg:col-span-1">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-500 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                        <svg class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </div>
                    <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Персонализирани дизайни</h3>
                    <p class="text-sm sm:text-base text-gray-600 leading-relaxed">Избирайте от красиви шаблони или създайте свой уникален дизайн.</p>
                </div>
            </div>
    </section>
</div>

<style>
    .bounce-in {
        animation: bounceIn 0.8s ease-out;
    }

    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: scale(0.3);
        }

        50% {
            opacity: 1;
            transform: scale(1.05);
        }

        70% {
            transform: scale(0.9);
        }

        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
</style>
