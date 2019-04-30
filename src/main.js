// se declararan los select en none 
// se declara primer select categoria educacion, subcategoria nivel de educacion
// para completar historia n°1 de usuario
document.getElementById("selectNivEdu").style.display = "none";
//
//   Aqui debiesen ir los select demas que aun estan sin realizacion de historia de usuario. (ver id en html)
//


// PRIMER EVENTO DOM  SELECT -NIVEL DE EDUCACION : 
// llamada del evento para mostrar select x 3 cuando se ingresa a categoria
document.getElementById("btnSectionNivelDeEducacion").addEventListener("click", (e) => {
    e.preventDefault();


    // como hay click en el boton entonces se activa DIV
    document.getElementById("selectNivEdu").style.display = "block";

    // a continuacion la funcion para insertar las optiones en los 3 select: 

    function tresSelecParaNivelDeEducacion() {


        //Tu array de PAISES   
        // aqui en el array tenemos el contenido de las opciones 
        // que tienes un valor de 0, 1,2,3   
        // y tienen un id por pais PER,MEX,BRA,CHL

        let selectcountryeducacion = document.getElementById("selectNivEduCountry");
        //Seleccionamos el select que contiene los paises para poder vincularlo  
        // con la variable fijada arriba ""



        for (let m = 0; m < arrayParaSelectCountryPorUsuario.length; m++) {

            let option = document.createElement("option");
            selectcountryeducacion.appendChild(option); //Metemos la opción en el select

            option.setAttribute("value", "id");
            //Creamos la opcion y se le dan los atriculos

            option.value = m;
            option.id = arrayParaSelectCountryPorUsuario[m];
            option.innerHTML = arrayParaSelectCountryPorUsuario[m]; //Metemos el texto en la opción
        }

        //Tu array  de 6 preguntas
        // aqui en el array tenemos el contenido de las opciones  
        // que tienes un valor de 0, 1,2,3 ,4,5 // y tienen un id por pais 
        //..........ver arriba o en excel son las preguntas de click educacion ---luego click en nivel de educacion 


        let selectparalosindicadoresdenivelquedeseamosmostrar = document.getElementById("selectNivEduIndicator");
        //Seleccionamos el select que contiene los paises para poder vincularlo // con la variable fijada arriba ""

        for (let m = 0; m < selectNivEduIndicadores.length; m++) {

            let option = document.createElement("option");
            selectparalosindicadoresdenivelquedeseamosmostrar.appendChild(option); //Metemos la opción en el select

            option.setAttribute("value", "id");
            //Creamos la opcion y se le dan los atriculos

            option.value = m;
            option.id = selectNivEduIndicadores[m];
            option.innerHTML = selectNivEduIndicadores[m]; //Metemos el texto en la opción
        }



        let selectparalosintervalos = document.getElementById("selectNivEduDecade");
         // se toma los valores de los años y se crea la variable intervalos(aunque por mientras los valores estan de manera 
         // general, es decir año a año desde 1990 hasta 2018-2017, lugo se espera crear intervalos).
        


        for (let m = 0; m < intervalos.length; m++) {

            let option = document.createElement("option");
            selectparalosintervalos.appendChild(option); //Metemos la opción en el select

            option.setAttribute("value", "id");
            //Creamos la opcion y se le dan los atriculos

            option.value = m;
            option.id = intervalos[m];
            option.innerHTML = intervalos[m]; //Metemos el texto en la opción
        }

    }
    tresSelecParaNivelDeEducacion();
    // se llama a la funcion generadora de los select
    // los cuales se crean cuando hay click en tarjeta/boton nivel de educacion 
});


// ESTA funcion permite identificar el año elegido por el usuario 
// el año es requerido para la funcion aplicar en archivo data.js 
// year entonces es parametro de la funcion aplicar()

function eligiendoAño() {
    const year = document.getElementById("selectNivEduDecade").options[document.getElementById("selectNivEduDecade").selectedIndex].text;
    console.log(year);
}







