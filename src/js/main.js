sectionEdu.style.display = 'none';
sectionLab.style.display = 'none';
sectionSoc.style.display = 'none';
selectNivEdu.style.display = 'none';
selectInsSco.style.display = 'none';
selectNivIns.style.display = 'none';
selectNivDes.style.display = 'none';
selectLabFor.style.display = 'none'
selectParLab.style.display = 'none';
selectNivVio.style.display = 'none';
tableDataPage.style.display = 'none';

//                                      EVENTOS CATEGORIAS EDU/SOC/LAB
// evento click categoria educacion
document.getElementById('edubtn').addEventListener('click', () => {

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
});
// evento click categoria social
document.getElementById('socbtn').addEventListener('click', () => {

    homePage.style.display = 'none';
    sectionEdu.style.display = 'none';
    sectionLab.style.display = 'none';
    selectNivEdu.style.display = 'none';
    selectInsSco.style.display = 'none';
    selectNivIns.style.display = 'none';
    selectNivDes.style.display = 'none';
    selectLabFor.style.display = 'none';
    selectParLab.style.display = 'none';
    selectNivVio.style.display = 'none';
    // tableDataPage.style.display = 'none';
    sectionSoc.style.display = 'block';

});
// evento click categoria laboral
document.getElementById('labbtn').addEventListener('click', () => {

    homePage.style.display = 'none';
    sectionSoc.style.display = 'none';
    sectionEdu.style.display = 'none';
    selectNivEdu.style.display = 'none';
    selectInsSco.style.display = 'none';
    selectNivIns.style.display = 'none';
    selectNivDes.style.display = 'none';
    selectLabFor.style.display = 'none';
    selectParLab.style.display = 'none';
    selectNivVio.style.display = 'none';
    // tableDataPage.style.display = 'none';
    sectionLab.style.display = 'block';
});
// evento click en el home 
document.getElementById('homebtn').addEventListener('click', () => {

    sectionLab.style.display = 'none';
    sectionSoc.style.display = 'none';
    sectionEdu.style.display = 'none';
    selectNivEdu.style.display = 'none';
    selectInsSco.style.display = 'none';
    selectNivIns.style.display = 'none';
    selectNivDes.style.display = 'none';
    selectLabFor.style.display = 'none';
    selectParLab.style.display = 'none';
    selectNivVio.style.display = 'none';
    // tableDataPage.style.display = 'none';
    homePage.style.display = 'block';
});
//                                       CLICK SUBCATEGORIA EDUCACION 
//click cuando se hace click en nivel de educacion 
btnSecNivEdu.addEventListener('click', function () {
    sectionEdu.style.display = 'none';
    selectNivEdu.style.display = 'block';
    selectNivEduOption();
});
// click cuando se hace click en inscripcion escolar 
btnSecInsSco.addEventListener('click', function () {
    sectionEdu.style.display = 'none';
    selectInsSco.style.display = 'block';
    selectInsScoOption(); 
});

// click cuando se hace click en nivel de inscripcion
btnSecNivIns.addEventListener('click', function () {
    sectionEdu.style.display = 'none';
    selectNivIns.style.display = 'block';
    selectNivInsOption();
});


//                                       CLICK SUBCATEGORIA LABORAL

// click cuando se hace click en nivel de desempleo
btnSecNivDes.addEventListener('click', function () {
    sectionLab.style.display = 'none';
    selectNivDes.style.display = 'block';
    selectNiveDesOption();
})

btnSecLabFor.addEventListener('click', function () {
    sectionLab.style.display = 'none';
    selectLabFor.style.display = 'block';
    selectForLabOption();
});

btnSecParLab.addEventListener('click', function () {
    sectionLab.style.display = 'none';
    selectParLab.style.display = 'block';
    selectParLabOption();
});


//                                       CLICK SUBCATEGORIA SOCIAL

// click cuando se hace click en nivel de desempleo
btnSecNivVio.addEventListener('click', function () {
    sectionSoc.style.display = 'none';
    selectNivVio.style.display = 'block';
    selectNivVioOption();
})


let year = "";
let question = "";
let country = "";

//       S  E  L  E  C  T  I  O  N      O  F     T  H  E     U  S  E  R


// STORING USER SELECTION - LEVEL OF EDUCATION

// Country Selection:
const selectNivEduCountrySave = document.getElementById("selectNivEduCountry");
selectNivEduCountrySave.addEventListener("change", () => {
    condition = selectNivEduCountrySave.options[selectNivEduCountrySave.selectedIndex].text;
    console.log(condition)
    pais(condition);
});

