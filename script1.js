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

  const baseUrl = `https://phukon.github.io/project-athena/${branch}-${semester}.html`;
  window.location = baseUrl;

  // if (branch === "etc" && semester === "1") {
  //   window.location.href = "#";
  // } else if (branch === "mech" && semester === "1") {
  //   window.location.href = "#";
  // } else {
  //   alert("Invalid selection. Please try again.");
  // }
}

// sanity
let PROJECT_ID = "jbb9mv51";
let DATASET = "production";

let QUERY = encodeURIComponent('*[_type == "pdfs"]{name, type, file, description, "pdfUrl": file.asset->url}');
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

function queryetc7() {
  fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {

    let list = document.querySelector("ul");
    let firstListItem = document.querySelector("ul li");

    if (result.length > 0) {
      // remove the placeholder content
      list.removeChild(firstListItem);
      result.forEach((fuck) => { // at this point, I'm fuming!

        if(fuck.type == "etc-7") {
          let link = document.createElement('a');
          let linkItem = document.createElement("li");
  
          link.textContent = fuck.name;
          link.href= fuck.pdfUrl;
  
          linkItem.appendChild(link)
          list.appendChild(linkItem)
        }
      })
    }
  }).catch((err) => console.error(err));
}

// please review if you buy domain names!!
const currentUrl = window.location.href;

if (currentUrl.includes("http://127.0.0.1:5500/etc-7.html")) {
  queryetc7();
} else if (currentUrl.includes("page2.html")) {
  // run queries specific to page2.html
} else if (currentUrl.includes("page3.html")) {
  // run queries specific to page3.html
}
