/* -- Carousel Navigation -- */

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentSlide.dataset.status = "after";
  
  nextSlide.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentSlide.dataset.status = "before";
  
  nextSlide.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

/* -- Mobile Nav Toggle -- */

const nav = document.querySelector("nav");

const handleNavToggle = () => {  
  nav.dataset.transitionable = "true";
  
  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
}

window.matchMedia("(max-width: 800px)").onchange = e => {
  nav.dataset.transitionable = "false";

  nav.dataset.toggled = "false";
};

// Sanity
let PROJECT_ID = "jbb9mv51";
let DATASET = "production";
let QUERY = encodeURIComponent('*[_type == "descriptionBox"]');

// Compose the URL for your project's endpoint and add the query
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

// fetch the content
fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {
    // get the list element, and the first item
    let description1 = document.querySelector("#article-1-descriptionBox");
    let title1 = document.querySelector('#article-title1');

    let description2 = document.querySelector("#article-2-descriptionBox");
    let title2 = document.querySelector('#article-title2');

    let description3 = document.querySelector("#article-3-descriptionBox");
    let title3 = document.querySelector('#article-title3');

    let description4 = document.querySelector("#article-4-descriptionBox");
    let title4 = document.querySelector('#article-title4');
    const loadingElements = document.getElementsByClassName("loading");

    if (result.length > 0) {
      for (let i = 0; i < loadingElements.length; i++) {
        loadingElements[i].style.display = "none";
    }
    };

      result.forEach((descriptionBox) => {
        // create a list element for each pet
        let text = document.createElement('div');
        let title = document.createElement('div');

        
        if (descriptionBox.name == "article-1-descriptionBox") {
          text.textContent = descriptionBox?.description;
          title.textContent = descriptionBox?.titleBox;

          description1.appendChild(text);
          title1.appendChild(title);
        } else if (descriptionBox.name == 'article-2-descriptionBox') {
          text.textContent = descriptionBox?.description;
          title.textContent = descriptionBox?.titleBox;

          description2.appendChild(text);
          title2.appendChild(title);
        } else if (descriptionBox.name == 'article-3-descriptionBox') {
          text.textContent = descriptionBox?.description;
          title.textContent = descriptionBox?.titleBox;

          description3.appendChild(text);
          title3.appendChild(title);
        } else {
          text.textContent = descriptionBox?.description;
          title.textContent = descriptionBox?.titleBox;

          description4.appendChild(text);
          title4.appendChild(title);
        }
        
    });
      
    
 
  })
  .catch((err) => console.error(err));