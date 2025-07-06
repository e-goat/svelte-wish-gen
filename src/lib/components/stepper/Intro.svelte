<section>
    <div class="flex flex-col-reverse lg:flex-row">
        <aside class="flex flex-col gap-4">
            <h1 class="mb-4 text-4xl leading-none text-gray-900 md:text-5xl lg:text-6xl">
                {"A greeting card with your personal touch"}
            </h1>
                {"Please fill in the details below to personalize your card"}
                <div class="mt-6 flex flex-col gap-4 w-full max-w-full">
                    <div class="flex flex-col w-full">
                        <label class="mb-1 text-sm font-medium text-gray-700" for="to-input">
                            To
                        </label>
                        <input
                            id="to-input"
                            type="text"
                            class="rounded-xl border border-gray-200 bg-white px-4 py-3 text-base shadow focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all w-full"
                            placeholder="Recipient's name"
                            autocomplete="off"
                        />
                    </div>
                    <div class="flex flex-col w-full">
                        <label class="mb-1 text-sm font-medium text-gray-700" for="from-input">
                            From
                        </label>
                        <input
                            id="from-input"
                            type="text"
                            class="rounded-xl border border-gray-200 bg-white px-4 py-3 text-base shadow focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all w-full"
                            placeholder="Your name"
                            autocomplete="off"
                        />
                    </div>
                    <div class="flex flex-col w-full">
                        <label class="mb-1 text-sm font-medium text-gray-700" for="desc-input">
                            Description
                        </label>
                        <textarea
                            id="desc-input"
                            class="rounded-xl border border-gray-200 bg-white px-4 py-3 text-base shadow focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all resize-none min-h-[80px] w-full"
                            placeholder="Add a short message"
                        ></textarea>
                    </div>
                </div>
        </aside>
    </div>
</section>
