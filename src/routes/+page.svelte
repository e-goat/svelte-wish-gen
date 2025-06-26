<script lang="ts">
  import {
    importCard,
    selectTemplate,
    toggleRecording,
    deleteRecording,
    createPreview,
    generateShareCode,
    downloadCardAsSVG,
    resetCard,
    copyShareCode,
  } from "$lib/index";
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";
  import stepimg from "$lib/assets/step-1.svg";

  import Button from "$lib/components/Button.svelte";
  let { data }: PageProps = $props();

  onMount(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      const step3Element = document.getElementById("step3") as HTMLElement;
      if (step3Element) {
        step3Element.innerHTML = `
            <h2>3. Voice Recording Not Supported</h2>
            <div class="error">
            Your browser doesn't support voice recording. You can still create text-only cards!
            </div>
            `;
      }
    }
  });
</script>

<section
  class="p-6 md:p-12 shadow rounded-xl flex flex-col gap-4 bg-gray-100/50 backdrop-blur-sm"
>
  <span>{"Step 1"}</span>
  <div class="lg:flex">
    <aside class="flex flex-col gap-4">
      <h1
        class="mb-4 text-4xl leading-none text-gray-900 md:text-5xl lg:text-6xl"
      >
        {"A greeting card with your personal touch"}
      </h1>
    <p class="text-lg lg:text-2xl italic drop-shadow-sm tracking-wide">
      {"Create a custom card in seconds, choose a design, add your message and record a voice greeting."}
    </p>
    </aside>
    <img
      alt="Step 1"
      src={stepimg}
      class="w-[32rem] h-auto object-contain lg:ml-auto drop-shadow-lg"
      style="max-height: 28rem;"
    />
  </div>
  <div class="flex justify-start">
    <Button ariaLabel="Next Step" text={"Create your card"} />
  </div>
</section>
