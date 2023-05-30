import { Entity } from "./entitiy.js"

export class Platform extends Entity {
    constructor(position, context, canvas, image) {
        super({x:position.x, y:position.y}, image.width, image.height, context, canvas)
        this.image = image
    }

    draw() {
        this.context.drawImage(this.image, this.position.x, this.position.y)
    }
}