window.onload = function(){
    var startBtn = document.getElementById("start");
    var stopBtn = document.getElementById("stop");
    var animatBtn = document.getElementById("animation")
    var fontSizeBtn = document.getElementById("fontsize")
    var textArea = document.getElementById("text-area")
    var whichone = animatBtn.value;
    var animate;
    var timeout = 250;
    var turbo = document.getElementById("turbo")

    textArea.className=fontSizeBtn.value

    if(whichone==="Blank"){
        startBtn.disabled=true
        turbo.disabled=true;
    }
    startBtn.onclick = makeANimation;

    animatBtn.onchange = function () {
        if(startBtn.disabled===true){
            startBtn.disabled=false;
        }

        whichone = this.value;
        textArea.value = ANIMATIONS[whichone]
        if(whichone==="Blank"){
            startBtn.disabled=true
            turbo.disabled=true
        }

    }

    stopBtn.onclick = function(){
        clearInterval(animate)
        startBtn.disabled=false
        stopBtn.disabled=true;
        animatBtn.disabled=false;
        turbo.disabled=true;
    }

    fontSizeBtn.onchange = function () {

      textArea.className = this.value;
    }

    turbo.onchange = function () {
        if(this.checked==true){
            timeout=50
        }else{
            timeout=250
        }

        clearInterval(animate)
        makeANimation();
    }


    function makeANimation(){
        var its =ANIMATIONS[whichone].split("=====")
        var i=0;
        animate=  setInterval(function () {

            textArea.className=fontSizeBtn.value
            textArea.value =its[i]
            if(i==its.length-1){
                i=0
            }else{
                i+=1
            }

        }, timeout);

        startBtn.disabled=true
        stopBtn.disabled=false;
        animatBtn.disabled=true;
        turbo.disabled=false;
    }


}