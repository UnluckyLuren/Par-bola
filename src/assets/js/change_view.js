// secciones constantes

const valores = document.getElementById('valores');
const vistaInit = document.getElementById('vistaInit');
const grafic = document.getElementById('grafic');
const tablaInit = document.getElementById('tablaInit');
const navTabla = document.getElementById('navegacion');
const sus = document.getElementById('sus');


// Ocultar las secciones

tablaInit.classList.add('ocult');
valores.classList.add('ocult');
grafic.classList.add('newGraph');
navTabla.classList.add('ocult');
sus.classList.add('ocult');


    // valores.classList.add('ocult');
    //   tablaInit.classList.add('ocult');
    //   grafic.classList.add('ocult');
    //   grafic.classList.remove('newGraph');
    //   navTabla.classList.add('ocult');



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


// Función para mostrar la sustitución de valores en la fórmula

// Calculos

  const reSusData = document.querySelectorAll('.reSusData');
  const reSusFin = document.querySelectorAll('.reSusFin');
  const resultSus = document.querySelectorAll('.resultSus');
  const vel = document.getElementById('velInit');
  const angle = document.getElementById('anglInit');
  const time = document.getElementById('timeInit');
  const flechSus = document.querySelectorAll('.imgSusView');


function suSx () {

  let resultRad = (angle.value)/57.2958;
  let coseno = Number(  (Math.cos(resultRad)).toFixed(2) );
  let vel0 = vel.value;

  let result1 = Number(  (vel0*timeInit.value).toFixed(2) );
  let result2 = Number( (vel0*timeInit.value*coseno).toFixed(2) );

  // Datos

  reSusData[0].textContent = angle.value+" grados";
  reSusData[1].textContent = vel0+" M/S";
  reSusData[2].textContent = time.value+" seg";

  // Sustitución

  reSusFin[0].textContent = vel0;
  reSusFin[1].textContent = timeInit.value;
  reSusFin[2].textContent = coseno;

// Calculos

  reSusFin[3].textContent = result1;
  reSusFin[4].textContent = coseno;
  reSusFin[5].textContent = result2+" metros";

}




// Ocultar o mostrar sustituciones


flechSus[0].addEventListener('click', () => {

  flechSus[0].classList.toggle('rotateSus');
  resultSus[0].classList.toggle('activeSus');

  for (let i = 0; i < 8; i++) {
    if ( i != 0 ) {
      flechSus[i].classList.remove('rotateSus');
      resultSus[i].classList.remove('activeSus');
    }
  }

});

flechSus[1].addEventListener('click', () => {

  flechSus[1].classList.toggle('rotateSus');
  resultSus[1].classList.toggle('activeSus');

  for (let i = 0; i < 8; i++) {
    if ( i != 1 ) {
      flechSus[i].classList.remove('rotateSus');
      resultSus[i].classList.remove('activeSus');
    }
  }

});

flechSus[2].addEventListener('click', () => {

  flechSus[2].classList.toggle('rotateSus');
  resultSus[2].classList.toggle('activeSus');

  for (let i = 0; i < 8; i++) {
    if ( i != 2 ) {
      flechSus[i].classList.remove('rotateSus');
      resultSus[i].classList.remove('activeSus');
    }
  }

});

flechSus[3].addEventListener('click', () => {

  flechSus[3].classList.toggle('rotateSus');
  resultSus[3].classList.toggle('activeSus');

  for (let i = 0; i < 8; i++) {
    if ( i != 3 ) {
      flechSus[i].classList.remove('rotateSus');
      resultSus[i].classList.remove('activeSus');
    }
  }

});

flechSus[4].addEventListener('click', () => {

  flechSus[4].classList.toggle('rotateSus');
  resultSus[4].classList.toggle('activeSus');

  for (let i = 0; i < 8; i++) {
    if ( i != 4 ) {
      flechSus[i].classList.remove('rotateSus');
      resultSus[i].classList.remove('activeSus');
    }
  }

});

flechSus[5].addEventListener('click', () => {

  flechSus[5].classList.toggle('rotateSus');
  resultSus[5].classList.toggle('activeSus');

  for (let i = 0; i < 8; i++) {
    if ( i != 5 ) {
      flechSus[i].classList.remove('rotateSus');
      resultSus[i].classList.remove('activeSus');
    }
  }

});

flechSus[6].addEventListener('click', () => {

  flechSus[6].classList.toggle('rotateSus');
  resultSus[6].classList.toggle('activeSus');

  for (let i = 0; i < 8; i++) {
    if ( i != 6 ) {
      flechSus[i].classList.remove('rotateSus');
      resultSus[i].classList.remove('activeSus');
    }
  }

});

flechSus[7].addEventListener('click', () => {

  flechSus[7].classList.toggle('rotateSus');
  resultSus[7].classList.toggle('activeSus');

  for (let i = 0; i < 8; i++) {
    if ( i != 7 ) {
      flechSus[i].classList.remove('rotateSus');
      resultSus[i].classList.remove('activeSus');
    }
  }

});






// Detectar click en subMenu

const subSeccions = document.querySelectorAll('.subSeccion');


vistaInit.addEventListener('click', () => {

    valores.classList.add('ocult');
    tablaInit.classList.add('ocult');
    grafic.classList.remove('ocult');
    grafic.classList.add('newGraph');
    navTabla.classList.add('ocult');
    sus.classList.add('ocult');
    
});

subSeccions[0].addEventListener('click', () => {

    valores.classList.remove('ocult');
    tablaInit.classList.add('ocult');
    grafic.classList.remove('ocult');
    grafic.classList.remove('newGraph');
    navTabla.classList.add('ocult');
    sus.classList.add('ocult');

});

subSeccions[1].addEventListener('click', () => {
 
  valores.classList.add('ocult');
  tablaInit.classList.add('ocult');
  grafic.classList.add('ocult');
  grafic.classList.remove('newGraph');
  navTabla.classList.add('ocult');
  sus.classList.remove('ocult');

  suSx();

});

subSeccions[2].addEventListener('click', () => {
  tablaInit.classList.remove('ocult');
  valores.classList.add('ocult');
  grafic.classList.add('ocult');
  grafic.classList.remove('newGraph');
  navTabla.classList.remove('ocult');
  sus.classList.add('ocult');

});

subSeccions[3].addEventListener('click', () => {

});





