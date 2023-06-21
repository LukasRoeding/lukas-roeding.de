import { Entity } from "./entitiy.js";

export class Door extends Entity {
    constructor(position, context, canvas, width, height, link, image) {
        super({x:position.x, y:position.y}, width, height, context, canvas)
        this.link = link
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

    open() {        
        var audio = new Audio('../audio/door.mp3');
        audio.play();
        setTimeout(() => {
            if (this.link === 'back') {
                history.back()
            } else {
               window.open(this.link,"_self")  
            }
        }, 1300)      
    }
}