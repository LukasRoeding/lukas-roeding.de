import { Platform } from "./platform.js"

export class Information extends Platform {
    constructor(position, context, canvas, id, image, width, height, information, title, link) {
        super(position, context, canvas, id, image, width, height)
        this.information = information
        this.title = title
        this.link = link
    }

    displayInformation() {
        let modal = document.getElementById('information-modal')
        modal.style.display = 'flex'
        let modalText = document.getElementById('information-text')
        modalText.innerHTML = this.information
        let modaltitle = document.getElementById('information-header')
        modaltitle.innerHTML = this.title
        if (this.link) {
            let modallink = document.getElementById('information-modal-link')
            modallink.style.display = 'unset'
            modallink.href = this.link
            modallink.target = '__blank'
        }
    }
}