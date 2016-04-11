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

module objects {
    // PLAYER CLASS ++++++++++++
    export class Player extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLE
        private _topBounds: number;
        private _bottomBounds: number;
        private _leftBounds: number;
        private _rightBounds: number;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        constructor() {
            super(assets.getResult("master1"));

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
            this.on("pressmove", function(evt) {
                // currentTarget will be the container that the event listener was added to:
                evt.currentTarget.x = evt.stageX;
                evt.currentTarget.y = evt.stageY;
                // make sure to redraw the stage to show the change:
                this.update();
            });

        }

        //PRIVATE METHODS
        private _checkBounds(): void {
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
        }

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
        private _onControlDown(e): void {
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
            }
        }

        // release keyborad
        private _onControlUp(e): void {
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
            }
        }


        // PUBLIC MEHTODS
        public update(control): void {
            //this.y = stage.mouseY;

            if (control.down == true) {
                this.y += 5;
            } else if (control.up == true) {
                this.y -= 5;
            } else if (control.left == true) {
                this.x -= 5;
            } else if (control.right == true) {
                this.x += 5;
            }

            this._checkBounds();
            //console.log("Shuffle!")
            //this._shuffleImages("");

        }
    }
}