


async function getQuestion(){
    const apiurl ='https://opentdb.com/api.php?amount=10';
    const result= await fetch(`${apiurl}`);
    const data= await result.json();
   showQuestion(data.results[0]);
}
const start_play=document.querySelector('.play');
const text_page=document.querySelector('#textpage');


 

const main_container=document.getElementById("main");
const container=document.createElement("div");
container.classList.add("container");

const image=document.createElement("div");
image.classList.add("image");
const img_pic=document.createElement('img');
img_pic.src="https://safdarjamal.github.io/quiz-app/static/media/mind.525a3ae0.svg";

image.appendChild(img_pic);


container.appendChild(image);

const content=document.createElement('div');
content.classList.add('content');

const  header=document.createElement('div');
header.classList.add('header');
const h2=document.createElement('h2');
h2.innerHTML="The Ultimate Trivia Quiz";
header.appendChild(h2);

content.appendChild(header);

const border=document.createElement('div');
border.classList.add('border');

content.appendChild(border);

const main_content=document.createElement('div');
main_content.classList.add('main');
content.appendChild(main_content);

/*here use topic content for subject name*/

const topic_content=document.createElement('div');
topic_content.classList.add('topic_content');

const topic_category=document.createElement('div');
topic_category.classList.add('topic_category');
topic_category.innerHTML='Any Category  <i class="fa-solid fa-caret-down aa "></i>';

const dropdown_icon=document.createElement('i');
dropdown_icon.innerHTML="";

topic_category.appendChild(dropdown_icon);






topic_content.appendChild(topic_category);
const menu=document.createElement('select');
menu.classList.add('menu');

const select=document.createElement('div');
select.classList.add('select');
select.innerHTML=" Select Quiz category";
menu.appendChild(select);


const select_item=document.createElement('div');
select_item.classList.add('select_item');

const text=document.createElement('span');
text.classList.add('text');
text.innerHTML="Any Category"

select_item.appendChild(text);
menu.appendChild(select_item);
const item= document.createElement('div');
item.classList.add('item');

const text1= document.createElement('option');
text1.classList.add('text');
text1.innerHTML="math";

item.appendChild(text1);
menu.appendChild(item);







topic_content.append(menu);


main_content.appendChild(topic_content);
       /* end of subject name */
      /*here use topic content for question number*/
const topic_content_no=document.createElement('div');
topic_content_no.classList.add('topic_content');

const topic_category_no=document.createElement('div');
topic_category_no.classList.add('topic_category');
topic_category_no.innerHTML='Add Number of Question   <i class="fa-solid fa-caret-down  da"></i>';

topic_content_no.appendChild(topic_category_no);

const menu_for_no=document.createElement('div');
menu_for_no.classList.add('menu');

const select_item_no=document.createElement('div');
select_item_no.classList.add('select_item');
select_item_no.innerHTML='question';

menu_for_no.appendChild(select_item_no);

const item_no=document.createElement('div');
item_no.classList.add('item');

const text_no=document.createElement('span');
text_no.classList.add('text');
text_no.innerHTML="1";
item_no.appendChild(text_no);


menu_for_no.appendChild(item_no);

topic_content_no.appendChild(menu_for_no);


main_content.appendChild(topic_content_no);



 /*end of question no */
/*here use topic content for di */
const topic_content_Difficulty=document.createElement('div');
topic_content_Difficulty.classList.add('topic_content');

const topic_category_Difficulty=document.createElement('div');
topic_category_Difficulty.classList.add('topic_category');
topic_category_Difficulty.innerHTML='Select Difficulty Level <i class="fa-solid fa-caret-down ca "></i>';

topic_content_Difficulty.appendChild(topic_category_Difficulty);

const menu_for_Difficulty=document.createElement('div');
menu_for_Difficulty.classList.add('menu');

const select_item_Difficulty=document.createElement('div');
select_item_Difficulty.classList.add('select_item');
select_item_Difficulty.innerHTML='Any Difficulty';

menu_for_Difficulty.appendChild(select_item_Difficulty);

const item_Difficulty=document.createElement('div');
item_Difficulty.classList.add('item');

const text_Difficulty=document.createElement('span');
text_Difficulty.classList.add('text');
text_Difficulty.innerHTML="Easy";
item_Difficulty.appendChild(text_Difficulty);


menu_for_Difficulty.appendChild(item_Difficulty);

topic_content_Difficulty.appendChild(menu_for_Difficulty);


main_content.appendChild(topic_content_Difficulty);



/* end of select Difficulty */
/*here use topic content for Question type */
const topic_content_Type=document.createElement('div');
topic_content_Type.classList.add('topic_content');

const topic_category_Type=document.createElement('div');
topic_category_Type.classList.add('topic_category');
topic_category_Type.innerHTML='Select Question type  <i class="fa-solid fa-caret-down ba "></i>';

topic_content_Type.appendChild(topic_category_Type);

const menu_for_Type=document.createElement('div');
menu_for_Type.classList.add('menu');

const select_item_Type=document.createElement('div');
select_item_Type.classList.add('select_item');
select_item_Type.innerHTML='Any Type';

menu_for_Type.appendChild(select_item_Type);

const item_Type=document.createElement('div');
item_Type.classList.add('item');

const text_Type=document.createElement('span');
text_Type.classList.add('text');
text_Type.innerHTML="True/False";
item_Type.appendChild(text_Type);


