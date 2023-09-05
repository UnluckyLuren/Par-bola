// Calculos

const velInit = document.getElementById('velInit');
const angleInit = document.getElementById('anglInit');
const start = document.getElementById('start');
const timeInit = document.getElementById('timeInit');
const rwdTable = document.getElementById('rwd-table');
let speedCanvas = document.getElementById("speedChart");

// Calculos extras en tablas

const velInitDos = document.getElementById('velInitDos');
const angleInitDos = document.getElementById('anglInitDos');
const startDos = document.getElementById('startDos');
const timeInitDos = document.getElementById('timeInitDos');


// funciones

function calcDistY () {

  let resultRad = angleInit.value/57.2958;
  let seno = Math.sin(resultRad);
  let vel = velInit.value;

  let resultSeno = seno*seno;

  let resultY =  Number( ((vel*vel)/19.62)*resultSeno ).toFixed(2);

  return resultY;

};

function calcDistX () {

  let resultRad = (2*angleInit.value)/57.2958;
  let seno = Math.sin(resultRad);
  let vel = velInit.value;


  let resultX = Number( (((vel*vel)/9.81)*seno).toFixed(2) );

  return resultX;

};

function calcTiempoVuelo() {
  let resultRad = angleInit.value/57.2958;
  let seno = Math.sin(resultRad);
  let vel = velInit.value;

  let timeV = Number( (((2*vel)/9.81)*seno).toFixed(2) );

  return timeV;
}

function calcTiempoSub() {
  let resultRad = angleInit.value/57.2958;
  let seno = Math.sin(resultRad);
  let vel = velInit.value;

  let timeS = Number( ((vel/9.81)*seno).toFixed(2) );
  
  return timeS;
}


function calCx () {

  let resultRad = (angleInit.value)/57.2958;
  let coseno = Math.cos(resultRad);
  let vel = velInit.value;

  let resultX = vel*timeInit.value*coseno;

  return resultX;

};

// Calcular velocidad en x

function calcVelX () {

  let resultRad = (angleInit.value)/57.2958;
  let coseno = Math.cos(resultRad);
  let vel = velInit.value;

  let resultX = Number( (vel*coseno).toFixed(2) );

  return resultX;

};

// Calcular velocidad en y

function calcVelY (timeV) {

  let resultRad = angleInit.value/57.2958;
  let seno = Math.sin(resultRad);

  let particion = timeInit.value;
  let vel = velInit.value;
  let cadenaY = [];

  for (let i = 0; (particion*i) < timeV; i++) {

    cadenaY[i] = Number( (-1*(9.81*(particion*i)) + (vel*seno) ).toFixed(2) );
    
  }

  cadenaY[0] = 0;
  cadenaY.push(0);

  return cadenaY;

};


// creación de los labels en los 2 ejes

function ejeX (timeV) {

  let resultRad = angleInit.value/57.2958;
  let coseno = Math.cos(resultRad);

  let particion = timeInit.value;
  let vel = velInit.value;
  let cadenaX = [];

  for (let i = 0; (particion*i) < timeV; i++) {

    cadenaX[i] = Number( ( vel*(particion*i)*coseno ).toFixed(2) );
    
  }

  cadenaX.push( Number( calcDistX().toFixed(2) ) );
  
  return cadenaX;
}

function ejeY (timeV) {

  let resultRad = angleInit.value/57.2958;
  let seno = Math.sin(resultRad);

  let particion = timeInit.value;
  let vel = velInit.value;
  let cadenaY = [];

  for (let i = 0; (particion*i) < timeV; i++) {

    cadenaY[i] = Number( (-1*(9.81*( (particion*i)*(particion*i) ))/2 + (vel*(particion*i)*seno) ).toFixed(2) );
    
  }

  cadenaY[0] = 0;
  cadenaY.push(0);

  return cadenaY;
}

// Grafica info

let lineChart;

