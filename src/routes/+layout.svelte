<script lang="ts">
    import { injectAnalytics } from '@vercel/analytics/sveltekit'
    import '../app.css'
    import logo from '$lib/assets/logo.jpg'
    import Footer from '$lib/components/Footer.svelte'
    import Header from '$lib/components/Header.svelte'

    let { children } = $props()
    injectAnalytics()
</script>

<main class="min-h-screen flex flex-col">
    <Header logo={logo}/>
    <section class="flex justify-center flex-1 pt-4 mx-4">
        <div class="max-w-7xl w-full">
            {@render children()}
        </div>
    </section>
    <Footer />
</main>
