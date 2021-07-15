function result(){
    var p = Number(document.getElementById("phy").value);
    var c = Number(document.getElementById("chem").value);
    var m = Number(document.getElementById("maths").value);
    var e = Number(document.getElementById("eng").value);
    var s = Number(document.getElementById("cs").value);
    var total=p+c+m+e+s;
    var max=500;
    var per=(total/max) * 100;

    document.getElementById("percentage").innerHTML= per + "%";
    if(per>90){grade="A+";}
    else if(per<90 && per>80){grade="A";}
    else if(per<80 && per>70){grade="B";}
    else if(per<70 && per>60){grade="C";}
    else if(per<60 && per>50){grade="D";}
    else if(per<50){
        grade="F";
        document.getElementById("extra").innerHTML="You Failed, BETTER LUCK NEXT TIME! ";
    }
    
}