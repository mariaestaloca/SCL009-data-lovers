

function countrySelec() {
    let selectNivEduCountry = ["Perú", "Mexico", "Brasil", "Chile"]; //Tu array de provincias
    let select = document.getElementById("selectNivEduCountry"); //Seleccionamos el select
    for(let i=0; i < selectNivEduCountry.length; i++){ 
        let option = document.createElement("option"); //Creamos la opcion
        option.value = i;
        option.id = Object.keys(WORLDBANK)[i];
        option.innerHTML = selectNivEduCountry[i]; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
    }
}
countrySelec();


function showSelector(){
    nivEdu();
}
function nivEdu() {
    let selector = document.getElementById("selectNivEduCountry").value;
    let values =Object.values(WORLDBANK)[selector];
    console.log("EDU", values)
    document.getElementById("selectNivEduIndicator").innerHTML="";
    let selectNivEduIndicator = [[values.indicators[42].indicatorName, 42], [values.indicators[98].indicatorName, 98], [values.indicators[64].indicatorName, 64], [values.indicators[58].indicatorName, 58],[values.indicators[57].indicatorName, 57],[values.indicators[56].indicatorName, 56]]; //Tu array de provincias
    let select = document.getElementById("selectNivEduIndicator"); //Seleccionamos el select
    let prueba = [values.indicators[42].indicatorName, 42];
    console.log(prueba[0])
    console.log(prueba[1])
    for(let i=0; i < selectNivEduIndicator.length; i++){ 
        let option = document.createElement("option"); //Creamos la opcion
        option.value = selectNivEduIndicator[i][1];
        option.innerHTML = selectNivEduIndicator[i][0]; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
    }
}
nivEdu();

function nivDec(){
    let answerSelector = document.getElementById("selectNivEduIndicator").value; // pide el index de answer
   let countrySelector = document.getElementById("selectNivEduCountry").value; // pide el index de country
    let values =Object.values(WORLDBANK)[countrySelector]; // pasa el index de country
    let select = document.getElementById("selectNivEduDecade"); //Seleccionamos el select
    console.log("DEC",values)
    document.getElementById("selectNivEduDecade").innerHTML="";
    let selectNivEduDecade = Object.keys(values.indicators[answerSelector].data); //
    console.log(selectNivEduDecade)
    
    
    for(let i=0; i < selectNivEduDecade.length; i++){ 
        let option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = selectNivEduDecade[i]; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
    }
}
nivDec();



