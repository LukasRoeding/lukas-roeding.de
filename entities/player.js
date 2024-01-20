import { createImage } from "../js/createImage.js"
import { Entity } from "./entitiy.js"

export class Player extends Entity {
    constructor(gravity, context, canvas) {
        super({x: canvas.width / 2 - canvas.height / 30, y: 200}, canvas.height / 15, canvas.height / 15, context, canvas)
        this.velocity = {
            x: 0,
            y: 1
        }
        this.gravity = gravity
        this.defaultPosition = canvas.width / 2 - canvas.height / 30
        this.jumped = false
        this.frames = 0
        this.rndInt = Math.floor(Math.random() * 4) + 1
        this.sprites = null
        if (this.rndInt == 1) {
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
        } else if (this.rndInt == 2){
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
        } else if (this.rndInt == 3){
            this.sprites = {
                stand: {
                    right: createImage('../images/player/VirtualGuy/IdleRight.png'),
                    left: createImage('../images/player/VirtualGuy/IdleLeft.png'),
                },
                run: {
                    right: createImage('../images/player/VirtualGuy/RunRight.png'),
                    left: createImage('../images/player/VirtualGuy/RunLeft.png'),
                },
                jump: {
                    right: createImage('../images/player/VirtualGuy/Jump.png'),
                    left: createImage('../images/player/VirtualGuy/JumpLeft.png')
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
        setInterval(() => {
            this.frames++
            if (this.frames > 10) {
                this.frames = 0
            }
        }, 40)
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
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {
            this.velocity.y += this.gravity;
        }
    }

    up(kill) {
        if (kill || (this.jumped == false && this.velocity.y == this.gravity)) {
            if (this.audio.paused) {
                this.audio.play();
            }   else{
                this.audio.currentTime = 0
            }
            this.velocity.y = -this.canvas.height / 50
            this.jumped = true  
        }
    }
}