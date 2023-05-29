export class Entity {
    constructor(position, width, height, context, canvas) {
        this.position = {
            x: position.x,
            y: position.y
        }
        this.width = width
        this.height = height
        this.context = context
        this.canvas = canvas
    }
}