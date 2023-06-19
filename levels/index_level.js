export function level(height) {
    return {
        informations: [
            {
                id: 1,
                x: height / 2,
                y: height - height / 3,
                html: "<p>auf meiner Website. Mein Name ist Lukas Röding und ich bin ein Webentwickler ausm Pott.</p>" +
                "<p>Die Website soll Ihnen einen Überblick über meine Fähigkeiten geben und ein wenig über mich persönlich erzählen.</p>" + 
                "<p>Falls Ihnen das zu langweilig ist, überspringen Sie einfach die ersten drei Türen und gehen Sie direkt durch die letzte. Dort gelangen Sie in ein kleines Sidescroller-Spiel.</p>" +
                "<p>Sie können durch Türen gehen, indem Sie Enter drücken, wenn Sie sich auf einer Tür befinden.</p>",
                title: 'Willkommen...',
                link: ''
            }
        ],
        doors: [
            {
                x: height + height / 20,
                y: height - height / 4 - height / 10,
                target: '/experience.html'
            },
            {
                x: height + height / 2 - height / 10 - height / 20,
                y: height - height / 4 - height / 10,
                target: '/education.html'
            },
            {
                x: height + height / 2 + height / 20 + height / 8,
                y: height - height / 4 - height / 10,
                target: '/personal.html'
            },
            {
                x: height * 2 - height / 10 - height / 20 + height / 8,
                y: height - height / 4 - height / 10,
                target: '/fun.html'
            }
        ],
        images: [        
            {
                id: 1,
                x: 100,
                y: height / 2,
                w: height / 4,
                h: height / 4,
                source: '../images/wasd.png'
            },
            {
                id: 2,
                x: height + height / 20 - height / 80,
                y: height - height / 4 - height / 10 - height / 6,
                w: height / 8,
                h: height / 8,
                source: '../images/experience.png'
            },
            {
                id: 3,
                x: height + height / 2 - height / 10 - height / 20 - height / 80,
                y: height - height / 4 - height / 10 - height / 6,
                w: height / 8,
                h: height / 8,
                source: '../images/education.png'
            },
            {
                id: 4,
                x: height + height / 2 + height / 20 - height / 120 + height / 8,
                y: height - height / 4 - height / 10 - height / 6,
                w: height / 9,
                h: height / 9,
                source: '../images/personal.png'
            },
            {
                id: 5,
                x: height * 2 - height / 10 - height / 20 - height / 80 + height / 8,
                y: height - height / 4 - height / 10 - height / 6,
                w: height / 8,
                h: height / 9,
                source: '../images/fun.png'
            },
        ],
        backgroundImages: [
            {
                id: 1,
                x: -1,
                y: -2,
                w: height * 10,
                h: height + 4,
                source: '../images/background.png'
            },
            {
                id: 2,
                x: 0,
                y: 100,
                w: height * 12,
                h: height,
                source: '../images/hills.png'
            },
        ],
        enemies: [
            {
                x: 100,
                y: 100,
                type: 'violett_mushroom'
            }
        ],
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

        ]
    }
}