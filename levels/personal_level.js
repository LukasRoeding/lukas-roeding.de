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
                html:   "<p>Aktuell ist mein größtes Hobby DnD. Ich bin meistens der Dungeon Master.</p>" + 
                        "<p>Auf dem Bild spiele ich mit alten Arbeitskollegen, nach der Arbeit, im Konferenzraum.</p>" +
                        "<p>Es würde mich sehr freuen, wenn es sowas auch bei meinem neuen Job geben würde(Spieleabende generell, oder gerne auch DnD).</p>",
                title: 'Dungeons and Dragons / Brettspiele',
                link: ''
            },
            {
                id: 3,
                x: height + height / 2 - height / 20 - 4,
                y: height - height / 2,
                html:   "<p>Mein zweites großes Hobby ist Programmieren.</p>" + 
                        "<p>Aktuell liebe ich es Spiele in Javascript zu programmieren, wobei ich so langsam auch den Drang verspühre, mal mit C++ rumzuspielen.</p>" +
                        "<iframe style='width: 100%; height: 100%' src='https://3d-snake.lukas-roeding.de/'></iframe>",
                title: 'Programmieren',
                link: 'https://github.com/LukasRoeding/lukas-roeding.de'
            },
            {
                id: 4,
                x: height * 3 - 1,
                y: height - height / 2,
                html:   "<p>Seit 2015 spende ich regelmäßig Blutplasma. Auf dem Bild habe ich zu meiner 100. Spende eine Urkunde bekommen.</p>" + 
                "<p>Leider finde ich, dass das Bild sehr doof aussieht und ich gerne ein besseres hätte. Hoffentlich bekomme ich das, wenn ich dir 200. Spende geknackt habe. Aktuell bin ich bei 164.</p>",
                title: 'Blutspenden',
                link: ''
            },
            {
                id: 5,
                x: height * 4 - height / 20 - 1,
                y: height - height / 2,
                html:   "<p>Mein primäres ehrenamtliches Engagement liegt bei foodsharing.</p>" + 
                "<p>Dort bin ich seit 2020 im Vorstand und auch Gründungsmitglied des Vereins. foodsharing hat vorher schon in Dortmund existiert, aber nicht als eingetragener Verein.</p>" +
                "<p>Mitlerweile sind wir fast 500 Vereinsmitglieder und kooperieren mit 30 Betrieben in Dortmund.</p>" + 
                "<p>Zusätzlich zur generellen Vorstandsarbeit kümmere ich mich um die Finanzen und Website des Vereins.</p>" +
                "<p>Wir entwickeln gerade unsere eigene Vereinsverwaltungs-Software, da vorhandene Produkte sehr teuer sind und unseren Use Case nicht abdecken.</p>",
                title: 'foodsharing Dortmund e.V.',
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
                x: height * 4.2,
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
                x: height - 4,
                y: height - height / 1.25,
                w: height * 0.375,
                h: height / 2,
                source: '../images/personal/3D_Snake.png'
            }, 
            {
                id: 3,
                x: height * 3.125 - 4,
                y: height - height / 1.25,
                w: height * 0.375,
                h: height * 0.375,
                source: '../images/personal/Blutspenden.png'
            }, 
            {
                id: 4,
                x: height * 3.5 - 5,
                y: height - height / 1.25,
                w: height * 0.375,
                h: height * 0.375,
                source: '../images/personal/foodsharing.png'
            },                           
            {
                id: 5,
                x: height * 4.2,
                y: height - height / 4 - height / 8,
                w: height / 10,
                h: height / 10,
                source: '../images/fun.png'
            },              
            {
                id: 6,
                x: height * 1.5,
                y: height - height * 0.375 - height / 10,
                w: height * 0.375,
                h: height * 0.375,
                source: '../images/pine.png'
            },     
            {
                id: 7,
                x: height * 2.5,
                y: height - height * 0.375 - height / 10,
                w: height * 0.375,
                h: height * 0.375,
                source: '../images/tree.png'
            },    
        ],
        backgroundImages: [
            {
                id: 1,
                x: -10,
                y: -2,
                w: height * 5,
                h: height + 2,
                source: '../images/back.png'
            },
        ],
        enemies: [
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
            },
            {
                id: 2,
                x: height * 2.05,
                y: height - height / 10,
                w: height / 20,
                h: height / 20,
                sprites: {
                    run: {
                        left: createImage('../images/enemies/bird_flying_left.png'),
                        right: createImage('../images/enemies/bird_flying_right.png')
                    }
                },
                range: {
                    leftX: height * 2,
                    rightX: height * 2.45 
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
                id: 3,
                x: height * 3,
                y: height - height / 4,
                height: height / 4,
                width: height / 2,
                source: '../images/platformSmallTall.png'
            },
            {
                id: 3,
                x: height * 3.5 - 1,
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
            {
                id: 9,
                x: height * 2.5,
                y: height - height / 10,
                height: height / 10,
                width: height,
                source: '../images/platform.png'
            },
            {
                id: 10,
                x: height * 3.5 - 1,
                y: height - height / 10,
                height: height / 10,
                width: height,
                source: '../images/platform.png'
            },
        ],
        blocks: []
    }
}