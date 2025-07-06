<script lang="ts">
    import { injectAnalytics } from '@vercel/analytics/sveltekit'
    import '../app.css'
    import logo from '$lib/assets/logo.jpg'
    import NavItem from '$lib/components/NavItem.svelte';
    import Footer from '$lib/components/Footer.svelte'

    let { children } = $props()
    injectAnalytics()
</script>

<main class="flex flex-col min-h-screen h-full px-4 md:px-8 mx-auto max-w-7xl">
    <nav
        class="top-5 z-30 flex flex-row justify-between items-center pt-4 p-4 mb-4">
        <a
            href="/"
            class="flex items-center gap-2 text-amber-600 font-bold text-lg hover:text-amber-800 transition-colors"
            aria-label="Home">
            <img
                alt="KartichkaQR Logo"
                src={logo}
                class="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover shadow" />
        </a>
        <ul
            class="flex-col md:flex-row flex md:flex gap-4 md:gap-6 items-center mt-2 md:mt-0">
            <li>
                <NavItem text="Home" target="/" />
                <NavItem text="About" target="/about" />
            </li>
        </ul>
    </nav>
    <div
        class="flex flex-1 justify-center items-start lg:items-center">
        {@render children()}
    </div>
    <Footer />
</main>
