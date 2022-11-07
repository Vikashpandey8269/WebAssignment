function validation(){
  var first_name = document.getElementById('first_name'). value;
  var last_name = document.getElementById('last_name'). value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var telephone = document.getElementById("telephone").value;
  var bio = document.getElementById("bio").value;


  var first_namecheck=/^[0-9A-Za-z. ]{3,16}$/;
  var last_namecheck =/^[0-9A-Za-z.]{3,16}$/;
  var emailcheck =/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  var passwordcheck = /^(?=.*d)(?=.*[a-zA-Z]).{6,20}$/;
  var telephonecheck =
      /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
   





  if(first_namecheck.test(first_name)){
    document.getElementById('firsttag').innerHTML ="";
}
else {
    document.getElementById('firsttag').innerHTML ="**first name must br alphanumeric and contain 3-16 characters";
    return false;
  }
  if(last_namecheck.test(last_name)){
    document.getElementById('lasttag').innerHTML="";
  }
  else{
    document.getElementById('lasttag').innerHTML="**last name must br alphanumeric and contain 3-16 characters";
    return false;
  }
  if ( emailcheck.test(email)) {
    document.getElementById("emails").innerHTML = "";
  } else {
    document.getElementById("emails").innerHTML ="Email must be valid address, e.g, example@exampl.com";
      return false;
    }
    if (passwordcheck.test(password)) {
      document.getElementById("pass").innerHTML = "";
    } else {
      document.getElementById("pass").innerHTML = "Password must be alphanumeric (@,_and-are alsoallowed) and between 6-20 characters";
      return false;
    }
    if(telephonecheck.test(telephone)){
      document.getElementById("tele").innerHTML="";
     }
     else {
      document.getElementById("tele").innerHTML = "A vaild telephone number(11 digit and 333-444-5556)";
      return false;
     }
     
     if (bio==""){
      document.getElementById("talk").innerHTML = "bio must be contain only lower latters,underscores,hyphons and be 8-50 characters";
      return false;
     }
  
}