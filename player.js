import { Entity } from "./entitiy.js"
export class Player extends Entity {
    constructor(gravity, context, canvas) {
        super({x: 100,y: 100},30,30, context, canvas)
        this.velocity = {
            x: 0,
            y: 1
        }
        this.gravity = gravity
        this.right = false,
        this.left = false
    }

    draw() {
        this.context.fillStyle = 'red'
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if(this.position.y + this.height + this.velocity.y <= this.canvas.height) {
            this.velocity.y += this.gravity;
        } else {
            this.velocity.y = 0;
        }

        if(this.right && this.position.x < innerWidth / 2 - this.width / 2 ) {
            this.velocity.x = 5
        } else if(this.left && this.position.x > 100) {
            this.velocity.x = -5
        } else {
            this.velocity.x = 0
        }
    }

    up() {
        this.velocity.y -= 20
    }

}