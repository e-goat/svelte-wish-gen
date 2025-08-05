<script lang="ts">
    export let ariaLabel: string
    export let text: string
    export let clickEvent: ((event: MouseEvent) => void) | undefined = undefined
    export let float:
        |
        'right' |
        'left' |
        'start' |
        'inline-start' |
        'inline-end' |
        'none' = 'none'
    export let disabled: boolean = false;
    export let buttonType: 'button' | 'submit';
</script>

<button
    aria-label={ariaLabel}
    class="p-2 bg-custom-orange-400 rounded-lg cursor-pointer text-shadow font-sans font-bold h-10 w-32 text-center text-white hover:bg-custom-orange-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 {float}"
    onclick={clickEvent}
    class:disable={disabled}
    type={buttonType}>
    {text}
</button>