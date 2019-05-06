//     F U N C T I O N S   C R E A T I O N    S E L E C T 
//            EDUCACION

//     creacion de select para nivel de educacion
function selectNivEduOption() {
    //Tu array de PAISES  aqui en el array tenemos el contenido de las opciones y tienen un id por pais PER,MEX,BRA,CHL
    let selectCountryNivEdu = document.getElementById("selectNivEduCountry");

    let option = document.createElement("option");  //opcion por defecto
    selectCountryNivEdu.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    //Seleccionamos el select que contiene los paises para poder vincularlo  // con la variable fijada arriba ""
    for (let m = 0; m < arrSelectGralCountry.length; m++) {

        let option = document.createElement("option");
        selectCountryNivEdu.appendChild(option); //Metemos la opción en el select
        option.setAttribute("value", "id"); //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrSelectGralCountry[m];
        option.innerHTML = arrSelectGralCountry[m]; //Metemos el texto en la opción
    }
    
    let selectIndicatorNivEdu = document.getElementById("selectNivEduIndicator");

    option = document.createElement("option");//opcion por defecto
    selectIndicatorNivEdu.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    //Seleccionamos el select que contiene los paises para poder vincularlo // con la variable fijada arriba ""
    for (let m = 0; m < arrSelectNivEduIndicators.length; m++) {

        let option = document.createElement("option");
        selectIndicatorNivEdu.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");//Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrSelectNivEduIndicators[m];
        option.innerHTML = arrSelectNivEduIndicators[m]; //Metemos el texto en la opción
    }

    let selecIntervalosNivEdu = document.getElementById("selectNivEduDecade");
    //opcion por defecto
    option = document.createElement("option");
    selecIntervalosNivEdu.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."
        
    for (let m = 0; m < intervalos.length; m++) {

        let option = document.createElement("option");
        selecIntervalosNivEdu.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id"); //Creamos la opcion y se le dan los atriculos
       
        option.value = m;
        option.id = intervalos[m];
        option.innerHTML = intervalos[m]; //Metemos el texto en la opción
    }
};

// creacion de select para Inscripcion Escolar
function selectInsScoOption() {

    //Tu array de PAISES  aqui en el array tenemos el contenido de las opciones y tienen un id por pais PER,MEX,BRA,CHL
    let selectCountryNivEdu = document.getElementById("selectInsScoCountry");

    //opcion por defecto
    let option = document.createElement("option");
    selectCountryNivEdu.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."


    //Seleccionamos el select que contiene los paises para poder vincularlo  // con la variable fijada arriba ""
    for (let m = 0; m < arrSelectGralCountry.length; m++) {

        let option = document.createElement("option");
        selectCountryNivEdu.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");
        //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrSelectGralCountry[m];
        option.innerHTML = arrSelectGralCountry[m]; //Metemos el texto en la opción
    }
   
    let selectIndicatorInsSco = document.getElementById("selectInsScoIndicator");

    //opcion por defecto
    option = document.createElement("option");
    selectIndicatorInsSco.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    //Seleccionamos el select que contiene los paises para poder vincularlo // con la variable fijada arriba ""
    for (let m = 0; m < arrselectInsScoIndicators.length; m++) {

        let option = document.createElement("option");
        selectIndicatorInsSco.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");//Creamos la opcion y se le dan los atriculos
        
        option.value = m;
        option.id = arrselectInsScoIndicators[m];
        option.innerHTML = arrselectInsScoIndicators[m]; //Metemos el texto en la opción
    }

    let selecIntervalosNivEdu = document.getElementById("selectInsScoDecade");
    //opcion por defecto
    option = document.createElement("option");
    selecIntervalosNivEdu.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."
    for (let m = 0; m < intervalos.length; m++) {

        let option = document.createElement("option");
        selecIntervalosNivEdu.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");//Creamos la opcion y se le dan los atriculos
        
        option.value = m;
        option.id = intervalos[m];
        option.innerHTML = intervalos[m]; //Metemos el texto en la opción
    }
};

