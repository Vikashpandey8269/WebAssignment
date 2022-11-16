/*    body start for 2nd page //*/

const textpage=document.getElementById('textpage');
const textpage_container=document.createElement('div');
textpage_container.classList.add('container2');

const pointer=document.createElement('div');
pointer.classList.add('pointer');

const Question_no=document.createElement('div');
Question_no.classList.add('Question_no');
Question_no.innerHTML='<i class="fa-sharp fa-solid fa-circle-info"></i>';

const h2_textpage=document.createElement('h2');
h2_textpage.innerHTML='Question no 1 of 5';

Question_no.appendChild(h2_textpage);


pointer.appendChild(Question_no);

const timer=document.createElement('div');
timer.classList.add('timer');

const hour_timer=document.createElement('button');
timer.appendChild(hour_timer);
const minute_timer=document.createElement('button');
timer.appendChild(minute_timer);
const seconds_timer=document.createElement('button');
timer.appendChild(seconds_timer);


pointer.appendChild(timer);





textpage_container.appendChild(pointer);

const br_tag=document.createElement('br');
textpage_container.appendChild(br_tag);
const Question_dif=document.createElement('div');
Question_dif.classList.add('Question_dif');

const h2_Question_dif=document.createElement('h2');

h2_Question_dif.innerHTML="Q. What is the name of Team Fortress 2's Heavy Weapons Guy's minigun?";

Question_dif.appendChild(h2_Question_dif);

textpage_container.appendChild(Question_dif);

const discription=document.createElement('div');
discription.classList.add('discription');

const h3_discription=document.createElement('h3');
h3_discription.innerHTML='Please choose one of the following answers:';
discription.appendChild(h3_discription);

textpage_container.appendChild(discription);


const discroption_bottom=document.createElement('div');
discroption_bottom.classList.add('border2');

textpage_container.appendChild(discroption_bottom);

const ans_menu=document.createElement('div');
ans_menu.classList.add('menu2');

const ans_A=document.createElement('a');

const ans_point=document.createElement('b');
ans_point.innerHTML='A.';

ans_A.appendChild(ans_point);

ans_menu.appendChild(ans_A);

const br_tag2=document.createElement('br');
ans_menu.appendChild(br_tag2);
const br_tag3=document.createElement('br');
ans_menu.appendChild(br_tag3);


const ans_b=document.createElement('a');

const ans_boint=document.createElement('b');
ans_boint.innerHTML='B.';

ans_b.appendChild(ans_boint);

ans_menu.appendChild(ans_b);


const br_tag4=document.createElement('br');
ans_menu.appendChild(br_tag4);
const br_tag5=document.createElement('br');
ans_menu.appendChild(br_tag5);

const ans_c=document.createElement('a');

const ans_coint=document.createElement('b');
ans_coint.innerHTML='C.';

ans_c.appendChild(ans_coint);

ans_menu.appendChild(ans_c);

const br_tag6=document.createElement('br');
ans_menu.appendChild(br_tag6);
const br_tag7=document.createElement('br');
ans_menu.appendChild(br_tag7);

const ans_d=document.createElement('a');

const ans_doint=document.createElement('b');
ans_doint.innerHTML='D.';

ans_d.appendChild(ans_doint);

ans_menu.appendChild(ans_d);






textpage_container.appendChild(ans_menu);

const discroptio_bottom=document.createElement('div');
discroptio_bottom.classList.add('border2');

textpage_container.appendChild(discroptio_bottom);

const next_button=document.createElement('div');
next_button.classList.add('next_button');

const button_click=document.createElement('button');
button_click.innerHTML='Next <i class="fa-solid fa-forward"></i> '
next_button.appendChild(button_click);

textpage_container.appendChild(next_button);


textpage.appendChild(textpage_container);