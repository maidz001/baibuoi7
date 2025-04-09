alert("Hello World");
function m1(){
    let a=document.getElementById("dayso").value;
    if(a%2==0){
        alert("so chan")
    }
    else{
        alert("so le");
    }
    
}
function m2(){
    let a=document.getElementById("dayso1").value;
    var max=0;
    for(let i=0;i<11;i++){    
         if(max<a%10){
            max=a%10;
         }
         a=Math.floor(a/10);
    }
    alert("so lon nhat la "+max)
}
function m3(){
    let a=document.getElementById("dayso1").value;
    var min=10;
    for(let i=0;a>0;i++){  
         if(min>a%10){
            min=a%10;
         }
         a=Math.floor(a/10);

    }
    alert("so be nhat la "+min);
}
let soNgauNhien = Math.floor(Math.random() * 11);
console.log(soNgauNhien);
function m4(){
    if(document.getElementById("songaunhien").value==soNgauNhien){
        alert("dung roi")
    }
    else{
        alert("sai roi")
    }
}