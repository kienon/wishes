// Function to switch between screens smoothly
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.add('hidden');
    });

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
    }
}

// Open envelope, play background music, and go to the gifts menu
function openEnvelope() {
    const bgm = document.getElementById('bgm');
    if (bgm) {
        bgm.play().catch(error => {
            console.log("Audio autoplay prevented by browser:", error);
        });
    }
    showScreen('screen-menu');
}
