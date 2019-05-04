const date = WORLDBANK;
const arrSelectGralCountry = ["PERU", "MEXICO", "BRASIL", "CHILE"];
// console.log(arrSelectGralCountry);
const intervalos = ["1999", 
                    "2000", "2001", "2002", "2003", "2004", "2005", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", 
                    "2014", "2015", "2016", "2017"];
// console.log(intervalos);

//                                                          I N D I C A T O R S          S U B C  A T E G  O R  I  A 

//  INDICATORS SUBCATEGORIA  EDUCACION 
const arrSelectNivEduIndicators = ["Educacin terciaria, profesores (% de mujeres)", 
                               "Educación de nivel primario, alumnos (% de mujeres)", 
                               "Educación de nivel primario, maestras (% de mujeres)", 
                               "Educación de nivel secundario, alumnos (% de mujeres)", 
                               "Educación de nivel secundario, alumnos en programas de educación general (% de mujeres)", 
                               "Educación de nivel secundario, alumnos en programas vocacionales (% de mujeres)"];

const arrselectInsScoIndicators = ["Inscripción escolar, nivel preprimario, mujeres (% bruto)",
                               "Inscripción escolar, nivel primario, mujeres (% bruto)",
                               "Inscripción escolar, nivel primario, mujeres (% neto)",
                               "Inscripción escolar, nivel secundario, mujeres (% bruto)",
                               "Inscripción escolar, nivel secundario, mujeres (% neto)",
                               "Inscripción escolar, nivel terciario, mujeres (% bruto)"];

const arrselectNivInsIndicators = ["Nivel de instrucción, al menos ciclo inferior de la escuela secundaria completo, población de más de 25 años, mujeres (%) (acumulativo)",
                              "Nivel de instrucción, al menos ciclo superior de la escuela secundaria completo, población de más de 25 años, mujeres (%) (acumulativo)",
                              "Nivel de instrucción, al menos escuela de nivel posterior a la secundaria completa, población de más de 25 años, mujeres (%) (acumulativo)",
                              "Nivel de instrucción, al menos escuela primaria completa, población de más de 25 años, mujeres (%) (acumulativo)",
                              "Nivel de instrucción, al menos escuela terciaria de ciclo corto finalizada, población de más de 25 años, mujeres (%) (acumulativo)",
                              "Nivel de instrucción, al menos nivel de doctorado o equivalente, población de más de 25 años, mujeres (%) (acumulativo)",
                              "Nivel de instrucción, al menos nivel de licenciatura o equivalente, población de más de 25 años, mujeres (%) (acumulativo)",
                              "Nivel de instrucción, al menos nivel de maestría o equivalente, población de más de 25 años, mujeres (%) (acumulativo)"];
//  INDICATORS SUBCATEGORIA  LABORAL 
const arrselectNivDesIndicators = ["Desempleo, total (% de participación total en la fuerza laboral) (estimación nacional)",
                              "Desempleo, total de jóvenes (% del total de participación en la fuerza laboral de 15 a 24 años) (estimación nacional)",
                              "Desempleo, mujeres (% de participación femenina en la fuerza laboral) (estimación nacional)",
                              "Desempleo, varones (% de participación masculina en la fuerza laboral) (estimación nacional)",
                              "Desempleo, mujeres jóvenes (% de participación en la fuerza laboral de mujeres de 15 a 24 años) (estimación nacional)",
                              "Desempleo, varones jóvenes (% de participación en la fuerza laboral de varones de 15 a 24 años) (estimación nacional)"];

const arrselectLabForIndicators = [ "Fuerza laboral con educación avanzada (% del total)",
                              "Fuerza laboral con educación avanzada, mujeres (% de la fuerza laboral femenina)",
                              "Fuerza laboral con educación avanzada, varones (% de la fuerza laboral masculina)",
                              "Fuerza laboral con educación básica (% del total)",
                              "Fuerza laboral con educación básica, mujeres (% de la fuerza laboral femenina)",
                              "Fuerza laboral con educación básica, varones (% de la fuerza laboral masculina)",
                              "Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)",
                              "Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)"];
  
