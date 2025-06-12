<script lang="ts">
import { importCard, selectTemplate, toggleRecording, deleteRecording, createPreview, generateShareCode, downloadCardAsSVG, resetCard, copyShareCode } from '$lib/index';
import { onMount } from 'svelte';

onMount(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        const step3Element = document.getElementById('step3') as HTMLElement;
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

<!-- Import Section -->
<div class="import-section">
    <h3>📥 Import a Shared Card</h3>
    <p>Paste a card code to view someone's wish card:</p>
    <input type="text" class="import-input" placeholder="Paste card code here..." id="importInput">
    <button class="btn btn-primary" on:click={() => importCard()}>Import Card</button>
</div>

<!-- Step 1: Choose Template -->
<div class="step" id="step1">
    <h2>1. Choose Your Card Template</h2>
    <div class="templates">
        <button class="template-card template-birthday" on:click={() => selectTemplate('birthday')}>
            <div class="icon">🎂</div>
            <div class="label">Birthday</div>
        </button>
        <button class="template-card template-love" on:click={() => selectTemplate('birthday')}>
            <div class="icon">💕</div>
            <div class="label">Love</div>
        </button>
        <button class="template-card template-celebration" on:click={() => selectTemplate('celebration')}>
            <div class="icon">🎉</div>
            <div class="label">Celebration</div>
        </button>
    </div>
</div>

<!-- Step 2: Write Message -->
<div class="step" id="step2">
    <h2>2. Write Your Message</h2>
    <textarea class="message-input" id="messageInput" placeholder="Write your heartfelt message here..."></textarea>
</div>

<!-- Step 3: Record Voice -->
<div class="step" id="step3">
    <h2>3. Record Your Voice Message</h2>
    <div class="recording-section">
        <button class="record-btn" id="recordBtn" on:click={() => toggleRecording()}>
            🎤 Start Recording
        </button>
        <div class="timer" id="timer">00:00</div>
        <div class="audio-player hidden" id="audioPlayer">
            <audio controls id="audioElement"></audio>
            <button class="btn btn-secondary" on:click={() => deleteRecording()}>Delete Recording</button>
        </div>
    </div>
</div>

<!-- Step 4: Preview & Share -->
<div class="step" id="step4">
    <h2>4. Preview & Share Your Card</h2>
    <button class="btn btn-primary" on:click={() => createPreview()}>Create Preview</button>
    
    <div class="preview-card hidden" id="previewCard">
        <div id="previewContent"></div>
        <div class="action-buttons">
            <button class="btn btn-primary" on:click={() => generateShareCode()}>Generate Share Code</button>
            <button class="btn btn-primary" on:click={() => downloadCardAsSVG()}>Download as SVG</button>
            <button class="btn btn-secondary" on:click={() => resetCard()}>Create New Card</button>
        </div>
    </div>

    <div class="share-section hidden" id="shareSection">
        <h3>🚀 Share Your Card</h3>
        <p>Copy this code and share it with anyone:</p>
        <div class="share-code" id="shareCode"></div>
        <button class="btn btn-primary" on:click={() => copyShareCode()}>Copy Code</button>
    </div>
</div>