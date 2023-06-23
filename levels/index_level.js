export function level(height) {
    return {
        informations: [
            {
                id: 1,
                x: height / 2 - innerHeight / 20,
                y: height - height / 3,
                html: "<p>Willkommen auf meiner Website. Mein Name ist Lukas Röding und ich bin ein Webentwickler aus'm Pott.</p>" +
                "<p>Die Website soll dir einen Überblick über meine Fähigkeiten geben und ein wenig über mich persönlich erzählen.</p>" + 
                "<p>Wenn du einfach ein kleines Sidescroller-Spiel spielen willst, überspring die ersten drei Türen und geh direkt durch die letzte.</p>" +
                "<p>Du kannst durch Türen gehen, indem du Enter oder e drückst.</p>" +
                "<p>Drück unten auf den Button oder auf Esc um das Modal zu schließen.</p>" +
                "<p>Hier findest du Credits zu allen Assets und Audiodateien, die ich auf der Seite genutzt habe: <a href='/credits.html' target='__blank'>lukas-roeding.de/credits.html</a></p>" +
                "<p>PS: Schnecken und blaue Vögel sind böse.</p>",
                title: 'Moin!',
                link: ''
            }
        ],
        doors: [
            {
                x: height + height / 20,
                y: height - height / 5 ,
                target: '/experience.html'
            },
            {
                x: height + height / 2 - height / 10 - height / 20,
                y: height - height / 5,
                target: '/education.html'
            },
            {
                x: height + height / 2 + height / 20 + height / 8,
                y: height - height / 5,
                target: '/personal.html'
            },
            {
                x: height * 2 - height / 10 - height / 20 + height / 8,
                y: height - height / 5,
                target: '/fun.html'
            }
        ],
        images: [              
            {
                id: 0,
                x: height / 2,
                y: height - height / 10 - height / 2,
                w: height / 2,
                h: height / 2,
                source: '../images/tree.png'
            },      
            {
                id: 1,
                x: height / 100 + height / 8,
                y: height / 2,
                w: height / 4,
                h: height / 4,
                source: '../images/wasd.png'
            },

            {
                id: 2,
                x: height + height / 20,
                y: height - height / 4 - height / 6,
                w: height / 10,
                h: height / 10,
                source: '../images/experience.png'
            },
            {
                id: 3,
                x: height + height / 2 - height / 10 - height / 15,
                y: height - height / 4 - height / 6.2,
                w: height / 8,
                h: height / 10,
                source: '../images/education.png'
            },
            {
                id: 4,
                x: height + height / 2 + height / 20 + height / 8,
                y: height - height / 4 - height / 6,
                w: height / 10,
                h: height / 10,
                source: '../images/personal.png'
            },
            {
                id: 5,
                x: height * 2 - height / 10 - height / 20 + height / 8,
                y: height - height / 4  - height / 6,
                w: height / 10,
                h: height / 10,
                source: '../images/fun.png'
            }, 
            {
                id: 6,
                x: height * 2.15,
                y: height - height / 10 - height / 2,
                w: height / 2,
                h: height / 2,
                source: '../images/pine.png'
            },    
            {
                id: 7,
                x: height * 2.8,
                y: height - height / 10 - height / 12,
                w: height / 16,
                h: height / 12,
                source: '../images/sign.png'
            },    
            {
                id: 8,
                x: height + height / 6.7,
                y: height - height / 4 - height / 10,
                w: height / 5,
                h: height / 10,
                source: '../images/bush.png'
            },
            {
                id: 9,
                x: height + height / 1.1,
                y: height - height / 10 - height / 20,
                w: height / 20,
                h: height / 20,
                source: '../images/shrooms.png'
            },
            {
                id: 10,
                x: height + height / 1.25,
                y: height - height / 30 - height / 4,
                w: height / 20,
                h: height / 30,
                source: '../images/rock.png'
            },  
        ],
        backgroundImages: [
            {
                id: 1,
                x: -1,
                y: -2,
                w: height * 4,
                h: height + 2,
                source: '../images/back.png'
            },
        ],
        enemies: [],
        platforms: [        
            {
                id: 1,
                x: height - 2,
                y: height - height / 4,
                height: height / 4,
                width: height / 2,
                source: '../images/platformSmallTall.png'
            },
            {
                id: 2,
                x: height + height / 2 + height / 8 - 4,
                y: height - height / 4,
                height: height / 4,
                width: height / 2,
                source: '../images/platformSmallTall.png'
            },
            {
                id: 3,
                x: -1,
                y: height - height / 10,
                height: height / 10,
                width: height,
                source: '../images/platform.png'
            },
            {
                id: 4,
                x: height - 3,
                y: height - height / 10,
                height: height / 10,
                width: height,
                source: '../images/platform.png'
            },
            {
                id: 5,
                x: height * 2 - 6,
                y: height - height / 10,
                height: height / 10,
                width: height,
                source: '../images/platform.png'
            },

        ],
        blocks: []
    }
}