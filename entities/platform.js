import { Entity } from "./entitiy.js"

export class Platform extends Entity {
    constructor(position, context, canvas, id, image, width, height) {
        super({x:position.x, y:position.y}, width, height, context, canvas, id)
        this.image = image
    }

    draw() {
        this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}