export const level = {
    informations: [
        {
            id: 1,
            x: 400,
            y: innerHeight - 200,
            html: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
            title: 'Willkommen',
            link: ''
        }
    ],
    doors: [
        {
            x: 680,
            y: innerHeight - 190,
            target: '/experience.html'
        },
        {
            x: 880,
            y: innerHeight - 190,
            target: '/education.html'
        },
        {
            x: 1080,
            y: innerHeight - 190,
            target: '/personal.html'
        },        
        {
            x: 1280,
            y: innerHeight - 190,
            target: '/fun.html'
        }
    ],
    images: [
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
        {
            id: 3,
            x: 100,
            y: innerHeight - 300,
            w: 200,
            h: 200,
            source: '../images/wasd.png'
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
            x: -1,
            y: innerHeight - 40,
            height: 40,
            width: 400,
            source: '../images/platform.png'
        },
        {
            id: 2,
            x: 398,
            y: innerHeight - 40,
            height: 40,
            width: 400,
            source: '../images/platform.png'
        },
        {
            id: 3,
            x: 596,
            y: innerHeight - 40,
            height: 40,
            width: 400,
            source: '../images/platform.png'
        },
        {
            id: 4,
            x: 1000-5,
            y: innerHeight - 40,
            height: 40,
            width: 400,
            source: '../images/platform.png'
        },
        {
            id: 4,
            x: 1400-6,
            y: innerHeight - 40,
            height: 40,
            width: 400,
            source: '../images/platform.png'
        },
        {
            id: 5,
            x: 600-4,
            y: innerHeight - 140,
            height: 100,
            width: 200,
            source: '../images/platformSmallTall.png'
        },
        {
            id: 5,
            x: 800-6,
            y: innerHeight - 140,
            height: 100,
            width: 200,
            source: '../images/platformSmallTall.png'
        },
        {
            id: 6,
            x: 1000-9,
            y: innerHeight - 140,
            height: 100,
            width: 200,
            source: '../images/platformSmallTall.png'
        },
        {
            id: 6,
            x: 1200-11,
            y: innerHeight - 140,
            height: 100,
            width: 200,
            source: '../images/platformSmallTall.png'
        },
    ]
}