// // En archivo data js
// // contiene constante seleccionadas en excel de trabajo - rutas estudiadas para historias de usuario
// //const selectNivEduIndicadores --> son las opciones/PREGUNTAS  del select de pregutas en la categoria educacion, subseccion nivel de educacion 
// //const intervalos = un rango de años descriptivos de la informacion proveniente de la data

// // se fija UNA constante para cada pais, donde su ruta punto punto permite ingresar por medio de WORLDBAKN.pais.indicators a un array con 139 objetos cada uno 
// // donde por ejemplo --> const Peru = WORLDBANK.PER.indicators correspondera a 139 objetos --> cada objeto posee 3 elementos ..1 elemento data con informacion key/value y 1 elemento con indicatorName ...


// const arrayParaSelectCountryPorUsuario = ["PERU", "MEXICO", "BRASIL", "CHILE"];
// const selectNivEduIndicadores = ["Educacin terciaria, profesores (% de mujeres)", "Educación de nivel primario, alumnos (% de mujeres)", "Educación de nivel primario, maestras (% de mujeres)", "Educación de nivel secundario, alumnos (% de mujeres)", "Educación de nivel secundario, alumnos en programas de educación general (% de mujeres)", "Educación de nivel secundario, alumnos en programas vocacionales (% de mujeres)"];
// const intervalos = ["1999", "2000", "2001", "2002", "2003", "2004", "2005", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"];
// const Peru = WORLDBANK.PER.indicators;
// const Mexico = WORLDBANK.MEX.indicators;
// const Chile = WORLDBANK.CHL.indicators;
// const Brasil = WORLDBANK.BRA.indicators;
// //const date = WORLDBANK.indicators;

// // funcion general 
// // APLICAR()
// // EN ESTA funcion tomaremos las constantes proveniente de la seleccion que realice el usuario (idea en main.js)
// // al tener los tres parametros year/country / pregunta 
// // se generara una tabla de datos para ello ocupamos bucles FOR 

// function aplicar(year, country, pregunta) {


//      // LA primera funcion buscante 
//      // los permite preguntar si el elemento pregunta se encuetra en el total de elemento indicator name.
//      // esta funcion me devuelve si existe o no 
//      // es decir, true o false 
//      function buscando(element) {

//           return element.indicatorName === pregunta;
//           //me devuelve que alli si esta la pregunta  
//      }

//      // entonces que devuelva donde la funcion busqueda fue verdadera
//      // *****************************************************************posterios no reconoce el codigo FIND 
//      // puede solucionarse con una funcion general o condicional que englobe a la funcion BUSCANDO()
//      // DONDE SI LA FUNCION retorna verdadero entonces se calcule const objeto y se retorne como resultado de la funcion. 

//      const objeto = country.find(buscando);

//      // se busca la posicion del indicador en los 139 objetos del array 

//      const posicionObjeto = country.indexOf(objeto);

//      // conociendo la posicion accedo a la data que contiene la informacion por año key/value

//      const dataObjeto = country[posicionObjeto].data;


//      // se crea un array el cual almacenara los valores que se mostraran en la tabla 

//      // ********************************aqui esto puede modificarse y englobar esto en una function constructora de tabla 
//      // ******************************** POSIBLE FUNCTION TABLE ();
//      let valores = [];


//      // en la tabla queremos mostrar desde el año que ingresa el usuario hasta  nueve años mas por eso
//      // el for inicia en i = year y se realiza el ciclo hasta 9 años mas 
//      // creating all cells
//      for (i = year; i < (year + 9); i++) {

//           // se obtiene el valor de la propiedad en ese año 
//           let valueEnAñoElegidoPorUsuario = dataObjeto[i];

//           // luego se utiliza push 
//           // con ello el valor en el año elegido por el usuario se empuja al array valores;
//           valores.push(valueEnAñoElegidoPorUsuario);

//           // get the reference for the body
//           // se llama a los elementos de emcabezado en body 
//           // ************* revisar puede ser posible error hace referencia a un padre nodo pero no se ocupa posterior para appenchild
//           var mybody = document.getElementsByTagName("body")[0];
//           var mysection = document.getElementsByTagName("section")[0];

//           // creates <table> and <tbody> elements
//           // se crea la tabla y el y el cuerpo del body 
//           mytable = document.createElement("table");
//           mytablebody = document.createElement("tbody");


//           //  for (var j = 0; j < 10; j++) {
//           // creates a <tr> element
//           mycurrent_row = document.createElement("tr");


