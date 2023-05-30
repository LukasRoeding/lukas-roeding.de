export function init(player, platforms, images, level) {
    console.log(level.platforms)
    player.position.x = 100
    player.position.y = 200
    for (let index = 0; index < platforms.length; index++) {
        platforms[index].position = level.platforms[index]  
    }
    for (let index = 0; index < images.length; index++) {
        images[index].position.x = level.images[index].x
        images[index].position.y = level.images[index].y
    }
}