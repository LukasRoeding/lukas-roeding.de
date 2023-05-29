import {Player} from './player.js'

const canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;

const context = canvas.getContext('2d');

const gravity = 1;

const player = new Player(gravity, context, canvas);

function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0,0, canvas.width, canvas.height);
    player.update();
}

animate()

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 65:
            console.log('left')
            break
        case 83:
            console.log('down')
            break
        case 68:
            console.log('right')
            break
        case 32:
            console.log('up')
            break
    }
})