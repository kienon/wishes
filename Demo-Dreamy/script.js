// SCENE & PHASE TRANSITION LOGIC
function triggerFlowerBloom() {
    document.getElementById("bloom-overlay").classList.remove("hidden");
}

function goToGiftPhase() {
    document.getElementById("phase-intro").classList.add("hidden");
    document.getElementById("phase-gift").classList.remove("hidden");
}

function goToDashboardPhase() {
    document.getElementById("phase-gift").classList.add("hidden");
    document.getElementById("phase-dashboard").classList.remove("hidden");
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
}

// MUSIC PLAYER CONTROLS
const bgMusic = document.getElementById("bg-music");
function toggleMusic() {
    const btn = document.getElementById("music-play-btn");
    if (bgMusic.paused) {
        bgMusic.play();
        btn.innerText = "⏸ Pause";
    } else {
        bgMusic.pause();
        btn.innerText = "▶ Play";
    }
}

// VOICE NOTE CONTROLS
const vnAudio = document.getElementById("vn-audio");
function toggleVN() {
    const btn = document.getElementById("vn-play-btn");
    if (vnAudio.paused) {
        vnAudio.play();
        btn.innerText = "⏸ Pause Voice Note";
    } else {
        vnAudio.pause();
        btn.innerText = "▶ Listen Voice Note";
    }
}

function playYTDemo() {
    alert("Playing video: John Legend - All of Me 🎵");
}

// CAKE CANDLE BLOW LOGIC
function blowCandle() {
    const flame = document.getElementById("candle-flame");
    const hint = document.getElementById("candle-hint");
    flame.style.display = "none";
    hint.innerText = "Wish made! Happy Birthday! 🎉";
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.5 } });
}

// TAB SWITCHING LOGIC
function switchTab(tabName) {
    document.getElementById("tab-cake").classList.add("hidden");
    document.getElementById("tab-album").classList.add("hidden");
    document.getElementById("tab-letter").classList.add("hidden");

    document.getElementById("nav-cake").classList.remove("active");
    document.getElementById("nav-album").classList.remove("active");
    document.getElementById("nav-letter").classList.remove("active");

    if (tabName === 'cake') {
        document.getElementById("tab-cake").classList.remove("hidden");
        document.getElementById("nav-cake").classList.add("active");
    } else if (tabName === 'album') {
        document.getElementById("tab-album").classList.remove("hidden");
        document.getElementById("nav-album").classList.add("active");
    } else if (tabName === 'letter') {
        document.getElementById("tab-letter").classList.remove("hidden");
        document.getElementById("nav-letter").classList.add("active");
    }
}

// ALBUM PAGE FLIP LOGIC
let currentAlbumPage = 0;
function nextAlbumPage() {
    const cover = document.getElementById("album-cover");
    const page1 = document.getElementById("album-page-1");
    const page2 = document.getElementById("album-page-2");

    if (currentAlbumPage === 0) {
        cover.classList.add("hidden");
        page1.classList.remove("hidden");
        currentAlbumPage = 1;
    } else if (currentAlbumPage === 1) {
        page1.classList.add("hidden");
        page2.classList.remove("hidden");
        currentAlbumPage = 2;
    } else {
        page2.classList.add("hidden");
        cover.classList.remove("hidden");
        currentAlbumPage = 0;
    }
}

// WAX LETTER TOGGLE
function openWaxLetter() {
    const letter = document.getElementById("sliding-letter");
    letter.classList.toggle("hidden");
}

// FINALE PHASE & REPLAY
function triggerFinalePhase() {
    document.getElementById("phase-dashboard").classList.add("hidden");
    document.getElementById("phase-finale").classList.remove("hidden");
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 } });
}

function restartDemo() {
    document.getElementById("phase-finale").classList.add("hidden");
    document.getElementById("phase-intro").classList.remove("hidden");
    document.getElementById("bloom-overlay").classList.add("hidden");
}
