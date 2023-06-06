import { Entity } from "./entitiy.js"

export class Player extends Entity {
    constructor(gravity, context, canvas) {
        super({x: 100, y: 100}, innerHeight / 20, innerHeight / 20, context, canvas)
        this.velocity = {
            x: 0,
            y: 1
        }
        this.gravity = gravity
        this.jumped = false
    }

    draw() {
        this.context.fillStyle = 'red'
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {
            this.velocity.y += this.gravity;
        }
    }

    up() {
        if (this.jumped == false && this.velocity.y == this.gravity) {
            this.velocity.y -= innerHeight / 50
            this.jumped = true  
        }
    }
}