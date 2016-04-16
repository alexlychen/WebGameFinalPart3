/**
 *
The name of source file : bullet.ts
The information of author :  Liyi Chen #300756123
Last Modified by: Liyi Chen
Last Modified date: April 11 2016
Program Description: player uses bullet to shoot the angry birds
Revision History: 1.0
*
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet(startX, startY) {
            _super.call(this, "bullet");
            this._speed.x = 2.5;
            this.x = startX; //initial position is the player's position
            this.y = startY;
            this.name = "bullet";
            this.soundString = "";
        }
        Bullet.prototype.update = function () {
            this.x += this._speed.x;
        };
        Bullet.prototype.outOfSceneCheck = function () {
            if (this.x >= (config.Screen.WIDTH)) {
                return true;
            }
            return false;
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));

//# sourceMappingURL=bullet.js.map
