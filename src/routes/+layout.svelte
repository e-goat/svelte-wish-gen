<script lang="ts">
    import { injectAnalytics } from '@vercel/analytics/sveltekit'
    import '../app.css'
    import logo from '$lib/assets/logo.jpg'
    import Footer from '$lib/components/Footer.svelte'
    import Header from '$lib/components/Header.svelte'

    let { children } = $props()
    injectAnalytics()
</script>

<main class="flex flex-col min-h-screen h-full px-4 md:px-8 mx-auto max-w-7xl">
    <Header logo={logo}/>
    <div class="flex flex-1 justify-center items-start lg:items-center">
        {@render children()}
    </div>
    <Footer />
</main>
