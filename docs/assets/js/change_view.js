// secciones constantes

const valores = document.getElementById('valores');
const vistaInit = document.getElementById('vistaInit');
const grafic = document.getElementById('grafic');
const tablaInit = document.getElementById('tablaInit');
const navTabla = document.getElementById('navegacion');


// Ocultar las secciones

tablaInit.classList.add('ocult');
valores.classList.add('ocult');
grafic.classList.add('newGraph');
navTabla.classList.add('ocult');


// Menu acordeon

// Obtener todos los elementos <a> directos bajo ".sub-menu" en "#leftside-navigation"
var subMenuLinks = document.querySelectorAll("#leftside-navigation .sub-menu > a");

// Iterar a través de cada enlace y agregar un manejador de clic
subMenuLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    // Ocultar todos los elementos ul ul bajo "#leftside-navigation"
    var allSubMenus = document.querySelectorAll("#leftside-navigation ul ul");
    allSubMenus.forEach(function(subMenu) {
      subMenu.style.display = "none";
    });
    
    // Mostrar el submenú siguiente solo si no está visible actualmente
    var nextSubMenu = this.nextElementSibling;
    if (window.getComputedStyle(nextSubMenu).display !== "block") {
      nextSubMenu.style.display = "block";
    }
    
    // Detener la propagación del evento
    e.stopPropagation();
  });
});


// Detectar click en subMenu

const subSeccions = document.querySelectorAll('.subSeccion');


vistaInit.addEventListener('click', () => {

    valores.classList.add('ocult');
    tablaInit.classList.add('ocult');
    grafic.classList.remove('ocult');
    grafic.classList.add('newGraph');
    navTabla.classList.add('ocult');
    
});

subSeccions[0].addEventListener('click', () => {

    valores.classList.remove('ocult');
    tablaInit.classList.add('ocult');
    grafic.classList.remove('ocult');
    grafic.classList.remove('newGraph');
    navTabla.classList.add('ocult');

});

subSeccions[1].addEventListener('click', () => {
 
});

subSeccions[2].addEventListener('click', () => {
  tablaInit.classList.remove('ocult');
  valores.classList.add('ocult');
  grafic.classList.add('ocult');
  grafic.classList.remove('newGraph');
  navTabla.classList.remove('ocult');

});

subSeccions[3].addEventListener('click', () => {

});





