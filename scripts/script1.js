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


// sanity
let PROJECT_ID = "jbb9mv51";
let DATASET = "production";
//q1
let QUERY = encodeURIComponent('*[_type == "pdfs"]{name, type, file, description, "pdfUrl": file.asset->url}');
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
//q2
let QUERY2 = encodeURIComponent('*[_type == "descriptionBox"]{name, description, titleBox, "imageUrl": mainImage.asset->url}');
let URL2 = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY2}`;

function queryResourcePage() {
  fetch(URL2)
  .then((res) => res.json())
  .then(({ result }) => {
    // get the list element, and the first item
    let description1 = document.querySelector("#article-1-descriptionBox");
    let articleImage1 = document.getElementById('articleImage1');


      result.forEach((descriptionBox) => {
        
        let text = document.createElement('div');
        let title = document.createElement('div');
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

if (window.location.pathname == "/html/resources.html") {
  queryResourcePage();
}

// function queryQuestionPaper(dataIn) {
//   fetch(URL)
//   .then((res) => res.json())
//   .then(({ result }) => {

//     let list = document.querySelector("ul");
//     let heading = document.getElementById("heading");
//     //let firstListItem = document.querySelector("ul li");

//     if (result.length > 0) {
//       // to remove the placeholder content
//       document.getElementById("list").innerHTML = "";
//       //document.getElementById("heading").innerHTML = "";
//       result.forEach((fuck) => {

//         if(fuck.type == dataIn) {
//           let link = document.createElement('a');
//           let linkItem = document.createElement("li");
//           let name = document.createElement("h3");
          
//           name.textContent = fuck.type;
//           link.textContent = fuck.name;
//           link.href= fuck.pdfUrl;
          
//           //heading.appendChild(name);
//           linkItem.appendChild(link)
//           list.appendChild(linkItem)
//         }
//       })
//     }
//   }).catch((err) => console.error(err));
// }



// forms
// export let typeValue = function () {
//   var branch = document.getElementById("branch").value;
//   var semester = document.getElementById("semester").value;
//   //document.getElementById("hiddenObject").style.display = "none";
//   var type = `${branch}-${semester}`;
//   sessionStorage.setItem("type", type);
//   let storedType = sessionStorage.getItem("type");
//   if (window.location.pathname !== "/html/about.html") {
//     queryQuestionPaper(storedType);
//     sessionStorage.clear();
//   }
// }