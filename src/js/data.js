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
        const container = document.getElementById("tableDataPage");
        container.appendChild(newtabla);
  
        let fila = document.createElement('tr');
        let columna = document.createElement('td')
  
        columna.innerHTML = "años";
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
        columna.innerHTML = "valores";
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

  
window.aplicar=aplicar;