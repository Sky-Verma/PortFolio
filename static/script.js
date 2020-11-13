var menu = document.querySelectorAll("div");
menu[1].addEventListener("click", function (e) {
  var rows = document.querySelectorAll("hr");

  if (rows[0].id == "menu") {
    rows[1].style.opacity = 0;
    rows[0].id = "cross1";
    rows[2].id = "cross2";
  } else {
    rows[1].style.opacity = 1;
    rows[0].id = "menu";
    rows[2].id = "menu";
  }
  
});

window.onscroll=function(){
  if(window.scrollY>0){
    document.querySelector('.profile-image').className='profile_image';
  }
  else{
    document.querySelector('.profile_image').className='profile-image';
  }
}