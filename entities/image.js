import { Entity } from "./entitiy.js"

export class Image extends Entity {
    constructor(position, context, canvas, image, width, height, id) {
        super({x:position.x, y:position.y}, width, height, context, canvas)
        this.id = id
        this.image = image
        this.offscreenCanvas = document.createElement('canvas');
        this.offscreenCanvas.width = innerWidth;
        this.offscreenCanvas.height = innerHeight;
        const ctx = this.offscreenCanvas.getContext("2d");
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)  
    }

    draw() {
        if (this.position.x <= innerWidth || this.position.x + this.width >= 0) {
          this.context.drawImage(this.offscreenCanvas, this.position.x, this.position.y)  
        }
    }
}