export function queryResourcePage(p_id, dSet) {

    let PROJECT_ID = p_id
    let DATASET = dSet
    let QUERY = encodeURIComponent('*[_type == "descriptionBox"]{name, description, titleBox, "imageUrl": mainImage.asset->url}');
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    fetch(URL)
    .then((res) => res.json())
    .then(({ result }) => {
      // get the list element, and the first item
      let description1 = document.querySelector("#article-1-descriptionBox");
      let articleImage1 = document.getElementById('articleImage1');
  
  
        result.forEach((descriptionBox) => {
          
          let text = document.createElement('div');
          let articleImage = document.createElement('img');
  
  
          if (descriptionBox.name == "resources-descriptionBox") {
            text.textContent = descriptionBox?.description;
            articleImage.src = descriptionBox?.imageUrl;
  
            articleImage1.appendChild(articleImage);
            description1.appendChild(text);
          }
          
      });
        
      
   
    })
    .catch((err) => console.error(err));
  }