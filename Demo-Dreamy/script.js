// SCENE & BLOOM EXPLOSION LOGIC
function triggerFlowerBloom() {
    document.getElementById("flower-bloom-overlay").classList.remove("hidden");
}

function goToGiftScene() {
    document.getElementById("scene-intro").classList.add("hidden");
    document.getElementById("scene-gift").classList.remove("hidden");
}

function goToDashboardScene() {
    document.getElementById("scene-gift").classList.add("hidden");
    document.getElementById("scene-dashboard").classList.remove("hidden");
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
}

// MUSIC CONTROLS
const bgMusic = document.getElementById("bg-music");
function toggleMusic() {
    const btn = document.getElementById("music-btn");
    if (bgMusic.paused) {
        bgMusic.play();
        btn.innerText = "⏸ Pause";
    } else {
        bgMusic.pause();
        btn.innerText = "▶ Play Preview";
    }
}

// VOICE NOTE CONTROLS
const vnAudio = document.getElementById("vn-audio");
function toggleVN() {
    const btn = document.getElementById("vn-btn");
    if (vnAudio.paused) {
        vnAudio.play();
        btn.innerText = "⏸ Pause";
    } else {
        vnAudio.pause();
        btn.innerText = "▶ Play (0:14)";
    }
}

// CAKE CANDLE BLOW
function blowCandle() {
    const flame = document.getElementById("candle-flame");
    const hint = document.getElementById("cake-hint");
    flame.style.display = "none";
    hint.innerText = "Wish made! Happy Birthday! 🎉";
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.5 } });
}

// TAB NAVIGATION
function switchTab(tabName) {
    document.getElementById("tab-cake").classList.add("hidden");
    document.getElementById("tab-album").classList.add("hidden");
    document.getElementById("tab-letter").classList.add("hidden");

    document.getElementById("btn-cake").classList.remove("active");
    document.getElementById("btn-album").classList.remove("active");
    document.getElementById("btn-letter").classList.remove("active");

    if (tabName === 'cake') {
        document.getElementById("tab-cake").classList.remove("hidden");
        document.getElementById("btn-cake").classList.add("active");
    } else if (tabName === 'album') {
        document.getElementById("tab-album").classList.remove("hidden");
        document.getElementById("btn-album").classList.add("active");
    } else if (tabName === 'letter') {
        document.getElementById("tab-letter").classList.remove("hidden");
        document.getElementById("btn-letter").classList.add("active");
    }
}

// ALBUM FLIPBOOK PAGE TURN
let currentPage = 0;
function turnAlbumPage() {
    const cover = document.getElementById("album-cover");
    const p1 = document.getElementById("album-p1");
    const p2 = document.getElementById("album-p2");

    if (currentPage === 0) {
        cover.classList.add("hidden");
        p1.classList.remove("hidden");
        currentPage = 1;
    } else if (currentPage === 1) {
        p1.classList.add("hidden");
        p2.classList.remove("hidden");
        currentPage = 2;
    } else {
        p2.classList.add("hidden");
        cover.classList.remove("hidden");
        currentPage = 0;
    }
}

// WAX LETTER TOGGLE
function openWaxLetter() {
    const letter = document.getElementById("sliding-letter");
    letter.classList.toggle("hidden");
}

// FINALE SCENE & REPLAY
function triggerFinaleScene() {
    document.getElementById("scene-dashboard").classList.add("hidden");
    document.getElementById("scene-finale").classList.remove("hidden");
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 } });
}

function replaySurprise() {
    document.getElementById("scene-finale").classList.add("hidden");
    document.getElementById("scene-intro").classList.remove("hidden");
    document.getElementById("flower-bloom-overlay").classList.add("hidden");
}
