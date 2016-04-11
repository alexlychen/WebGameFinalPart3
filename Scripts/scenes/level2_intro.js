/*
#######################################################################################
The name of source file : intro.ts
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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var Level2_Intro = (function (_super) {
        __extends(Level2_Intro, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Level2_Intro() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Level2_Intro.prototype.start = function () {
            //Add background
            this._backgroundImage = new createjs.Bitmap(assets.getResult("intro"));
            this.addChild(this._backgroundImage);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X - 10, config.Screen.CENTER_Y + 175, true);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Level2_Intro.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PlayButton click event handler
        Level2_Intro.prototype._startButtonClick = function (event) {
            // Add click sound
            createjs.Sound.play("bgmchicken");
            // Switch to the Play Scene
            scene = config.Scene.LEVEL2_PLAY;
            changeScene();
        };
        return Level2_Intro;
    })(objects.Scene);
    scenes.Level2_Intro = Level2_Intro;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2_intro.js.map