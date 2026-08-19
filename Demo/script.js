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
        document.getElementById("error-msg").innerText = "Wrong code, try again 💜";
        clearCode();
    }
}

function openGift() {
    document.getElementById("gift-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
    startFallingFlowers();
}

// FALLING FLOWERS EFFECT
function startFallingFlowers() {
    const container = document.getElementById("flower-container");
    const flowers = ["🌸", "🌺", "✨", "💖", "🌷"];
    
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

// DIGITAL BOUQUET
function showFlowerMsg(msg) {
    const popup = document.getElementById("flower-popup");
    popup.innerText = msg;
    popup.classList.remove("hidden");
}

// PHOTO MODAL
function openPhoto(src, caption) {
    document.getElementById("modal-img").src = src;
    document.getElementById("modal-caption").innerText = caption;
    document.getElementById("photo-modal").classList.remove("hidden");
}

function closePhoto() {
    document.getElementById("photo-modal").classList.add("hidden");
}

// MUSIC PLAYER LOGIC
const audio = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");

function playSong(url, title) {
    audio.src = url;
    document.getElementById("current-song-title").innerText = "Playing: " + title;
    audio.play();
    playBtn.innerText = "⏸ Pause";
}

function togglePlay() {
    if (!audio.src) return;
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "⏸ Pause";
    } else {
        audio.pause();
        playBtn.innerText = "▶ Play";
    }
}

// NOTE JAR LOGIC
const notes = [
    "Tawamu selalu boleh membuat hari yang buruk terasa lebih ringan. 💖",
    "Terima kasih sebab sentiasa bersabar layan kerenah aku. ✨",
    "Aku bersyukur sangat jumpa orang sebaik kamu! 🌸",
    "You make my world a much brighter place! ☀️"
];

function pickNote() {
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    const display = document.getElementById("jar-note-display");
    display.innerText = randomNote;
    display.classList.remove("hidden");
}
