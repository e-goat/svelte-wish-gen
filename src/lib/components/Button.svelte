<script lang="ts">
    import Loader from "./Loader.svelte";

    export let ariaLabel: string;
    export let text: string;
    export let clickEvent: ((event: MouseEvent) => void) | undefined =
        undefined;
    export let float:
        | "right"
        | "left"
        | "start"
        | "inline-start"
        | "inline-end"
        | "none" = "none";
    export let disabled: boolean = false;
    export let buttonType: "button" | "submit";
    export let loading: boolean = false;
</script>

<button
    aria-label={ariaLabel}
    class="bg-custom-orange-400 rounded-lg cursor-pointer text-shadow font-sans font-bold h-10 w-20 md:w-24 lg:32 text-center text-white hover:bg-custom-orange-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 {float}"
    onclick={clickEvent}
    class:disable={disabled || loading}
    disabled={disabled || loading}
    type={buttonType}
>
    {#if loading}
        <Loader size="sm" color="black" />
    {:else}
        {text}
    {/if}
</button>
