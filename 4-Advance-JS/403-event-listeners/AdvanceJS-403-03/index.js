function calculate(){
    var priceamt =document.getElementById("price").value;
var serviceamt=document.getElementById("service").value;
var peopleamt=document.getElementById("peopleamt").value;

if(priceamt ==="" ||serviceamt === 0){
    alert("Enter some amount");
    return ;

}
if(peopleamt ==="" || peopleamt <=0 ){
    peopleamt = 1;
    document.getElementById("each").style.display="none";
}
else{
    document.getElementById("each").style.display="block";
}
var total=(priceamt*serviceamt)/peopleamt;

total=Math.round(total*100)/100;

total=total.toFixed(2);

document.getElementById("totaltip").style.display = "block";

document.getElementById("tip").innerHTML = total;

}
document.getElementById("click").onclick= function(){
    calculate();
}