export function reset(player, platforms, images, level) {
    player.position.x = 100
    player.position.y = 200
    for (let index = 0; index < platforms.length; index++) {
        platforms[index].position.x = level.platforms[index].x
        platforms[index].position.y = level.platforms[index].y
    }
    for (let index = 0; index < images.length; index++) {
        images[index].position.x = level.images[index].x
        images[index].position.y = level.images[index].y
    }
}