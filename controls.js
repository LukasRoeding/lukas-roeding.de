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
        }
    })
}