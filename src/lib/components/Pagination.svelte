<script lang="ts">
    export let pageSize: number = 10
    export let url: string;
    export let amount: number;
    export let currentPage: number = 1;

    $: totalItems = amount
    $: totalPages = Math.ceil(totalItems / pageSize)
    $: visiblePages = (() => {
        const pages = [];
        const maxVisible = 7;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            if (currentPage <= 4) {
                for (let i = 2; i <= 5; i++) {
                    pages.push(i);
                }
                pages.push('...');
            } else if (currentPage >= totalPages - 3) {
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages - 1; i++) {
                    pages.push(i);
                }
            } else {
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
            }

            if (totalPages > 1 && !pages.includes(totalPages)) {
                pages.push(totalPages);
            }
        }

        return pages;
    })();
</script>

{#if totalPages > 1}
    <nav class="flex items-center justify-center space-x-1 mt-8" aria-label="Странициране">
        <!-- Previous button -->
        {#if currentPage > 1}
            <a 
                href="{url}?limit={pageSize}&skip={pageSize * (currentPage - 2)}" 
                class="flex items-center justify-center w-10 h-10 text-sm font-medium text-custom-orange-600 bg-white border border-custom-orange-200 rounded-lg hover:bg-custom-orange-200 hover:text-custom-orange-600 transition-colors duration-200"
                aria-label="Предишна страница"
            >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </a>
        {:else}
            <span class="flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </span>
        {/if}

        <!-- Page numbers -->
        {#each visiblePages as page}
            {#if page === '...'}
                <span class="flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-400">
                    ...
                </span>
            {:else if page === currentPage}
                <span class="flex items-center justify-center w-10 h-10 text-sm font-semibold text-white bg-custom-orange-600 border border-custom-orange-600 rounded-lg shadow-sm">
                    {page}
                </span>
            {:else}
                <a 
                    href="{url}?limit={pageSize}&skip={pageSize * (Number(page) - 1)}" 
                    class="flex items-center justify-center w-10 h-10 text-sm font-medium text-custom-orange-600 bg-white border border-custom-orange-200 rounded-lg hover:bg-custom-orange-200 hover:text-custom-orange-600 hover:border-custom-orange-400 transition-colors duration-200"
                >
                    {page}
                </a>
            {/if}
        {/each}

        <!-- Next button -->
        {#if currentPage < totalPages}
            <a 
                href="{url}?limit={pageSize}&skip={pageSize * currentPage}" 
                class="flex items-center justify-center w-10 h-10 text-sm font-medium text-custom-orange-600 bg-white border border-custom-orange-200 rounded-lg hover:bg-custom-orange-200 hover:text-custom-orange-600 transition-colors duration-200"
                aria-label="Следваща страница"
            >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </a>
        {:else}
            <span class="flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-300 bg-gray-100 border border-gray-200 rounded-lg cursor-not-allowed">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </span>
        {/if}
    </nav>
{/if}
