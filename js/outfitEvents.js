export function changeOutfitEvents(player) {
    const body = document.getElementsByTagName("body")[0]
    const outfitButton = document.createElement("button")
    outfitButton.innerHTML = "<img src='../images/player/shirt.svg' height='30px' width='30px' />"
    outfitButton.style.position = "absolute";
    outfitButton.style.top = "0"
    outfitButton.style.left = "0"
    outfitButton.style.borderTopLeftRadius = "0"
    outfitButton.style.borderTopRightRadius = "0"
    outfitButton.style.borderBottomLeftRadius = "0"
    outfitButton.style.padding = "10px"
    outfitButton.style.borderRight = "3px solid #38251b"
    outfitButton.style.borderBottom = "3px solid #38251b"

    outfitButton.addEventListener("click", () => {
        let newLook
        if(localStorage.getItem('outfit') == 4) {
            newLook = 1
        } else {
            newLook = Number(localStorage.getItem('outfit')) + 1
        }
        player.sprites = player.changeLook(newLook)
        player.updateCurrentSprite()
        player.draw()
    })
    body.appendChild(outfitButton);
}