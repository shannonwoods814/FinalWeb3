let burgerBtn=document.querySelector("#burgerBtn"),mainMenu=document.querySelector("#main-menu"),canSeeMenu=!1;burgerBtn.addEventListener("click",(()=>{canSeeMenu?(mainMenu.classList.remove("show-menu"),canSeeMenu=!1):(mainMenu.classList.add("show-menu"),canSeeMenu=!0)})),mainMenu.addEventListener("click",(()=>{mainMenu.classList.remove("show-menu"),canSeeMenu=!1}));