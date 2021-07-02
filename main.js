
const tout = document.querySelector('.tout');
const printemps = document.querySelector('.printemps');
const ete = document.querySelector('.ete');
const automne = document.querySelector('.automne');
const hiver = document.querySelector('.hiver');


let spring = document.querySelectorAll('.spring')[0];
let summer = document.querySelectorAll('.summer')[0];
let autumn = document.querySelectorAll('.autumn')[0];
let winter = document.querySelectorAll('.winter')[0];

let rowcount = document.querySelector('.row');



let menuOpen = false;

printemps.addEventListener('click', function() {

    for (row=0; row<=3; row++){
             
    document.querySelectorAll('.summer')[row].setAttribute("style", "display:none");
    document.querySelectorAll('.autumn')[row].setAttribute("style", "display:none");
    document.querySelectorAll('.winter')[row].setAttribute("style", "display:none");
    document.querySelectorAll('.spring')[row].setAttribute("style", "display:block");

    if (!menuOpen) {
        printemps.classList.add('open');
        menuOpen = true;

       
    }else {
        printemps.classList.remove('open');
        menuOpen = false;
    }
    if (menuOpen) {
        printemps.setAttribute("style", "border:2px solid red");
        ete.setAttribute("style", "border:block");
        automne.setAttribute("style", "border:block");
        hiver.setAttribute("style", "border:block");
        tout.setAttribute("style", "border:block");
    }
   
  }});


  ete.addEventListener('click', function() {

    for (row=0; row<=3; row++){
             
    document.querySelectorAll('.spring')[row].setAttribute("style", "display:none");
    document.querySelectorAll('.autumn')[row].setAttribute("style", "display:none");
    document.querySelectorAll('.winter')[row].setAttribute("style", "display:none");
    document.querySelectorAll('.summer')[row].setAttribute("style", "display:block");

    if (!menuOpen) {
        ete.classList.add('open');
        menuOpen = true;

       
    }else {
        ete.classList.remove('open');
        menuOpen = false;
    }
    if (menuOpen) {
        ete.setAttribute("style", "border:2px solid red");
        printemps.setAttribute("style", "border:block");
        automne.setAttribute("style", "border:block");
        hiver.setAttribute("style", "border:block");
        tout.setAttribute("style", "border:block");
    }
    
  }});


  automne.addEventListener('click', function() {

    for (row=0; row<=3; row++){
             
    document.querySelectorAll('.spring')[row].setAttribute("style", "display:none");
    document.querySelectorAll('.summer')[row].setAttribute("style", "display:none");
    document.querySelectorAll('.winter')[row].setAttribute("style", "display:none");
    document.querySelectorAll('.autumn')[row].setAttribute("style", "display:block");

    if (!menuOpen) {
        automne.classList.add('open');
        menuOpen = true;

       
    }else {
        automne.classList.remove('open');
        menuOpen = false;
    }
    if (menuOpen) {
        automne.setAttribute("style", "border:2px solid red"); 
        ete.setAttribute("style", "border:block");
        printemps.setAttribute("style", "border:block");
        hiver.setAttribute("style", "border:block");
        tout.setAttribute("style", "border:block");  
    }
   

  }});


hiver.addEventListener('click', function() {

    for (row=0; row<=3; row++){
             
    document.querySelectorAll('.spring')[row].setAttribute("style", "display:none");
    document.querySelectorAll('.summer')[row].setAttribute("style", "display:none");
    document.querySelectorAll('.autumn')[row].setAttribute("style", "display:none");
    document.querySelectorAll('.winter')[row].setAttribute("style", "display:block");

    if (!menuOpen) {
        hiver.classList.add('open');
        menuOpen = true;

       
    }else {
        hiver.classList.remove('open');
        menuOpen = false;
    }
    if (menuOpen) {
        ete.setAttribute("style", "border:block");
        printemps.setAttribute("style", "border:block");
        automne.setAttribute("style", "border:block");
        hiver.setAttribute("style", "border:2px solid red");
        tout.setAttribute("style", "border:block");
    }
   

  }});


  tout.addEventListener('click', function() {

    for (row=0; row<=3; row++){
        
    document.querySelectorAll('.summer')[row].setAttribute("style", "display:row");
    document.querySelectorAll('.autumn')[row].setAttribute("style", "display:row");
    document.querySelectorAll('.winter')[row].setAttribute("style", "display:row");
    document.querySelectorAll('.spring')[row].setAttribute("style", "display:row");

    if (!menuOpen) {
        tout.classList.add('open');
        menuOpen = true;

       
    }else {
        tout.classList.remove('open');
        menuOpen = false;
    }
    if (menuOpen) {
        tout.setAttribute("style", "border:2px solid red");
        ete.setAttribute("style", "border:block");
        printemps.setAttribute("style", "border:block");
        automne.setAttribute("style", "border:block");
        hiver.setAttribute("style", "border:block");
        }
    
  }});
