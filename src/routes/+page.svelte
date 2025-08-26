<script lang="ts">
    import greetingCard from '$lib/assets/greetingCard.svg';
    import {
        onMount
    } from "svelte";

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
                const speed = scrolled * 0.5;
                (parallax as HTMLElement).style.transform = `translateY(${speed}px)`;
            }
        });
    });
</script>

<svelte:head>
    <title>{import.meta.env.VITE_APP_NAME ?? 'Kartichka QR'}</title>
</svelte:head>

<div class="max-w-7xl mx-auto flex flex-col">
    <div class="p-8 md:p-12 bounce-in">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="flex flex-col h-full justify-center order-2 md:order-1">
                <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4 drop-shadow-sm">
                    A greeting card with
                    <span class="text-green-600">your personal touch</span>
                </h1>

                <p class="text-lg text-gray-600 italic leading-relaxed mb-6">
                    Create a custom card in seconds, choose a design,
                    add your message and record a voice greeting.
                </p>
                <div class="flex-1"></div>
                <div class="pt-4">
                    <a
                        href="/card/create"
                        class="w-full md:w-auto block md:inline-block px-8 py-3 rounded-xl font-semibold shadow-lg transition-scale duration-300 bg-gradient-to-r from-custom-orange-400 to-custom-orange-600 text-white font-bold hover:scale-105 focus:outline-none focus:ring-2 focus:ring-custom-orange-400 focus:ring-offset-2 text-center text-lg md:text-base"
                    >
                        <span class="inline-block align-middle">
                            <svg class="w-5 h-5 mr-2 inline-block -mt-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
                            </svg>
                            Create your card
                        </span>
                    </a>
                </div>
            </div>
            <div class="relative flex justify-center items-center order-1 md:order-2">
                <div class="floating-animation">
                    <div class="relative mx-auto w-64 h-64 md:w-80 md:h-80 p-4">
                        <img src={greetingCard} alt="Step 1" class="absolute inset-0 w-full h-full object-contain" />
                </div>
                </div>
            </div>
        </div>
    </div>
    <section class=" py-12">
        <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/80 transition-colors">
                    <div class="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Quick & Easy</h3>
                    <p class="text-gray-600">Create beautiful cards in just seconds with our intuitive design tools.</p>
                </div>

                <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/80 transition-colors">
                    <div class="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                            <path
                                d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Voice Messages</h3>
                    <p class="text-gray-600">Add a personal voice greeting to make your card truly special.</p>
                </div>

                <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/80 transition-colors">
                    <div class="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Custom Designs</h3>
                    <p class="text-gray-600">Choose from beautiful templates or create your own unique design.</p>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    .floating-animation {
        animation: float 6s ease-in-out infinite;
    }

    @keyframes float {

        0%,
        100% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(-20px);
        }
    }

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
