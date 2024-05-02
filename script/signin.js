// signin buttons
const myBtn1 = document.getElementById("mybtn1");
const myBtn2 = document.getElementById("mybtn2");

myBtn1.onclick = ()=>{
  myBtn1.style.backgroundColor = "#00d084";
  myBtn1.style.color = "#ffffff";
  myBtn2.style.color = "#000000";
  myBtn2.style.backgroundColor = "transparent";
}
myBtn2.onclick = ()=>{
    myBtn2.style.backgroundColor = "#00d084";
    myBtn1.style.backgroundColor = "transparent";
    myBtn2.style.color = "#ffffff";
    myBtn1.style.color = "#000000";
}