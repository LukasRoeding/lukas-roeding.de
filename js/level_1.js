export const level = {
    informations: [
        {
            x: 200,
            y: innerHeight - 200,
            html: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>'
        },
        {
            x: 500,
            y: innerHeight - 200,
            html: '<p>Test</p>'
        }
    ],
    doors: [
        {
            x: 1000,
            y: 1000,
            target: '/level_1'
        }
    ],
    images: [
        {
            x: -1,
            y: -2,
            w: innerHeight * 10,
            h: innerHeight + 4,
            source: '../images/background.png'
        },
        {
            x: 0,
            y: 0,
            w: innerHeight * 10,
            h: innerHeight,
            source: '../images/hills.png'
        }
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
            x: -1,
            y: innerHeight - 40,
            height: 40,
            width: 400,
            source: '../images/platform.png'
        },
        {
            x: 398,
            y: innerHeight - 40,
            height: 40,
            width: 400,
            source: '../images/platform.png'
        },
        {
            x: 596,
            y: innerHeight - 40,
            height: 40,
            width: 400,
            source: '../images/platform.png'
        },
        {
            x: 1300,
            y: innerHeight - 40,
            height: 40,
            width: 400,
            source: '../images/platform.png'
        },
        {
            x: 800-3,
            y: innerHeight - 140,
            height: 100,
            width: 200,
            source: '../images/platformSmallTall.png'
        },
        {
            x: 1300,
            y: innerHeight - 140,
            height: 100,
            width: 200,
            source: '../images/platformSmallTall.png'
        },
    ]
}