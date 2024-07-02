export class Entity {
    constructor(position, width, height, context, canvas, id) {
        this.position = {
            x: position.x,
            y: position.y
        }
        this.width = width
        this.height = height
        this.context = context
        this.canvas = canvas
        this.id = id
        this.movementFlag = localStorage.getItem('movementFlag') ? localStorage.getItem('movementFlag') : true
    }
}