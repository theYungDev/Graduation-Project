const hiddenButtons = document.getElementsByClassName("hidden-buttons");
const mainButton = document.getElementById("main-button");
console.log(hiddenButtons);
mainButton.onclick = () => {
    if (hiddenButtons[0].style.display =="none"){
        
    for (let i = 0; i < hiddenButtons.length; i++) {
        hiddenButtons[i].style.display = "block";
    }
    }else{
        for (let i = 0; i < hiddenButtons.length; i++) {
            hiddenButtons[i].style.display = "none";
        }
    }
};
