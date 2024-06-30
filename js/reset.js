export function reset(player, platforms, images, informations, doors, backgroundImages, enemies, blocks, level) {
    const audio = new Audio('../audio/death.mp3');
    audio.play();
    player.position.x = player.defaultPosition
    player.position.y = 200
    for (let index = 0; index < platforms.length; index++) {
        platforms[index].position.x = level.platforms[index].x + window.innerWidth / 2 - window.innerHeight / 15
        platforms[index].position.y = level.platforms[index].y
    }
    for (let index = 0; index < images.length; index++) {
        images[index].position.x = level.images[index].x + window.innerWidth / 2 - window.innerHeight / 15
        images[index].position.y = level.images[index].y
    }
    for (let index = 0; index < backgroundImages.length; index++) {
        backgroundImages[index].position.x = level.backgroundImages[index].x - window.innerWidth / 2 - window.innerHeight / 15
        backgroundImages[index].position.y = level.backgroundImages[index].y
    }
    for (let index = 0; index < informations.length; index++) {
        informations[index].position.x = level.informations[index].x + window.innerWidth / 2 - window.innerHeight / 15
        informations[index].position.y = level.informations[index].y
    }
    for (let index = 0; index < blocks.length; index++) {
        blocks[index].position.x = level.blocks[index].x + window.innerWidth / 2 - window.innerHeight / 15
        blocks[index].position.y = level.blocks[index].y
    }
    for (let index = 0; index < doors.length; index++) {
        doors[index].position.x = level.doors[index].x + window.innerWidth / 2 - window.innerHeight / 15
        doors[index].position.y = level.doors[index].y
    }
    for (let index = 0; index < enemies.length; index++) {
        enemies[index].position.x = level.enemies[index].x + window.innerWidth / 2 - window.innerHeight / 15
        enemies[index].position.y = level.enemies[index].y
        enemies[index].dead = false;
    }
}