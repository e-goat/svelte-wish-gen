<script lang="ts">
    import { onMount } from 'svelte'
    import { fade, fly, scale } from 'svelte/transition'
    import { goto } from '$app/navigation'
    import Loader from '$lib/components/Loader.svelte'
    import "../../app.css"

    let mounted = false
    let activeCard: number | null = null
    let isNavigating = false

    onMount(() => {
        mounted = true
    })

    async function handleCreateCard() {
        isNavigating = true
        try {
            await goto('/card/create')
        } finally {
            isNavigating = false
        }
    }
</script>

<svelte:head>
    <title>{'КартичкаQR - За нас'}</title>
    <meta name="description" content="Научете за KartichkaQR - български екип, който революционизира поздравителните картички с QR кодове и гласови съобщения. Мисия, ценности и визия за свързване на хората чрез технологии. Learn about KartichkaQR - Bulgarian team revolutionizing greeting cards with QR codes and voice messages.">
</svelte:head>

<!-- Animated background particles -->
<div class="fixed inset-0 pointer-events-none overflow-hidden">
    {#each Array(20) as _, i}
        <div
            class="absolute w-2 h-2 bg-green-300 rounded-full opacity-20 animate-ping"
            style="
        left: {Math.random() * 100}%;
        top: {Math.random() * 100}%;
        animation-delay: {Math.random() * 5}s;
        animation-duration: {3 + Math.random() * 2}s;
      ">
        </div>
    {/each}
</div>

<!-- Main content -->
<div class="bg-transparent relative z-10">
    <!-- Hero Section -->
    {#if mounted}
        <!-- About Us Content in Bulgarian -->
        <section class="px-6 py-16">
            <div class="max-w-6xl mx-auto">
                <div class="pb-20" in:fly={{ y: 50, duration: 800, delay: 200 }}>
                    <h1 class="text-5xl text-gray-900 text-center">
                         За нашата компания
                    </h1>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    <!-- За нас -->
                    <div
                        class="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300"
                        in:fly={{ y: 50, duration: 600, delay: 400 }}>
                        <div class="text-5xl mb-6 text-center">🏠</div>
                        <h3 class="text-3xl font-bold text-slate-800 mb-6 text-center">За нас</h3>
                        <div class="text-slate-700 leading-relaxed space-y-4 text-base">
                            <p>Ние сме малък български екип с една проста, но добре обмислена идея: да внесем топлина и човешко отношение в поздравите.</p>
                            <p>В мига, в който някой чуе любим за него глас в картичка, емоцията оживява – и това е нашият принос към това дигиталният свят да изпълнява истинското си предназначение: да събира хората заедно.</p>
                            <p>Започнахме през 2025 година с вярата, че технологията трябва да служи на човешките емоции, а не да ги заменя. Всяка картичка, която създаваме, носи частичка от сърцето на подателя.</p>
                        </div>
                    </div>

                    <!-- Нашата мисия -->
                    <div
                        class="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300"
                        in:fly={{ y: 50, duration: 600, delay: 500 }}>
                        <div class="text-5xl mb-6 text-center">🎯</div>
                        <h3 class="text-3xl font-bold text-slate-800 mb-6 text-center">Нашата мисия</h3>
                        <div class="text-slate-700 leading-relaxed space-y-4 text-base">
                            <p>KartichkaQR прави персоналните поздравителни картички прости и значими.</p>
                            <p>Записвате гласовото си съобщение, избирате красив дизайн, а ние отпечатваме и доставяме висококачествена картичка с QR код.</p>
                            <p>Когато се сканира, получателите чуват вашето лично съобщение — създавайки трайни емоционални връзки.</p>
                            <p>Без акаунти, без сложности — просто сърдечна комуникация направена лесна.</p>
                        </div>
                    </div>

                    <!-- Нашата философия -->
                    <div
                        class="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300"
                        in:fly={{ y: 50, duration: 600, delay: 600 }}>
                        <div class="text-5xl mb-6 text-center">💭</div>
                        <h3 class="text-3xl font-bold text-slate-800 mb-6 text-center">Нашата философия</h3>
                        <div class="text-slate-700 leading-relaxed space-y-4 text-base">
                            <p class="italic text-center font-medium text-green-700 text-lg">"Най-важните думи не се четат — те се чуват."</p>
                            <p>Гласът е мостът, който свързва сърцата независимо от разстоянието.</p>
                            <p>Един прост жест — картичка с глас — се превръща в спомен, който може да се слуша отново и отново, дори след години.</p>
                            <p>Вярваме, че в света на бързите съобщения и емотикони, истинската емоция се предава най-добре чрез човешкия глас.</p>
                            <p>Затова създаваме продукт, който съчетава традиционната красота на хартиените картички с магията на съвременните технологии.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Как работи секция -->
        <section class="px-6 py-16">
            <div class="max-w-6xl mx-auto">
                <h2
                    class="text-5xl font-bold text-center text-slate-800 mb-16"
                    in:fly={{ y: 30, duration: 600, delay: 200 }}>
                    Как работи KartichkaQR
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div
                        class="text-center bg-gradient-to-b from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-100"
                        in:fly={{ y: 50, duration: 600, delay: 400 }}>
                        <div class="text-6xl mb-6">🎤</div>
                        <h3 class="text-2xl font-bold text-slate-800 mb-4">Записвай глас</h3>
                        <p class="text-slate-600 text-base">Сподели своето съобщение с 30-секундно гласово записване</p>
                    </div>
                    <div
                        class="text-center bg-gradient-to-b from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-100"
                        in:fly={{ y: 50, duration: 600, delay: 500 }}>
                        <div class="text-6xl mb-6">🎨</div>
                        <h3 class="text-2xl font-bold text-slate-800 mb-4">Избирай дизайн</h3>
                        <p class="text-slate-600 text-base">Персонализирай картичката си с красиви шаблони за всеки повод</p>
                    </div>
                    <div
                        class="text-center bg-gradient-to-b from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-100"
                        in:fly={{ y: 50, duration: 600, delay: 600 }}>
                        <div class="text-6xl mb-6">🚚</div>
                        <h3 class="text-2xl font-bold text-slate-800 mb-4">Получавай доставка</h3>
                        <p class="text-slate-600 text-base">Картичката ти се отпечатва на висококачествен материал и се доставя бързо</p>
                    </div>
                    <div
                        class="text-center bg-gradient-to-b from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-100"
                        in:fly={{ y: 50, duration: 600, delay: 700 }}>
                        <div class="text-6xl mb-6">📱</div>
                        <h3 class="text-2xl font-bold text-slate-800 mb-4">Сканирай QR код</h3>
                        <p class="text-slate-600 text-base">Получателите сканират кода и чуват твоята емоция веднага</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Нашите ценности секция -->
        <section class="px-6 py-16">
            <div class="max-w-4xl mx-auto">
                <h2
                    class="text-5xl font-bold text-center text-slate-800 mb-16"
                    in:fly={{ y: 30, duration: 600, delay: 200 }}>
                    Нашите ценности
                </h2>
                <div class="space-y-8">
                    <div
                        class="bg-white/70 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-green-100"
                        in:fly={{ y: 30, duration: 600, delay: 400 }}>
                        <div class="flex items-start space-x-6">
                            <div class="text-4xl">❤️</div>
                            <div>
                                <h3 class="text-2xl font-bold text-slate-800 mb-3">Човечност</h3>
                                <p class="text-slate-700 text-lg">Технологията трябва да засилва човешките връзки, а не да ги заменя. Всеки продукт, който създаваме, носи човешка топлина.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-white/70 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-green-100"
                        in:fly={{ y: 30, duration: 600, delay: 500 }}>
                        <div class="flex items-start space-x-6">
                            <div class="text-4xl">🔒</div>
                            <div>
                                <h3 class="text-2xl font-bold text-slate-800 mb-3">Сигурност</h3>
                                <p class="text-slate-700 text-lg">Вашите лични съобщения са защитени с най-високите стандарти за сигурност. Вашата поверителност е наш приоритет.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-white/70 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-green-100"
                        in:fly={{ y: 30, duration: 600, delay: 600 }}>
                        <div class="flex items-start space-x-6">
                            <div class="text-4xl">🌱</div>
                            <div>
                                <h3 class="text-2xl font-bold text-slate-800 mb-3">Устойчивост</h3>
                                <p class="text-slate-700 text-lg">Използваме екологично чисти материали и отговорни практики в производството, за да опазим планетата за бъдещите поколения.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="px-4 py-12 sm:px-6 sm:py-16">
            <div class="max-w-4xl mx-auto">
                <div
                    class="bg-gradient-to-br from-green-400/50 to-emerald-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm border border-green-200/50 shadow-xl"
                    in:scale={{ duration: 800, delay: 300 }}>
                    <!-- Vision Header -->
                    <div class="text-center mb-8 sm:mb-10">
                        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                            Нашата визия
                        </h2>
                        <p class="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto">
                            "Да революционизираме начина, по който хората се свързват, като направим всяка 
                            поздравителна картичка уникално, лично преживяване, което преодолява разстояния и 
                            докосва сърца. Ние не просто създаваме картички – ние изграждаме моменти, които имат значение."
                        </p>
                    </div>

                    <!-- CTA Section -->
                    <div
                        class="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-white/30"
                        in:fly={{ y: 30, duration: 600, delay: 200 }}>
                        <div class="text-center">
                            <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-3 sm:mb-4 lg:mb-6">
                                Готови да създадете магия?
                            </h3>
                            <p class="text-slate-600 mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base lg:text-lg leading-relaxed">
                                Присъединете се към хилядите потребители, които вече са 
                                открили радостта от персонализираните поздравителни картички.
                            </p>
                            
                            <!-- Mobile-first CTA Button -->
                            <div class="space-y-3 sm:space-y-0">
                                <button
                                    class="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-transform duration-300 text-sm sm:text-base lg:text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    on:click={handleCreateCard}
                                    disabled={isNavigating}>
                                    {#if isNavigating}
                                        <div class="flex items-center">
                                            <div class="mr-2">
                                                <Loader size="sm" color="white" />
                                            </div>
                                            <span>Зареждане...</span>
                                        </div>
                                    {:else}
                                        <span>Започни да създаваш сега</span>
                                        <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                        </svg>
                                    {/if}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    {/if}
</div>

<style>
    @keyframes float {
        0%,
        100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
    }
</style>
