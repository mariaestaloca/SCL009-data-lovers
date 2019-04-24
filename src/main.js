
function cargar() {
    var selectNivEduCountry = ["Perú", "Mexico", "Brasil", "Chile"]; //Tu array de provincias
    var select = document.getElementById("selectNivEduCountry"); //Seleccionamos el select
    
    for(var i=0; i < selectNivEduCountry.length; i++){ 
        var option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = selectNivEduCountry[i]; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
    }
}
cargar();