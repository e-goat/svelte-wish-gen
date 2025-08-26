<script lang="ts">
    type CardData = {
        name: string;
        description: string;
    };

    let { data }: { data: CardData } = $props();
</script>

{#if data}
    <div class="card">
        <h1>{data.name}</h1>
        <p>{data.description}</p>
    </div>
{:else}
    <p>Картичката не е намерена.</p>
{/if}

<button onclick={() => history.back()} class="btn btn-secondary">← Назад</button>

<style>
      .btn {
        padding: 16px 32px;
        border-radius: 50px;
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
        transition: background-color 0.3s, transform 0.2s;
        cursor: pointer;
        border: none;
        min-width: 200px;
    }

    .btn-secondary {
        background: transparent;
        color: #667eea;
        border: 2px solid #667eea;
    }
</style>