// creacion de select para Nivel de instruccion 
function selectNivInsOption() {

    //Tu array de PAISES  aqui en el array tenemos el contenido de las opciones y tienen un id por pais PER,MEX,BRA,CHL
    let selectCountryNivIns = document.getElementById("selectNivInsCountry");

    //opcion por defecto
    let option = document.createElement("option");
    selectCountryNivIns.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."


    //Seleccionamos el select que contiene los paises para poder vincularlo  // con la variable fijada arriba ""
    for (let m = 0; m < arrSelectGralCountry.length; m++) {

        let option = document.createElement("option");
        selectCountryNivIns.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");
        //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrSelectGralCountry[m];
        option.innerHTML = arrSelectGralCountry[m]; //Metemos el texto en la opción
    }
  
    let selectIndicatorNivIns = document.getElementById("selectNivInsIndicator");

    //opcion por defecto
    option = document.createElement("option");
    selectIndicatorNivIns.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    //Seleccionamos el select que contiene los paises para poder vincularlo // con la variable fijada arriba ""
    for (let m = 0; m < arrselectNivInsIndicators.length; m++) {

        let option = document.createElement("option");
        selectIndicatorNivIns.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id"); //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrselectNivInsIndicators[m];
        option.innerHTML = arrselectNivInsIndicators[m]; //Metemos el texto en la opción
    }

    let selecIntervalosNivIns = document.getElementById("selectNivInsDecade");
    //opcion por defecto
    option = document.createElement("option");
    selecIntervalosNivIns.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."
    for (let m = 0; m < intervalos.length; m++) {

        let option = document.createElement("option");
        selecIntervalosNivIns.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");//Creamos la opcion y se le dan los atriculos
        
        option.value = m;
        option.id = intervalos[m];
        option.innerHTML = intervalos[m]; //Metemos el texto en la opción
    }
};

//            LABORAL 

// creacion de select para Nivel de Desempleo
function selectNiveDesOption() {

    // se crea contenedor del select en pais 
    let selectCountryNivDes = document.getElementById("selectNivDesCountry");
    //opcion por defecto
    let option = document.createElement("option");
    selectCountryNivDes.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."


    //Seleccionamos el select que contiene los paises para poder vincularlo  // con la variable fijada arriba ""
    for (let m = 0; m < arrSelectGralCountry.length; m++) {

        let option = document.createElement("option");
        selectCountryNivDes.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");
        //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrSelectGralCountry[m];
        option.innerHTML = arrSelectGralCountry[m]; //Metemos el texto en la opción
    }

    let selectIndicatorNivDes = document.getElementById("selectNivDesIndicator");

    //opcion por defecto
    option = document.createElement("option");
    selectIndicatorNivDes.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    //Seleccionamos el select que contiene los paises para poder vincularlo // con la variable fijada arriba ""
    for (let m = 0; m < arrselectNivDesIndicators.length; m++) {

        let option = document.createElement("option");
        selectIndicatorNivDes.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");//Creamos la opcion y se le dan los atriculos
        
        option.value = m;
        option.id = arrselectNivDesIndicators[m];
        option.innerHTML = arrselectNivDesIndicators[m]; //Metemos el texto en la opción
    }

    let selecIntervalosNivDes = document.getElementById("selectNivDesDecade");
    //opcion por defecto
    option = document.createElement("option");
    selecIntervalosNivDes.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."
    // se toma los valores de los años y se crea la variable intervalos(aunque por mientras los valores estan de manera 
    // general, es decir año a año desde 1990 hasta 2018-2017, lugo se espera crear intervalos).
    for (let m = 0; m < intervalos.length; m++) {

        let option = document.createElement("option");
        selecIntervalosNivDes.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id"); //Creamos la opcion y se le dan los atriculos
       
        option.value = m;
        option.id = intervalos[m];
        option.innerHTML = intervalos[m]; //Metemos el texto en la opción
    }
};

// creacion de select para Fuerza Laboral
function selectForLabOption() {

    // se crea contenedor del select en pais 
    let selectCountryLabFor = document.getElementById("selectLabForCountry");
    //opcion por defecto
    let option = document.createElement("option");
    selectCountryLabFor.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."


    //Seleccionamos el select que contiene los paises para poder vincularlo  // con la variable fijada arriba ""
    for (let m = 0; m < arrSelectGralCountry.length; m++) {

        let option = document.createElement("option");
        selectCountryLabFor.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");
        //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrSelectGralCountry[m];
        option.innerHTML = arrSelectGralCountry[m]; //Metemos el texto en la opción
    }


    let selectIndicatorLabFor = document.getElementById("selectLabForIndicator");

    //opcion por defecto
    option = document.createElement("option");
    selectIndicatorLabFor.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    //Seleccionamos el select que contiene los paises para poder vincularlo // con la variable fijada arriba ""
    for (let m = 0; m < arrselectLabForIndicators.length; m++) {

        let option = document.createElement("option");
        selectIndicatorLabFor.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");
        //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrselectLabForIndicators[m];
        option.innerHTML = arrselectLabForIndicators[m]; //Metemos el texto en la opción
    }

    let selectIntervalosLabFor = document.getElementById("selectLabForDecade");
    //opcion por defecto
    option = document.createElement("option");
    selectIntervalosLabFor.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."
    // se toma los valores de los años y se crea la variable intervalos(aunque por mientras los valores estan de manera 
    // general, es decir año a año desde 1990 hasta 2018-2017, lugo se espera crear intervalos).
    for (let m = 0; m < intervalos.length; m++) {

        let option = document.createElement("option");
        selectIntervalosLabFor.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");
        //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = intervalos[m];
        option.innerHTML = intervalos[m]; //Metemos el texto en la opción
    }
};

