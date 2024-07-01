dayNo = function(y, m, d) {
    return --m * 31 - (m > 1 ? (1054267675 >> m * 3 - 6 & 7) - (y & 3 || !(y % 25) && y & 15 ? 0 : 1) : 0) + d
}
getLang = function() {
    //return gp.language;
    return "ru";
}

createRandomNumber = function(n, m){
    return Math.floor(Math.random() * (m - n + 1)) + n
};

Math.clamp = function(number, min, max)  {
    return Math.min(Math.max(number, min), max);
};
Math.roundToPowerOfTwo = function(number){
    return Math.floor(Math.log2(number));
}

lazyLoadImage = function(scene, key, path) {
    return new Promise((resolve, reject) => {
        let loader = new Phaser.Loader.LoaderPlugin(scene);
        // ask the LoaderPlugin to load the texture
        loadImage(key, path, loader);

        loader.once(Phaser.Loader.Events.COMPLETE, () => {
            resolve();
        });
        loader.start();
    });
}
loadImage = function(key, path, loader){
    loader.image(key, "assets/" + fileName + "/" + path + "." + fileName)
};
loadSpritesheet = function(key, path, config, loader) {
    loader.spritesheet(key, "assets/" + fileName + "/" + path + "." + fileName, config)
};
loadMultiatlas = function(name, config, loader)
{
	loader.multiatlas(name, "assets/" + fileName + "/" + config, "assets/"+fileName+"/");
}