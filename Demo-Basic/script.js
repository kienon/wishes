// Fungsi untuk letupkan konfeti apabila butang ditekan
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
