/**
 * Created by Ico on 8.11.2014 г..
 */
var ctx;
window.addEventListener('load', function(event){
    initcanvas();

});
function initcanvas(){
    ctx = document.getElementById("game-frame").getContext('2d');
    var cW = ctx.canvas.width;
    var cH = ctx.canvas.height;
    var y = 0;
    enemyInterval = 0;

    enemies = [];
    player = new Player();
    bullets = [];



    function animate(){
        ctx.save();

        ctx.clearRect(0, 0, cW, cH);
        enemiesComing();
        bulletsComing();
        if (lives == 0) {
            clearInterval(animateInterval);
        }
        player.render(ctx, player.x, player.y, player.w, player.h);
        enemyInterval++;
        ctx.restore();
    }

    var animateInterval = setInterval(animate, 30);
}
