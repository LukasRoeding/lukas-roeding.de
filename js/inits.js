import { Platform } from "../entities/platform.js";
import { Image } from "../entities/image.js";
import { Information } from "../entities/information.js";
import { createImage } from "./createImage.js";

export function init(context, canvas, level, platforms, images, informations) {

    const platformImage = createImage('../images/platform.png')
    platformImage .onload = function() {
        level.platforms.forEach(platform => {
            platforms.push(new Platform({x:platform.x, y:platform.y}, context, canvas, platformImage , 400, 40))
        })
    }

    level.images.forEach(image => {
        const createdImage = createImage(image.source)
        createdImage.onload = function() {
            images.push(new Image({x:image.x, y:image.y}, context, canvas, createdImage, image.w, image.h))
        }
    })

    const informationImage = createImage('../images/info.png')
    informationImage.onload = function() {
        level.informations.forEach(information => {
            informations.push(new Information({x:information.x, y:information.y}, context, canvas, informationImage, 40, 40, information.html))
        })
    }
}

