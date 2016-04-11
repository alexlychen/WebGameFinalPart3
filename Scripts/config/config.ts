/*
#######################################################################################
The name of source file : Config.ts
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
module config {

    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static PLAY: number = 1;
        public static END: number = 2;
        public static INTRO: number = 3;
        public static LEVEL2_INTRO:number = 4;
        public static LEVEL2_PLAY:number = 5;
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}