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
    })
    //if(enemyInterval==10){
    //    rectObj();
    //    enemyInterval = 0;
    //}
    //enemyInterval++;
    for(var i = 0; i<bullets.length; i++){
        ctx.fillRect(bullets[i].x, bullets[i].y, bullets[i].w, bullets[i].h);
        bullets[i].y-=10;
        if(bullets[i].y == -5){
            bullets.splice(i, 1);
        }
    }
}

