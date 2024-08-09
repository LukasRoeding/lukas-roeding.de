import { Player } from '../entities/player.js'
import { controls } from './controls.js';
import { collision } from './collision.js';
import { reset } from './reset.js';
import { init } from './inits.js';
import { audio } from './audio.js';
import { changeOutfitEvents } from './outfitEvents.js';

const path = window.location.pathname;
let pageName = ''
if (path == '/') {
    pageName = 'index'
} else {
    pageName = path.split("/").pop().split(".")[0];
}

const closeModalButton = document.getElementById('closeModalButton')
closeModalButton.addEventListener('click', () => {
    const backgroundOffset = document.getElementById('backgroundOffset')
    backgroundOffset.style.display = 'none'
    const modal = document.getElementById('information-modal')
    modal.style.display = 'none'
    const modalLink = document.getElementById('information-modal-link')
    modalLink.style.display = 'none'
    localStorage.setItem('movementFlag', true)
})

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

audio()

const level = await getLevel(pageName, canvas.height)
canvas.style.display = 'none'

const context = canvas.getContext('2d');

let gravity = canvas.height / 1000;
const defaultVelocity = canvas.height / 100;

localStorage.setItem('movementFlag', true)

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
const enemies = []
const blocks = []

let scrollOffset = 0
var frameVelocity = 0

function stopMovement() {
    frameVelocity = 0
}


await init(context, canvas, level, platforms, images, informations, doors, backgroundImages, enemies, blocks, canvas.height)

changeOutfitEvents(player)

var time;

function animate() {
    const now = new Date().getTime();
    const dt = (now - (time || now)) * 0.06;
    const calculatedFrameVeloctiy = defaultVelocity * dt;
    time = now;
    frameVelocity = calculatedFrameVeloctiy;
    player.velocity.y = player.velocity.y + (gravity / 10 * dt)
    player.velocity.x = 0

    for(const image of backgroundImages) {
        if (image.position.x <= innerWidth && image.position.x + image.width >= 0) {
            image.draw();   
        }
    }; 

    collision(platforms, player, informations, blocks, frameVelocity, stopMovement);   
    if (keys.right.pressed && localStorage.getItem('movementFlag') == 'true') {
        scrollOffset += frameVelocity
        for(const platform of platforms) {
            platform.position.x -= frameVelocity
        };
        for(const image of images) {
            image.position.x -= frameVelocity
        };
        for(const image of backgroundImages) {
            image.position.x -= frameVelocity / 2
        };
        for(const information of informations) {
            information.position.x -= frameVelocity
        };
        for(const block of blocks) {
            block.position.x -= frameVelocity
        };
        for(const door of doors) {
            door.position.x -= frameVelocity
        };  
        for(const enemy of enemies) {
            enemy.position.x -= frameVelocity
        };  
    } else if (keys.left.pressed && localStorage.getItem('movementFlag') == 'true') {
        scrollOffset -= frameVelocity
        for(const platform of platforms) {
            platform.position.x += frameVelocity
        };
        for(const image of images) {
            image.position.x += frameVelocity
        };
        for(const image of backgroundImages) {
            image.position.x += frameVelocity / 2
        };
        for(const information of informations) {
            information.position.x += frameVelocity
        };
        for(const block of blocks) {
            block.position.x += frameVelocity
        };
        for(const door of doors) {
            door.position.x += frameVelocity
        };  
        for(const enemy of enemies) {
            enemy.position.x += frameVelocity
        };  
    } else if (keys.enter.pressed) {
        for(const door of doors) {
            if (
                player.position.x + player.width + player.velocity.x >= door.position.x &&
                player.position.x + player.velocity.x <= door.position.x + canvas.height / 10 &&
                player.position.y + player.velocity.y + player.height >= door.position.y &&
                player.position.y + player.velocity.y <= door.position.y + canvas.height / 10
                ) {
                localStorage.setItem('movementFlag', false)
                keys.enter.pressed = false
                setTimeout(()=> {
                    localStorage.setItem('movementFlag', true)
                }, 1300)
                door.open()
            }
        };   
    }

    for(const image of images) {
        if (image.position.x <= innerWidth && image.position.x + image.width >= 0) {
            image.draw();   
        }
    };
    for(const door of doors) {
        if (door.position.x <= innerWidth && door.position.x + door.width >= 0) {
            door.draw();   
        }
    }; 
    for(const enemy of enemies) {
        if (enemy.position.x <= innerWidth && enemy.position.x + enemy.width >= 0) {
            if (
                player.position.x + player.width >= enemy.position.x &&
                player.position.x <= enemy.position.x + enemy.width
            ) {
                if (                
                    player.position.y + player.height <= enemy.position.y && 
                    player.position.y + player.height + player.velocity.y >= enemy.position.y
                )
                {
                    enemy.death()
                    player.up(true)
                } else if (                    
                    player.position.y + player.height + player.velocity.y >= enemy.position.y &&
                    player.position.y + player.velocity.y <= enemy.position.y + enemy.height
                    ) {
                    scrollOffset = 0
                    reset(player, platforms, images, informations, doors, backgroundImages, enemies, blocks, level)
                }
            } 
            if (localStorage.getItem('movementFlag') == 'true') {
                enemy.update(calculatedFrameVeloctiy, scrollOffset);   
            } else {
                enemy.draw()
            }
        } else {
            if (localStorage.getItem('movementFlag') == 'true') {
                enemy.update(calculatedFrameVeloctiy, scrollOffset, false);
            } else {
                enemy.draw()
            }
        }
    };   

    player.update();
    
    if (player.position.y > canvas.height) {
        scrollOffset = 0
        reset(player, platforms, images, informations, doors, backgroundImages, enemies, blocks, level)
    }
    setTimeout(() => {
        requestAnimationFrame(animate);
    }, 20)
    
}

animate()
canvas.style.display = 'unset'
controls(keys, player)