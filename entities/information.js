import { Platform } from "./platform.js"

export class Information extends Platform {
    constructor(position, context, canvas, image, width, height, information) {
        super(position, context, canvas, image, width, height)
        this.information = information
    }

    draw() {
        if (this.position.x <= innerWidth || this.position.x + this.width >= 0) {
          this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)  
        }
    }

    displayInformation() {
        let modal = document.getElementById('information-modal')
        modal.style.display = 'unset'
        let modalText = document.getElementById('information-text')
        modalText.innerHTML = this.information
    }
}