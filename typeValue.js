export let typeValue = function () {
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