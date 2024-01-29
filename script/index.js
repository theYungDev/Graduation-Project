let hover1 = document.getElementById("hover1");
let card1 = document.getElementById("card1");
hover1.addEventListener("mouseover", () => {
  card1.style.top = "0";
  card1.style.botom = "auto";
});
hover1.addEventListener("mouseout", () => {
  card1.style.top = "auto";
  card1.style.botom = "0";
});
