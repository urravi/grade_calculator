document.getElementById("clickme").onclick= result;
function result(event){
    let p = Number(document.getElementById("phy").value);
    let c = Number(document.getElementById("chem").value);
    let m = Number(document.getElementById("maths").value);
    let e = Number(document.getElementById("eng").value);
    let s = Number(document.getElementById("cs").value);
    let total=p+c+m+e+s;
    let max=500;
    let per=(total/max) * 100;
    let grade;

    document.getElementById("percentage").innerHTML= per + "%";
    event.preventDefault();
    if(per>90){grade="A+";}
    else if(per<90 && per>80){
        grade="A";
    }
    else if(per<80 && per>70){
        grade="B";
    }
    else if(per<70 && per>60){
        grade="C";
    }
    else if(per<60 && per>50){
        grade="D";
    }
    else if(per<50){ 
        grade="F";
        document.getElementById("extra").innerHTML="You Failed, BETTER LUCK NEXT TIME! "; 
    }
    
    document.getElementById("grade").innerHTML= grade;
    event.preventDefault();
}
