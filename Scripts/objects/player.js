/*
#######################################################################################
The name of source file : player.ts
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
    // PLAYER CLASS ++++++++++++
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.call(this, assets.getResult("master1"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - this.height * 0.5;
            this._leftBounds = this.width * 0.5;
            this._rightBounds = 400;
            this.x = this.regX;
            // keyborad event
            window.onkeydown = this._onControlDown;
            window.onkeyup = this._onControlUp;
            // mouse drag event handler
            this.on("pressmove", function (evt) {
                // currentTarget will be the container that the event listener was added to:
                evt.currentTarget.x = evt.stageX;
                evt.currentTarget.y = evt.stageY;
                // make sure to redraw the stage to show the change:
                this.update();
            });
            //prepare bullets to the scene
            this._interval = 0;
            this._bulletCount = 0;
            this._bullets = new Array();
            this.canfire = true;
        }
        //PRIVATE METHODS
        Player.prototype._checkBounds = function () {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
            if (this.x < this._leftBounds) {
                this.x = this._leftBounds;
            }
            if (this.x > this._rightBounds) {
                this.x = this._rightBounds;
            }
        };
        /*
        private _shuffleImages(value:string)
        {
            var images = new Array();
            images[0] = assets.getResult("master1");
            images[1] = assets.getResult("master2");
            images[2] = assets.getResult("master2");
           do
            {
                var i:number;
                for(i = 0; i <2; i++)
                {
                    this.image = images[i];
                }
            }
            while(value != "");

        }
        */
        // press keyborad
        Player.prototype._onControlDown = function (e) {
            switch (e.which) {
                case KEYCODE_LEFT:
                    controls.left = true;
                    break;
                case KEYCODE_RIGHT:
                    controls.right = true;
                    break;
                case KEYCODE_UP:
                    controls.up = true;
                    break;
                case KEYCODE_DOWN:
                    controls.down = true;
                    break;
                case KEYCODE_SPACE:
                    controls.space = true; //player shoots
                    break;
            }
        };
        // release keyborad
        Player.prototype._onControlUp = function (e) {
            switch (e.which) {
                case KEYCODE_LEFT:
                    controls.left = false;
                    break;
                case KEYCODE_RIGHT:
                    controls.right = false;
                    break;
                case KEYCODE_UP:
                    controls.up = false;
                    break;
                case KEYCODE_DOWN:
                    controls.down = false;
                    break;
                case KEYCODE_SPACE:
                    controls.space = false;
                    break;
            }
        };
        // PUBLIC MEHTODS
        Player.prototype.update = function (control) {
            //this.y = stage.mouseY;
            if (control.down == true) {
                this.y += 5;
            }
            else if (control.up == true) {
                this.y -= 5;
            }
            else if (control.left == true) {
                this.x -= 5;
            }
            else if (control.right == true) {
                this.x += 5;
            }
            this._checkBounds();
            //console.log("Shuffle!")
            //this._shuffleImages("");
            //shoot a bullet
            if (control.space == true && this.canfire == true) {
                var bullet = new objects.Bullet(this.x, this.y);
                this._bullets.push(bullet);
                stage.addChild(bullet);
                this._bulletCount++;
                this.canfire = false;
            }
            if (controls.space == false) {
                this.canfire = true;
            }
            //update bullet position
            this._bullets.forEach(function (bullet) {
                bullet.update();
            });
            //bullet out of scene
            for (var i = 0; i < this._bulletCount; i++) {
                if (this._bullets[i].outOfSceneCheck()) {
                    this._bullets.splice(i, 1);
                    stage.removeChild(this._bullets[i]);
                    this._bulletCount--;
                }
                if (this._bullets[i].isColliding) {
                    this._bullets.splice(i, 1);
                    this._bulletCount--;
                }
            }
            //console.log("_bulletCount: ", this._bulletCount);
        };
        return Player;
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));

//# sourceMappingURL=player.js.map
