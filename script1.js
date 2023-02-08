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

fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {

    let description1 = document.querySelector("#placeholder");
    let link = document.createElement('a');

    link.textContent = 'AFCAT';
    link.href= result[0].pdfUrl;
    description1.appendChild(link)
  }).catch((err) => console.error(err));