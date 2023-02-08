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

// queries
function query_etc7() {
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

function query_mech7() {
  fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {

    let list = document.querySelector("ul");
    let firstListItem = document.querySelector("ul li");

    if (result.length > 0) {
      // remove the placeholder content
      list.removeChild(firstListItem);
      result.forEach((fuck) => { // at this point, I'm fuming!

        if(fuck.type == "mech-7") {
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

// this is the CONTROLLER (selects queries based on the type of webpage)
// please review if you buy domain names!!
const currentUrl = window.location.href;

switch(true) {
  case currentUrl.includes("http://127.0.0.1:5500/etc-8.html"):
    query_etc8();
    break;
  case currentUrl.includes("https://phukon.github.io/project-athena/etc-7.html"):
    query_etc7();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/etc-6.html"):
    query_etc6();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/etc-5.html"):
    query_etc5();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/etc-4.html"):
    query_etc4();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/etc-3.html"):
    query_etc3();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/etc-2.html"):
    query_etc2();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/etc-1.html"):
    query_etc1();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/mecha-8.html"):
    query_mecha8();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/mecha-7.html"):
    query_mecha7();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/mecha-6.html"):
    query_mecha6();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/mecha-5.html"):
    query_mecha5();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/mecha-4.html"):
    query_mecha4();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/mecha-3.html"):
    query_mecha3();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/mecha-2.html"):
    query_mecha2();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/mecha-1.html"):
    query_mecha1();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/civil-8.html"):
    query_civil8();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/civil-7.html"):
    query_civil7();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/civil-6.html"):
    query_civil6();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/civil-5.html"):
    query_civil5();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/civil-4.html"):
    query_civil4();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/civil-3.html"):
    query_civil3();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/civil-2.html"):
    query_civil2();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/civil-2.html"):
    query_civil1();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/pei-8.html"):
    query_pei8();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/pei-7.html"):
    query_pei7();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/pei-6.html"):
    query_pei6();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/pei-5.html"):
    query_pei5();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/pei-4.html"):
    query_pei4();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/pei-3.html"):
    query_pei3();
    break;
  case currentUrl.includes("http://127.0.0.1:5500/pei-2.html"):
    query_pei2();
    break;
  default:
    query_pei1();
    break;
}
