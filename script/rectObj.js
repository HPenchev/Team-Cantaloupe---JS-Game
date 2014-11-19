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
var level = 1;

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

    if(score % 11 == 0){
        level = level + 0.3;
        lives += 1;
        score++;
    }


    for(var i = 0; i<enemies.length; i++){
        if(lives==0){
            GameOverDisplay();
            break;
        }
        if(enemies[i].p == 0){
            ctx.drawImage(beer, enemies[i].x, enemies[i].y);
        } else if(enemies[i].p == 1){
            ctx.drawImage(girl, enemies[i].x, enemies[i].y);
        } else{
            ctx.drawImage(discoBall, enemies[i].x, enemies[i].y);
        }


        enemies[i].y += level;
        if(enemies[i].y>455){
            enemies.splice(i, 1);
            --lives;

        }
        healthDisplay();
        drawScore();
    }
}
function healthDisplay(){
    ctx.fillStyle="red";
    ctx.font=" 20px  Arial";
    ctx.fillText("Life:"+lives,10,20);
}

function GameOverDisplay(){
    ctx.fillStyle="red";
    ctx.font=" 25px  Arial";
    ctx.fillText("Game Over",120,200);
    ctx.fillText("You`re not a nerd anymore",30,240);

}
function drawScore(){
    ctx.fillStyle="red";
    ctx.font=" 20px  Arial";
    ctx.fillText("Score:"+score,8,40);
    document.getElementById(getScore);
}
var getScore=document.getElementById("score");