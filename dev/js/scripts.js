let burgerBtn = document.querySelector("#burgerBtn");
let mainMenu = document.querySelector("#main-menu");

let canSeeMenu = false;

burgerBtn.addEventListener("click", () => {

    if(!canSeeMenu){
        mainMenu.classList.add("show-menu");
        canSeeMenu = true;
    }else{
        mainMenu.classList.remove("show-menu");
        canSeeMenu = false;
    }
})

mainMenu.addEventListener("click", () => {
        mainMenu.classList.remove("show-menu");
        canSeeMenu = false;
})