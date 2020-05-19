let boton = document.getElementsByClassName("anvorguesa")

boton[0].addEventListener("click", function (){
    let menu = document.getElementsByClassName("menu")
    if (menu[0].style.display=="block") {
        menu[0].style.display="none"
    }
    else{
        menu[0].style.display="block"
    }
})