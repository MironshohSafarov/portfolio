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
});

window.addEventListener("DOMContentLoaded", () =>{
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opocity = "0";
    setTimeout( function () {
      loader.style.display = "none";
    }, 1000);
  }, 1500);
});

// Get the current view count 
var viewCount = localStorage.getItem('viewCount'); 
 
// If this is the first time the page has been loaded, initialize the count to 1 
if (!viewCount) { 
  viewCount = 1; 
} else { 
  viewCount = parseInt(viewCount) + 1; 
} 
// Check if the view count is already present in local storage
var views = localStorage.getItem('views');

function incrementViewCount() {
  var viewCount = getCookie("viewCount");
  if (viewCount) {
    viewCount = parseInt(viewCount) + 1;
  } else {
    viewCount = 1;
  }
  setCookie("viewCount", viewCount, 365);
  
  var viewText = "view";
  if (viewCount > 1) {
    viewText = "views";
  }
  
  document.getElementById("viewCount").innerHTML = viewCount + " " + viewText;
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}



// const msm = alert("Websayt test rejimida ishlamoqda. Ma'lumotlar 'Lorem' yordamida to'ldirilgan!")

// const username = prompt("Please enter your name", "your name");
// alert(`"Welcome" ${username}`)