import { Entity } from "./entitiy.js"

export class Image extends Entity {
    constructor(position, context, canvas, id, image, width, height) {
        super({x:position.x, y:position.y}, width, height, context, canvas, id)
        this.image = image
        this.offscreenCanvas = document.createElement('canvas');
        this.offscreenCanvas.width = width;
        this.offscreenCanvas.height = height;
        const ctx = this.offscreenCanvas.getContext("2d");
        ctx.drawImage(this.image, 0, 0, this.width, this.height)  
    }

    draw() {
        if (this.position.x <= innerWidth || this.position.x + this.width >= 0) {
          this.context.drawImage(this.offscreenCanvas, this.position.x, this.position.y)  
        }
    }
}