export class Player {
    constructor(gravity, context, canvas) {
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
        this.gravity = gravity
        this.context = context
        this.canvas = canvas
    }

    draw() {
        this.context.fillStyle = 'red'
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y;

        if(this.position.y + this.height + this.velocity.y <= this.canvas.height) {
            this.velocity.y += this.gravity;
        } else {
            this.velocity.y = 0;
        }
        
    }
}