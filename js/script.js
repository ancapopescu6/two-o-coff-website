/* Toggle navigation */
let mainNav = document.getElementById('js-menu');

let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
   mainNav.classList.toggle("active");
});

/* Gallery modal */
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}