import { Player } from '../entities/player.js'
import { controls } from './controls.js';
import { collision } from './collision.js';
import { reset } from './reset.js';
import { init } from './inits.js';

const path = window.location.pathname;
let pageName = ''
if (path == '/') {
    pageName = 'index'
} else {
    pageName = path.split("/").pop().split(".")[0];
}

async function getLevel(pageName, levelHeight) {
    try {
       const module = await import('../levels/' + pageName + '_level.js');
       return module.level(levelHeight)
    } catch (error) {
       console.error('importing level failed');
    }
}

const canvas = document.querySelector('canvas');
canvas.width = innerWidth
if (innerWidth > 1024 ) {
    canvas.height = innerHeight  
} else {
    canvas.height = innerHeight * 0.9
}

const level = await getLevel(pageName, canvas.height)

canvas.style.display = 'none'

const context = canvas.getContext('2d');

const gravity = innerHeight / 1000;
const defaultVelocity = innerHeight / 100;


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
const backgroundImages = []
let scrollOffset = 0

init(context, canvas, level, platforms, images, informations, doors, backgroundImages, canvas.height)
var time;
function animate() {
    const now = new Date().getTime();
    const dt = (now - (time || now)) * 0.06;
    time = now;
    for(const image of backgroundImages) {
        if (image.position.x <= innerWidth || image.position.x + image.width >= 0) {
            image.draw();   
        }
    }; 
    if (keys.right.pressed && player.position.x < canvas.width / 2 - player.width / 2 ) {
        player.velocity.x = defaultVelocity * dt
    } else if (keys.left.pressed && player.position.x > 100
        || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
        player.velocity.x = -defaultVelocity * dt
    } else {
        player.velocity.x = 0
        if (keys.right.pressed) {
            scrollOffset += defaultVelocity * dt
            for(const platform of platforms) {
                platform.position.x -= defaultVelocity * dt
            };
            for(const image of images) {
                image.position.x -= defaultVelocity * dt
            };
            for(const image of backgroundImages) {
                image.position.x -= defaultVelocity / 2 * dt
            };
            for(const information of informations) {
                information.position.x -= defaultVelocity * dt
            };
            for(const door of doors) {
                door.position.x -= defaultVelocity * dt
            };  
        } else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= defaultVelocity * dt
            for(const platform of platforms) {
                platform.position.x += defaultVelocity * dt
            };
            for(const image of images) {
                image.position.x += defaultVelocity * dt
            };
            for(const image of backgroundImages) {
                image.position.x += defaultVelocity / 2 * dt
            };
            for(const information of informations) {
                information.position.x += defaultVelocity * dt
            };
            for(const door of doors) {
                door.position.x += defaultVelocity * dt
            };  
        } else if (keys.enter.pressed) {
            for(const door of doors) {
                if (
                    player.position.x + player.width + player.velocity.x >= door.position.x &&
                    player.position.x + player.velocity.x <= door.position.x + innerHeight / 10 &&
                    player.position.y + player.velocity.y + player.height >= door.position.y &&
                    player.position.y + player.velocity.y <= door.position.y + innerHeight / 10
                    ) {
                    door.open()
                    keys.enter.pressed = false
                }
            };   
        }
    }
    collision(platforms, player, informations);    
    for(const image of images) {
        if (image.position.x <= innerWidth || image.position.x + image.width >= 0) {
            image.draw();   
        }
    };
    for(const door of doors) {
        if (door.position.x <= innerWidth || door.position.x + door.width >= 0) {
            door.draw();   
        }
    };   
    player.update();

    if (player.position.y > canvas.height) {
        scrollOffset = 0
        reset(player, platforms, images, informations, doors, backgroundImages, level)
    }
    requestAnimationFrame(animate);
}

animate()
canvas.style.display = 'unset'
controls(keys, player)