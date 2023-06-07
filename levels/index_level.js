export const level = {
    informations: [
        {
            id: 1,
            x: innerHeight / 2,
            y: innerHeight - innerHeight / 3,
            html: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
            title: 'Willkommen',
            link: ''
        }
    ],
    doors: [
        {
            x: innerHeight + innerHeight / 20,
            y: innerHeight - innerHeight / 4 - innerHeight / 10,
            target: '/experience.html'
        },
        {
            x: innerHeight + innerHeight / 2 - innerHeight / 10 - innerHeight / 20,
            y: innerHeight - innerHeight / 4 - innerHeight / 10,
            target: '/education.html'
        },
        {
            x: innerHeight + innerHeight / 2 + innerHeight / 20,
            y: innerHeight - innerHeight / 4 - innerHeight / 10,
            target: '/personal.html'
        },
        {
            x: innerHeight * 2 - innerHeight / 10 - innerHeight / 20,
            y: innerHeight - innerHeight / 4 - innerHeight / 10,
            target: '/fun.html'
        }
    ],
    images: [
        {
            id: 3,
            x: 100,
            y: innerHeight / 2,
            w: innerHeight / 4,
            h: innerHeight / 4,
            source: '../images/wasd.png'
        },
    ],
    backgroundImages: [
        {
            id: 1,
            x: -1,
            y: -2,
            w: innerWidth * 3,
            h: innerHeight + 4,
            source: '../images/background.png'
        },
        {
            id: 2,
            x: 0,
            y: 100,
            w: innerHeight * 12,
            h: innerHeight,
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
            x: innerHeight,
            y: innerHeight - innerHeight / 4,
            height: innerHeight / 4,
            width: innerHeight / 2,
            source: '../images/platformSmallTall.png'
        },
        {
            id: 2,
            x: innerHeight + innerHeight / 2 - 3,
            y: innerHeight - innerHeight / 4,
            height: innerHeight / 4,
            width: innerHeight / 2,
            source: '../images/platformSmallTall.png'
        },
        {
            id: 3,
            x: -1,
            y: innerHeight - innerHeight / 10,
            height: innerHeight / 10,
            width: innerHeight,
            source: '../images/platform.png'
        },
        {
            id: 4,
            x: innerHeight - 3,
            y: innerHeight - innerHeight / 10,
            height: innerHeight / 10,
            width: innerHeight,
            source: '../images/platform.png'
        },
        {
            id: 5,
            x: innerHeight * 2 - 6,
            y: innerHeight - innerHeight / 10,
            height: innerHeight / 10,
            width: innerHeight,
            source: '../images/platform.png'
        },

    ]
}