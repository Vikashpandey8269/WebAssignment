
 /*coding use for tab */

document.getElementsByTagName('a')[0].addEventListener('click',function(){
    document.getElementsByClassName('container')[0].style.display="block";
    document.getElementsByClassName('container2')[0].style.display="none";
    document.getElementsByClassName('container')[1].style.display="none";

    document.getElementsByTagName('a')[0].classList.add('active');
    document.getElementsByTagName('a')[1].classList.remove('active');
    document.getElementsByTagName('a')[2].classList.remove('active');


});
document.getElementsByTagName('a')[1].addEventListener('click',function(){
    document.getElementsByClassName('container2')[0].style.display="block";
    document.getElementsByClassName('container')[0].style.display="none";
    document.getElementsByClassName('container')[1].style.display="none";
    
    document.getElementsByTagName('a')[1].classList.add('active');
    document.getElementsByTagName('a')[0].classList.remove('active');
    document.getElementsByTagName('a')[2].classList.remove('active');


});
document.getElementsByTagName('a')[2].addEventListener('click',function(){
    document.getElementsByClassName('container')[1].style.display="block";
    document.getElementsByClassName('container2')[0].style.display="none";
    document.getElementsByClassName('container')[0].style.display="none";
    
    document.getElementsByTagName('a')[2].classList.add('active');
    document.getElementsByTagName('a')[0].classList.remove('active');
    document.getElementsByTagName('a')[1].classList.remove('active');


});

/** coding for slider 

const slides=document.querySelectorAll(".slider");
var counter=0;

slides.forEach(
    (slider,index) => {
        slider.style.left =`${index * 100}%`
    }
)

const goPre =()=>{
    counter--;
   
    slideImage()

}
const goNext =()=>{
    counter++;
   
    slideImage()

}

const slideImage = () =>{
    slides.forEach(
        (slider)=>{
            slider.style.transform=`translateX(-${counter * 100}%)`
        }
    )
  
}*/
/* input*/
const input=(e)=>{
    const text=document.getElementById('wrote');
    const value=(e.target.value);
      text.innerHTML=value;
}


document.getElementById('input_field').addEventListener('input',input);