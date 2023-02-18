export function showPopup() {
    // Check if the cookie has been set
    if (!document.cookie.replace(/(?:(?:^|.*;\s*)popupShown\s*\=\s*([^;]*).*$)|^.*$/, "$1")) {
      // Set the cookie
      document.cookie = "popupShown=true; expires=Mon, 27 Feb 2023 23:59:59 GMT; path=/";
      // Show the popup
      alert("The site is under construction🚧🏗 with some features unavailable at this time. This is a one-man project and all support is appreciated. I will be open-sourcing the code under the MIT License. The resources are free for all, FOREVER!✨ Thanks");
    }
}