menu_for_Type.appendChild(item_Type);

topic_content_Type.appendChild(menu_for_Type);


main_content.appendChild(topic_content_Type);



   /* end of select Difficulty /*

/*                                      topic start for time section          */                                 

const time=document.createElement('div');
time.classList.add('time');
content.appendChild(time);


/*here use topic content for select hour*/
const time_zone_hour=document.createElement('div');
time_zone_hour.classList.add('texttime');

const time_category=document.createElement('div');
time_category.classList.add('time_category');
time_category.innerHTML='<i class="fa-solid fa-caret-down"></i>';


const time_zone_hour_input=document.createElement('input');
time_zone_hour_input.classList.add('input');
time_zone_hour_input.innerHTML='' ;
time_category.appendChild(time_zone_hour_input);

time_zone_hour.appendChild(time_category)

const menu_time_for_hour=document.createElement('div');
menu_time_for_hour .classList.add('menu_time');

const time_zone_header=document.createElement('div');
time_zone_header.classList.add('time_header');

const time_zone_select=document.createElement('span');
time_zone_select.classList.add('text');
time_zone_select.innerHTML="Select time in hour"
time_zone_header.appendChild(time_zone_select);

menu_time_for_hour.appendChild(time_zone_header);

const select_hour=document.createElement('div');
select_hour.classList.add('item_time');
menu_time_for_hour.appendChild(select_hour);

const select_time_in_hour=document.createElement('span');
select_time_in_hour.classList.add('text');
select_time_in_hour.innerHTML='1';

select_hour.appendChild(select_time_in_hour);



time_zone_hour.appendChild(menu_time_for_hour);




time.appendChild(time_zone_hour);


 /*end of select hours *///*/

/*here use topic content for select minutes //*/
const time_zone_minutes=document.createElement('div');
time_zone_minutes.classList.add('texttime');

const time_category_minutes=document.createElement('div');
time_category_minutes.classList.add('time_category');
time_category_minutes.innerHTML='<i class="fa-solid fa-caret-down"></i>'


const time_zone_minutes_input=document.createElement('input');
time_zone_minutes_input.classList.add('input');

time_category_minutes.appendChild(time_zone_minutes_input);

time_zone_minutes.appendChild(time_category_minutes)

const menu_time_for_minutes=document.createElement('div');
menu_time_for_minutes.classList.add('menu_time');

const time_zone_header_minutes=document.createElement('div');
time_zone_header_minutes.classList.add('time_header');

const time_zone_select_minutes=document.createElement('span');
time_zone_select_minutes.classList.add('text');
time_zone_select_minutes.innerHTML="Select time in minutes"
time_zone_header_minutes.appendChild(time_zone_select_minutes);

menu_time_for_minutes.appendChild(time_zone_header_minutes);

const select_minutes=document.createElement('div');
select_minutes.classList.add('item_time');
menu_time_for_minutes.appendChild(select_minutes);

const select_time_in_minutes=document.createElement('span');
select_time_in_minutes.classList.add('text');
select_time_in_minutes.innerHTML='1';

select_minutes.appendChild(select_time_in_minutes);



time_zone_minutes.appendChild(menu_time_for_minutes);




time.appendChild(time_zone_minutes);


/* end of select minutes*///
/*here use topic content for select seconds//*/


const time_zone_seconds=document.createElement('div');
time_zone_seconds.classList.add('texttime');

const time_category_seconds=document.createElement('div');
time_category_seconds.classList.add('time_category');
time_category_seconds.innerHTML='<i class="fa-solid fa-caret-down"></i>';


const time_zone_seconds_input=document.createElement('input');
time_zone_seconds_input.classList.add('input');
time_zone_seconds_input.innerHTML="0" ;
time_category_seconds.appendChild(time_zone_seconds_input);

time_zone_seconds.appendChild(time_category_seconds)

const menu_time_for_seconds=document.createElement('div');
menu_time_for_seconds.classList.add('menu_time');

const time_zone_header_seconds=document.createElement('div');
time_zone_header_seconds.classList.add('time_header');

const time_zone_select_seconds=document.createElement('span');
time_zone_select_seconds.classList.add('text');
time_zone_select_seconds.innerHTML="Select time in seconds"
time_zone_header_seconds.appendChild(time_zone_select_seconds);

menu_time_for_seconds.appendChild(time_zone_header_seconds);

const select_seconds=document.createElement('div');
select_seconds.classList.add('item_time');
menu_time_for_seconds.appendChild(select_seconds);

const select_time_in_seconds=document.createElement('span');
select_time_in_seconds.classList.add('text');
select_time_in_seconds.innerHTML='1';

select_seconds.appendChild(select_time_in_seconds);



time_zone_seconds.appendChild(menu_time_for_seconds);




time.appendChild(time_zone_seconds);
/*end of select minutes*/




/*                                 topic end for time section          */                                          

const border_bottom=document.createElement('div');
border_bottom.classList.add('border');

content.appendChild(border_bottom);

/*      play Button */

const play=document.createElement('div');
play.classList.add('play');

const button=document.createElement('button');
button.innerHTML='  <i class="fa-solid fa-play"></i>  Play Now'

const  play_icon=document.createElement('div');
play_icon.classList.add('icon2');
button.appendChild(play_icon);
play.appendChild(button);

content.appendChild(play);

/*    play button end */












container.appendChild(content);




main_container.appendChild(container);


;