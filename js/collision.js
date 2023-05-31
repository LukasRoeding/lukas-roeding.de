export function collision(platforms, player, informations) {
    platforms.forEach(platform => {
        platform.draw();
        if (
            player.position.y + player.height <= platform.position.y && 
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width
        ) {
            player.velocity.y = 0
        }
    });
    informations.forEach(information => {
        information.draw();
        if (
            player.position.y + player.height <= information.position.y && 
            player.position.y + player.height + player.velocity.y >= information.position.y &&
            player.position.x + player.width >= information.position.x &&
            player.position.x <= information.position.x + information.width
        ) {
            player.velocity.y = 0
        }
        if (
            player.position.y >= information.position.y + information.height && 
            player.position.y + player.velocity.y <= information.position.y + information.height &&
            player.position.x + player.width >= information.position.x &&
            player.position.x <= information.position.x + information.width
        ) {
            information.displayInformation()
            player.velocity.y = 0
        }
    });
}