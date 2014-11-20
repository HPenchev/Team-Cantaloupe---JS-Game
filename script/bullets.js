var score= 1;
function Bullet(){
    this.x = player.x + 30;
    this.y = player.y + 12;
    this.w = 6;
    this.h = 10;
}

document.addEventListener('keyup', function(event){
    if(event.keyCode == 32){
        bullets.push(new Bullet());
    }
});
var bit0 = new Image();
bit0.src = "../img/bit0.png";
var bit1 = new Image();
bit1.src = "../img/bit1.png";

function bulletsComing(){

    for(var i = 0; i < bullets.length; i++){
        var bitChoice = Math.floor(Math.random() * 2);
        if(bitChoice) {
            ctx.drawImage(bit1, bullets[i].x, bullets[i].y);
        } else{
            ctx.drawImage(bit0, bullets[i].x, bullets[i].y);

        }

        bullets[i].y-=10;
        if (bullets.length) {
            if (bullets[i].y < -20) {
                bullets.splice(i, 1);
            }
        }
        if (bullets.length) {
            hitDetection(bullets[i], i);
        }
        drawScore();
    }
}

function hitDetection(bullet, pos){
    for(var j = 0; j < enemies.length; j++){
        if(enemies[j].p == 2){
            if(enemies[j].x <= bullet.x - bullet.w + 10 && enemies[j].x + enemies[j].w + 15 >= bullet.x &&
                enemies[j].y + enemies[j].h >= bullet.y - 3 * bullet.h && enemies[j].y + enemies[j].h <= bullet.y){

                bullets.splice(pos, 1);
                score++;
                enemies.splice(j, 1);

            }
        } else if(enemies[j].x <= bullet.x - bullet.w && enemies[j].x + enemies[j].w + 10 >= bullet.x &&
            enemies[j].y + enemies[j].h >= bullet.y - 3 * bullet.h && enemies[j].y + enemies[j].h <= bullet.y){

            bullets.splice(pos, 1);
            score++;
            enemies.splice(j, 1);

        }
    }
}
