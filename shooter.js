let bulletX = 35;
let onFly = false;

function moveBullet(){
    if(onFly){
        bulletX += 6;
        if(bulletX >= 520){
            bulletX = 35;
            onFly = false;
    } else{
        setTimeout(moveBullet, 10);
    }
    bullet.style.left = bulletX +"px";
    }
}
function keyHandler(e){
    if(e.code == "Space" && !onFly){
        onFly = true;
        moveBullet();
    }
}