// SEGUNDO EVENTO DOM  - Click en MOSTRAR DATOS en NIVEL DE EDUCACION : 
document.getElementById("btnDataNivEdu").addEventListener("click", (e) => {
    e.preventDefault();

    //El primer parametro  YEAR
    // se utiliza selectedIndex para identificar seleccion del usuario con las opciones dadas 
    const year = document.getElementById("selectNivEduDecade").options[document.getElementById("selectNivEduDecade").selectedIndex].text;
    console.log(year);


    //El segundo parametro  PREGUNTA
    // se utiliza selectedIndex para identificar seleccion del usuario con las opciones dadas 
    const pregunta = document.getElementById("selectNivEduIndicator").options[document.getElementById("selectNivEduIndicator").selectedIndex].text;
    console.log(pregunta);

    //El tercer parametro COUNTRY
    // *******************************Aqui aun no se genera la identificacion, ya que hay que generar luego un condicional 
    // ******************************* si la opcion seleccionada fue 0 entonces corre constante Peru, fijada como constante en archivo js.
    // ******************************* si la opcion seleccionada fue 1 entonces corre constante Mexico, fijada como constante en archivo js.
    // ******************************* si la opcion seleccionada fue 2 entonces corre constante Brasil, fijada como constante en archivo js.
    // ******************************* si la opcion seleccionada fue 3 entonces corre constante Chile, fijada como constante en archivo js.
    // ******************************* para ello utilizar un if o un while...
    const country = Mexico;
    console.log(country);


    document.getElementById("probando").innerHTML = aplicar(year, country, pregunta);

});


// let edubtn = document.getElementById('edubtn');

// const homePage = document.getElementById('homePage');
// const sectionEdu = document.getElementById('sectionEdu');
// sectionEdu.style.display='none';
// sectionLab.style.display = 'none';
// sectionSoc.style.display = 'none';
// selectNivEdu.style.display = 'none';
// selectInsSco.style.display = 'none';
// selectNivIns.style.display = 'none';
// selectNivDes.style.display = 'none';
// selectLabFor.style.display = 'none';
// selectParLab.style.display = 'none';
// selectNivVio.style.display = 'none';
// tableDataPage.style.display = 'none';

// edubtn.addEventListener('click', function(){

//     sectionLab.style.display = 'none';
//     sectionSoc.style.display = 'none';
//     selectNivEdu.style.display = 'none';
//     selectInsSco.style.display = 'none';
//     selectNivIns.style.display = 'none';
//     selectNivDes.style.display = 'none';
//     selectLabFor.style.display = 'none';
//     selectParLab.style.display = 'none';
//     selectNivVio.style.display = 'none';
//     homePage.style.display = 'none';
//     tableDataPage.style.display = 'none';
//     sectionEdu.style.display = 'block';
//   })

//   socbtn.addEventListener('click', function(){
//     homePage.style.display = 'none';
//     sectionEdu.style.display='none';
//     sectionLab.style.display = 'none';
//     selectNivEdu.style.display = 'none';
//     selectInsSco.style.display = 'none';
//     selectNivIns.style.display = 'none';
//     selectNivDes.style.display = 'none';
//     selectLabFor.style.display = 'none';
//     selectParLab.style.display = 'none';
//     selectNivVio.style.display = 'none';
//     tableDataPage.style.display = 'none';
//     sectionSoc.style.display = 'block';
    
//   })

//   labbtn.addEventListener('click', function(){
//     homePage.style.display = 'none';
//     sectionSoc.style.display = 'none';
//     sectionEdu.style.display='none';
//     selectNivEdu.style.display = 'none';
//     selectInsSco.style.display = 'none';
//     selectNivIns.style.display = 'none';
//     selectNivDes.style.display = 'none';
//     selectLabFor.style.display = 'none';
//     selectParLab.style.display = 'none';
//     selectNivVio.style.display = 'none';
//     tableDataPage.style.display = 'none';
//     sectionLab.style.display = 'block';
//   })

//   homebtn.addEventListener('click', function(){
//     sectionLab.style.display = 'none';
//     sectionSoc.style.display = 'none';
//     sectionEdu.style.display='none';
//     selectNivEdu.style.display = 'none';
//     selectInsSco.style.display = 'none';
//     selectNivIns.style.display = 'none';
//     selectNivDes.style.display = 'none';
//     selectLabFor.style.display = 'none';
//     selectParLab.style.display = 'none';
//     selectNivVio.style.display = 'none';
//     tableDataPage.style.display = 'none';
//     homePage.style.display = 'block';
//   })

