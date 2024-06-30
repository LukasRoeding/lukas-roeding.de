import { Platform } from "./platform.js"

export class Information extends Platform {
    constructor(position, context, canvas, id, image, width, height, information, title, link) {
        super(position, context, canvas, id, image, width, height)
        this.information = information
        this.title = title
        this.link = link
    }

    displayInformation() {
        const backgroundOffset = document.getElementById('backgroundOffset')
        backgroundOffset.style.display = 'block'
        const modal = document.getElementById('information-modal')
        modal.style.display = 'flex'
        const modalText = document.getElementById('information-text')
        modalText.innerHTML = this.information
        const modaltitle = document.getElementById('information-header')
        modaltitle.innerHTML = this.title
        if (this.link) {
            const modallink = document.getElementById('information-modal-link')
            modallink.style.display = 'unset'
            modallink.href = this.link
            modallink.target = '__blank'
        }
    }
}