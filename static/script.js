window.onscroll=function(){
  var nav=document.querySelector('nav');
  var home=document.querySelector('.home');
  var scroll=this.scrollY;
    if(scroll>10){
     
        nav.className='sticky';
    }
    else{
      nav.className='navbar-hidden';
      
    }
};
AOS.init();