//           // a parte de las celdas necesitamos dos columnas distintas 
//           // entonces una columna sera los keys
//           // la otra columna sera para los values 
//           for (var k = 0; k < 2; k++) {

//                // para la primera columna creamos elementos td 
//                // el elemento dependera de i --> osea de los años
//                // entonces de crea un elemento td 
//                // se crea un texto = i
//                // con appendChild se ligan ambos codigos 
//                // y luego la celda creada se liga a su padre "row"
              
//                if (k = 1) {
//                     // creates a <td> element
//                     mycurrent_cell = document.createElement("td");
//                     // creates a Text Node
//                     currenttext = document.createTextNode(i);nuevos mensajes
￼
Hame (AcheZeta)16:44
La importancia de la visibilización de las mujeres.

¿Conocen el proyecto de la Correctora?

https://m.facebook.com/story.php?story_fbid=642334562860554&id=250332328727448
Sin título ￼
￼
￼
￼
￼
:grito:
7
￼
:mujer_mano_en_la_cara:
14
￼
:seriously:
9
￼
:angry_fb:
3
￼
￼
￼
￼
3 respuestas
Última respuesta hace 3 díasVer hilo
￼
Lizzie (lizzie136)21:15
De cuando aprovechas el html semántico 
https://twitter.com/calebporzio/status/1122924167769264130?s=21
Pueden ver la documentación de summary aquí https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary
￼Caleb Porzio@calebporzio
:fuego::grito: Something you probably didn't know HTML/CSS could do. SUPER useful!
￼Twitter29 abr.
￼
￼
￼MDN Web Docs
: The Disclosure Summary element
The HTML Disclosure Summary element (summary) element specifies a summary, caption, or legend for a details element's disclosure box.
￼
:heart_fb:
4
￼
:ojos_estrella:
2
￼
:monito:
2
￼
￼
Hame (AcheZeta)23:24
Un curso gratuito (: 
https://www.udemy.com/share/1004p8B0ESclxSR3Q=/
￼Udemy
React vs Angular vs Vue.js by Example | Udemy
Decide for yourself which you like the best. - Free Course(8 k
                    
//                     // appends the Text Node we created into the cell <td>
//                     mycurrent_cell.appendChild(currenttext);
//                     // appends the cell <td> into the row <tr>
//                     mycurrent_row.appendChild(mycurrent_cell);
//                }



//                // para la segunda columna creamos elementos td 
//                // el elemento dependera de dataObjeo[i] --> osea de los valores (%,-...)
//                // entonces de crea un elemento td 
//                // se crea un texto  dataObjeto[i]
//                // con appendChild se ligan ambos codigos 
//                // y luego la celda creada se liga a su padre "row"
//                if (k = 2) {

//                     if (dataObjeto[i] != 0) {

//                          // creates a <td> element
//                          mycurrent_cell = document.createElement("td");
                       
//                          // creates a Text Node
//                          currenttext = document.createTextNode(dataObjeto[i]);
//                          // appends the Text Node we created into the cell <td>
//                          mycurrent_cell.appendChild(currenttext);
//                          // appends the cell <td> into the row <tr>
//                          mycurrent_row.appendChild(mycurrent_cell);
//                     } else {
//                          // creates a <td> element
//                          mycurrent_cell = document.createElement("td");
//                          // creates a Text Node
//                          currenttext = document.createTextNode("sin medicion");
//                          // appends the Text Node we created into the cell <td>
//                          mycurrent_cell.appendChild(currenttext);
//                          // appends the cell <td> into the row <tr>
//                          mycurrent_row.appendChild(mycurrent_cell);
//                     }
//                }
//           }

//           // con esto estamos uniendo row al cuerpo de la tabla 
//      // ***************************************considerar que no se esta creando el emcabezado de la tabla ....thead --tr ---th-> year y th->valor
//      // *************************************** esta se puede crear directamente en html en el div que contendra a la tabla (fijar ID)
//      // appends the row <tr> into <tbody>
//      mytablebody.appendChild(mycurrent_row);

//      // UNIENDO el cuerpo de la tabla a su padre Table ( fijar id)
//      // appends <tbody> into <table>
//      mytable.appendChild(mytablebody)

//      //***
//      mysection.appendChild(mytable);
     
     
//      // insertando la tabla en el body 
//      //*********************************************creo que aqui esta el error del dom al localizar la tabla , se esta fijado la tabla en el body y hay que fijarla primero una section 
//      // appends <table> into <body>
//      mybody.appendChild(mysection);

//      // sets the border attribute of mytable to 2;
//      mytable.setAttribute("border", "2");
//      }

//   return valores;

// };

