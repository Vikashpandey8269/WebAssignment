
const showres=(e)=>{
    
    display(e.target.value);
 }
 function display(element){
     const filter=countries_data.filter((value)=>{
         if(value.name.startsWith(element)){
             return true;
         }
         return false;
     });
 
   
     const parent = document.getElementById('grid');

     parent.innerHTML="";

     filter.forEach((e)=>{


        const new_row=document.createElement("div");
         const new_countries=document.createElement("p");

       

         new_countries.innerHTML=e.name;
         new_row.appendChild(new_countries);
         parent.appendChild(new_row);
         const country=document.getElementById("no-of-country");
         country.innerHTML=`countries start with ${element} are ${filter.length}`;
 
     });
 }


 document.getElementById("search-form").addEventListener("keyup",showres);
 
 