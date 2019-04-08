
var biggerBtn = document.getElementById("biggerDec");
var tfield = document.getElementById("myTextF");
var igpay = document.getElementById("igpay");
var Malkovitch = document.getElementById("Malkovitch");


var a = !10
alert(a)

biggerBtn.onclick = clickMe;
    var myInt =0

    function clickMe(){

    myInt = setInterval(function () {


        var size = parseInt(tfield.style.fontSize)
        if (size <= 50)
            size += 2
        else {
            size = 14
        }

        tfield.style.fontSize = "" + size + "pt"

    }, 500);


}

Malkovitch.onclick = function () {
        var str = tfield.value.trim()
        var strin = str.split(" ")
         str =""
        for(var i=0;i<strin.length;i++){

                if(strin[i].length>=5){
                    strin[i]='Malkovitch'
                }
           str +=" "+strin[i]
        }
     tfield.value=str
}

igpay.onclick = function(){
        tfield.style.fontFamily='Pig Latin'

}


bling.onchange = function(){

    if(this.checked==true){
      tfield.style.fontWeight="bold"
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')"
    }else{
        tfield.style.fontWeight="normal"
        document.body.style.background ='white'
    }

}