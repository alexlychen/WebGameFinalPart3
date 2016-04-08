/*
#######################################################################################
The name of source file : collision.ts
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
var managers;
(function (managers) {
    // COLLISION MANAGER CLASS
    var Collision = (function () {
        // CONSTRUCTOR +++++++++++++++++++++
        function Collision(player) {
            this._player = player;
        }
        // PUBLIC METHODS +++++++++++++++++++++++
        Collision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        // figure the collision between the play and objects like bonus or enemy 
        Collision.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfWidth = this._player.width * 0.5;
            var objectHalfWidth = object.width * 0.5;
            var minimumDistance = playerHalfWidth + objectHalfWidth;
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            // when player crush with objects, it happens something.
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (!object.isColliding) {
                    // if player meets enemy, his lives will be deducted.
                    if (object.name === "enemy") {
                        console.log("enemy hit!");
                        // Add crush with enemy sound
                        createjs.Sound.play("bgmcrush");
                        livesValue--; // lose a life
                        if (livesValue <= 0) {
                            createjs.Sound.stop();
                            // Add dead sound
                            createjs.Sound.play("bgmdead");
                            //Show the Game Over Scene
                            scene = config.Scene.END;
                            changeScene();
                        }
                        object._reset(config.Screen.WIDTH + object.width); // reset the enemy when player meets them.
                    }
                    // if player meets heart, his lives will be increased.
                    if (object.name === "bonus") {
                        console.log("bonus hit!");
                        // Add getting a heart sound
                        createjs.Sound.play("bgmGetheart");
                        livesValue++; // get a life
                        object._reset(config.Screen.WIDTH + object.width); // reset the bonus when player meets them.
                    }
                    object.isColliding = true;
                }
            }
            else {
                object.isColliding = false;
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map