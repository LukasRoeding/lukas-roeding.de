import { Entity } from "./entitiy.js"

export class Enemy extends Entity {
    constructor(position, context, canvas, id, width, height, sprites, range, speed, spriteHeight, spriteWidth, spriteFrames) {
        super({x:position.x, y:position.y}, width, height, context, canvas, id)
        this.sprites = sprites
        this.currentSprite = this.sprites.run.left
        this.movementRange = {leftX: range.leftX + canvas.width / 2 - canvas.height / 15, rightX: range.rightX + canvas.width / 2 - canvas.height / 15}
        this.direction = 'left'
        this.frames = 0
        setInterval(() => {
            this.frames++
            if (this.frames > this.spriteFrames) {
                this.frames = 0
            }
        }, 60)
        this.speed = speed
        this.dead = false
        this.spriteHeight = spriteHeight
        this.spriteWidth = spriteWidth
        this.spriteFrames = spriteFrames
    }

    draw() {
        this.context.drawImage(
            this.currentSprite, 
            this.spriteWidth * this.frames,
            0,
            this.spriteWidth,
            this.spriteHeight,
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

    update(velocity, scrollOffset, draw = true) {
        if (!this.dead) {
            if (draw) {
              this.draw()  
            }
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