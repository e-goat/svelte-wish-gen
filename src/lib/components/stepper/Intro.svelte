<script lang="ts">
import {cs} from '$lib/state.svelte';
import * as helpers from '$lib/utils/helpers'
cs.slug = helpers.generateSlug(6);
</script>

<section>
    <div class="flex flex-col-reverse lg:flex-row">
        <aside class="flex flex-col gap-4">
            <h1 class="mb-4 text-4xl leading-none text-gray-900 md:text-5xl lg:text-6xl">
                {"A greeting card with your personal touch"}
            </h1>
            <p class="text-lg lg:text-2xl italic drop-shadow-sm tracking-wide">
                {"Please fill in the details below to personalize your card"}
            </p>
                <div class="mt-6 flex flex-col gap-4 w-full max-w-full">
                    <div class="flex flex-col w-full mb-4">
                        <label class="mb-1 text-sm font-medium text-gray-700" for="to-input">
                            To
                        </label>
                        <input
                            id="to-input"
                            name="receiver"
                            type="text"
                            class="rounded-xl border border-gray-200 bg-white px-4 py-3 text-base shadow focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors w-full"
                            placeholder="Recipient's name"
                            autocomplete="off"
                            bind:value={cs.receiver}
                        />
                    </div>
                    <div class="flex flex-col w-full mb-4">
                        <label class="mb-1 text-sm font-medium text-gray-700" for="from-input">
                            From
                        </label>
                        <input
                            id="from-input"
                            name="sender"
                            type="text"
                            class="rounded-xl border border-gray-200 bg-white px-4 py-3 text-base shadow focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors w-full"
                            placeholder="Your name"
                            autocomplete="off"
                            bind:value={cs.sender}
                        />
                    </div>
                    <div class="flex flex-col w-full mb-4">
                        <label class="mb-1 text-sm font-medium text-gray-700" for="to-input">
                            Title
                        </label>
                        <input
                            id="title-input"
                            name="title"
                            type="text"
                            class="rounded-xl border border-gray-200 bg-white px-4 py-3 text-base shadow focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors w-full"
                            placeholder="Title"
                            autocomplete="off"
                            bind:value={cs.title}
                            required
                        />
                    </div>
                    <div class="flex flex-col w-full mb-4">
                        <label class="mb-1 text-sm font-medium text-gray-700" for="desc-input">
                            Description
                        </label>
                        <textarea
                            id="desc-input"
                            name="description"
                            class="rounded-xl border border-gray-200 bg-white px-4 py-3 text-base shadow focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors resize-none min-h-[80px] w-full"
                            placeholder="Add a short message"
                            bind:value={cs.description}
                            required
                            rows="4"
                            maxlength="1024"
                        ></textarea>
                    </div>
                    <input type="hidden" name="slug" value={cs.slug} disabled>
                </div>
        </aside>
    </div>
</section>
