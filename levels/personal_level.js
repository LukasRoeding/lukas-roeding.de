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
                x: height - height / 5,
                y: height - height / 1.6,
                html:   "<p>Vom 01.09.2021 - 20.01.2023 war ich ein Azubi für den Fachinformatiker für Anwendungsentwicklung.</p>" + 
                        '<p>Die "Regelstudienzeit" beträgt 3 Jahre, ich schaffte es die Ausbildung in 16 Monaten und 20 Tagen zu absolvieren.</p>' +
                        '<p>Mein Abschlussprojekt lautete: Typo3 Nuxt 3 Skeleton.</p>' +
                        '<p>Die Abschlussnote der Berufsschule war eine 2,0 (Zwischennote 1,25, bin gegen Ende nicht mehr hingegangen, weil ich tatsächlich was lernen wollte) und meine Abschlussnote der IHK war eine 3,7.</p>' +
                        '<p>Leider litt meine Abschlussnote der IHK unter dem Fakt, dass ich 100% der Prüfungen in 4 Monaten geschrieben habe, während ich gleichzeitig umgezogen bin.</p>' + 
                        '<p>Ich bereue das Verkürzen aber nicht, da man in der Berufsschule nicht wirklich was lernt und die IHK fast nichts sinnvolles prüft.</p>',
                title: 'Fachinformatiker für Anwendungsentwicklung',
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
                x: height - height / 8 - 3,
                y: height - height / 1.6,
                w: height * 0.375,
                h: height / 5,
                source: '../images/education/ihk.jpg'
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
                speed: 10
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
                speed: 10
            },
            {
                id: 2,
                x: height * 0.75 + 2,
                y: height - height / 4 - height / 6 - height / 20,
                w: height / 20,
                h: height / 20,
                sprites: {
                    run: {
                        left: createImage('../images/enemies/snail_run_left.png'),
                        right: createImage('../images/enemies/snail_run_right.png')
                    }
                },
                range: {
                    leftX: height * 0.75,
                    rightX: height * 1.2,
                },
                speed: 10
            }
        ],
        platforms: [              
            {
                id: 1,
                x: height - height / 4 - 2,
                y: height - height / 4 - height / 6,
                height: height / 4,
                width: height / 2,
                source: '../images/platformSmallTall.png'
            },      
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