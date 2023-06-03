import { Platform } from "./platform.js"

export class Information extends Platform {
    constructor(position, context, canvas, id, image, width, height, information, title, link) {
        super(position, context, canvas, id, image, width, height)
        this.information = information
        this.title = title
        this.link = link
    }

    draw() {
        this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)  
    }

    displayInformation() {
        let modal = document.getElementById('information-modal')
        modal.style.display = 'flex'
        let modalText = document.getElementById('information-text')
        modalText.innerHTML = this.information
        let modaltitle = document.getElementById('information-header')
        modaltitle.innerHTML = this.title
    }
}