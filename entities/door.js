import { Entity } from "./entitiy.js";

export class Door extends Entity {
    constructor(position, context, canvas, width, height, link) {
        super({x:position.x, y:position.y}, width, height, context, canvas)
        this.link = link
    }

    draw() {
        this.context.fillStyle = 'brown'
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height) 
    }

    open() {
        window.open(this.link,"_self")
    }
}