<script lang="ts">
    import {cs} from '$lib/state.svelte';
    import Pagination from '../Pagination.svelte'

    type PageProp = {
        data: {
            templates: Array<{
                id: number;
                title: string;
                description: string;
                background: string;
            }>;
            total: number;
            currentPage: number;
            pageSize: number;
        }
    };

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
        <h1 class="mb-2 sm:mb-3 md:mb-4 text-xl md:text-2xl lg:text-3xl leading-none text-gray-900 text-center">
            {"Изберете дизайн"}
        </h1>
        <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl italic drop-shadow-sm tracking-wide text-center">
            {"Моля, изберете един от показаните шаблони"}
        </p>
        <ul class="mt-6 grid gap-2 grid-cols-2 h-[460px] overflow-auto">
            {#each data.templates as t}
            <li>
                <button
                    type="button"
                    onclick={handleClickEvent}
                    data-template-id={t.id}
                    class={[
                        'w-full',
                        'h-full',
                        'rounded-xl',
                        'shadow',
                        'items-center',
                        'bg-white',
                        'cursor-pointer',
                        t.id == cs.templateId ? 'border border-solid border-custom-orange-600' : 'border border-transparent'
                    ].join(' ')}
                >
                    <div class="wish-card">
                        <h2 class="text-md font-bold mb-2">{t.title}</h2>
                        <p class="text-sm text-gray-600 mb-2">{t.description}</p>
                        <img src={t.background} alt={''} class="w-full h-full object-cover"/>
                    </div>
                </button>
            </li>
            {/each}
        </ul>
        <Pagination amount={data.total} url="/card/create" currentPage={data.currentPage} pageSize={data.pageSize}/>
        <input type="hidden" name="templateId" value={cs.templateId}/>
    </aside>
</section>
