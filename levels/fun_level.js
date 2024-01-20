import { createImage } from "../js/createImage.js";

export function level(height) {
    return {
        informations: [
            {
                id: 1,
                x: height * 3.75,
                y: height - height / 3,
                html: "<p>Glückwunsch! Du hast es ins Ziel geschafft!</p>" +
                "<p>Das wars fürs Erste mit der Website. Ich werde bestimmt in der Zukunft weiter dran arbeiten, oder ein reines Sidescroller-Spiel entwickeln.</p>" + 
                "<p>Wenn dir gefallen hat, was du hier gesehen hast, melde dich doch bei mir.</p>" +
                "<p>Meine Email-Adresse lautet: <a href='mailto:email@lukas-roeding.de'>email@lukas-roeding.de</a></p>" +
                "<p>Wenn du durch die nächste Tür gehst, landest du wieder am Ausgangslevel.</p>",
                title: 'Fertig',
                link: ''
            }
        ],
        doors: [
            {
                x: 100,
                y: height - height / 5,
                target: 'back'
            },
            {
                x: height * 4.25,
                y: height - height / 5,
                target: '/'
            }
        ],
        images: [                                        
        ],
        backgroundImages: [
            {
                id: 1,
                x: -255,
                y: -2,
                w: height * 4,
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
            },
            {
                id: 3,
                x: height * 2.6,
                y: height - height / 1.6 - height / 20,
                w: height / 20,
                h: height / 20,
                sprites: {
                    run: {
                        left: createImage('../images/enemies/snail_run_left.png'),
                        right: createImage('../images/enemies/snail_run_right.png')
                    }
                },
                range: {
                    leftX: height * 2.6,
                    rightX: height * 2.8 - height / 20,
                },
                speed: 5,
                spriteWidth: 38,
                spriteHeight: 24,
                spriteFrames: 9
            }
        ],
        platforms: [              
            {
                id: 1,
                x: -height / 2,
                y: height - height / 10,
                height: height / 10,
                width: height,
                source: '../images/platform.png'
            },
            {
                id: 2,
                x: height * 1.5,
                y: height - height / 5,
                height: height / 5,
                width: height / 2,
                source: '../images/platformSmallTall.png'
            },
            {
                id: 3,
                x: height * 3.6,
                y: height - height / 10,
                height: height / 10,
                width: height,
                source: '../images/platform.png'
            },
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
            {
                id: 4,
                x: height * 2.6,
                y: height - height / 1.6,
                height: height / 5,
                width: height / 5,
                source: '../images/block.png'
            },
            {
                id: 5,
                x: height * 2.4,
                y: height - height / 2,
                height: height / 20,
                width: height / 20,
                source: '../images/block.png'
            },
            {
                id: 6,
                x: height * 2.2,
                y: height - height / 2.5,
                height: height / 20,
                width: height / 20,
                source: '../images/block.png'
            },
            {
                id: 6,
                x: height * 2,
                y: height - height / 3.3,
                height: height / 20,
                width: height / 20,
                source: '../images/block.png'
            },
            {
                id: 8,
                x: height * 3.2,
                y: height - height / 10,
                height: height / 20,
                width: height / 20,
                source: '../images/block.png'
            },
        ]
    }
}