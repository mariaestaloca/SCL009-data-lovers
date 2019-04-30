let edubtn = document.getElementById('edubtn');

const homePage = document.getElementById('homePage');
const sectionEdu = document.getElementById('sectionEdu');
sectionEdu.style.display='none';
sectionLab.style.display = 'none';
sectionSoc.style.display = 'none';
selectNivEdu.style.display = 'none';
selectInsSco.style.display = 'none';
selectNivIns.style.display = 'none';
selectNivDes.style.display = 'none';
selectLabFor.style.display = 'none';
selectParLab.style.display = 'none';
selectNivVio.style.display = 'none';
tableDataPage.style.display = 'none';

edubtn.addEventListener('click', function(){

    sectionLab.style.display = 'none';
    sectionSoc.style.display = 'none';
    selectNivEdu.style.display = 'none';
    selectInsSco.style.display = 'none';
    selectNivIns.style.display = 'none';
    selectNivDes.style.display = 'none';
    selectLabFor.style.display = 'none';
    selectParLab.style.display = 'none';
    selectNivVio.style.display = 'none';
    homePage.style.display = 'none';
    tableDataPage.style.display = 'none';
    sectionEdu.style.display = 'block';
  })

  socbtn.addEventListener('click', function(){
    homePage.style.display = 'none';
    sectionEdu.style.display='none';
    sectionLab.style.display = 'none';
    selectNivEdu.style.display = 'none';
    selectInsSco.style.display = 'none';
    selectNivIns.style.display = 'none';
    selectNivDes.style.display = 'none';
    selectLabFor.style.display = 'none';
    selectParLab.style.display = 'none';
    selectNivVio.style.display = 'none';
    tableDataPage.style.display = 'none';
    sectionSoc.style.display = 'block';
    
  })

  labbtn.addEventListener('click', function(){
    homePage.style.display = 'none';
    sectionSoc.style.display = 'none';
    sectionEdu.style.display='none';
    selectNivEdu.style.display = 'none';
    selectInsSco.style.display = 'none';
    selectNivIns.style.display = 'none';
    selectNivDes.style.display = 'none';
    selectLabFor.style.display = 'none';
    selectParLab.style.display = 'none';
    selectNivVio.style.display = 'none';
    tableDataPage.style.display = 'none';
    sectionLab.style.display = 'block';
  })

  homebtn.addEventListener('click', function(){
    sectionLab.style.display = 'none';
    sectionSoc.style.display = 'none';
    sectionEdu.style.display='none';
    selectNivEdu.style.display = 'none';
    selectInsSco.style.display = 'none';
    selectNivIns.style.display = 'none';
    selectNivDes.style.display = 'none';
    selectLabFor.style.display = 'none';
    selectParLab.style.display = 'none';
    selectNivVio.style.display = 'none';
    tableDataPage.style.display = 'none';
    homePage.style.display = 'block';
  })

  btnSecNivEdu.addEventListener('click', function(){
    sectionEdu.style.display = 'none';
    selectNivEdu.style.display = 'block';
  })

  btnSecInsSco.addEventListener('click', function(){
    sectionEdu.style.display = 'none';
    selectInsSco.style.display = 'block';
  })
  btnSecNivIns.addEventListener('click', function(){
    sectionEdu.style.display = 'none';
    selectNivIns.style.display = 'block';
  })

  btnSecNivDes.addEventListener('click', function(){
    sectionLab.style.display = 'none';
    selectNivDes.style.display = 'block';
  })

  btnSecLabFor.addEventListener('click', function(){
    sectionLab.style.display = 'none';
    selectLabFor.style.display = 'block';
  })

  btnSecParLab.addEventListener('click', function(){
    sectionLab.style.display = 'none';
    selectParLab.style.display = 'block';
  })

  btnSecNivVio.addEventListener('click', function(){
    sectionSoc.style.display = 'none';
    selectNivVio.style.display = 'block';
  })

  
  btnData.addEventListener('click', function(){
    selectNivEdu.style.display = 'none';
    tableDataPage.style.display = 'block';
  })

  

  

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



