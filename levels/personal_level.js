import { createImage } from "../js/createImage.js";

export function level(height) {
    return {
        informations: [
            {
                id: 1,
                x: height / 2 - height / 5,
                y: height - height / 3,
                html:   "<p>In diesem Level erzähle ich ein bischen zu meiner Person.</p>" + 
                        "<p>Welche Hobbies habe ich? Was mache ich ehrenamtlich? Wie ticke ich als Mensch?</p>",
                title: 'Über mich',
                link: ''
            },
            {
                id: 2,
                x: height - height / 2,
                y: height - height / 2,
                html:   "<p>Aktuell ist mein größtes Hobby DnD. Ich bin meistens der Dungeon Master(oft der größte Nerd im Raum).</p>" + 
                        "<p>Auf dem Bild spiele ich mit alten Arbeitskollegen, nach der Arbeit, im Konferenzraum.</p>" +
                        "<p>Es würde mich sehr freuen, wenn es sowas auch bei meinem neuen Job geben würde(Spieleabende generell, oder gerne auch DnD).</p>",
                title: 'Dungeons and Dragons / Brettspiele',
                link: ''
            },
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
                target: '/fun.html'
            },
        ],
        images: [    
            {
                id: 1,
                x: height - height * 0.375 - 3,
                y: height - height / 1.25,
                w: height * 0.375,
                h: height / 2,
                source: '../images/personal/DnD.jpg'
            },                                        
            {
                id: 2,
                x: height * 1.8,
                y: height - height / 4 - height / 8,
                w: height / 10,
                h: height / 10,
                source: '../images/fun.png'
            },  
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
                id: 0,
                x: height / 2 + 2,
                y: height - height / 4 - height / 20,
                w: height / 20,
                h: height / 20,
                sprites: {
                    run: {
                        left: createImage('../images/enemies/snail_run_left.png'),
                        right: createImage('../images/enemies/snail_run_right.png')
                    }
                },
                range: {
                    leftX: height / 2,
                    rightX: height - height / 20,
                },
                speed: 10,
                spriteWidth: 38,
                spriteHeight: 24,
                spriteFrames: 9
            },
            {
                id: 1,
                x: height / 2 - height / 8 + 2,
                y: height - height / 10 - height / 20,
                w: height / 20,
                h: height / 20,
                sprites: {
                    run: {
                        left: createImage('../images/enemies/snail_run_left.png'),
                        right: createImage('../images/enemies/snail_run_right.png')
                    }
                },
                range: {
                    leftX: height / 2 - height / 8,
                    rightX: height * 1.5 + height / 8 - height / 20,
                },
                speed: 10,
                spriteWidth: 38,
                spriteHeight: 24,
                spriteFrames: 9
            },
            {
                id: 2,
                x: height * 0.75 + 2,
                y: height - height / 4 - height / 6 - height / 20,
                w: height / 20,
                h: height / 20,
                sprites: {
                    run: {
                        left: createImage('../images/enemies/bird_flying_left.png'),
                        right: createImage('../images/enemies/bird_flying_right.png')
                    }
                },
                range: {
                    leftX: height * 0.75,
                    rightX: height * 1.2,
                },
                speed: 10,
                spriteWidth: 32,
                spriteHeight: 32,
                spriteFrames: 8
            }
        ],
        platforms: [              
            {
                id: 2,
                x: height / 2 - 2,
                y: height - height / 4,
                height: height / 4,
                width: height / 2,
                source: '../images/platformSmallTall.png'
            },
            {
                id: 3,
                x: height - 3,
                y: height - height / 4,
                height: height / 4,
                width: height / 2,
                source: '../images/platformSmallTall.png'
            },
            {
                id: 4,
                x: -2,
                y: height - height / 10,
                height: height / 10,
                width: height,
                source: '../images/platform.png'
            },
            {
                id: 5,
                x: height - 3,
                y: height - height / 10,
                height: height / 10,
                width: height,
                source: '../images/platform.png'
            },
        ]
    }
}