function Player(){
    this.x = 300;
    this.y = 400;
    this.w = 40;
    this.h = 40;
    this.render = function(ctx, x, y, w, p) {
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    document.addEventListener('keydown', function(event){
        var key_press = event.keyCode;
        //alert(key_press);
        if(key_press == "37"){
            player.x-=6;
        }
        if(key_press == "39"){
            player.x+=6;
        }

    })
}