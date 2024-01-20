import { Player } from '../entities/player.js'
import { controls } from './controls.js';
import { collision } from './collision.js';
import { reset } from './reset.js';
import { init } from './inits.js';
import { audio } from './audio.js';
import { OtherPlayer } from '../entities/otherPlayer.js';

const socket = io("192.168.20.40:3000");
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

audio()

const level = await getLevel(pageName, canvas.height)
canvas.style.display = 'none'

const context = canvas.getContext('2d');
let gravityBase = canvas.height / 1000
let gravity = canvas.height / 1000;
const defaultVelocity = canvas.height / 100;

let playerMovement = true
let doorClosed = true

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
const OtherPlayers = new Map()

socket.emit("newPlayer", {height: canvas.height, room: pageName});

socket.on("newPlayer", (data) => {
    if (data.id != socket.id) {
        OtherPlayers.set(data.id, new OtherPlayer(context, canvas, data.id, data.height.height / canvas.height))
        socket.emit("currentPlayer", {height: canvas.height, room: pageName});
    }
});

socket.on("currentPlayer", (data) => {
    if (data.id != socket.id) {
        OtherPlayers.set(data.id, new OtherPlayer(context, canvas, data.id, data.height.height / canvas.height))
    }
});

let scrollOffset = 0
var frameVelocity = 0

function stopMovement() {
    frameVelocity = 0
}

socket.on("newPlayerData", (data) => {
    if (data.id != socket.id) {
        const otherPlayer = OtherPlayers.get(data.id)
        otherPlayer.position.x = otherPlayer.defaultPosition + data.data.scrollOffset - scrollOffset 
        otherPlayer.position.y = data.data.positionY / otherPlayer.heightFactor
    }
});

init(context, canvas, level, platforms, images, informations, doors, backgroundImages, enemies, blocks, canvas.height)
var time;
function animate() {
    const now = new Date().getTime();
    const dt = (now - (time || now)) * 0.06;
    const calculatedFrameVeloctiy = defaultVelocity * dt;
    time = now;
    frameVelocity = calculatedFrameVeloctiy;
    gravity = gravityBase * dt;
    for(const image of backgroundImages) {
        if (image.position.x <= innerWidth && image.position.x + image.width >= 0) {
            image.draw();   
        }
    }; 
    player.velocity.x = 0
    playerMovement = false;
    collision(platforms, player, informations, blocks, frameVelocity, stopMovement);    
    if (keys.right.pressed && doorClosed) {
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
    } else if (keys.left.pressed && doorClosed) {
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
                doorClosed = false
                setTimeout(() => {
                    doorClosed = true
                }, 1300)
                keys.enter.pressed = false
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
            enemy.update(calculatedFrameVeloctiy, scrollOffset);   
        } else {
            enemy.update(calculatedFrameVeloctiy, scrollOffset, false);
        }
    };   
    player.gravity = gravity;
    player.update();
    for (let [key, value] of OtherPlayers) {
        value.update()
    }
    if (player.position.y > canvas.height) {
        scrollOffset = 0
        reset(player, platforms, images, informations, doors, backgroundImages, enemies, blocks, level)
    }

    requestAnimationFrame(animate);
}

setInterval(function () {
    socket.emit("playerData", {
        positionY: player.position.y,
        scrollOffset: scrollOffset,
        room: pageName
    })
}, 30);

animate()
canvas.style.display = 'unset'
controls(keys, player)