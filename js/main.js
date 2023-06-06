import { Player } from '../entities/player.js'
import { controls } from './controls.js';
import { collision } from './collision.js';
import { reset } from './reset.js';
import { init } from './inits.js';

const path = window.location.pathname;
let pageName = ''
if (path = '/') {
    pageName = 'index'
} else {
    pageName = path.split("/").pop().split(".")[0];
}


async function getLevel(pageName) {
    try {
       const module = await import('../levels/' + pageName + '_level.js');
       return module.level
    } catch (error) {
       console.error('importing level failed');
    }
}

const level = await getLevel(pageName)

const canvas = document.querySelector('canvas');
canvas.width = innerWidth
canvas.height = innerHeight
canvas.style.display = 'none'

const context = canvas.getContext('2d');

const gravity = 1;
const defaultVelocity = 6;


const keys = {
    right: {
        pressed : false
    },
    left: {
        pressed: false
    },
    enter: {
        pressed: false
    }
}
const player = new Player(gravity, context, canvas);

const platforms = []
const images = []
const informations = []
const doors = []
let scrollOffset = 0

init(context, canvas, level, platforms, images, informations, doors)

function animate() {  
    images.forEach(element => {
        if (element.position.x <= innerWidth || element.position.x + element.width >= 0) {
            element.draw();   
        }
    });
    doors.forEach(element => {
        if (element.position.x <= innerWidth || element.position.x + element.width >= 0) {
            element.draw();   
        }
    });   
    if (keys.right.pressed && player.position.x < canvas.width / 2 - player.width / 2 ) {
        player.velocity.x = defaultVelocity
    } else if (keys.left.pressed && player.position.x > 100
        || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
        player.velocity.x = -defaultVelocity
    } else {
        player.velocity.x = 0
        if (keys.right.pressed) {
            scrollOffset += defaultVelocity
            platforms.forEach(platform => {
                platform.position.x -= defaultVelocity
            });
            images.forEach(image => {
                image.position.x -= defaultVelocity / 2
            });
            informations.forEach(information => {
                information.position.x -= defaultVelocity
            });
            doors.forEach(door => {
                door.position.x -= defaultVelocity
            });  
        } else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= defaultVelocity
            platforms.forEach(platform => {
                platform.position.x += defaultVelocity
            });
            images.forEach(image => {
                image.position.x += defaultVelocity / 2
            });
            informations.forEach(information => {
                information.position.x += defaultVelocity
            });
            doors.forEach(door => {
                door.position.x += defaultVelocity
            });  
        } else if (keys.enter.pressed) {
            doors.forEach(door => {
                if (
                    player.position.x + player.width + player.velocity.x >= door.position.x &&
                    player.position.x + player.velocity.x <= door.position.x + 30 &&
                    player.position.y + player.velocity.y + player.height >= door.position.y &&
                    player.position.y + player.velocity.y <= door.position.y + 60
                    ) {
                    door.open()
                    keys.enter.pressed = false
                }
            });   
        }
    }
    collision(platforms, player, informations);    
    player.update();

    if (player.position.y > canvas.height) {
        scrollOffset = 0
        reset(player, platforms, images, informations, doors, level)
    }
    requestAnimationFrame(animate);
}

animate()
canvas.style.display = 'unset'
controls(keys, player)