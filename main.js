import { Player } from './player.js'
import { Platform } from './platform.js';
import { level } from './level_1.js';

const canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;

const context = canvas.getContext('2d');

const gravity = 1;

const keys = {
    right: {
        pressed : false
    },
    left: {
        pressed: false
    }
}

const player = new Player(gravity, context, canvas);
const platforms = []
level.platforms.forEach(platform => {
    platforms.push(new Platform({x:platform.x, y:platform.y}, context, canvas))
})

function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0,0, canvas.width, canvas.height);
    player.update();

    platforms.forEach(platform => {
        platform.draw();
        if (
            player.position.y + player.height <= platform.position.y && 
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width
        ) {
            player.velocity.y = 0
        }
    });

    if(keys.right.pressed && player.position.x < innerWidth - 100 ) {
        player.velocity.x = 5
    } else if(keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -5
    } else {
        player.velocity.x = 0
        if (keys.right.pressed) {
            platforms.forEach(platform => {
                platform.position.x -= 5
            });
        } else if (keys.left.pressed) {
            platforms.forEach(platform => {
                platform.position.x += 5
            });
        }
    }

}

animate()

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