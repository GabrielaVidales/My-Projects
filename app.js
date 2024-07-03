
//Cuando se seleeccione la barra de navegación BURGUER
const burger = document.querySelector("#burger-menu"); //BURGUER
const ul = document.querySelector("nav ul"); //Elementos individuales de la lista
const nav = document.querySelector("nav"); //Toda la barra de navegación


//Selección del botonsito
const scrollUP = document.querySelector("#scroll-up");

//Funcionalidad para ir hacia arriba, regresar al inicio, cuando le de click en la flecha
scrollUP.addEventListener("click", () => {
    window.scrollTo({
        top: 0, //Mucho ojo, aquí son comas
        left: 0,
        behavior: "smooth",
    });
});


burger.addEventListener("click", () => { //Muestra el elemento cuandl le de click
    ul.classList.toggle("show");
});

//Cerrar el menú de burger
const navLink = document.querySelector(".nav-link");
navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

