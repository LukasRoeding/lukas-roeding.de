import { Platform } from "../entities/platform.js";
import { Image } from "../entities/image.js";
import { Information } from "../entities/information.js";
import { createImage } from "./createImage.js";
import { Door } from "../entities/door.js";

export function init(context, canvas, level, platforms, images, informations, doors) {

    level.platforms.forEach(platform => {
        const platformImage = createImage(platform.source)
        platformImage.onload = function() {
            platforms.push(new Platform({x:platform.x, y:platform.y}, context, canvas, platform.id, platformImage , platform.width, platform.height))
        } 
    })

    for (const image of level.images) {
        const createdImage = createImage(image.source)
        createdImage.onload = function() {
            images.push(new Image({x:image.x, y:image.y}, context, canvas, image.id, createdImage, image.w, image.h, image.id))
        }
    }

    const informationImage = createImage('../images/info.png')
    informationImage.onload = function() {
        level.informations.forEach(information => {
            informations.push(new Information({x:information.x, y:information.y}, context, canvas, information.id, informationImage, innerHeight / 20, innerHeight / 20, information.html, information.title, information.link))
        })
    }

    const doorImage = createImage('../images/door.png')
    doorImage.onload = function() {
        level.doors.forEach(door => {
            doors.push(new Door({x: door.x, y: door.y}, context, canvas, innerHeight / 10, innerHeight / 10, door.target, doorImage))
        })
    }

    function imagesLoaded() {
        console.log(level.images.length, images.length)
        if (level.platforms.length == platforms.length && level.images.length == images.length && level.informations.length== informations.length) {
            images.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
            platforms.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
            return
        } else {
            setTimeout(imagesLoaded, 10);
        }
    }
    imagesLoaded()
}

