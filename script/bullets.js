function Bullet(){
    var x = player.x + 30;
    var y = player.y + 12;
    var w = 6;
    var h = 10;
    bullets.push({'x':x, 'y':y, 'w':w, 'h':h});

}
function bulletsComing(){
    document.addEventListener('keydown', function(event){
        if(event.keyCode == 32){
            Bullet();
        }
    });


    for(var i = 0; i<bullets.length; i++){
        ctx.fillRect(bullets[i].x, bullets[i].y, bullets[i].w, bullets[i].h);
        bullets[i].y-=10;
        this.hitDetection(bullets[i], i);
        if(bullets[i].y < -20){
            bullets.splice(i, 1);
        }
    }
    this.hitDetection = function(bullet, pos){
        for(var j = 0; j < enemies.length; j++){
            if(enemies[j].x <= bullet.x - bullet.w && enemies[j].x + 2 * enemies[j].w>= bullet.x &&
                enemies[j].y + enemies[j].h >= bullet.y - 3 * bullet.h && enemies[j].y + enemies[j].h <= bullet.y){
                bullets.splice(pos, 1);
                enemies.splice(j, 1);
            }
        }
    }
}



