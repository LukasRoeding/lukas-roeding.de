export function controls(keys, player) {
    addEventListener('keydown', ({ keyCode }) => {
        switch (keyCode) {
            case 65:
                keys.left.pressed = true
                break
            case 83:
                console.log('down')
                break
            case 68:
                keys.right.pressed = true
                break
            case 87:
                player.up()
                break
            case 13:
                keys.enter.pressed = true
                break
        }
    })
    
    addEventListener('keyup', ({ keyCode }) => {
        switch (keyCode) {
            case 65:
                keys.left.pressed = false
                break
            case 68:
                keys.right.pressed = false
                break
            case 13:
                keys.enter.pressed = false
                break
        }
    })

    document.getElementById('left-button').onmousedown = () => { keys.left.pressed = true };
    document.getElementById('right-button').onmousedown = () => { keys.right.pressed = true };
    document.getElementById('jump-button').onmousedown = () => { player.up() };
    document.getElementById('enter-button').onmousedown = () => { keys.enter.pressed = true };

    document.getElementById('left-button').onmouseup = () => { keys.left.pressed = false };
    document.getElementById('right-button').onmouseup = () => { keys.right.pressed = false };
    document.getElementById('enter-button').onmouseup = () => { keys.enter.pressed = false };

    document.getElementById('left-button').ontouchstart = () => { keys.left.pressed = true };
    document.getElementById('right-button').ontouchstart = () => { keys.right.pressed = true };
    document.getElementById('enter-button').ontouchstart = () => { keys.enter.pressed = true };

    document.getElementById('left-button').ontouchend = () => { keys.left.pressed = false };
    document.getElementById('right-button').ontouchend = () => { keys.right.pressed = false };
    document.getElementById('enter-button').ontouchend = () => { keys.enter.pressed = false };
}