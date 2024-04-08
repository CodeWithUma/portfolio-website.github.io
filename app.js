var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
// Get the sideMenu element
// var sideMenu = document.getElementById("sideMenu");

function openTab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

var sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0px";
}

function closeMenu() {
  sideMenu.style.right = "600px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzkgYq6C_8tdCUKdIXP8gseAu0D2zJdqL9RsSgU7sGckvv3r74td_8XBeY7QVF6lE9D/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