// Indicators Selection:
const selectNivEduIndicatorSave = document.getElementById("selectNivEduIndicator");
// const containerDos = document.getElementById("containerselectNivEduPreguntas");

selectNivEduIndicatorSave.addEventListener("change", () => {
    question = selectNivEduIndicatorSave.options[selectNivEduIndicatorSave.selectedIndex].text;
    console.log(question);
});

//Year Selection
const selectNivEduDecadeSave = document.getElementById("selectNivEduDecade");
// const year = document.getElementById("containerselectNivEduDecada");

selectNivEduDecadeSave.addEventListener("change", () => {
    year = selectNivEduDecadeSave.options[selectNivEduDecadeSave.selectedIndex].text;
    console.log(year);
});




// STORING USER SELECTION - SCHOOL REGISTRATION

// Country Selection:
const selectInsScoCountrySave = document.getElementById("selectInsScoCountry");
selectInsScoCountrySave.addEventListener("change", () => {
    condition = selectInsScoCountrySave.options[selectInsScoCountrySave.selectedIndex].text;
    console.log(condition)
    pais(condition);
});



// Indicators Selection:
const selectInsScoIndicatorSave= document.getElementById("selectInsScoIndicator");
// const containerDos = document.getElementById("containerselectNivEduPreguntas");

selectInsScoIndicatorSave.addEventListener("change", () => {
    question = selectInsScoIndicatorSave.options[selectInsScoIndicatorSave.selectedIndex].text;
    console.log(question);
});

//Year Selection
const selectInsScoDecadeSave = document.getElementById("selectInsScoDecade");

selectInsScoDecadeSave.addEventListener("change", () => {
    year = selectInsScoDecadeSave.options[selectInsScoDecadeSave.selectedIndex].text;
    console.log(year);
});


// STORING USER SELECTION - LEVEL OF INSTRUCTION 


// Country Selection:
const selectNivInsCountrySave = document.getElementById("selectNivInsCountry");
selectNivInsCountrySave.addEventListener("change", () => {
    condition = selectNivInsCountrySave.options[selectNivInsCountrySave.selectedIndex].text;
    console.log(condition);
    pais(condition);
}); 
// Indicators Selection:  
const selectNivInsIndicatorSave = document.getElementById("selectNivInsIndicator");
selectNivInsIndicatorSave.addEventListener("change", () => {
    question = selectNivInsIndicatorSave.options[selectNivInsIndicatorSave.selectedIndex].text;
    console.log(question);
});
//Year Selection
const selectNivInsDecadeSave = document.getElementById("selectNivInsDecade");
selectNivInsDecadeSave.addEventListener("change", () => {
    year = selectNivInsDecadeSave.options[selectNivInsDecadeSave.selectedIndex].text;
    console.log(year);
});


// STORING USER SELECTION -   LEVEL OF UNEMPLOYMENT

// Country Selection:
const selectNivDesCountrySave = document.getElementById("selectNivDesCountry");
selectNivDesCountrySave.addEventListener("change", () => {
    condition = selectNivDesCountrySave.options[selectNivDesCountrySave.selectedIndex].text;
    console.log(condition);
    pais(condition);
}); 
// Indicators Selection:  
const selectNivDesIndicatorSave = document.getElementById("selectNivDesIndicator");
selectNivDesIndicatorSave.addEventListener("change", () => {
    question = selectNivDesIndicator.options[selectNivDesIndicator.selectedIndex].text;
    console.log(question);
});
//Year Selection
const selectNivDesDecadeSave = document.getElementById("selectNivDesDecade");
selectNivDesDecadeSave.addEventListener("change", () => {
    year = selectNivDesDecadeSave.options[selectNivDesDecadeSave.selectedIndex].text;
    console.log(year);
});


// obteniendo eleccion de usuario -   FUERZA LABORAL

const selectLabForCountrySave = document.getElementById("selectLabForCountry");
selectLabForCountrySave.addEventListener("change", () => {
    condition = selectLabForCountrySave.options[selectLabForCountrySave.selectedIndex].text;
    console.log(condition);
    pais(condition);
}); 
  
const selectLabForIndicatorSave = document.getElementById("selectLabForIndicator");
selectLabForIndicatorSave.addEventListener("change", () => {
    question = selectLabForIndicatorSave.options[selectLabForIndicatorSave.selectedIndex].text;
    console.log(question);
});

const selectLabForDecadeSave = document.getElementById("selectLabForDecade");
selectLabForDecadeSave.addEventListener("change", () => {
    year = selectLabForDecadeSave.options[selectLabForDecadeSave.selectedIndex].text;
    console.log(year);
});

