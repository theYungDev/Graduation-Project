let hover1 = document.getElementsByClassName("hover1");
let card1 = document.getElementsByClassName("card1");
let card2 = document.getElementsByClassName("card2");

for (let index = 0; index < 4; index++) {
  hover1[index].addEventListener("mouseover", () => {
    card1[index].style.display = "none";
    card2[index].style.display = "block";
  });
  hover1[index].addEventListener("mouseout", () => {
    card1[index].style.display = "block";
    card2[index].style.display = "none";
  });
}

