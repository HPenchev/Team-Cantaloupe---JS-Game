/**
 * Created by Ico on 12.11.2014 г..
 */
var beer = new Image();
beer.src = "../img/brittle_fracture.png";
var girl = new Image();
girl.src = "../img/girl.png";
var discoBall = new Image();
discoBall.src = "../img/disco-ball.png";
var lives = 3;

function RectObj() {
   this.x = Math.random()*300+10;
   this.y = -10;
   this.w = 30;
   this.h = 30;
    this.p = Math.floor(Math.random() * 3);
}

function enemiesComing(){

    if(enemyInterval==50){
        enemies.push(new RectObj());
        enemyInterval = 0;
    }
    enemyInterval++;
    for(var i = 0; i<enemies.length; i++){
        if(enemies[i].p == 0){
            ctx.drawImage(beer, enemies[i].x, enemies[i].y);
        } else if(enemies[i].p == 1){
            ctx.drawImage(girl, enemies[i].x, enemies[i].y);
        } else{
            ctx.drawImage(discoBall, enemies[i].x, enemies[i].y);
        }



        enemies[i].y++;
        if(enemies[i].y>500){
            enemies.splice(i, 1);
            lives--;
        }
    }
}