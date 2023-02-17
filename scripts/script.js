/* -- Carousel Navigation -- */

function showPopup() {
    // Check if the cookie has been set
    if (!document.cookie.replace(/(?:(?:^|.*;\s*)popupShown\s*\=\s*([^;]*).*$)|^.*$/, "$1")) {
      // Set the cookie
      document.cookie = "popupShown=true; expires=tue, 14 Feb 2023 23:59:59 GMT; path=/";
      // Show the popup
      alert("The site is under construction🚧🏗 with some features unavailable at this time. This is a one-man project and all support is appreciated. I will be open-sourcing the code under the MIT License. The resources are free for all, FOREVER!✨ Thanks");
    }
  }


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

let PROJECT_ID = "jbb9mv51";
let DATASET = "production";
let QUERY = encodeURIComponent('*[_type == "descriptionBox"]{name, description, titleBox, "imageUrl": mainImage.asset->url}');

// Compose the URL for your project's endpoint and add the query
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

// fetch the content
fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {
    // get the list element, and the first item
    let description1 = document.querySelector("#article-1-descriptionBox");
    let title1 = document.querySelector('#article-title1');
    let articleImage1 = document.getElementById('articleImage1');
    let articleImage2 = document.getElementById('articleImage2');
    let articleImage3 = document.getElementById('articleImage3');
    let articleImage4 = document.getElementById('articleImage4');

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
        //create a list element for each content
        let text = document.createElement('div');
        let title = document.createElement('div');
        let articleImage = document.createElement('img');
      
        // forgive me, this is some noobie code

        if (descriptionBox.name == "article-1-descriptionBox") {
          text.textContent = descriptionBox?.description;
          title.textContent = descriptionBox?.titleBox;
          articleImage.src = descriptionBox?.imageUrl;

          articleImage1.appendChild(articleImage);
          description1.appendChild(text);
          title1.appendChild(title);
        } else if (descriptionBox.name == 'article-2-descriptionBox') {
          text.textContent = descriptionBox?.description;
          title.textContent = descriptionBox?.titleBox;
          articleImage.src = descriptionBox?.imageUrl;

          articleImage2.appendChild(articleImage);
          description2.appendChild(text);
          title2.appendChild(title);
        } else if (descriptionBox.name == 'article-3-descriptionBox') {
          text.textContent = descriptionBox?.description;
          title.textContent = descriptionBox?.titleBox;
          articleImage.src = descriptionBox?.imageUrl;

          articleImage3.appendChild(articleImage);
          description3.appendChild(text);
          title3.appendChild(title);
        } else if (descriptionBox.name == 'article-4-descriptionBox') {
          text.textContent = descriptionBox?.description;
          title.textContent = descriptionBox?.titleBox;
          articleImage.src = descriptionBox?.imageUrl;

          articleImage4.appendChild(articleImage);
          description4.appendChild(text);
          title4.appendChild(title);
        } else {
          return;
        }
        
    });
      
    
 
  })
  .catch((err) => console.error(err));