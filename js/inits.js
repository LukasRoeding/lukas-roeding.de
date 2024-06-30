import { Platform } from "../entities/platform.js";
import { Image } from "../entities/image.js";
import { Information } from "../entities/information.js";
import { createImage } from "./createImage.js";
import { Door } from "../entities/door.js";
import { Enemy } from "../entities/enemy.js";

export function init(context, canvas, level, platforms, images, informations, doors, backgroundImages, enemies, blocks, height) {

    level.platforms.forEach(platform => {
        const platformImage = createImage(platform.source)
        platformImage.onload = function() {
            platforms.push(new Platform({x:platform.x + canvas.width / 2 - canvas.height / 15, y:platform.y}, context, canvas, platform.id, platformImage , platform.width, platform.height))
        } 
    })

    for (const image of level.images) {
        const createdImage = createImage(image.source)
        createdImage.onload = function() {
            images.push(new Image({x:image.x + canvas.width / 2 - canvas.height / 15, y:image.y}, context, canvas, image.id, createdImage, image.w, image.h, image.id))
        }
    }

    for (const image of level.backgroundImages) {
        const createdImage = createImage(image.source)
        createdImage.onload = function() {
            backgroundImages.push(new Image({x:image.x - canvas.width / 2 - canvas.height / 15, y:image.y}, context, canvas, image.id, createdImage, image.w, image.h, image.id))
        }
    }

    const informationImage = createImage('../images/info.png')
    informationImage.onload = function() {
        level.informations.forEach(information => {
            informations.push(new Information({x:information.x + canvas.width / 2 - canvas.height / 15, y:information.y}, context, canvas, information.id, informationImage, height / 20, height / 20, information.html, information.title, information.link))
        })
    }

    const blockImage = createImage('../images/block.png')
    blockImage.onload = function() {
        level.blocks.forEach(block => {
            blocks.push(new Platform({x:block.x + canvas.width / 2 - canvas.height / 15, y:block.y}, context, canvas, block.id, blockImage, block.width, block.height))
        })
    }

    const doorImage = createImage('../images/door.png')
    doorImage.onload = function() {
        level.doors.forEach(door => {
            doors.push(new Door({x: door.x + canvas.width / 2 - canvas.height / 15, y: door.y}, context, canvas, height / 10, height / 10, door.target, doorImage))
        })
    }

    for (const enemy of level.enemies) {
        enemies.push(new Enemy({x: enemy.x + canvas.width / 2 - canvas.height / 15, y: enemy.y}, context, canvas, enemy.id, enemy.w, enemy.h, enemy.sprites, enemy.range, enemy.speed, enemy.spriteHeight, enemy.spriteWidth, enemy.spriteFrames))
    }
    function imagesLoaded() {
        if (level.platforms.length == platforms.length && 
            level.images.length == images.length && 
            level.backgroundImages.length == backgroundImages.length) {
            images.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
            platforms.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
            backgroundImages.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
            enemies.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
            return
        } else {
            setTimeout(imagesLoaded, 10);
        }
    }
    imagesLoaded()
}

