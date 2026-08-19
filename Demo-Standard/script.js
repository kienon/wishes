// Fungsi letupkan konfeti untuk meraikan hari lahir
function triggerConfetti() {
    confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.6 }
    });
}
