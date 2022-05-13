function number (num){
    var result =document.getElementById("number1");
    result.value += num;
}

function result(){
    var result=document.getElementById("number1");
    result.value=eval(result.value);
}

function clearresult(){
    var result=document.getElementById("number1");
    result.value = "";
}








// function add(){
//     let a1=document.getElementsByClassName("number1")
//     let a2=document.getElementsByClassName("number2")
    
//     number1=parseFloat(a1[0].value)
//     number2=parseFloat(a2[0].value)

//     sum =number1+number2;

//     let result=document.getElementById("result");
//     result.innerHTML=sum;
// }
// function minus(){
//     let a1=document.getElementsByClassName("number1")
//     let a2=document.getElementsByClassName("number2")
    
//     number1=parseFloat(a1[0].value)
//     number2=parseFloat(a2[0].value)

//     sum =number1-number2;

//     let result=document.getElementById("result");
//     result.innerHTML=sum;
// }
// function multipy(){
//     let a1=document.getElementsByClassName("number1")
//     let a2=document.getElementsByClassName("number2")
    
//     number1=parseFloat(a1[0].value)
//     number2=parseFloat(a2[0].value)

//     sum =number1*number2;

//     let result=document.getElementById("result");
//     result.innerHTML=sum;
// }
// function divide(){
//     let a1=document.getElementsByClassName("number1")
//     let a2=document.getElementsByClassName("number2")
    
//     number1=parseFloat(a1[0].value)
//     number2=parseFloat(a2[0].value)

//     sum =number1/number2;

//     let result=document.getElementById("result");
//     result.innerHTML=sum;
// }