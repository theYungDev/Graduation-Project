// signin buttons
const myBtn1 = document.getElementById("mybtn1");
const myBtn2 = document.getElementById("mybtn2");
const formSelect = document.getElementById("frmSlct");

const doctorForm = document.getElementById("doctor-form");
const adminForm = document.getElementById("admin-form");
const accountantForm = document.getElementById("accountant-form");
const studentForm = document.getElementById("student-form");

myBtn1.onclick = () => {
  myBtn1.style.backgroundColor = "#00d084";
  myBtn1.style.color = "#ffffff";
  myBtn2.style.color = "#192F59";
  myBtn2.style.backgroundColor = "transparent";
  formSelect.style.display = "none";
  // show student form
  studentForm.style.display = "block";
  // hide other forms
  doctorForm.style.display = "none";
  adminForm.style.display = "none";
  accountantForm.style.display = "none";
  // console.log(document.getElementById("frmSlct").value);
};
myBtn2.onclick = () => {
  myBtn2.style.backgroundColor = "#00d084";
  myBtn1.style.backgroundColor = "transparent";
  myBtn2.style.color = "#ffffff";
  myBtn1.style.color = "#192F59";
  formSelect.style.display = "block";
  // hide student form
  studentForm.style.display = "none";
  // show doctor form (default)
  if (
    adminForm.style.display == "none" &&
    accountantForm.style.display == "none"
  ) {
    doctorForm.style.display = "block";
  }

  // console.log(document.getElementById("frmSlct").value);
};
// form accounts selector
function accountTypeChanger() {
  var selectedType = document.getElementById("frmSlct").value;
  doctorForm.style.display = "none";
  adminForm.style.display = "none";
  accountantForm.style.display = "none";
  document.getElementById(selectedType).style.display = "block";
  // console.log(document.getElementById("frmSlct").value);
}
