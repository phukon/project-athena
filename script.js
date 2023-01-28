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
    let description1 = document.querySelector("#article_1_descriptionBox");
    let description2 = document.querySelector("#article_2_descriptionBox");
    let description3 = document.querySelector("#article_3_descriptionBox");
    let description4 = document.querySelector("#article_4_descriptionBox");

      result.forEach((descriptionBox) => {
        // create a list element for each pet
        let text = document.createElement('div');

        if (descriptionBox.name == "article_1_descriptionBox") {
          text.textContent = descriptionBox?.description;
          description1.appendChild(text);
        } else if (descriptionBox.name == 'article_2_descriptionBox') {
          text.textContent = descriptionBox?.description;
          description2.appendChild(text);
        } else if (descriptionBox.name == 'article_3_descriptionBox') {
          text.textContent = descriptionBox?.description;
          description3.appendChild(text);
        } else {
          text.textContent = descriptionBox?.description;
          description4.appendChild(text);
        }
        
    });
  })
  .catch((err) => console.error(err));