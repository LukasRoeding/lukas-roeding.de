import { Player } from '../entities/player.js'
import { Platform } from '../entities/platform.js';
import { level } from './level_1.js';
import { controls } from './controls.js';
import { collision } from './collision.js';

const canvas = document.querySelector('canvas');
canvas.width = 1024
canvas.height = 576;

const context = canvas.getContext('2d');

const gravity = 1;
const defaultVelocity = 5;

const keys = {
    right: {
        pressed : false
    },
    left: {
        pressed: false
    }
}

const player = new Player(gravity, context, canvas);

const image = new Image()
image.src = '../images/platform.png'
const platforms = []
image.onload = function() {
    level.platforms.forEach(platform => {
        platforms.push(new Platform({x:platform.x, y:platform.y}, context, canvas, image, 400, 40))
    })
}

function animate() {
    requestAnimationFrame(animate)
    context.fillStyle = 'white'
    context.fillRect(0,0, canvas.width, canvas.height);
    collision(platforms, player);
    player.update();
    if (keys.right.pressed && player.position.x < canvas.width / 2 - player.width / 2 ) {
        player.velocity.x = defaultVelocity
    } else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -defaultVelocity
    } else {
        player.velocity.x = 0
        if (keys.right.pressed) {
            platforms.forEach(platform => {
                platform.position.x -= defaultVelocity
            });
        } else if (keys.left.pressed) {
            platforms.forEach(platform => {
                platform.position.x += defaultVelocity
            });
        }
    }
}

animate()
controls(keys, player)