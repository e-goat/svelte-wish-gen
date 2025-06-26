<script lang="ts">
	let { children } = $props();
      import "../app.css";
</script>

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
