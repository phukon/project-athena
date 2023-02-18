export function fetchArticles(p_id, dSet) {

  let PROJECT_ID = p_id
  let DATASET = dSet
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
  }