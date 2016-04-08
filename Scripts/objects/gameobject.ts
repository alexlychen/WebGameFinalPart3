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

module objects {
    // GameObject Super Class +++++++++++++++++++++++
    export class GameObject extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++
        protected _speed: createjs.Point;
        protected _leftBounds: number;
        protected _rightBounds: number;
        protected _topBounds: number;
        protected _bottomBounds: number;

        //Public Instance Variables
        public name: string;
        public width: number;
        public height: number;
        public centerX: number;
        public centerY: number;
        public isColliding:boolean;
        public soundString:string;

        
        // COSTRUCTOR METHODS +++++++++++++++++++++
        constructor(bitmapString: string) {
            super(assets.getResult(bitmapString));
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
        protected _checkBounds(value: number): void {
            var resetValue: number = 0;
            // check if x value has met the reset criteira
            if (this.x <= value) {
                this._reset(resetValue);
            }
        }
        
        // reset the forest offscreen
        public _reset(value: number): void {
            this.x = value;
        }

        public update(): void {
            var boundValue: number = 0;
            // scroll the forest 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(boundValue);
        }
    }
}