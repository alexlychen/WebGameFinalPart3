/*
#######################################################################################
The name of source file : enemy.ts
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
    // Enemy Class +++++++++++++++++++++++
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++
        // COSTRUCTOR METHODS +++++++++++++++++++++
        function Enemy() {
            _super.call(this, "enemy");
            this._speed.x = 2.5; //Forest SPEED
            this._reset(this._rightBounds);
            this.name = "enemy";
        }
        // PRIVATE METHODS +++++++++++++++++++++++
        Enemy.prototype._checkBounds = function (value) {
            // has outside the viewport
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the enemy offscreen
        Enemy.prototype._reset = function (value) {
            this._speed.x = Math.round((Math.random() * 5) + 3);
            this._speed.y = Math.round((Math.random() * 5) - 1);
            this.x = value;
            this.y = Math.floor((Math.random() * this._bottomBounds) + this._topBounds);
        };
        Enemy.prototype.update = function () {
            // scroll the enemy 5 px per frame
            this.x -= this._speed.x;
            this.y -= this._speed.y;
            this._checkBounds((-config.Screen.WIDTH) * 2);
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map