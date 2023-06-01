import { Entity } from "./entitiy.js"

export class Color extends Entity {
    constructor(position, width, height, context, canvas, color, background) {
        super({x:position.x, y:position.y}, width, height, context, canvas)
        this.color = color
        this.background = background
    }

    draw() {
        this.context.fillStyle = color
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}