//   btnSecNivEdu.addEventListener('click', function(){
//     sectionEdu.style.display = 'none';
//     selectNivEdu.style.display = 'block';
//   })

//   btnSecInsSco.addEventListener('click', function(){
//     sectionEdu.style.display = 'none';
//     selectInsSco.style.display = 'block';
//   })
//   btnSecNivIns.addEventListener('click', function(){
//     sectionEdu.style.display = 'none';
//     selectNivIns.style.display = 'block';
//   })

//   btnSecNivDes.addEventListener('click', function(){
//     sectionLab.style.display = 'none';
//     selectNivDes.style.display = 'block';
//   })

//   btnSecLabFor.addEventListener('click', function(){
//     sectionLab.style.display = 'none';
//     selectLabFor.style.display = 'block';
//   })

//   btnSecParLab.addEventListener('click', function(){
//     sectionLab.style.display = 'none';
//     selectParLab.style.display = 'block';
//   })

//   btnSecNivVio.addEventListener('click', function(){
//     sectionSoc.style.display = 'none';
//     selectNivVio.style.display = 'block';
//   })

  
//   btnData.addEventListener('click', function(){
//     selectNivEdu.style.display = 'none';
//     tableDataPage.style.display = 'block';
//   })

  

  

// function countrySelec() {
//     let selectNivEduCountry = ["Perú", "Mexico", "Brasil", "Chile"]; //Tu array de provincias
//     let select = document.getElementById("selectNivEduCountry"); //Seleccionamos el select
//     for(let i=0; i < selectNivEduCountry.length; i++){ 
//         let option = document.createElement("option"); //Creamos la opcion
//         option.value = i;
//         option.id = Object.keys(WORLDBANK)[i];
//         option.innerHTML = selectNivEduCountry[i]; //Metemos el texto en la opción
//         select.appendChild(option); //Metemos la opción en el select
//     }
// }
// countrySelec();


// function showSelector(){
//     nivEdu();
// }
// function nivEdu() {
//     let selector = document.getElementById("selectNivEduCountry").value;
//     let values =Object.values(WORLDBANK)[selector];
//     console.log("EDU", values)
//     document.getElementById("selectNivEduIndicator").innerHTML="";
//     let selectNivEduIndicator = [[values.indicators[42].indicatorName, 42], [values.indicators[98].indicatorName, 98], [values.indicators[64].indicatorName, 64], [values.indicators[58].indicatorName, 58],[values.indicators[57].indicatorName, 57],[values.indicators[56].indicatorName, 56]]; //Tu array de provincias
//     let select = document.getElementById("selectNivEduIndicator"); //Seleccionamos el select
//     let prueba = [values.indicators[42].indicatorName, 42];
//     console.log(prueba[0])
//     console.log(prueba[1])
//     for(let i=0; i < selectNivEduIndicator.length; i++){ 
//         let option = document.createElement("option"); //Creamos la opcion
//         option.value = selectNivEduIndicator[i][1];
//         option.innerHTML = selectNivEduIndicator[i][0]; //Metemos el texto en la opción
//         select.appendChild(option); //Metemos la opción en el select
//     }
// }
// nivEdu();

// function nivDec(){
//     let answerSelector = document.getElementById("selectNivEduIndicator").value; // pide el index de answer
//    let countrySelector = document.getElementById("selectNivEduCountry").value; // pide el index de country
//     let values =Object.values(WORLDBANK)[countrySelector]; // pasa el index de country
//     let select = document.getElementById("selectNivEduDecade"); //Seleccionamos el select
//     console.log("DEC",values)
//     document.getElementById("selectNivEduDecade").innerHTML="";
//     let selectNivEduDecade = Object.keys(values.indicators[answerSelector].data); //
//     console.log(selectNivEduDecade)
  
    
    
//     for(let i=0; i < selectNivEduDecade.length; i++){ 
//         let option = document.createElement("option"); //Creamos la opcion
//         option.innerHTML = selectNivEduDecade[i]; //Metemos el texto en la opción
//         select.appendChild(option); //Metemos la opción en el select
//     }
// }
// nivDec();



