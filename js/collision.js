export function collision(platforms, player, informations) {
    platforms.forEach(platform => {
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
    });
    informations.forEach(information => {
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
        } else {
            if (
                player.position.y + player.height + player.velocity.y >= information.position.y &&
                player.position.y + player.velocity.y <= information.position.y + information.height
            )   
                if (
                    player.position.x + player.velocity.x + player.width >= information.position.x &&
                    player.position.x + player.velocity.x < information.position.x + information.width
                    ) {
                    player.velocity.x = 0;
                } else if (
                    player.position.x + player.velocity.x <= information.position.x + information.width &&
                    player.position.x > information.position.x + information.width
                    ) {
                    player.velocity.x = 0;
                }
        }
    });
}