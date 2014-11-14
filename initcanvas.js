/**
 * Created by Ico on 8.11.2014 г..
 */

window.addEventListener('load', function(event){
    initcanvas();

});
function initcanvas(){
    ctx = document.getElementById("game-frame").getContext('2d');
    ctx.fillRect(220, 300, 50, 50);
    var cW = ctx.canvas.width;
    var cH = ctx.canvas.height;
    var y = 0;
    enemyInterval = 0;

    enemies = [];
//    var rect1 = new rectObj();
//    var rect2 = new rectObj();
    player = new Player();



    function animate(){
        ctx.save();

        ctx.clearRect(0, 0, cW, cH);
        enemiesComing();
        player.render(ctx, player.x, player.y, player.w, player.h);
        enemyInterval++;
        ctx.restore();
    }

    var animateInterval = setInterval(animate, 30);
}
