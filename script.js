const music = document.getElementById("bgMusic");
const video = document.getElementById("introVideo");
const endBg = document.getElementById("endBackground");

// Gdy muzyka się skończy
music.addEventListener("ended", () => {
    video.style.display = "none";
    endBg.style.display = "block";
});

// Autoplay fix (kliknięcie)
document.body.addEventListener("click", () => {
    music.play();
});
