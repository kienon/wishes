// SCENE TRANSITIONS
function startBloom() {
    document.getElementById("flower-bloom-container").classList.remove("hidden");
}

function revealGiftScreen() {
    document.getElementById("scene-intro").classList.add("hidden");
    document.getElementById("scene-gift").classList.remove("hidden");
}

function openMainSurprise() {
    document.getElementById("scene-gift").classList.add("hidden");
    document.getElementById("scene-main").classList.remove("hidden");
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}

// MUSIC & VOICE NOTE CONTROLS
const bgMusic = document.getElementById("bg-music");
function toggleMusic() {
    const btn = document.getElementById("music-btn");
    if (bgMusic.paused) {
        bgMusic.play();
        btn.innerText = "⏸ Pause";
    } else {
        bgMusic.pause();
        btn.innerText = "▶ Play";
    }
}

const vnAudio = document.getElementById("vn-audio");
function toggleVN() {
    const btn = document.getElementById("vn-btn");
    if (vnAudio.paused) {
        vnAudio.play();
        btn.innerText = "⏸ Pause";
    } else {
        vnAudio.pause();
        btn.innerText = "▶ Listen (0:14)";
    }
}

// TAB NAVIGATION
function switchTab(tabName) {
    document.getElementById("tab-cake").classList.add("hidden");
    document.getElementById("tab-album").classList.add("hidden");
    document.getElementById("tab-letter").classList.add("hidden");

    if (tabName === 'cake') document.getElementById("tab-cake").classList.remove("hidden");
    if (tabName === 'album') document.getElementById("tab-album").classList.remove("hidden");
    if (tabName === 'letter') document.getElementById("tab-letter").classList.remove("hidden");
}

// ALBUM FLIP LOGIC
function flipAlbum() {
    const cover = document.getElementById("album-cover");
    const page = document.getElementById("album-page");
    
    if (page.classList.contains("hidden")) {
        cover.classList.add("hidden");
        page.classList.remove("hidden");
    } else {
        page.classList.add("hidden");
        cover.classList.remove("hidden");
    }
}

// LETTER POPUP LOGIC
function openLetter() {
    const popup = document.getElementById("popup-letter");
    popup.classList.toggle("hidden");
}

// FINALE CELEBRATION
function triggerFinale() {
    document.getElementById("scene-main").classList.add("hidden");
    document.getElementById("scene-finale").classList.remove("hidden");
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 } });
}

function restartDemo() {
    document.getElementById("scene-finale").classList.add("hidden");
    document.getElementById("scene-intro").classList.remove("hidden");
    document.getElementById("flower-bloom-container").classList.add("hidden");
}
