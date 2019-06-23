var search = document.querySelector(".main-header__form");
var toggle = document.querySelector(".main-header__toggle");

function openPopup() {
  search.classList.add("main-header__form_opened");
  toggle.classList.add("main-header__toggle_opened");
  setTimeout(function() {
    search.classList.add("main-header__form_obvious"); 
  }, 50
)};

function closePopup() {
  search.classList.remove("main-header__form_obvious");
  toggle.classList.remove("main-header__toggle_opened");
  setTimeout(function() {
    search.classList.remove("main-header__form_opened");
  }, 350
)};

var interPopup = function() {  
  toggle.addEventListener("click", function() {
    if(search.classList.contains("main-header__form_opened") && search.classList.contains("main-header__form_obvious")) {
      closePopup(); 
    } else {
      openPopup();
    }
  });
};

document.addEventListener("DOMContentLoaded", function() {
  if(toggle) {
    interPopup();
  }
});



var fields = document.querySelectorAll(".form__search");
var capts = document.querySelectorAll(".form__capt");

var focusField = function(item, capt) {
  item.addEventListener("focus", function() {
    capt.classList.add("form__capt--full");
  });
}

var blurField = function(item, capt) {
  item.addEventListener("blur", function() {
    if(!(item.value)) {
      capt.classList.remove("form__capt--full");
    }
  });
}

var interSearch = function () {
  for(var i = 0; i < fields.length; i++) {
    if(!(fields[i].value)) {
      focusField(fields[i], capts[i]);
      blurField(fields[i], capts[i]);
    }
  };
}

interSearch();



var changeTabColor = function() {
  var root = document.querySelector(":root");
  var rootStyle = getComputedStyle(root);
  var metaTheme = document.querySelector("meta[name=theme-color]");
  var themeColor = rootStyle.getPropertyValue("--theme-color");
  metaTheme.setAttribute("content", themeColor);
};

changeTabColor();



// function resize(){
//     one = document.getElementsByClassName('main-header__form')[0];
//     two = document.getElementsByClassName('main-header__toggle')[0];
    
//     if(window.innerWidth < 500){
//         one.style.backgroundColor = 'green';
//     }
//        if(window.innerWidth > 899){
//         if(two.classList.contains("main-header__toggle_opened")) {
//           two.classList.remove("main-header__toggle_opened");
//         }
//         if(one.classList.contains("main-header__form_opened")) {
//           one.classList.remove("main-header__form_opened");
//         }
//     }
// }
// window.onresize = resize;



// var fixViewportHeight = function() {
//   if(window.innerWidth < 900) {
//     var header = document.querySelector(".main-header");
//     var viewportHeight = header.offsetHeight + 1;
//     header.style.height= viewportHeight + "px";
//     console.log("kek");
//   }
// };

// // fixViewportHeight();

// window.addEventListener('resize', function() {
//   fixViewportHeight();
//   // let vh = window.innerHeight * 0.01;
//   // document.documentElement.style.setProperty('--vh', `${vh}px`);
// });