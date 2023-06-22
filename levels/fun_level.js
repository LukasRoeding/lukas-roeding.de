import { createImage } from "../js/createImage.js";

export function level(height) {
    return {
        informations: [
        ],
        doors: [
            {
                x: 100,
                y: height - height / 5,
                target: 'back'
            },
            {
                x: height * 1.8,
                y: height - height / 5,
                target: '/'
            },
        ],
        images: [                                        
        ],
        backgroundImages: [
            {
                id: 1,
                x: -1,
                y: -2,
                w: height * 4.5,
                h: height + 2,
                source: '../images/back.png'
            },
        ],
        enemies: [
            {
                id: 2,
                x: height / 2 + 2,
                y: height - height / 4 - height / 10,
                w: height / 20,
                h: height / 20,
                sprites: {
                    run: {
                        left: createImage('../images/enemies/bird_flying_left.png'),
                        right: createImage('../images/enemies/bird_flying_right.png')
                    }
                },
                range: {
                    leftX: height / 2,
                    rightX: height * 1.45,
                },
                speed: 2,
                spriteWidth: 32,
                spriteHeight: 32,
                spriteFrames: 8
            },
            {
                id: 2,
                x: height,
                y: height - height / 4 - height / 10,
                w: height / 20,
                h: height / 20,
                sprites: {
                    run: {
                        left: createImage('../images/enemies/bird_flying_left.png'),
                        right: createImage('../images/enemies/bird_flying_right.png')
                    }
                },
                range: {
                    leftX: height / 2,
                    rightX: height * 1.45,
                },
                speed: 2,
                spriteWidth: 32,
                spriteHeight: 32,
                spriteFrames: 8
            }
        ],
        platforms: [              
            {
                id: 4,
                x: -height / 2,
                y: height - height / 10,
                height: height / 10,
                width: height,
                source: '../images/platform.png'
            },
            {
                id: 4,
                x: height * 1.5,
                y: height - height / 10,
                height: height / 10,
                width: height,
                source: '../images/platform.png'
            }
        ],
        blocks: [
            {
                id: 1,
                x: height * 0.75,
                y: height - height / 10,
                height: height / 20,
                width: height / 20,
                source: '../images/block.png'
            },
            {
                id: 2,
                x: height * 1,
                y: height - height / 10,
                height: height / 20,
                width: height / 20,
                source: '../images/block.png'
            },
            {
                id: 3,
                x: height * 1.25,
                y: height - height / 10,
                height: height / 20,
                width: height / 20,
                source: '../images/block.png'
            },
        ]
    }
}