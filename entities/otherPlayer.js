import { createImage } from "../js/createImage.js"
import { Entity } from "./entitiy.js"

export class OtherPlayer extends Entity {
    constructor(context, canvas, socketID, heightFactor, skinInt) {
        super({x: (canvas.width / 2 - canvas.height / 30) / heightFactor, y: 200}, canvas.height / 15, canvas.height / 15, context, canvas)
        this.velocity = {
            x: 0,
            y: 1
        }
        this.defaultPosition = (canvas.width / 2 - canvas.height / 30) / heightFactor
        this.jumped = false
        this.frames = 0
        this.socketID = socketID
        this.skinInt = skinInt
        this.sprites = null
        if (this.skinInt == 1) {
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
        } else if (this.skinInt == 2){
            this.sprites = {
                stand: {
                    right: createImage('../images/player/PinkMan/IdleRight.png'),
                    left: createImage('../images/player/PinkMan/IdleLeft.png'),
                },
                run: {
                    right: createImage('../images/player/PinkMan/RunRight.png'),
                    left: createImage('../images/player/PinkMan/RunLeft.png'),
                },
                jump: {
                    right: createImage('../images/player/PinkMan/Jump.png'),
                    left: createImage('../images/player/PinkMan/JumpLeft.png')
                },
            }
        } else {
            this.sprites = {
                stand: {
                    right: createImage('../images/player/MaskDude/IdleRight.png'),
                    left: createImage('../images/player/MaskDude/IdleLeft.png'),
                },
                run: {
                    right: createImage('../images/player/MaskDude/RunRight.png'),
                    left: createImage('../images/player/MaskDude/RunLeft.png'),
                },
                jump: {
                    right: createImage('../images/player/MaskDude/Jump.png'),
                    left: createImage('../images/player/MaskDude/JumpLeft.png')
                },
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.audio = new Audio('../audio/jump.mp3')
        this.heightFactor = heightFactor
        this.keys = null
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
        if (this.keys) {
            if (this.keys.left.pressed) {
                this.currentSprite = this.sprites.run.left
            } else if (this.keys.right.pressed){
                this.currentSprite = this.sprites.run.right
            } else if (this.keys.left.pressed === false) {
                this.currentSprite = this.sprites.stand.left
            } else {
                this.currentSprite = this.sprites.stand.right
            }
        }
        this.draw();
    }
}