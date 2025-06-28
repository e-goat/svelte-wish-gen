<script lang="ts">
    import { injectAnalytics } from '@vercel/analytics/sveltekit'
    import "../app.css";
    import stepimg from "$lib/assets/step-1.svg";
	let { children } = $props();
    injectAnalytics();
</script>

{#if import.meta.env.PROD}
    <main class="px-4 md:px-8 mx-auto max-w-7xl flex flex-col items-center min-h-screen">
        <div class="flex flex-col items-center justify-center shadow-lg my-6 rounded-xl bg-amber-200/50 p-6">
            <h1 class="text-3xl font-bold mb-4">Coming Soon</h1>
            <p class="text-lg">
                KartichkaQR is your favorite wish card generator—create personalized, beautiful cards for any occasion in seconds. Stay tuned for the easiest way to send heartfelt wishes!
            </p>
            <div class="flex items-center">
                <img
                alt="Step 1"
                src={stepimg}
                class="w-[32rem] h-auto object-contain lg:ml-auto drop-shadow-lg"
                style="max-height: 28rem;"
                />
            </div>
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
