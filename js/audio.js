export function audio() {
    const audioElement = document.getElementById('background-music');
    window.addEventListener("touchstart", () => {
        audioElement.play()
    }, { once: true })
    window.addEventListener("keydown", () => {
        audioElement.play()
    }, { once: true })
    window.addEventListener("mousedown", () => {
        audioElement.play()
    }, { once: true })
}
