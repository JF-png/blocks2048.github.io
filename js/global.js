
let gameLoaded = false;
let volumeScale = 1;
let globalVolume = 1;
let isGame = true;
let lang = "ru";
let curScene;
const gameProperties = {
    screenWidth: 1080,
    screenHeight: 1920,
    fieldWidth: 5,
    fieldHeight: 7,
    point: 204,
    rectSize: 185,
	xOffset: 132,
	yOffset: 320
};
var params = {
    offsetX: 0,
    offsetY: 0,
};
const scaleFactors = [
    0,
    1,
    .6,
    .37,
    .32];
var target = undefined;
var prevDragX = 0;
var prevDragY = 0;

webPsupport = function () {
    var webP = new Image;
    webP.onload = WebP.onerror = function () {
        callback(webP.height == 2)
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
};
var fileName = this.webPsupport ? "png" : "png";//"webp" : "png"

class FunctionOrder {
    constructor(scene) {
        this.scene = scene;
        this.funcList = [];
        this.currentFunc = undefined;
        this.currentlyRunning = false;
        this.onCompleteEvent = undefined;
    }
    nextFunc = function (mustCalled = true) {
        if (this.currentlyRunning)
            return;
        if (this.funcList.length <= 0) {
            if (!!this.onCompleteEvent && mustCalled)
			{
                this.scene.time.delayedCall(1, this.onCompleteEvent, [], this.scene);
				console.log('orderfinished');
			}
            this.currentFunc = undefined;
            return;
        }
        console.log('next func launched');
        this.currentlyRunning = true;
        let func = this.funcList[0];
        this.currentFunc = func;
        this.scene.time.delayedCall(1, func.func, func.args, this.scene);
        this.funcList.shift();
    }
    insertFunc = function (func) {
        this.funcList.push(func);
    }
    stopOrder = function () {
        this.currentlyRunning = false;
    }
}
afterGPLoaded = function () {
    lang = getLang();
}
