window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  
  const menuBtn = document.querySelector('.menu-btn');
  const navigation = document.querySelector('.navigation');
  const navigationItems = document.querySelectorAll('.navigation a');
  
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
  });
  
  navigationItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navigation.classList.remove('active');
    });
  });
  
  const scrollBtn = document.querySelector('.scrollToTop-btn');
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500);
  });
  scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  
  window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal');
    
    for(let i = 0; i< reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;
      
      if(revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }
  });
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opocity = "0";
    setTimeout( function () {
      loader.style.display = "none";
    }, 100);
  }, 200);
});



//////////////////
// const countEl = document.getElementById(viewCount);
// counter();
// function counter() {
//   fetch("https://api.countapi.xyz/update/laptop/mouse/?amount=1")
//   .then( (res) => res.json())
//   .then( (res) => {
//     CSSCounterStyleRule.innerHTML = res.value;
//   });
// }

// for Title : 

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back :(" ;
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});

//
