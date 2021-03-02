window.onload=function(){
    var liNode = document.querySelectorAll('.header .nav .log .navLi .liNode');
    var hidNode = document.querySelectorAll('.header .nav .log .navLi .liNode .hidBlock')
    for(var i = 0;i<liNode.length;i++){   
        liNode[i].index=i;
        liNode[i].onmouseenter=function(){
            hidNode[this.index].style.display="block";
        }
        liNode[i].onmouseleave = function () {
            hidNode[this.index].style.display = "none";
        }
    }

    //轮播
    var List = document.querySelector('.banner .slideshow .pictureShow .ulNode');
    var iconNode = document.querySelectorAll('.banner .slideshow .pictureShow .picturePoint li');
    var isMove=false;
    var timeAll=1382;
    var timestep=20;
    timer = null;
    for (var i = 0; i < iconNode.length;i++){
        iconNode[i].index=i;
        iconNode[i].onclick=function(){
            move((this.index+1)* -1382)
        }
    }

    function move(flag){
        if(isMove){
            return;
        }
        isMove = true;
        setTimeout(function(){
            isMove =false;
        },400);
        if(flag == -6910 ){
            flag = -1382
        }else if(flag == 0){
            flag= -5528
        }
        List.style.left = flag + 'px'
        var index = Math.abs(flag/1382)
        
        for (var i = 0; i < iconNode.length;i++){
            iconNode[i].className="";
        }
        iconNode[index-1].className = "current";
    }
    var autoIndex = 1;
    autoRun();
    function autoRun(){
        autoTimer=setInterval(function(){
            autoIndex++;
            move(autoIndex *-1382)
            if(autoIndex ==5){
                autoIndex =1;
            }
        },4000)
    }
    
}

    