const arrselectLabParIndicators = [ "Tasa de población activa, mujeres (% de la población femenina mayor de 15 años) (estimación modelado OIT)",
                              "Tasa de participación en la fuerza laboral, de 15 a 24 años, mujeres (%) (estimación nacional)",
                              "Tasa de participación en la fuerza laboral, de 15 a 24 años, total (%) (estimación nacional)",
                              "Tasa de participación en la fuerza laboral, de 15 a 24 años, varones (%) (estimación nacional)",
                              "Tasa de participación en la fuerza laboral, hombres (% de la población masculina entre 15-64 años) (estimación modelado OIT)",
                              "Tasa de participación en la fuerza laboral, mujeres (% de la población femenina entre 15-64 años) (estimación modelado OIT)",
                              "Tasa de participación en la fuerza laboral, mujeres (% de la población femenina mayor de 15 años) (estimación nacional)",
                              "Tasa de participación en la fuerza laboral, total (% de la población total mayor de 15 años) (estimación nacional)",
                              "Tasa de participación en la fuerza laboral, total (% del total de la población entre 15-64 años) (estimación modelado OIT)",
                              "Tasa de participación en la fuerza laboral, varones (% de la población masculina mayor de 15 años) (estimación nacional)"];
                             
const arrseleccNioVioIndicators = [ "Mujeres que creen que está justificado que un marido golpee a su esposa (cualquiera de las cinco razones) (%)",
                              "Mujeres que creen que está justificado que un marido golpee a su esposa cuando a ella se le quema la comida (%)",
                              "Mujeres que creen que está justificado que un marido golpee a su esposa cuando descuida a los hijos (%)",
                              "Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella discute con él (%)",
                              "Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella se niega a tener relaciones sexuales (%)",
                              "Mujeres que creen que está justificado que un marido golpee a su esposa cuando sale sin avisarle (%)",
                              "Mujeres que se casaron por primera vez antes de los 18 (% de mujeres 10-24)"];                              

const arrPeru = date.PER.indicators;
const arrMexico = date.MEX.indicators;
const arrBrasil = date.BRA.indicators;
const arrChile = date.CHL.indicators;
// console.log(arrSelectNivEduIndicators);
// // const sectionEdu = document.getElementById('sectionEdu');
// // inicialmente 

function aplicar(year,question,country) {

  for (i = 0; i < country.length; i++) {

    // entonces recorremos cada indicatorName; 
    let a = country[i].indicatorName;

    // si ese indicador es el mismo que el que selecciono el usuario entonces 
    // buscamos la data de este elemento asi tenemos sus keys -- año y values ---%

    if (a === question) {

      let data = (country[i].data);
      console.log(data);

      // aqui un array con los años
      let arrayKeysObjetos = Object.keys(data); 
      console.log(arrayKeysObjetos);

      // AQUI un array con los % (values)
      let arrayValuesObjetos = Object.values(data); 
      console.log(arrayValuesObjetos);

      //busco la posicion del año que ingreso el usuario en el arrayKeyss
      let posicionYearKeys = arrayKeysObjetos.indexOf(year); 
      console.log(posicionYearKeys);



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
      console.log(posicionYearKeys);

      for (j = posicionYearKeys; j < (posicionYearKeys + 5); j++) {

        let valor = arrayKeysObjetos[j];
        console.log(valor);
        let row = document.createElement('td')

        //newtabla.appendChild(columna);
        row.innerHTML = arrayKeysObjetos[j];
        console.log(row.innerHTML);
        fila.appendChild(row)
      }
      // aqui estaria la segunda fila - los valores 

      let fila2 = document.createElement('tr')

      newtabla.appendChild(fila2);
      columna = document.createElement('td');
      columna.innerHTML = "valores";
      fila2.appendChild(columna);


      for (j = posicionYearKeys; j < (posicionYearKeys + 5); j++) {
        let valor = arrayValuesObjetos[j];
        console.log(valor);

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

};
