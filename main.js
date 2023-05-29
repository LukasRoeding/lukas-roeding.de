import {Player} from './player.js'
import { Platform } from './platform.js';
const canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;

const context = canvas.getContext('2d');

const gravity = 1;

const player = new Player(gravity, context, canvas);
const platform = new Platform(context, canvas)

function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0,0, canvas.width, canvas.height);
    platform.draw();
    player.update();

    if (
        player.position.y + player.height <= platform.position.y && 
        player.position.y + player.height + player.velocity.y >= platform.position.y &&
        player.position.x + player.width >= platform.position.x &&
        player.position.x <= platform.position.x + platform.width) {
        player.velocity.y = 0
    }
}

animate()

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            player.left = true
            break
        case 83:
            console.log('down')
            break
        case 68:
            player.right = true
            break
        case 87:
            player.up()
            break
    }
})

addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            player.left = false
            break
        case 68:
            player.right = false
            break
    }
})