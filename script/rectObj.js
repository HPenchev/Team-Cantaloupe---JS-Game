/**
 * Created by Ico on 12.11.2014 г..
 */
var beer = new Image();
beer.src = "img/brittle_fracture.png";
function rectObj(){
    var x = Math.random()*310+10;
    var y = -10;
    var w=30;
    var h=30;
    enemies.push({'x':x, 'y':y, 'w':w, 'h':h});

}
function enemiesComing(){
	var beer = new Image();
    beer.src = "../img/brittle_fracture.png";
    if(enemyInterval==30){
        rectObj();
        enemyInterval = 0;
    }
    enemyInterval++;
    for(var i = 0; i<enemies.length; i++){
        ctx.drawImage(beer, enemies[i].x, enemies[i].y);
        enemies[i].y++;
        if(enemies[i].y>500){
            enemies.splice(i, 1);
        }
    }
}