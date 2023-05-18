export function queryQuestionPaper(p_id, dSet, dataIn) {

    let PROJECT_ID = p_id
    let DATASET = dSet    
    let QUERY = encodeURIComponent('*[_type == "question_papers"]{name, type, file, description, "pdfUrl": file.asset->url}');
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    
    fetch(URL)
    .then((res) => res.json())
    .then(({ result }) => {
  
      let list = document.querySelector("ul");
      let heading = document.getElementById("heading");
      //let firstListItem = document.querySelector("ul li");
  
      if (result.length > 0) {
        // to remove the placeholder content
        document.getElementById("list").innerHTML = "";
        //document.getElementById("heading").innerHTML = "";
        result.forEach((fuck) => {
  
          if(fuck.type == dataIn) {
            let link = document.createElement('a');
            let linkItem = document.createElement("li");
            let name = document.createElement("h3");
            
            name.textContent = fuck.type;
            link.textContent = fuck.name;
            link.href= fuck.pdfUrl;
            
            //heading.appendChild(name);
            linkItem.appendChild(link)
            list.appendChild(linkItem)
          }
        })
      }
    }).catch((err) => console.error(err));
  }
  