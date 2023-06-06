let burgerBtn = document.querySelector("#burger-btn");
let mainMenu = document.querySelector("#main-menu");

let canSeeMenu = false;

burgerBtn.addEventListener("click", () => {

    if(!canSeeMenu){
        mainMenu.classList.add("show-menu");
        burgerBtn.classList.add("open");
        canSeeMenu = true;
      
    }else{
        mainMenu.classList.remove("show-menu");
        burgerBtn.classList.remove("open");
        canSeeMenu = false;
    }
})

mainMenu.addEventListener("click", () => {
        mainMenu.classList.remove("show-menu");
        canSeeMenu = false;
})