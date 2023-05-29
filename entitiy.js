export class Entity {
    constructor(position, width, height) {
        this.position = {
            x: position.x,
            y: position.y
        }
        this.width = width
        this.height = height
    }
}