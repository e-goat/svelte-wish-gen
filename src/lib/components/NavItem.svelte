<script lang="ts">
    export let text: string;
    export let target: string;
</script>

<a href={target}
    class="text-xl md:text-2xl lg:text-3xl font-family-bebas text-amber-800/70 hover:bg-white/20 hover:underline md:px-4 px-2 py-2 rounded-full transition-all duration-200">{text.toUpperCase()}
</a>
