const audio = document.getElementById("burası-turkiye");

document.addEventListener("click", () => {
    audio.play().catch(e => console.log("Ses çalma hatası:", e));
});
