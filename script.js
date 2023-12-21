var body = document.querySelector('.color');
var signIn = document.querySelector('.signin1');
var signUp = document.querySelector('.signup1');

let upBtn = document.getElementById("up-btn2");

var toggle = document.getElementById('meme');



toggle.addEventListener('click', ()=>{
      openNav();
  });
function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    document.getElementById("dark-bg").style.width = "100%";
    document.querySelector('.closebtn').style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("dark-bg").style.width = "0";
    document.querySelector('.closebtn').style.display = "none";
}




// When the user scrolls down 3000px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
    upBtn.style.display = "grid";
  } else {
    upBtn.style.display = "none";
  }
}




