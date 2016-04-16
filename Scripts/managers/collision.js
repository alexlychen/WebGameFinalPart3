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
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow((endPoint.y - startPoint.y), 2));
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
                    if (object.name === "enemy" || object.name === "enemytwo") {
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
    }());
    managers.Collision = Collision;
    var Shoot = (function () {
        function Shoot() {
            this._name = "Shoot";
        }
        Shoot.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow((endPoint.y - startPoint.y), 2));
        };
        Shoot.prototype.check = function (player, objects) {
            var startPoints = new Array();
            var endPoints = new Array();
            console.log("_bulletCount: ", player._bulletCount);
            for (var i = 0; i < player._bulletCount; i++) {
                var bulletHalfWidth = player._bullets[i].width * 0.5;
                startPoints[i].x = player._bullets[i].x;
                startPoints[i].y = player._bullets[i].x;
                console.log("bullet B...");
                for (var j = 0; j < objects.length; j++) {
                    var objectHalfWidth = objects[j].width * 0.5;
                    var minimumDistance = bulletHalfWidth + objectHalfWidth;
                    endPoints[j].x = objects[j].centerX + objects[j].x;
                    endPoints[j].y = objects[j].centerY + objects[j].y;
                    console.log("bullet C...");
                    if (this.distance(startPoints[i], endPoints[i]) < minimumDistance) {
                        player._bullets[i].isColliding = true;
                        objects[j].isColliding = true; //shoot you!
                        if (objects[j].name === "enemy" || objects[j].name === "enemytwo") {
                            console.log("shot enemy");
                            createjs.Sound.play("bgmcrush");
                            objects[j]._reset(config.Screen.WIDTH + objects[j].width);
                        }
                    }
                    else {
                        objects[j].isColliding = false;
                    }
                }
            }
        };
        return Shoot;
    }());
    managers.Shoot = Shoot;
    var Shot = (function () {
        function Shot() {
            this._name = "Shoot";
        }
        Shot.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow((endPoint.y - startPoint.y), 2));
        };
        Shot.prototype.check = function (bullet, object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var bulletHalfWidth = bullet.width * 0.5;
            startPoint.x = bullet.x;
            startPoint.y = bullet.x;
            var objectHalfWidth = object.width * 0.5;
            var minimumDistance = bulletHalfWidth + objectHalfWidth;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                bullet.isColliding = true;
                stage.removeChild(bullet);
                object.isColliding = true; //shoot you!
                if (object.name === "enemy" || object.name === "enemytwo") {
                    console.log("shot enemy");
                    createjs.Sound.play("bgmcrush");
                    object._reset(config.Screen.WIDTH + object.width);
                }
            }
            else {
                object.isColliding = false;
            }
        };
        return Shot;
    }());
    managers.Shot = Shot;
})(managers || (managers = {}));

//# sourceMappingURL=collision.js.map
