<script lang="ts">
    let clicked = false;
    function handleClick() {
        clicked = true;
        setTimeout(() => clicked = false, 150);
    }
</script>

<section>
    <div class="flex flex-col gap-4">
        <aside class="flex flex-col gap-4">
            <h1 class="mb-4 text-4xl leading-none text-gray-900
                md:text-5xl lg:text-6xl">
                {"Record your voice greeting"}
            </h1>
            <p class="text-lg lg:text-2xl italic drop-shadow-sm tracking-wide">
                {"Add a personal touch with your voice. Record a greeting that will be included in the card."}
            </p>
            <div class="flex flex-col gap-3 mt-4">
                <div class="flex justify-center">
                    <button
                        aria-label="Record voice greeting"
                        class="w-14 h-14 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors flex items-center justify-center shadow-md cursor-pointer"
                        class:scale-95={clicked}
                        on:click={handleClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 003-3V6a3 3 0 10-6 0v6a3 3 0 003 3zm5-3a5 5 0 01-10 0M19 10v2a7 7 0 01-14 0v-2m7 8v2m-4 0h8" />
                        </svg>
                    </button>
                </div>
            </div>
        </aside>
    </div>
</section>