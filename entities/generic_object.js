import { Entity } from "./entitiy.js"

export class GenericObject extends Entity {
    constructor(position, context, canvas, image, width, height) {
        super({x:position.x, y:position.y}, width, height, context, canvas)
        this.image = image
    }

    draw() {
        this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}