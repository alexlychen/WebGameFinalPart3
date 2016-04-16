/*
#######################################################################################
The name of source file : play.ts
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
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        //PRIVATE METHODS
        /**
        * @method _updateScore
        * @return void
        */
        Play.prototype._updateScore = function () {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + Math.round(scoreValue);
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // Set score and lives value
            livesValue = 5;
            scoreValue = 0;
            // Add background music
            createjs.Sound.play("backMusic").loop = -1;
            createjs.Sound.volume = 20;
            //Set Enemy Count
            this._enemyCount = 7;
            //Instantiate Enemy array 
            this._enemies = new Array();
            // added forest to the scene
            this._forest = new objects.Forest();
            this.addChild(this._forest);
            // added player to the secne
            this._player = new objects.Player();
            this.addChild(this._player);
            // Add playing sound
            createjs.Sound.play("bgmplaying").loop = -1;
            // added enemies to the scene
            for (var enemy = 0; enemy < this._enemyCount; enemy++) {
                this._enemies[enemy] = new objects.Enemy();
                this.addChild(this._enemies[enemy]);
            }
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            //this._shoot = new managers.Shoot();
            this._shot = new managers.Shot();
            // added bonus to the scene
            this._bonus = new objects.Bonus();
            this.addChild(this._bonus);
            // added lives and score labels to the scene
            this._livesLabel = new objects.Label("Lives:", "40px Candara Bold Italic", "#FF0000", 20, 0, false);
            this.addChild(this._livesLabel);
            this._scoreLabel = new objects.Label("Score:", "40px Candara Bold Italic", "#FF0000", 425, 0, false);
            this.addChild(this._scoreLabel);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._forest.update();
            this._bonus.update();
            this._player.update(controls);
            //this._shoot.check(this._player, this._enemies);
            this._player._bullets.forEach(function (bullet) {
                _this._enemies.forEach(function (enemy) {
                    enemy.update();
                    _this._shot.check(bullet, enemy);
                });
            });
            this._enemies.forEach(function (enemy) {
                enemy.update();
                _this._collision.check(enemy);
                scoreValue += 0.1;
            });
            this._collision.check(this._bonus);
            this._updateScore();
            if (scoreValue >= 500) {
                //Change to Level2 
                createjs.Sound.stop();
                scene = config.Scene.LEVEL2_INTRO;
                changeScene();
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
