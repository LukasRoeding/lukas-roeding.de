import { Platform } from "./platform.js"

export class Information extends Platform {
    constructor(position, context, canvas, image, width, height, information) {
        super(position, context, canvas, image, width, height)
        this.information = information
    }

    draw() {
        this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    displayInformation() {
        console.log(this.information)
    }
}