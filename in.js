/*
var List = [];
function number(x){
    List.push(x);
    document.getElementById("DIS").innerText= List;    
}*/


var value1='';   
var value2 ='';
var xx ='';
var yy ='';
var operater;

function number(x){
    value1 = value1 +x; 
    document.getElementById("dis1").innerText = value1;
    document.getElementById("dis3").innerText = yy;
}

function ope(y){
    operater = y;
    switch(operater){
        case 'A':
            document.getElementById("dis2").innerText = "*";
            break;
        case 'C':
            document.getElementById("dis2").innerText = "+";
            break;
        case 'D':
            document.getElementById("dis2").innerText = "/";
            break;
        case 'BB':
            document.getElementById("dis2").innerText = "-";
            break;
    }
    
    value2 = '';
    xx = value1;
    document.getElementById("dis1").innerText = xx;
    document.getElementById("dis3").innerText = value2;
    document.getElementById("v2").innerText = "vlaue "+xx;
}
   

function num(x){
    value2 = (value2 +x);
    document.getElementById("dis1").innerText = xx;
    document.getElementById("dis3").innerText = value2;
    
}

function job(){
    var sum;
    var n1 = parseInt(xx);
    var n2 = parseInt(value2);

    
    /*if(operater == 'A'){
        sum = n1 * n2;
        document.getElementById("DIS").innerText = sum;
    }*/
    switch(operater){
        case 'A':
            sum = n1 * n2;
            document.getElementById("DIS").innerText = sum;
            break;
        case 'BB':
            sum = n1 - n2;
            document.getElementById("DIS").innerText = sum;
            break;
        case 'C':
            sum = n1 + n2;
            document.getElementById("DIS").innerText = sum;
            break;
        case 'D':
            sum = n1 / n2;
            document.getElementById("DIS").innerText = sum;
            break;
    }
}