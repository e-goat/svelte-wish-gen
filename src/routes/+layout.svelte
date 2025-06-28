<script lang="ts">
    import { injectAnalytics } from '@vercel/analytics/sveltekit'
    import "../app.css";
	let { children } = $props();
    injectAnalytics();
</script>

{#if import.meta.env.PROD}
    <main class="px-4 md:px-8 mx-auto max-w-7xl">
        <div class="flex flex-col items-center justify-center min-h-screen">
            <h1 class="text-3xl font-bold mb-4">Coming Soon</h1>
            <p class="text-lg">
                The app is coming soon. KartichkaQR is your favorite wish card generator—create personalized, beautiful cards for any occasion in seconds. Stay tuned for the easiest way to send heartfelt wishes!
            </p>
        </div>
    </main>
{:else}
    <main class="px-4 md:px-8 mx-auto max-w-7xl">
        <nav class="flex justify-between border border-amber-600">
            <div>#logo</div>
            <ul class="flex justify-center items-center gap-2">
                <li>Home</li>
                <li>About us</li>
            </ul>
        </nav>
        <div class="py-6 md:py-10 flex justify-center items-start lg:items-center">
            {@render children()}
        </div>
    </main>
{/if}
