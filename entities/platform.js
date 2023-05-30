import { Entity } from "./entitiy.js"

export class Platform extends Entity {
    constructor(position, context, canvas) {
        super({x:position.x, y:position.y}, 200, 20, context, canvas)
    }

    draw() {
        this.context.fillStyle = 'blue'
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}