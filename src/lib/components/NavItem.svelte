<script lang="ts">
    let { children, target, ...props } = $props();
</script>

<a href={target}
    class="text-xl font-family-roboto text-custom-orange-600/90 hover:bg-white/20 hover:underline md:px-4 px-2 py-2 rounded-full transition-colors duration-200 {props.class}">{@render children?.()}</a>
