function Player(){
    this.x = 150;
    this.y = 350;
    var nerd = new Image();
    nerd.src = "../img/nerdLeft.png";
    this.render = function() {
        ctx.drawImage(nerd,this.x,this.y);

    };
    document.addEventListener('keydown', function(event){
        var key_press = event.keyCode;
        //alert(key_press);
        if(key_press == "37"){
            player.x-=10;


        }
        if(key_press == "39"){
            player.x+=10;

        }
    })






}