import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import commonJS from "vite-plugin-commonjs";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        tailwindcss(),
        sveltekit(),
        commonJS({
            filter: (id) => id.includes("/db"),
        }),
    ],
    define: {
        __dirname: "import.meta.dirname",
        global: "globalThis",
    },
    ssr: {
        external: ["$lib/db"],
    },
    optimizeDeps: {
        exclude: ["$lib/db"],
    },
});
