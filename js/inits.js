import { Platform } from "../entities/platform.js";
import { Image } from "../entities/image.js";
import { Information } from "../entities/information.js";
import { createImage } from "./createImage.js";

export function init(context, canvas, level, platforms, images, informations) {

    level.platforms.forEach(platform => {
        const platformImage = createImage(platform.source)
        platformImage.onload = function() {
            platforms.push(new Platform({x:platform.x, y:platform.y}, context, canvas, platformImage , platform.width, platform.height))
        } 
    })

    for (const image of level.images) {
        const createdImage = createImage(image.source)
        createdImage.onload = function() {
            images.push(new Image({x:image.x, y:image.y}, context, canvas, createdImage, image.w, image.h, image.id))
        }
    }

    const informationImage = createImage('../images/info.png')
    informationImage.onload = function() {
        level.informations.forEach(information => {
            informations.push(new Information({x:information.x, y:information.y}, context, canvas, informationImage, 40, 40, information.html))
        })
    }

    function imagesLoaded() {
        if (level.platforms.length > platforms.length && level.images.length > images.length && level.informations.length > informations.length) {
            setTimeout(imagesLoaded, 10);
        } else {
            images.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
        }
    }
    imagesLoaded()
}

