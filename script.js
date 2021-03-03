var a=document.querySelector('button');
var b=document.querySelector('h1');

var variables=createvariables(10000000,99999999);
function getRandomNumbers(i,j){
    var x=j-i+1;
    var y=Math.random()*x;
    var res=Math.floor(y)+i;
    return res;
}
function createvariables(x,y){
    var arr=[];
    for(var i=x;i<=y;i++)
    arr.push(i);
    return arr;
}
a.addEventListener('click',()=>{
    if(variables.length==0){
        b.innerHTML="All numbers in the given range were generated";
    }
    else{
var ind=getRandomNumbers(0,variables.length-1);
var val=variables[ind];
variables.splice(ind,1);
b.innerHTML=val;
    }
});
