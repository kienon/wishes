const CORRECT_CODE = "111111"; // Tukar passcode kat sini
let currentInput = "";

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
        if (index < currentInput.length) {
            dot.classList.add("filled");
        } else {
            dot.classList.remove("filled");
        }
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
}
