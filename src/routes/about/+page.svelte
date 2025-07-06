<script lang="ts">
    import { onMount } from 'svelte'
    import { fade, fly, scale } from 'svelte/transition'
    import ceoAvatar from '$lib/assets/ceoAvatar.jpg'
    import creativeLead from '$lib/assets/creativeLead.jpeg'

    let mounted = false
    let activeCard: number | null = null

    onMount(() => {
        mounted = true
    })

    const teamMembers = [
        {
            name: 'Penyo Stoyanov',
            role: 'Founder & CEO',
            bio: 'Passionate about creating meaningful connections through personalized greeting cards.',
            avatar: ceoAvatar,
        },
        {
            name: 'Emma Rodriguez',
            role: 'Creative Lead',
            bio: 'Brings ideas to life with innovative designs and a keen eye for detail.',
            avatar: creativeLead,
        },
    ]

    const features = [
        {
            icon: '⚡',
            title: 'Lightning Fast',
            description:
                'Create your custom card in seconds with our intuitive interface',
        },
        {
            icon: '🎭',
            title: 'Personal Touch',
            description:
                'Add your unique message and voice greeting for that special someone',
        },
        {
            icon: '🎪',
            title: 'Creative Freedom',
            description:
                'Choose from hundreds of designs or create your own masterpiece',
        },
        {
            icon: '💝',
            title: 'Heartfelt Moments',
            description: 'Turn ordinary moments into extraordinary memories',
        },
    ]
</script>

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
        <section class="px-6 py-16 text-center" in:fade={{ duration: 1000 }}>
            <div class="max-w-4xl mx-auto">
                <h1
                    class="text-5xl md:text-7xl font-bold text-slate-800 mb-6 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text"
                    in:fly={{ y: 50, duration: 800, delay: 200 }}>
                    About Our Story
                </h1>
                <p
                    class="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed"
                    in:fly={{ y: 30, duration: 800, delay: 400 }}>
                    We believe every greeting card should tell a story, carry
                    emotions, and create lasting memories. Our mission is to
                    bring the personal touch back to digital communication.
                </p>
                <div class="flex items-center justify-center space-x-4 my-8">
                    <span
                        class="flex-1 h-px bg-gradient-to-r from-green-300 via-emerald-700 to-green-300"
                    ></span>
                    <span
                        class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 tracking-wide drop-shadow-lg whitespace-nowrap flex items-center"
                        style="min-height:2.5rem;">
                        Made with <span
                            class="inline-block mx-1"
                            style="font-size:1.5em; line-height:1;">💚</span> since
                        2025
                    </span>
                    <span
                        class="flex-1 h-px bg-gradient-to-r from-green-300 via-emerald-700 to-green-300"
                    ></span>
                </div>
            </div>
        </section>
        <section class="px-6">
            <div class="max-w-6xl mx-auto">
                <h2
                    class="text-4xl font-bold text-center text-slate-800 mb-12"
                    in:fly={{ y: 30, duration: 600, delay: 200 }}>
                    Why Choose Us?
                </h2>
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {#each features as feature, i}
                        <div
                            class="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                            in:fly={{
                                y: 50,
                                duration: 600,
                                delay: 400 + i * 100,
                            }}
                            on:mouseenter={() => (activeCard = i)}
                            on:mouseleave={() => (activeCard = null)}
                            role="button"
                            tabindex="0">
                            <div
                                class="text-4xl mb-4 transform transition-transform duration-300"
                                class:scale-110={activeCard === i}>
                                {feature.icon}
                            </div>
                            <h3
                                class="text-xl font-semibold text-slate-800 mb-2">
                                {feature.title}
                            </h3>
                            <p class="text-slate-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    {/each}
                </div>
            </div>
        </section>
        <section class="px-6 py-16">
            <div class="max-w-6xl mx-auto">
                <h2
                    class="text-4xl font-bold text-center text-slate-800 mb-12"
                    in:fly={{ y: 30, duration: 600, delay: 200 }}>
                    Meet Our Team
                </h2>
                <div class="grid gap-8 grid-cols-1 md:grid-cols-2">
                    {#each teamMembers as member, i}
                        <div
                            class="bg-gradient-to-b from-white/70 to-white-30 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300 text-center group"
                            in:fly={{
                                y: 50,
                                duration: 600,
                                delay: 400 + i * 150,
                            }}>
                            <div
                                class="text-6xl mb-4 transition-transform duration-300 w-full flex justify-center">
                                <img
                                    src={member.avatar}
                                    alt="Avatar"
                                    class="rounded-full border border-green-600 p-2 shadow-lg w-60 h-60 object-contain" />
                            </div>
                            <h3 class="text-xl font-bold text-slate-800 mb-2">
                                {member.name}
                            </h3>
                            <p class="text-green-600 font-medium mb-4">
                                {member.role}
                            </p>
                            <p class="text-slate-600 text-sm leading-relaxed">
                                {member.bio}
                            </p>
                        </div>
                    {/each}
                </div>
            </div>
        </section>
        <section class="px-6 py-16">
            <div class="max-w-4xl mx-auto text-center">
                <div
                    class="shadow-lg bg-gradient-to-r from-green-400/40 to-emerald-400/20 rounded-3xl p-12 backdrop-blur-sm border border-green-200"
                    in:scale={{ duration: 800, delay: 300 }}>
                    <h2 class="text-3xl font-bold text-white mb-6">
                        Our Mission
                    </h2>
                    <p class="text-lg text-white leading-relaxed mb-8">
                        "To revolutionize how people connect by making every
                        greeting card a unique, personal experience that bridges
                        distances and touches hearts. We're not just creating
                        cards – we're crafting moments that matter."
                    </p>
                    <div class="max-w-3xl mx-auto">
                        <div
                            class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-green-200"
                            in:fly={{ y: 30, duration: 600, delay: 200 }}>
                            <h2 class="text-2xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4">
                                Ready to Create Magic?
                            </h2>
                            <p class="text-slate-600 mb-6 md:mb-8 text-base md:text-lg">
                                Join thousands of users who have already
                                discovered the joy of personalized greeting
                                cards.
                            </p>
                            <a
                                class="block w-full md:inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
                                href="/create">
                                Start Creating Now
                            </a>
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

    /* Custom scrollbar */
    :global(body) {
        scrollbar-width: thin;
        scrollbar-color: #10b981 transparent;
    }

    :global(body::-webkit-scrollbar) {
        width: 8px;
    }

    :global(body::-webkit-scrollbar-track) {
        background: transparent;
    }

    :global(body::-webkit-scrollbar-thumb) {
        background: #10b981;
        border-radius: 4px;
    }
</style>
