var keys = [false, false];

function Player(){
    this.x = 150;
    this.y = 370;
    var nerd = new Image();
    nerd.src = "../img/nerdLeft.png";
    this.render = function() {
        ctx.drawImage(nerd,this.x,this.y);

    };

    document.addEventListener('keydown', function(event){
        var key_press = event.keyCode;
        //alert(key_press);

        if((key_press == "37")&&(player.x>-20)){
//            keys[0] = true;
            player.x-=10;
        }

//        if(keys[0]){
//            player.x-=6;
//        }
        if((key_press == "39")&&(player.x<291)){
//            keys[1] = true;
            player.x+=10;
        }
//        if(keys[1]){
//            player.x+=6;
//        }

    })

}