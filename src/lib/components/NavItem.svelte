<script lang="ts">
    let { children, target, ...props } = $props();
</script>

<a href={target}
    class="text-2xl font-family-bebas text-custom-orange-600/90 hover:bg-white/20 hover:underline md:px-4 px-2 py-2 rounded-full transition-colors duration-200 {props.class}">{@render children?.()}</a>