// creacion de select para Participacion Laboral 
function selectParLabOption() {

    // se crea contenedor del select en pais 
    let selectCountryParLab = document.getElementById("selectParLabCountry");
    //opcion por defecto
    let option = document.createElement("option");
    selectCountryParLab.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."


    //Seleccionamos el select que contiene los paises para poder vincularlo  // con la variable fijada arriba ""
    for (let m = 0; m < arrSelectGralCountry.length; m++) {

        let option = document.createElement("option");
        selectCountryParLab.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");
        //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrSelectGralCountry[m];
        option.innerHTML = arrSelectGralCountry[m]; //Metemos el texto en la opción
    }


    let selectIndicatorLabPar = document.getElementById("selectParLabIndicator");

    //opcion por defecto
    option = document.createElement("option");
    selectIndicatorLabPar.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    //Seleccionamos el select que contiene los paises para poder vincularlo // con la variable fijada arriba ""
    for (let m = 0; m < arrselectLabParIndicators.length; m++) {

        let option = document.createElement("option");
        selectIndicatorLabPar.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");
        //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrselectLabParIndicators[m];
        option.innerHTML = arrselectLabParIndicators[m]; //Metemos el texto en la opción
    }

    let selecIntervalosLabPar = document.getElementById("selectParLabDecade");
    //opcion por defecto
    option = document.createElement("option");
    selecIntervalosLabPar.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."
    // se toma los valores de los años y se crea la variable intervalos(aunque por mientras los valores estan de manera 
    // general, es decir año a año desde 1990 hasta 2018-2017, lugo se espera crear intervalos).
    for (let m = 0; m < intervalos.length; m++) {

        let option = document.createElement("option");
        selecIntervalosLabPar.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");
        //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = intervalos[m];
        option.innerHTML = intervalos[m]; //Metemos el texto en la opción
    }
    
};



//            SOCIAL

// creacion de select para Nivel de Desempleo
function selectNivVioOption() {

    // se crea contenedor del select en pais 
    let selectCountryNivVio= document.getElementById("selectNivVioCountry");
    //opcion por defecto
    let option = document.createElement("option");
    selectCountryNivVio.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."


    //Seleccionamos el select que contiene los paises para poder vincularlo  // con la variable fijada arriba ""
    for (let m = 0; m < arrSelectGralCountry.length; m++) {

        let option = document.createElement("option");
        selectCountryNivVio.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");
        //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrSelectGralCountry[m];
        option.innerHTML = arrSelectGralCountry[m]; //Metemos el texto en la opción
    }


    let selectIndicatorNivVio = document.getElementById("selectNivVioIndicator");

    //opcion por defecto
    option = document.createElement("option");
    selectIndicatorNivVio.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."

    //Seleccionamos el select que contiene los paises para poder vincularlo // con la variable fijada arriba ""
    for (let m = 0; m < arrseleccNioVioIndicators.length; m++) {

        let option = document.createElement("option");
        selectIndicatorNivVio.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");
        //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = arrseleccNioVioIndicators[m];
        option.innerHTML = arrseleccNioVioIndicators[m]; //Metemos el texto en la opción
    }

    let selecIntervalosNivVio = document.getElementById("selectNivVioDecade");
    //opcion por defecto
    option = document.createElement("option");
    selecIntervalosNivVio.appendChild(option);
    option.setAttribute("value", "id");
    option.value = ""
    option.innerHTML = "Seleccione..."
    // se toma los valores de los años y se crea la variable intervalos(aunque por mientras los valores estan de manera 
    // general, es decir año a año desde 1990 hasta 2018-2017, lugo se espera crear intervalos).
    for (let m = 0; m < intervalos.length; m++) {

        let option = document.createElement("option");
        selecIntervalosNivVio.appendChild(option); //Metemos la opción en el select

        option.setAttribute("value", "id");
        //Creamos la opcion y se le dan los atriculos

        option.value = m;
        option.id = intervalos[m];
        option.innerHTML = intervalos[m]; //Metemos el texto en la opción
    }
};