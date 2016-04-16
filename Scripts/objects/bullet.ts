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

module objects {
    
    
    
    export class Bullet extends GameObject {
          
        
          
        constructor(startX:number, startY:number) {
            super("bullet");
            this._speed.x = 2.5; 
            this.x = startX;        //initial position is the player's position
            this.y = startY;
            this.name = "bullet";
            this.soundString = "";
            
        }
        
        public update():void {
            this.x += this._speed.x;
        }
        
        public outOfSceneCheck():boolean {
            if(this.x >= (config.Screen.WIDTH)){
                return true;
            }
            return false;
        }
    }
}