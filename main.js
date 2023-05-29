const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext('2d');

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.width = 100
        this.height = 100
    }

    draw() {
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const player = new Player();
player.draw();

console.log(player)