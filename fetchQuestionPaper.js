export function queryQuestionPaper(dataIn) {
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
  