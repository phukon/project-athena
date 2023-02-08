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

// forms
function navigate() {
  var branch = document.getElementById("branch").value;
  var semester = document.getElementById("semester").value;

  if (branch === "etc" && semester === "1") {
    window.location.href = "#";
  } else if (branch === "mech" && semester === "1") {
    window.location.href = "#";
  } else {
    alert("Invalid selection. Please try again.");
  }
}

// sanity
let PROJECT_ID = "jbb9mv51";
let DATASET = "production";

let QUERY = encodeURIComponent('*[_type == "pdfs"]{name, file, description, "pdfUrl": file.asset->url}');
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

function query1() {
  fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {

    let list = document.querySelector("ul");
    let link = document.createElement('a');
    let firstListItem = document.querySelector("ul li");

    if (result.length > 0) {
      // remove the placeholder content
      list.removeChild(firstListItem);
      result.forEach((fuck) => { // at this point, I'm fuming!
        link.textContent = fuck.name;
        link.href= fuck.pdfUrl;
        list.appendChild(link)
      })
    }
  }).catch((err) => console.error(err));
}

query1();
