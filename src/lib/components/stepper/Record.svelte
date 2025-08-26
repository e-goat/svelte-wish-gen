<script lang="ts">
    import { onDestroy, onMount } from 'svelte'
    import { cs, rs, ss } from '$lib/state.svelte'

    let mediaRecorder: MediaRecorder | null = null
    let recordingInterval: ReturnType<typeof setInterval> | null = null
    let currentStep = ss.currentStep

    const MAX_RECORDING_TIME = 30 // 30 seconds

    async function startRecording() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true,
                    sampleRate: 44100,
                },
            })

            // Use no options to let browser choose the best format
            mediaRecorder = new MediaRecorder(stream)

            const chunks: BlobPart[] = []

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunks.push(event.data)
                }
            }

            mediaRecorder.onstop = () => {
                // Create blob without specifying type - let browser handle it
                const blob = new Blob(chunks)

                // Clean up old URL if it exists
                if (cs.audioUrl) {
                    URL.revokeObjectURL(cs.audioUrl)
                }
                cs.audioBlob = blob
                cs.audioUrl = URL.createObjectURL(blob)
                rs.hasRecording = true

                // Stop all tracks
                stream.getTracks().forEach((track) => track.stop())
            }

            mediaRecorder.start()
            rs.isRecording = true
            rs.recordingStartTime = Date.now()

            // Start timer and progress tracking
            recordingInterval = setInterval(() => {
                const elapsed = Math.floor(
                    (Date.now() - rs.recordingStartTime) / 1000
                )
                const minutes = Math.floor(elapsed / 60)
                const seconds = elapsed % 60
                rs.timer = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
                rs.progress = (elapsed / MAX_RECORDING_TIME) * 100

                // Auto-stop at 30 seconds
                if (elapsed >= MAX_RECORDING_TIME) {
                    stopRecording()
                }
            }, 100)
        } catch (err) {
            console.error('Error accessing microphone:', err)
            alert('Unable to access microphone. Please check your permissions.')
        }
    }

    function stopRecording() {
        if (mediaRecorder && rs.isRecording) {
            mediaRecorder.stop()
            rs.isRecording = false

            if (recordingInterval) {
                clearInterval(recordingInterval)
                recordingInterval = null
            }
        }
    }

    async function handleRecordToggle() {
        if (rs.isRecording) {
            stopRecording()
        } else {
            // Clear previous recording when starting a new one
            if (rs.hasRecording) {
                handleDeleteRecording()
            }
            await startRecording()
        }
    }

    function handleDeleteRecording() {
        if (cs.audioUrl) {
            URL.revokeObjectURL(cs.audioUrl)
            cs.audioUrl = null
        }
        cs.audioBlob = null
        rs.hasRecording = false
        rs.timer = '00:00'
        rs.progress = 0
    }

    // Watch for step changes and stop recording if user navigates away
    $: if (ss.currentStep !== currentStep) {
        if (rs.isRecording) {
            stopRecording()
        }
        currentStep = ss.currentStep
    }

    onDestroy(() => {
        if (recordingInterval) {
            clearInterval(recordingInterval)
        }
        // Stop recording if component is destroyed while recording
        if (rs.isRecording && mediaRecorder) {
            mediaRecorder.stop()
            rs.isRecording = false
        }
        // Don't revoke audioUrl on destroy since we want to persist it
    })
</script>

<section>
    <div class="flex flex-col gap-4 sm:gap-6 md:gap-8">
        <aside class="flex flex-col gap-4 sm:gap-6 md:gap-8">
            <h1
                class="mb-2 sm:mb-3 md:mb-4 text-xl md:text-2xl lg:text-3xl leading-none text-gray-900 text-center">
                Record your voice greeting
            </h1>
            <p
                class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl italic drop-shadow-sm tracking-wide text-center text-gray-700">
                Add a personal touch with your voice. Record a greeting that
                will be included in the card.
            </p>

            <!-- Recording Interface -->
            <div class="flex flex-col items-center gap-6 mt-4 sm:mt-6 md:mt-8">
                <!-- Progress Bar -->
                <div class="w-full max-w-md">
                    <div
                        class="flex justify-between text-sm text-gray-600 mb-2">
                        <span>{rs.timer}</span>
                        <span>00:30</span>
                    </div>
                    <div
                        class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                            class="h-full bg-gradient-to-r from-custom-teal-200 to-custom-teal-300 rounded-full transition-all duration-300 ease-out"
                            style="width: {rs.progress}%">
                        </div>
                    </div>
                </div>

                <!-- Recording Button -->
                <div class="flex flex-col items-center gap-4">
                    <button
                        type="button"
                        on:click={handleRecordToggle}
                        class="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-custom-orange-200
                               {rs.isRecording
                            ? 'bg-red-500 border-red-600 animate-pulse shadow-lg shadow-red-200'
                            : rs.hasRecording
                              ? 'bg-custom-orange-400 border-custom-orange-600 hover:bg-custom-orange-600'
                              : 'bg-custom-teal-200 border-custom-teal-300 hover:bg-custom-teal-300'}">
                        <div
                            class="text-white text-2xl sm:text-3xl md:text-4xl">
                            {#if rs.isRecording}
                                ⏹️
                            {:else if rs.hasRecording}
                                🎤
                            {:else}
                                🎤
                            {/if}
                        </div>

                        <!-- Recording pulse animation -->
                        {#if rs.isRecording}
                            <div
                                class="absolute inset-0 rounded-full border-4 border-red-400 animate-ping opacity-50">
                            </div>
                        {/if}
                    </button>

                    <p
                        class="text-center text-sm sm:text-base text-gray-600 font-medium">
                        {#if rs.isRecording}
                            Recording... Click to stop
                        {:else if rs.hasRecording}
                            Click to record again
                        {:else}
                            Click to start recording
                        {/if}
                    </p>
                </div>

                <!-- Audio Playback -->
                {#if rs.hasRecording && cs.audioUrl}
                    <div
                        class="w-full max-w-md bg-amber-111 rounded-lg p-4 shadow-sm border border-custom-orange-200">
                        <div class="flex items-center justify-between gap-4">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-8 h-8 bg-custom-orange-400 rounded-full flex items-center justify-center">
                                    <span class="text-white text-sm">🎵</span>
                                </div>
                                <span class="text-sm font-medium text-gray-700"
                                    >Your Recording</span>
                            </div>
                            <button
                                type="button"
                                on:click={handleDeleteRecording}
                                class="px-3 py-1 text-xs bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-200 border border-red-200">
                                Delete
                            </button>
                        </div>

                        <audio
                            src={cs.audioUrl}
                            controls
                            class="w-full mt-3"
                            preload="metadata">
                            Your browser does not support audio playback.
                        </audio>
                    </div>
                {/if}

                <!-- Instructions -->
                <div
                    class="text-center text-xs sm:text-sm text-gray-500 max-w-md">
                    <p>Maximum recording time: 30 seconds</p>
                    <p class="mt-1">
                        Make sure your microphone is enabled and speak clearly
                    </p>
                </div>
            </div>
        </aside>
    </div>
</section>
