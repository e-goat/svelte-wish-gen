<script lang="ts">
    import {cs} from '$lib/state.svelte';

    type PageProp = { data: { templates: Array<{ id: number; title: string; background: string }> } };

    let { data }: PageProp = $props();

    function handleClickEvent(event: MouseEvent) {
        const target = event.currentTarget as HTMLElement | null;
        const cards = document.querySelectorAll('.wish-card');
        for (const card of cards) {
            card.classList.add('border', 'border-transparent');
            card.classList.remove('border', 'border-solid', 'border-custom-orange-600');
        }
        cs.templateId = parseInt(target?.dataset.templateId ?? '0');
        target?.classList.remove('border', 'border-transparent');
        target?.classList.add('border', 'border-solid', 'border-custom-orange-600');
    }
</script>
<section>
    <aside>
        <h1 class="mb-4 text-4xl leading-none text-gray-900 md:text-5xl lg:text-6xl">
            {"Choose design"}
        </h1>
        <ul class="mt-6 grid gap-4">
            {#each data.templates as t}
            <li>
                <button
                    type="button"
                    onclick={handleClickEvent}
                    data-template-id={t.id}
                    class={[
                        'w-full',
                        'rounded-xl',
                        'shadow',
                        'p-6',
                        'items-center',
                        'text-center',
                        'bg-white',
                        'cursor-pointer',
                        t.id == cs.templateId ? 'border border-solid border-custom-orange-600' : 'border border-transparent'
                    ].join(' ')}
                >
                    <div class="wish-card">
                        <h2 class="text-2xl font-bold mb-2">{t.title}</h2>
                    </div>
                </button>
            </li>
            {/each}
        </ul>
        <input type="hidden" name="templateId" value={cs.templateId}/>
    </aside>
</section>
