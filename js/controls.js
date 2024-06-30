export function controls(keys, player) {
    addEventListener('keydown', ({ keyCode }) => {
        if (keyCode == 87 || (!keys.right.pressed && !keys.left.pressed)) {
            switch (keyCode) {
                case 65:
                    keys.left.pressed = true
                    player.currentSprite = player.sprites.run.left
                    player.currentSpritePath = 'run.left'
                    break
                case 83:
                    break
                case 68:
                    keys.right.pressed = true
                    player.currentSprite = player.sprites.run.right
                        player.currentSpritePath = 'run.right'
                    break
                case 87:
                    player.up()
                    break
                case 13:
                    keys.enter.pressed = true
                    break
                case 69:
                    keys.enter.pressed = true
                    break
                case 27:
                    let modal = document.getElementById('information-modal')
                    modal.style.display = 'none'
            }
        }
    })
    
    addEventListener('keyup', ({ keyCode }) => {
        switch (keyCode) {
            case 65:
                keys.left.pressed = false
                if (player.currentSprite == player.sprites.run.left) {
                    player.currentSprite = player.sprites.stand.left
                    player.currentSpritePath = 'stand.left'
                }
                break
            case 68:
                keys.right.pressed = false
                if (player.currentSprite == player.sprites.run.right) {
                    player.currentSprite = player.sprites.stand.right
                    player.currentSpritePath = 'stand.right'
                }
                break
            case 13:
                keys.enter.pressed = false
                break
            case 69:
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

    document.getElementById('left-button').ontouchstart = () => { 
        keys.left.pressed = true 
        player.currentSprite = player.sprites.run.left
        player.currentSpritePath = 'run.left'
    };
    document.getElementById('right-button').ontouchstart = () => { 
        keys.right.pressed = true 
        player.currentSprite = player.sprites.run.right
        player.currentSpritePath = 'run.right'
    };
    document.getElementById('enter-button').ontouchstart = () => { keys.enter.pressed = true };

    document.getElementById('left-button').ontouchend = () => { 
        keys.left.pressed = false 
        player.currentSprite = player.sprites.stand.left
        player.currentSpritePath = 'stand.left'
    };
    document.getElementById('right-button').ontouchend = () => { 
        keys.right.pressed = false
        player.currentSprite = player.sprites.stand.right
        player.currentSpritePath = 'stand.right'
     };
    document.getElementById('enter-button').ontouchend = () => { keys.enter.pressed = false };
}