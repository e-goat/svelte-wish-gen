<script lang="ts">
    import NavItem from '$lib/components/NavItem.svelte';

    export let logo: string;
</script>

<nav
    class="top-0 z-30 mx-4">
    <div class="flex p-4 rounded-full my-4 flex-row justify-between items-center mx-auto max-w-7xl bg-white/60 backdrop-blur-sm shadow-inner">
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
    </div>
</nav>