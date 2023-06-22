import { createImage } from "../js/createImage.js"
import { Entity } from "./entitiy.js"

export class Player extends Entity {
    constructor(gravity, context, canvas) {
        super({x: 100, y: 200}, innerHeight / 15, innerHeight / 15, context, canvas)
        this.velocity = {
            x: 0,
            y: 1
        }
        this.gravity = gravity
        this.jumped = false
        this.frames = 0
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

    update(frameVelocity) {
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (this.position.y + this.height + this.velocity.y <= this.canvas.height) {
            this.velocity.y += this.gravity * frameVelocity;
        }
    }

    up(kill) {
        if (kill || (this.jumped == false && this.velocity.y == this.gravity)) {
            const audio = new Audio('../audio/jump.mp3');
            audio.play();
            this.velocity.y = -innerHeight / 50
            this.jumped = true  
        }
    }
}