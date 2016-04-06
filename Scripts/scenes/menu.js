/*
#######################################################################################
The name of source file : menu.ts
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
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            //Add background
            this._backgroundImage = new createjs.Bitmap(assets.getResult("MenuBackground"));
            this.addChild(this._backgroundImage);
            // add the PlayButton to the MENU scene
            this._playButton = new objects.Button("PlayButton", config.Screen.CENTER_X - 215, config.Screen.CENTER_Y - 75, true);
            this.addChild(this._playButton);
            // Play Button event listener
            this._playButton.on("click", this._playButtonClick, this);
            // add the InstructionButton to the MENU scene
            this._instructionButton = new objects.Button("InstructionButton", config.Screen.CENTER_X - 15, config.Screen.CENTER_Y - 75, true);
            this.addChild(this._instructionButton);
            // InstructionButton event listener
            this._instructionButton.on("click", this._instructionButtonClick, this);
            // add the ExitButton to the MENU scene
            this._exitButton = new objects.Button("ExitButton", config.Screen.CENTER_X + 180, config.Screen.CENTER_Y - 75, true);
            this.addChild(this._exitButton);
            // Exit Button event listener
            this._exitButton.on("click", this._exitButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PlayButton click event handler
        Menu.prototype._playButtonClick = function (event) {
            // Add click sound
            createjs.Sound.play("bgmchicken");
            // Switch to the Play Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        // InstructionButton click event handler
        Menu.prototype._instructionButtonClick = function (event) {
            // Add click sound
            createjs.Sound.play("bgmchicken");
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        };
        // ExitButton click event handler
        Menu.prototype._exitButtonClick = function (event) {
            // Add click sound
            createjs.Sound.play("bgmchicken");
            // Close the game
            window.open('', '_self', '');
            window.close();
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map