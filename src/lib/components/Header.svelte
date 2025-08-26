<script lang="ts">
    import NavItem from '$lib/components/NavItem.svelte';

    export let logo: string;
</script>

<nav
    class="top-5 z-30 flex flex-row justify-between items-center pt-4 p-4 mb-4">
    <a
        href="/"
        class="flex items-center gap-2 text-amber-600 font-bold text-lg hover:text-amber-800 transition-colors"
        aria-label="Начало">
        <img
            alt="KartichkaQR Лого"
            src={logo}
            class="w-10 h-10 rounded-full object-cover shadow" />
    </a>
    <ul
        class="flex items-center">
        <li>
            <NavItem target="/">
                Начало
            </NavItem>
        </li>
        <li>
            <NavItem target="/about">
                За нас
            </NavItem>
        </li>
    </ul>
</nav>