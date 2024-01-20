export function collision(platforms, player, informations, blocks, frameVelocity, stopMovement) {
    for(const platform of platforms) {
        if (platform.position.x <= innerWidth || platform.position.x + platform.width >= 0) {
            platform.draw();
            if (
                player.position.y + player.height <= platform.position.y && 
                player.position.y + player.height + player.velocity.y >= platform.position.y &&
                player.position.x + player.width >= platform.position.x &&
                player.position.x <= platform.position.x + platform.width
            ) {
                player.jumped = false;
                player.velocity.y = 0 
            }  
        }

    };
    for(const block of blocks) {
        if (block.position.x <= innerWidth || block.position.x + block.width >= 0) {
        block.draw();
        if (
            player.position.x + player.width >= block.position.x &&
            player.position.x <= block.position.x + block.width
        ) {
            if (
                player.position.y + player.height <= block.position.y && 
                player.position.y + player.height + player.velocity.y >= block.position.y
            ) {
                player.jumped = false;
                player.velocity.y = 0
            } else if (
                player.position.y >= block.position.y + block.height && 
                player.position.y + player.velocity.y <= block.position.y + block.height
            ) {
                player.velocity.y = 0
            }
        } else if 
            (
                player.position.y + player.height + player.velocity.y >= block.position.y &&
                player.position.y + player.velocity.y <= block.position.y + block.height
            )  {
                if (
                    player.position.x + frameVelocity + player.width >= block.position.x &&
                    player.position.x + frameVelocity < block.position.x + block.width
                    ) { 
                    frameVelocity = 0;
                } else if (
                    player.position.x + frameVelocity <= block.position.x + block.width &&
                    player.position.x > block.position.x + block.width
                    ) {
                    frameVelocity = 0;
                }
            }
        }
    };
    for(const information of informations) {
        if (information.position.x <= innerWidth || information.position.x + information.width >= 0) {
        information.draw();
        if (
            player.position.x + player.width >= information.position.x &&
            player.position.x <= information.position.x + information.width
        ) {
            if (
                player.position.y + player.height <= information.position.y && 
                player.position.y + player.height + player.velocity.y >= information.position.y
            ) {
                player.jumped = false;
                player.velocity.y = 0
            } else if (
                player.position.y >= information.position.y + information.height && 
                player.position.y + player.velocity.y <= information.position.y + information.height
            ) {
                information.displayInformation()
                player.velocity.y = 0
            }
        } else if 
            (
                player.position.y + player.height + player.velocity.y >= information.position.y &&
                player.position.y + player.velocity.y <= information.position.y + information.height
            )  {
                if (
                    player.position.x + frameVelocity + player.width >= information.position.x &&
                    player.position.x + frameVelocity < information.position.x + information.width
                    ) { 
                    stopMovement()
                    
                } else if (
                    player.position.x <= information.position.x + information.width + frameVelocity &&
                    player.position.x > information.position.x + information.width
                    ) {
                    stopMovement()
                    
                }
            }
        }
    };
}