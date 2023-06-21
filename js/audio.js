export function audio() {
    const audioElement = document.getElementById('background-music');
    window.addEventListener("touchstart", () => {
        audioElement.play()
    })
    window.addEventListener("keydown", () => {
        audioElement.play()
    })
    window.addEventListener("mousedown", () => {
        audioElement.play()
    })
}
