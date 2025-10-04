<script lang="ts">
    import WishCard from "$lib/components/WishCard.svelte";
    import { cs } from "$lib/state.svelte.js";

    export let templates: Array<{
        id: number;
        title: string;
        description: string;
        background: string;
        font: string;
        type: string;
    }> = [];

    // Find the selected template
    $: selectedTemplate = templates.find((t) => t.id === cs.templateId) || null;
</script>

<section>
    <div class="flex flex-col gap-2 sm:gap-3 md:gap-4">
        <aside class="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <h1
                class="mb-2 sm:mb-3 md:mb-4 text-xl md:text-2xl lg:text-3xl leading-none text-gray-900 text-center"
            >
                {"Прегледайте картичката си"}
            </h1>
            <p
                class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl italic drop-shadow-sm tracking-wide text-center"
            >
                {"Проверете дизайна, съобщението и гласовата поздрав преди да завършите."}
            </p>

            <!-- Wish Card Preview -->
            <div
                class="mt-6 wish-card border border-gray-300 rounded-xl bg-white"
            >
                <WishCard
                    cardFront={selectedTemplate?.background || ""}
                    cardBack={selectedTemplate?.backgroundBack || ""}
                    title={selectedTemplate?.title || ""}
                />
            </div>
        </aside>
    </div>
</section>
