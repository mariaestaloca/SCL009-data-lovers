function aplicar(year,question,country) {
   
  for (let i = 0; i < country.length; i++) {
      // entonces recorremos cada indicatorName; 
      let a = country[i].indicatorName;
      // si ese indicador es el mismo que el que selecciono el usuario entonces 
      // buscamos la data de este elemento asi tenemos sus keys -- año y values ---%
  
      if (a === question) {
  
        let data = (country[i].data);
  
        // aqui un array con los años
        let arrayKeysObjetos = Object.keys(data); 
       
        // AQUI un array con los % (values)
        let arrayValuesObjetos = Object.values(data); 
       
        //busco la posicion del año que ingreso el usuario en el arrayKeyss
        let posicionYearKeys = arrayKeysObjetos.indexOf(year); 
  
        // Creamos la tabla 
  
        const newtabla = document.createElement('table');
        //esta el container div para la tabla donde esta fijado en main.js que se insertara la tabla 
        const container = document.getElementById("tableData");
        container.appendChild(newtabla);
  
        let fila = document.createElement('tr');
        let columna = document.createElement('td')
  
        columna.innerHTML = "Años";
        fila.appendChild(columna);
        newtabla.appendChild(fila);
  
        // aqui estaria la primera fila - los años provenientes de los 
  
        for (let j = posicionYearKeys; j < (posicionYearKeys + 5); j++) {
  
          let row = document.createElement('td')
  
          //newtabla.appendChild(columna);
          row.innerHTML = arrayKeysObjetos[j];
  
          fila.appendChild(row)
        }
        // aqui estaria la segunda fila - los valores 
  
        let fila2 = document.createElement('tr')
  
        newtabla.appendChild(fila2);
        columna = document.createElement('td');
        columna.innerHTML = "Valores";
        fila2.appendChild(columna);
  
        for (let j = posicionYearKeys; j < (posicionYearKeys + 5); j++) {
          let valor = arrayValuesObjetos[j];
  
          let columna = document.createElement('td')
          newtabla.appendChild(columna);
          columna.innerHTML = (valor == "") ? "ND" : valor.toFixed(2);
  
          fila2.appendChild(columna);
  
        }
        // let arrayvacio = [];
        // arrayvacio.push(arrayValuesObjetos[j])
        // arrayvacio.push(arrayValuesObjetos[j + 1])
        // arrayvacio.push(arrayValuesObjetos[j + 2])
        // arrayvacio.push(arrayValuesObjetos[j + 3])
        // arrayvacio.push(arrayValuesObjetos[j + 4])
        // console.log(arrayvacio);
  
        // initial = 0;
        // const arrSum = arrayvacio.reduce((sum, current) => sum + current, initial);
        // console.log(arrSum);
  
        // const promedio = (arrSum / arrayvacio.length).toFixed(2);
        // console.log(promedio);
  
        // let parrafo = document.createElement('p');
        // let promediocontainer = document.getElementById('promediocontainer');
        // promediocontainer.appendChild(parrafo);
        // parrafo.appendChild(promedio);
  
        newtabla.setAttribute("border", "3");
      }
  
    }
  
  }
  let data = WORLDBANK.BRA.indicators;

window.WORLDBANK = WORLDBANK;
// function ordenar alfabeticamente A-Z
function orderData(dataGral) {

  let data = dataGral.BRA.indicators;

  let contenedorLista = [];
  for (let element of data) {
    contenedorLista.push(element.indicatorName);
  }

  contenedorLista.sort();
  return contenedorLista;

}

let resultFxOrdenar = orderData(WORLDBANK);

function creandoListaorderData(resultFxOrdenar) {


  let arrayListaIndicadoresDom = resultFxOrdenar;

  var ul = document.createElement("ul");
  document.getElementById("OrdenarAscendentecontenedor").appendChild(ul);
  arrayListaIndicadoresDom.forEach(function (nombre) {
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += nombre;
  });


}







// function ordenar alfabeticamente Z- A
function orderDataDes(dataGral) {

  let data = dataGral.BRA.indicators;

  let contenedorLista = [];
  for (let element of data) {
    contenedorLista.push(element.indicatorName);
  }

  let contenedorListaOrdenada = contenedorLista.sort();
  return contenedorListaOrdenada.reverse();

}

let resultFxOrdenarDes = orderDataDes(WORLDBANK);

function creandoListaorderDataDes(resultFxOrdenarDes) {


  let arrayListaIndicadoresDom = resultFxOrdenarDes;

  var ul = document.createElement("ul");
  document.getElementById("OrdenarDescendentecontenedor").appendChild(ul);
  arrayListaIndicadoresDom.forEach(function (nombre) {
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += nombre;
  });


}




// mostrar datos Chile - desempleo

let arrayObjectChile = Object.values(WORLDBANK);
console.log(arrayObjectChile);

let arrayIndicadoresChile = arrayObjectChile[3].indicators;
console.log(arrayIndicadoresChile);

let indicadorDesempleoTotal = arrayIndicadoresChile[105].indicatorName;
console.log(indicadorDesempleoTotal);
let indicadorDesempleoVarones = arrayIndicadoresChile[106].indicatorName;
console.log(indicadorDesempleoVarones);
let indicadorDesempleoMujeres = arrayIndicadoresChile[107].indicatorName;
console.log(indicadorDesempleoMujeres);


let dataDesempleoTotal = arrayIndicadoresChile[105].data;
console.log(dataDesempleoTotal);
let dataDesempleoTotalVarones = arrayIndicadoresChile[106].data;
console.log(dataDesempleoTotalVarones);
let dataDesempleoTotalMujeres = arrayIndicadoresChile[107].data;
console.log(dataDesempleoTotalMujeres);

let dataDesempleoTotal2017 = dataDesempleoTotal[2017];
console.log("el desempleo total 2017 es  = " + dataDesempleoTotal2017);
let dataDesempleoTotal2016 = dataDesempleoTotal[2016];
console.log("el desempleo total 2017 es  = " +dataDesempleoTotal2016);
let dataDesempleoTotal2017Varones = dataDesempleoTotalVarones[2017];
console.log("el desempleo total VARONES  2017 es  = "+ dataDesempleoTotal2017Varones);
let dataDesempleoTotal2016Varones = dataDesempleoTotalVarones[2016];
console.log("el desempleo total VARONES  2016 es  = "+ dataDesempleoTotal2016Varones);

let dataDesempleoTotal2017Mujeres = dataDesempleoTotalMujeres[2017];
console.log("el desempleo total MUJERES  2017 es  = "+ dataDesempleoTotal2017Mujeres);
let dataDesempleoTotal2016Mujeres = dataDesempleoTotalMujeres[2016];
console.log("el desempleo total MUJERES  2016 es  = "+ dataDesempleoTotal2016Mujeres);


window.aplicar=aplicar;
