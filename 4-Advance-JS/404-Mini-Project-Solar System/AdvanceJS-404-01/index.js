

 /*const parent=document.getElementById("container");
 
 const content_el =document.createElement("div");
 content_el.classList.add('content');
 parent.appendChild(content_el);

 const image_el =document.createElement("div");
 image_el.classList.add("image");

 const img =document.createElement('img');
 img.src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Rotating_earth_%28large%29_transparent.gif";

 image_el.appendChild(img);

  content_el.appendChild(image_el);

 
 const text_el = document.createElement("div");
 text_el.classList.add("text")

 const h3_el=document.createElement("h3");
 h3_el.innerHTML="weight of object on Earth";

 text_el.appendChild(h3_el);

 const circle_el=document.createElement('div');
 circle_el.classList.add('circle');
 text_el.appendChild(circle_el);
 const span_el= document.createElement('div');
 span_el.classList.add('span2');

 circle_el.appendChild(span_el);
 const sp_el=document.createElement('span');
 sp_el.innerHTML="00.0 N";


 span_el.appendChild(sp_el);


 
 content_el.appendChild(text_el);*/

 function calculate(){
     
    var masskg= document.getElementById("input_mass").value;
    var planets_mass=document.getElementById("select_option").value;

    var total=masskg*planets_mass;
    total=Math.round(total*100)/100;
    total=total.toFixed(2);
   

    document.getElementById('total').innerHTML=total;
    

    
    var name_planet =document.getElementById("planet").value;
    name_planet.innerHTML="select_option";


   

 }



 document.getElementById("click").onclick= function(){
    calculate();
}






 
  

