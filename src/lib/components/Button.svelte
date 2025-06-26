<script lang="ts">
    export let text: string = 'Click me!';
    export let ariaLabel: string;
</script>

<button aria-label={ariaLabel} class="p-2 bg-amber-700 rounded-lg cursor-pointer text-shadow text-amber-111 font-sans font-bold">
    { text }
</button>