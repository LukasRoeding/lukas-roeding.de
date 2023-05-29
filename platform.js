import { Entity } from "./entitiy.js"

export class Platform extends Entity {
    constructor(context, canvas) {
        super({x:200, y:900}, 200, 20, context, canvas)
    }

    draw() {
        this.context.fillStyle = 'blue'
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}