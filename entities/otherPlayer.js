import { createImage } from "../js/createImage.js"
import { Entity } from "./entitiy.js"

export class OtherPlayer extends Entity {
    constructor(context, canvas, socketID, heightFactor) {
        super({x: (canvas.width / 2 - canvas.height / 30) / heightFactor, y: 200}, canvas.height / 15, canvas.height / 15, context, canvas)
        this.velocity = {
            x: 0,
            y: 1
        }
        this.defaultPosition = (canvas.width / 2 - canvas.height / 30) / heightFactor
        this.jumped = false
        this.frames = 0
        this.socketID = socketID
        this.sprites = {
            stand: {
                right: createImage('../images/player/IdleRight.png'),
                left: createImage('../images/player/IdleLeft.png'),
            },
            run: {
                right: createImage('../images/player/RunRight.png'),
                left: createImage('../images/player/RunLeft.png'),
            },
            jump: {
                right: createImage('../images/player/Jump.png'),
                left: createImage('../images/player/JumpLeft.png')
            },
        }
        this.currentSprite = this.sprites.stand.right
        this.audio = new Audio('../audio/jump.mp3')
        this.heightFactor = heightFactor
    }

    draw() {
        if (!this.jumped) {   
            this.context.drawImage(
                this.currentSprite, 
                32 * this.frames,
                0,
                32,
                32,
                this.position.x, 
                this.position.y, 
                this.width, 
                this.height
            )
        } else {
            if (this.currentSprite == this.sprites.run.right || this.currentSprite == this.sprites.stand.right) {
                this.context.drawImage(
                    this.sprites.jump.right, 
                    0,
                    0,
                    32,
                    32,
                    this.position.x, 
                    this.position.y, 
                    this.width, 
                    this.height
                )
            } else {
                this.context.drawImage(
                    this.sprites.jump.left, 
                    0,
                    0,
                    32,
                    32,
                    this.position.x, 
                    this.position.y, 
                    this.width, 
                    this.height
                )
            }

        }
    }

    update() {
        this.draw();
    }
}