module objects {
    // Forest Class +++++++++++++++++++++++
    export class Enemy extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++

        // COSTRUCTOR METHODS +++++++++++++++++++++
        constructor() {
            super("enemy");
            this._speed.x = 2.5; //Forest SPEED
            this._reset(this._rightBounds);
        }
        
        // PRIVATE METHODS +++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // has outside the viewport
            if(this.x <= value)
            {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the forest offscreen
        protected _reset(value:number):void {
            this._speed.x = Math.floor((Math.random()*5) +5);
            this._speed.y = Math.floor((Math.random()*5) -5);
            this.x = value;
            this.y = Math.floor((Math.random() * this._bottomBounds) + this._topBounds); 
        }
        
        public update():void {
            // scroll the forest 5 px per frame
            this.x -= this._speed.x;
            this.y -= this._speed.y;
            this._checkBounds(-this._leftBounds);
        }
    }
}