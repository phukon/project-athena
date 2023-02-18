import { showPopup } from "/src/components/popup.js"
import { fetchArticles } from "/src/components/fetchArticles.js";
import { queryQuestionPaper } from "/src/components/fetchQuestionPaper.js";
import { queryResourcePage } from "/src/components/resourcePage.js";

// ------------> Interaction <---------------

/* -- Mobile Nav Toggle -- */
const nav = document.querySelector("nav");
const navButton = document.getElementById('nav-toggle-button');

navButton.addEventListener('click', () => {
  nav.dataset.transitionable = "true";
  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";

})

window.matchMedia("(max-width: 800px)").onchange = e => {
  nav.dataset.transitionable = "false";
  nav.dataset.toggled = "false";
};

//----------------------------------------------
let activeIndex = 0;
const slides = document.getElementsByTagName("article");
const handleLeftClicks = document.querySelectorAll('.handleLeftClick');
const handleRightClicks = document.querySelectorAll('.handleRightClick');

for (let i = 0; i < handleLeftClicks.length; i++) {
  handleLeftClicks[i].addEventListener('click', () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
          
    currentSlide.dataset.status = "after";
    
    nextSlide.dataset.status = "becoming-active-from-before";
    
    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
  });
}

for (let i = 0; i < handleRightClicks.length; i++) {
  handleRightClicks[i].addEventListener('click', () => {
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
    
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
          nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
    
    currentSlide.dataset.status = "before";
    
    nextSlide.dataset.status = "becoming-active-from-after";
    
    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
  });
}


//-------------------------> Sanity <---------------------------
//-------------------------> Three queries <---------------------------

let PROJECT_ID = "jbb9mv51";
let DATASET = "production";

// This is for the resources content.
if (window.location.pathname == "/public/html/resources.html") {
  queryResourcePage(PROJECT_ID, DATASET);
}

// Only one query among these two must run at a time.
if (window.location.pathname == "/index.html") {
    fetchArticles(PROJECT_ID, DATASET);
    showPopup();
  } else {
    if (window.location.pathname !== "/public/html/about.html") {
      const typeButton = document.getElementById('typeValue');
      typeButton.addEventListener('click', () => {
      var branch = document.getElementById("branch").value;
      var semester = document.getElementById("semester").value;
      var type = `${branch}-${semester}`;
  
      sessionStorage.setItem("type", type);
      let storedType = sessionStorage.getItem("type");
      if (window.location.pathname !== "/public/html/about.html") {
        queryQuestionPaper(PROJECT_ID, DATASET, storedType);
        sessionStorage.clear();
      }
      });
    }
  }