import { Entity } from "./entitiy.js"

export class Platform extends Entity {
    constructor(position, context, canvas, image, width, height) {
        super({x:position.x, y:position.y}, width, height, context, canvas)
        this.image = image
    }

    draw() {
        if (this.position.x <= innerWidth || this.position.x + this.width >= 0) {
            this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }
}