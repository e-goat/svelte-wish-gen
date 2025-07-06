<script lang="ts">
    export let text: string;
    export let target: string;
</script>

<a href={target}
    class="font-family-roboto text-amber-800/70 hover:bg-white/20 px-6 py-4 rounded-full">{text.toUpperCase()}</a>
