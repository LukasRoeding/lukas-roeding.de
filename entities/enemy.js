import { Entity } from "./entitiy.js"

export class Enemy extends Entity {
    constructor(position, context, canvas, id, width, height, sprites, range, speed) {
        super({x:position.x, y:position.y}, width, height, context, canvas, id)
        this.sprites = sprites
        this.currentSprite = this.sprites.run.left
        this.movementRange = range
        this.direction = 'left'
        this.frames = 0
        this.currentSprite = this.sprites.run.right
        setInterval(() => {
            this.frames++
            if (this.frames > 9) {
                this.frames = 0
            }
        }, 60)
        this.speed = speed
        this.dead = false
    }

    draw() {
        this.context.drawImage(
            this.currentSprite, 
            38 * this.frames,
            0,
            38,
            24,
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
        )
    }

    death() {
        this.dead = true;
        this.position = {x: -100, y: -100}
    }

    update(velocity, scrollOffset) {
        if (!this.dead) {
            this.draw()
            if (this.direction === 'left') {
                this.position.x -= velocity / this.speed
                if (this.position.x + scrollOffset < this.movementRange.leftX) {
                    this.direction = 'right'
                    this.currentSprite = this.sprites.run.right
                }
            } else {
                this.position.x += velocity / this.speed
                if (this.position.x + scrollOffset > this.movementRange.rightX) {
                    this.direction = 'left'
                    this.currentSprite = this.sprites.run.left
                }
            } 
        }
    }
}