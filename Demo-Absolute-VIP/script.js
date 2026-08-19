const CORRECT_CODE = "111111";
let currentInput = "";

// PASSCODE LOGIC
function pressNum(num) {
    if (currentInput.length < 6) {
        currentInput += num;
        updateDots();
    }
}

function clearCode() {
    currentInput = "";
    updateDots();
    document.getElementById("error-msg").innerText = "";
}

function updateDots() {
    const dots = document.querySelectorAll("#code-dots span");
    dots.forEach((dot, index) => {
        if (index < currentInput.length) dot.classList.add("filled");
        else dot.classList.remove("filled");
    });
}

function submitCode() {
    if (currentInput === CORRECT_CODE) {
        document.getElementById("lock-screen").classList.add("hidden");
        document.getElementById("gift-screen").classList.remove("hidden");
    } else {
        document.getElementById("error-msg").innerText = "Invalid VIP Code 💜";
        clearCode();
    }
}

function openGift() {
    document.getElementById("gift-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
    startFallingFlowers();
    startTogetherCounter();
}

// FALLING FLOWERS
function startFallingFlowers() {
    const container = document.getElementById("flower-container");
    const flowers = ["✨", "💖", "🌸", "👑", "🌹"];
    setInterval(() => {
        const flower = document.createElement("div");
        flower.classList.add("falling-flower");
        flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = Math.random() * 3 + 2 + "s";
        container.appendChild(flower);
        setTimeout(() => flower.remove(), 5000);
    }, 300);
}

// TOGETHER COUNTER
function startTogetherCounter() {
    const startDate = new Date("2023-01-01T00:00:00");
    setInterval(() => {
        const now = new Date();
        const diff = now - startDate;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    }, 1000);
}

// QUIZ LOGIC
function checkAnswer(isCorrect) {
    const feedback = document.getElementById("quiz-feedback");
    if (isCorrect) {
        feedback.style.color = "#d4af37";
        feedback.innerText = "Correct! Secret Envelope Unlocked! ✨";
        document.getElementById("envelope-section").classList.remove("hidden");
    } else {
        feedback.style.color = "#ff5555";
        feedback.innerText = "Wrong answer! Try again 😜";
    }
}

// ENVELOPE LOGIC (UPDATED: TOGGLE SHOW/HIDE LETTER)
function toggleEnvelope() {
    const env = document.getElementById("envelope");
    const letter = document.getElementById("full-letter");

    env.classList.toggle("open");

    if (env.classList.contains("open")) {
        // Jika sampul dibuka, tunjuk surat selepas animasi sampul bergerak
        setTimeout(() => {
            letter.classList.remove("hidden");
        }, 400);
    } else {
        // Jika sampul ditutup, terus sembunyikan surat
        letter.classList.add("hidden");
    }
}

// VOICE NOTE
function toggleVN() {
    const audio = document.getElementById("vn-audio");
    const btn = document.getElementById("vn-btn");
    if (audio.paused) {
        audio.play();
        btn.innerText = "⏸ Pause Voice Note";
    } else {
        audio.pause();
        btn.innerText = "▶ Listen Voice Note";
    }
}

// BOUQUET, GALLERY, MUSIC, JAR
function showFlowerMsg(msg) {
    const popup = document.getElementById("flower-popup");
    popup.innerText = msg;
    popup.classList.remove("hidden");
}

function openPhoto(src, caption) {
    document.getElementById("modal-img").src = src;
    document.getElementById("modal-caption").innerText = caption;
    document.getElementById("photo-modal").classList.remove("hidden");
}

function closePhoto() {
    document.getElementById("photo-modal").classList.add("hidden");
}

const audio = document.getElementById("audio-player");
function playSong(url, title) {
    audio.src = url;
    document.getElementById("current-song-title").innerText = "Playing: " + title;
    audio.play();
    document.getElementById("play-btn").innerText = "⏸ Pause";
}

function togglePlay() {
    if (!audio.src) return;
    if (audio.paused) { audio.play(); document.getElementById("play-btn").innerText = "⏸ Pause"; }
    else { audio.pause(); document.getElementById("play-btn").innerText = "▶ Play"; }
}

function pickNote() {
    const notes = ["You are my favorite human 💖", "Thank you for being my sunshine ☀️", "I'm so proud of you! ✨"];
    const display = document.getElementById("jar-note-display");
    display.innerText = notes[Math.floor(Math.random() * notes.length)];
    display.classList.remove("hidden");
}

// FIREWORKS
function triggerFireworks() {
    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
    });
}
