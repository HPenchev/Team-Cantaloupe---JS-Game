/**
 * Created by Ico on 12.11.2014 г..
 */
function rectObj(){
    var x = Math.random()*310+10;
    var y = -10;
    var w=30;
    var h=30;
    enemies.push({'x':x, 'y':y, 'w':w, 'h':h});

}
function enemiesComing(){

    if(enemyInterval==10){
        rectObj();
        enemyInterval = 0;
    }
    enemyInterval++;
    for(var i = 0; i<enemies.length; i++){
        ctx.fillRect(enemies[i].x, enemies[i].y, enemies[i].w, enemies[i].h);
        enemies[i].y++;
        if(enemies[i].y>500){
            enemies.splice(i, 1);
        }
    }
}