function createGraph ( X, Y ) {

    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;

    // Añadir la info a los labels de x

    var speedData = {

      // Pasamos el array con los valores de X
      labels:  ejeX( calcTiempoVuelo() ),

      datasets: [{
        label: "Parabola",
        data: ejeY( calcTiempoVuelo() ),

        fill: false,
        borderColor: 'white',
        backgroundColor: 'transparent',
        pointBorderColor: 'blue',
        pointRadius: 6,
        pointHoverRadius: 10,
        pointHitRadius: 30,
        pointBorderWidth: 2,
        pointBackgroundColor: 'blue',

        
      }]
    };

    var chartOptions = {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 100,
          fontColor: 'white',
          backgroundColor: 'white'
        }
      }

    };

    lineChart = new Chart(speedCanvas, {
      type: 'line',
      data: speedData,
      options: chartOptions
    });

}


// eventos

start.addEventListener('click', () => {

  lineChart.destroy();
  createGraph( calcDistX(), calcDistY() );

  resulTotales ();

});


startDos.addEventListener('click', () => {

  lineChart.destroy();
  createGraph( calcDistX(), calcDistY() );

  velInit.value = velInitDos.value;
  angleInit.value = angleInitDos.value;
  timeInit.value = timeInitDos.value;

  resulTotales ();

});


// Mostrar los resultados en la tabla


function resulTotales () {
    
    let imgDel = document.querySelector('.imgIniTable');
    imgDel.classList.add('ocult');

    rwdTable.innerHTML = `
        <tr>
          <th>Parametros</th>
          <th>Tiempo</th>
        </tr>
        <tr class="infoUp">
          <td data-th="Movie Title"> <img src="./assets/img/arrow_down_icon_246074.png"> </td>
        </tr>
        <tr class="infoUp">
          <td data-th="Movie Title">Distancia (x)</td>
        </tr>
        <tr class="infoUp">
          <td data-th="Movie Title">Distancia (y)</td>
        </tr>
        <tr class="infoUp">
          <td data-th="Movie Title">Velocidad eje x</td>
        </tr>
        <tr class="infoUp">
          <td data-th="Movie Title">Velocidad eje y</td>
        </tr>
    `;

    let all = ejeX( calcTiempoVuelo() ).length;
    const tds = document.querySelectorAll('.infoUp');

    // Creación de las casillas de la tabla
    
    let ind;

    for (let i = 0; i < tds.length; i++) {
      
      for ( ind = 0; ind < all; ind++) {
        
        tds[i].innerHTML += `
          <td data-th="Genre" class="dato`+ind+`">`+ind+`</td>
        `;

      }
    }

    //  Traer todas las casillas creadas del DOM

    let datos = [];

    for (let i = 0; i < ind; i++) {
      datos[i] = document.querySelectorAll('.dato'+i);
    }

    // Añadir la información a las casillas previamente creadas

    let particion = timeInit.value;
    let timeV = calcTiempoVuelo();
    let disTx = ejeX( calcTiempoVuelo() );
    let disTy = ejeY( calcTiempoVuelo() );
    let velX = calcVelX();
    let velY = calcVelY( calcTiempoVuelo() );

    for (let i = 0; i < datos.length; i++) {
      
        for (let ind = 0; ind < datos[i].length; ind++) {
          
          if ( ind == 0 ) {

            if ( (particion*i) < timeV ) {
              datos[i][ind].textContent =  Number( (particion*i).toFixed(2) )+' Seg';
            } else {
              datos[i][ind].textContent = timeV+' Seg';
            }

          } else if (ind == 1) {

            datos[i][ind].textContent = disTx[i]+' M';
           
          } else if (ind == 2) {

            datos[i][ind].textContent = disTy[i]+' M';
            
          } else if (ind == 3) {
            
            datos[i][ind].textContent = velX+' M/S';

          } else if (ind == 4) {
            
            datos[i][ind].textContent = velY[i]+' M/S';

          }

        }
    }

    // Añadir la información extra

    const infConst = document.querySelectorAll('.infConst');

    infConst[0].textContent = calcTiempoSub();
    infConst[1].textContent = calcTiempoVuelo();
    infConst[2].textContent = calcDistX();
    infConst[3].textContent = calcDistY();

}


// Inicialización

createGraph( calcDistX(), calcDistY() );




