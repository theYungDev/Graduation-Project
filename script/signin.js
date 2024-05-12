// signin buttons
const myBtn1 = document.getElementById("mybtn1");
const myBtn2 = document.getElementById("mybtn2");
const formSelect = document.getElementById("frmSlct");

myBtn1.onclick = () => {
  myBtn1.style.backgroundColor = "#00d084";
  myBtn1.style.color = "#ffffff";
  myBtn2.style.color = "#192F59";
  myBtn2.style.backgroundColor = "transparent";
  formSelect.style.visibility = "hidden";
  const studentForm = document.getElementById("student-form")
  studentForm.style.display = "block"
};
myBtn2.onclick = () => {
  myBtn2.style.backgroundColor = "#00d084";
  myBtn1.style.backgroundColor = "transparent";
  myBtn2.style.color = "#ffffff";
  myBtn1.style.color = "#192F59";
  formSelect.style.visibility = "visible";
};
// form accounts selector
function accountTypeChanger(){
  var selectedType = document.getElementById("frmSlct").value
  console.log(selectedType);
  document.getElementById("doctor-form").style.display = "none";
  document.getElementById("admin-form").style.display = "none";
  document.getElementById("accountant-form").style.display = "none";
  document.getElementById(selectedType).style.display = "block";
  // hide student form
  const studentForm = document.getElementById("student-form")
  studentForm.style.display = "none"
}
