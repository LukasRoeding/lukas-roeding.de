const canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;

import {Player} from './player.js'

const context = canvas.getContext('2d');

const gravity = 1;

const player = new Player(gravity, context, canvas);

function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0,0, canvas.width, canvas.height);
    player.update();
}

animate()