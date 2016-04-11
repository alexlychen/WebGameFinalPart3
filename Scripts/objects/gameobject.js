/*
#######################################################################################
The name of source file : gameobject.ts
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
    // GameObject Super Class +++++++++++++++++++++++
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        // COSTRUCTOR METHODS +++++++++++++++++++++
        function GameObject(bitmapString) {
            _super.call(this, assets.getResult(bitmapString));
            this._speed = new createjs.Point(0, 0);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this.isColliding = false;
            this._topBounds = this.height;
            this._bottomBounds = config.Screen.HEIGHT - this.height;
            this._leftBounds = -this.width;
            this._rightBounds = config.Screen.WIDTH + this.width;
        }
        // PRIVATE METHODS +++++++++++++++++++++++
        GameObject.prototype._checkBounds = function (value) {
            var resetValue = 0;
            // check if x value has met the reset criteira
            if (this.x <= value) {
                this._reset(resetValue);
            }
        };
        // reset the forest offscreen
        GameObject.prototype._reset = function (value) {
            this.x = value;
        };
        GameObject.prototype.update = function () {
            var boundValue = 0;
            // scroll the forest 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(boundValue);
        };
        return GameObject;
    })(createjs.Bitmap);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map