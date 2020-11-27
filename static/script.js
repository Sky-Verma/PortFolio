var menu = document.querySelectorAll("div");
menu[1].addEventListener("click", function (e) {
  var rows = document.querySelectorAll("hr");

  if (rows[0].id == "menu") {
    rows[1].style.opacity = 0;
    rows[0].id = "cross1";
    rows[2].id = "cross2";
    document.querySelector('ul').className='';
    var a=document.querySelectorAll('a');
    a[0].setAttribute('href','#home');
    a[1].setAttribute('href','#about');
    a[2].setAttribute('href','#skills');
    a[3].setAttribute('href','#projects');
    a[4].setAttribute('href','#contact');
    a[0].setAttribute('class','home');
    a[1].setAttribute('class','about');
    a[2].setAttribute('class','skills');
    a[3].setAttribute('class','projects');
    a[4].setAttribute('class','contact');
  } else {
    document.querySelector('ul').className='absolute';
    var a=document.querySelectorAll('a');
    a[0].setAttribute('href','');
    a[1].setAttribute('href','');
    a[2].setAttribute('href','');
    a[3].setAttribute('href','');
    a[4].setAttribute('href','');
    a[0].setAttribute('class','absolute');
    a[1].setAttribute('class','absolute');
    a[2].setAttribute('class','absolute');
    a[3].setAttribute('class','absolute');
    a[4].setAttribute('class','absolute');
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