// obteniendo eleccion de usuario -   PARTICIPACION LABORAL 

const selectParLabCountrySave = document.getElementById("selectParLabCountry");
selectParLabCountrySave.addEventListener("change", () => {
    condition = selectParLabCountrySave.options[selectParLabCountrySave.selectedIndex].text;
    console.log(condition);
    pais(condition);
}); 
  
const selectParLabIndicatorSave = document.getElementById("selectParLabIndicator");
selectParLabIndicatorSave.addEventListener("change", () => {
    question = selectParLabIndicatorSave.options[selectParLabIndicatorSave.selectedIndex].text;
    console.log(question);
});

const selectParLabDecadeSave = document.getElementById("selectParLabDecade");
selectParLabDecadeSave.addEventListener("change", () => {
    year = selectParLabDecadeSave.options[selectParLabDecadeSave.selectedIndex].text;
    console.log(year);
});

// obteniendo eleccion de usuario -   NIVEL DE VIOLENCIA INTRAFAMILIAR

const selectNivVioCountrySave = document.getElementById("selectNivVioCountry");
selectNivVioCountrySave.addEventListener("change", () => {
    condition = selectNivVioCountrySave.options[selectNivVioCountrySave.selectedIndex].text;
    console.log(condition);
    pais(condition);
}); 
  
const selectNivVioIndicatorSave = document.getElementById("selectNivVioIndicator");
selectNivVioIndicatorSave.addEventListener("change", () => {
    question = selectNivVioIndicatorSave.options[selectNivVioIndicatorSave.selectedIndex].text;
    console.log(question);
});

const selectNivVioDecadeSave = document.getElementById("selectNivVioDecade");
selectNivVioDecadeSave.addEventListener("change", () => {
    year = selectNivVioDecadeSave.options[selectNivVioDecadeSave.selectedIndex].text;
    console.log(year);
});





//   M O S T R A R      D A T O S ; 
//VARIABLES VACIAS fx aplicar()

document.getElementById("btnData").addEventListener("click", () => {
    if (year == "" || question == "" || country == "") {
        alert("Debe completar todos los datos requeridos");
    } else {
        aplicar(year, question, country);
        tableDataPage.style.display = 'block';
    }

});

document.getElementById("btnDataInsSco").addEventListener("click", () => {
    if (year == "" || question == "" || country == "") {
        alert("Debe completar todos los datos requeridos");
    } else {
        aplicar(year, question, country);
        tableDataPage.style.display = 'block';
    }
    console.log(year);
    console.log(question);
    console.log(country);
});

document.getElementById("btnDataNivIns").addEventListener("click", () => {
    if (year == "" || question == "" || country == "") {
        alert("Debe completar todos los datos requeridos");
    } else {
        aplicar(year, question, country);
        tableDataPage.style.display = 'block';
    }
    console.log(year);
    console.log(question);
    console.log(country);
});

document.getElementById("btnDataNivDes").addEventListener("click", () => {
    if (year == "" || question == "" || country == "") {
        alert("Debe completar todos los datos requeridos");
    } else {
        aplicar(year, question, country);
        tableDataPage.style.display = 'block';
    }
    console.log(year);
    console.log(question);
    console.log(country);
});

document.getElementById("btnDataLabFor").addEventListener("click", () => {
    if (year == "" || question == "" || country == "") {
        alert("Debe completar todos los datos requeridos");
    } else {
        aplicar(year, question, country);
        tableDataPage.style.display = 'block';
    }
    console.log(year);
    console.log(question);
    console.log(country);
});

document.getElementById("btnDataParLab").addEventListener("click", () => {
    if (year == "" || question == "" || country == "") {
        alert("Debe completar todos los datos requeridos");
    } else {
        aplicar(year, question, country);
        tableDataPage.style.display = 'block';
    }
    console.log(year);
    console.log(question);
    console.log(country);
});
document.getElementById("btnDataNivVio").addEventListener("click", () => {
    if (year == "" || question == "" || country == "") {
        alert("Debe completar todos los datos requeridos");
    } else {
        aplicar(year, question, country);
        tableDataPage.style.display = 'block';
    }
    console.log(year);
    console.log(question);
    console.log(country);
});


// funcion condicional pais
function pais(condition) {

    if (condition === "PERU") {
        country = arrPeru;
    } else if (condition === "MEXICO") {
        country = arrMexico;
    } else if (condition = "BRASIL") {
        country = arrBrasil;
    } else {
        country = arrChile;
    }


    //  return country;
}