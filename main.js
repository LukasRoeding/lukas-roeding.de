const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

const gravity = 1;

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 30
        this.height = 30
    }

    draw() {
        context.fillStyle = 'red'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y;

        if(this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }
        
    }
}

const player = new Player();
player.update();

console.log(player)
function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0,0, canvas.width, canvas.height);
    player.update();
}

animate()