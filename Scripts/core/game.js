/*
#######################################################################################
The name of source file : game.ts
The information of author :  Giho Kim #300738697
Last Modified by: Giho Kim
Last Modified date: 29 March 2016
Program Description: The game is to avoid the enemies using the side scroller. User can
control the player by a mouse and the enemies will be generated randomly. Some hearts
also will be generated as bonus. when user get a bonus, which will give a life.
Good Luck!
Revision History: 1.0
#######################################################################################
*/
/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var game;
var stats;
var currentScene;
var scene;
// key values
var KEYCODE_LEFT = 37, KEYCODE_RIGHT = 39, KEYCODE_UP = 38, KEYCODE_DOWN = 40;
// Game Scenes
var menu;
var intro;
var play;
var end;
// Add my assets
var assetData = [
    // add images
    { id: "MenuBackground", src: "../../Assets/images/MenuBackground.png" },
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "PlayButton", src: "../../Assets/images/PlayButton.png" },
    { id: "InstructionButton", src: "../../Assets/images/InstructionButton.png" },
    { id: "ExitButton", src: "../../Assets/images/ExitButton.png" },
    { id: "RestartButton", src: "../../Assets/images/RestartButton.png" },
    { id: "BackButton", src: "../../Assets/images/BackButton.png" },
    { id: "forest", src: "../../Assets/images/background2.png" },
    { id: "master1", src: "../../Assets/images/Bird1.png" },
    { id: "master2", src: "../../Assets/images/Bird2.png" },
    { id: "master3", src: "../../Assets/images/Bird3.png" },
    { id: "mastercrushed", src: "../../Assets/images/crush.png" },
    { id: "enemy", src: "../../Assets/images/enemy.png" },
    { id: "enemytwo", src: "../../Assets/images/enemy2.png" },
    { id: "bonus", src: "../../Assets/images/bonus.png" },
    { id: "endback", src: "../../Assets/images/GameEnd.png" },
    { id: "intro", src: "../../Assets/images/intro.png" },
    // Add music
    { id: "backMusic", src: "../../Assets/audio/backmusic.mp3" },
    { id: "bgmchicken", src: "../../Assets/audio/chicken.mp3" },
    { id: "bgmcrush", src: "../../Assets/audio/crush.mp3" },
    { id: "bgmdead", src: "../../Assets/audio/dead.mp3" },
    { id: "bgmEnemy", src: "../../Assets/audio/enemy.mp3" },
    { id: "bgmGetheart", src: "../../Assets/audio/getheart.mp3" },
    { id: "bgmrestart", src: "../../Assets/audio/heart.mp3" },
    { id: "bgmplaying", src: "../../Assets/audio/playing.mp3" },
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.INTRO:
            // show the INTRO scene
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
window.onload = preload;
//# sourceMappingURL=game.js.map