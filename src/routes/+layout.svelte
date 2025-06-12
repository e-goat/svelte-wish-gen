<script lang="ts">
	let { children } = $props();
</script>

<main class="app-container">
    <nav class="header">
        <h1>✨ Digital Wish Cards</h1>
        <p>Create magical voice cards to share your wishes</p>
    </nav>
    <div class="content">
        {@render children()}
    </div>
</main>
