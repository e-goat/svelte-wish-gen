<script lang="ts">
    import { cs, tcc } from "$lib/state.svelte";
    import Pagination from "../Pagination.svelte";
    import { goto } from "$app/navigation";
    import { getContrastingColorFromImage } from "$lib/utils/helpers";
    import { onMount } from "svelte";

    type PageProp = {
        data: {
            templates: Array<{
                id: number;
                title: string;
                description: string;
                background: string;
                backgroundBack: string;
            }>;
            total: number;
            currentPage: number;
            pageSize: number;
            categories: Array<{
                type: string;
            }>;
        };
    };

    let { data }: PageProp = $props();

    function handleClickEvent(event: MouseEvent) {
        const target = event.currentTarget as HTMLElement | null;
        const cards = document.querySelectorAll(".wish-card");
        for (const card of cards) {
            card.classList.add("border", "border-transparent");
            card.classList.remove(
                "border",
                "border-solid",
                "border-custom-orange-600",
            );
        }
        cs.templateId = parseInt(target?.dataset.templateId ?? "0");
        target?.classList.remove("border", "border-transparent");
        target?.classList.add(
            "border",
            "border-solid",
            "border-custom-orange-600",
        );
    }
    function handleClickEventAll(event: MouseEvent) {
        event.preventDefault();
        goto(`/card/create`);
    }

    function handleClickEventCategory(event: MouseEvent, type: string) {
        event.preventDefault();
        goto(`/card/create?type=${type}`);
    }

    // Calculate text colors for all templates after mount (with caching)
    onMount(() => {
        const cards = document.querySelectorAll(".wish-card");
        cards.forEach(async (card, index) => {
            const template = data.templates[index];
            if (template) {
                // Check if color is already cached
                if (!tcc.colors.has(template.id)) {
                    const color = await getContrastingColorFromImage(
                        card as HTMLElement,
                    );
                    // Update the cache with the new color
                    tcc.colors = new Map(tcc.colors.set(template.id, color));
                }
            }
        });
    });
</script>

<section>
    <aside>
        <h1
            class="mb-2 sm:mb-3 md:mb-4 text-xl md:text-2xl lg:text-3xl leading-none text-gray-900 text-center"
        >
            {"Изберете дизайн"}
        </h1>
        <p
            class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl italic drop-shadow-sm tracking-wide text-center"
        >
            {"Моля, изберете един от показаните шаблони"}
        </p>

        <section class="flex flex-wrap gap-2 mt-12">
            <button
                type="button"
                class=" text-white text-sm md:text-base lg:text-lg px-2.5 py-0.5 rounded-full p-5 bg-gray-500 cursor-pointer"
                onclick={handleClickEventAll}>Всички</button
            >
            {#each data.categories as c}
                <button
                    type="button"
                    class=" text-white text-sm md:text-base lg:text-lg px-2.5 py-0.5 rounded-full p-5 bg-gray-500 cursor-pointer"
                    onclick={(e) => handleClickEventCategory(e, c.type)}
                    >{c.type}</button
                >
            {/each}
        </section>
        <ul
            class="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4 h-[460px] overflow-auto"
        >
            {#each data.templates as t}
                <li>
                    <button
                        type="button"
                        onclick={handleClickEvent}
                        data-template-id={t.id}
                        class={[
                            "h-full",
                            "w-full",
                            "rounded-xl",
                            "shadow-sm",
                            "items-center",
                            "bg-white",
                            "cursor-pointer",
                            t.id == cs.templateId
                                ? "border border-solid border-custom-orange-600"
                                : "border border-transparent",
                        ].join(" ")}
                    >
                        <div
                            class="wish-card h-full w-full bg-cover bg-center bg-no-repeat rounded-lg relative overflow-hidden group"
                            style="background-image: url({t.background}); transform: scale(0.95)"
                        >
                            <div
                                class="absolute bg-gradient-to-b from-black/20 via-transparent to-black/30"
                            ></div>

                            <div
                                class="h-1/3 flex items-center justify-center relative z-10"
                            >
                                <h2
                                    class="text-3xl font-bold text-center transform group-hover:scale-105 duration-200"
                                    class:text-white={tcc.colors.get(t.id) ===
                                        "white"}
                                    class:text-black={tcc.colors.get(t.id) ===
                                        "black"}
                                >
                                    {t.title}
                                </h2>
                            </div>
                            <div
                                class="absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 duration-300"
                            ></div>
                        </div>
                    </button>
                </li>
            {/each}
        </ul>
        <Pagination
            amount={data.total}
            url="/card/create"
            currentPage={data.currentPage}
            pageSize={data.pageSize}
        />
        <input type="hidden" name="templateId" value={cs.templateId} />
    </aside>
</section>
