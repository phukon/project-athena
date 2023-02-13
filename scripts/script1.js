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

let QUERY = encodeURIComponent('*[_type == "pdfs"]{name, type, file, description, "pdfUrl": file.asset->url}');
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



// forms
let typeValue = function () {
  var branch = document.getElementById("branch").value;
  var semester = document.getElementById("semester").value;
  //document.getElementById("hiddenObject").style.display = "none";
  var type = `${branch}-${semester}`;
  sessionStorage.setItem("type", type);
  let storedType = sessionStorage.getItem("type");
  if (window.location.pathname !== "/html/about.html") {
    queryQuestionPaper(storedType);
    sessionStorage.clear();
  }
}