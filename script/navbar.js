const img = document.getElementById("srch-img");
const btn = document.getElementById("srch-btn");
let img1 = true;
const srchToggler = document.getElementById("srch-toggler");

btn.addEventListener("click", function () {
  if (img1) {
    img.src = "Assets/images/52.png";
  } else {
    img.src = "Assets/images/51.png";
  }
  img1 = !img1;

  srchToggler.classList.toggle("d-none");
  srchToggler.classList.toggle("show");
});
