/*
#######################################################################################
The name of source file : scene.ts
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
var objects;
(function (objects) {
    // Scene Class
    var Scene = (function (_super) {
        __extends(Scene, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++
        function Scene() {
            _super.call(this);
            this.start();
        }
        // Add background 
        Scene.prototype.background = function (value) {
            this._background = new createjs.Bitmap(assets.getResult("MainBackground"));
            this.addChild(this._background);
        };
        // Add game objects to my scene in this method
        Scene.prototype.start = function () {
            stage.addChild(this);
        };
        // update game objects in my scene
        Scene.prototype.update = function () {
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));

//# sourceMappingURL=scene.js.map
