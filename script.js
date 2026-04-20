function nextPage(page) {
    document.body.style.opacity = 0;
    setTimeout(() => {
        window.location.href = page;
    }, 500);
}

// Typing effect
function typeText(elementId, text, speed = 50) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed=80);
        }
    }
    typing();
}

// Music control
const music = document.getElementById("bgMusic");

window.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");

    if (!music) return;

    // Set initial state
    music.volume = 0.3;

    // Try autoplay (muted)
    music.play().catch(() => {
        console.log("Autoplay blocked");
    });

    // Unlock sound on first interaction
    const startMusic = () => {
        music.muted = false;
        music.play().catch(() => {});
    };

    document.addEventListener("click", startMusic, { once: true });
});

