// Miércoles 30-07-25
// Declaración de campos
const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");

// Declaración de botones
const btnAgregar = document.getElementById("btnAgregar");
const btnClear = document.getElementById("btnClear");

// Declaración de las alertas
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
// Declaración de la tabla
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);

let cont =0;

// Number
// Validar que sea numérico
function validarCantidad(){
    if(txtNumber.value.length == 0){
        return false;
    } // Tenga info

    if(isNaN(txtNumber.value)){
        return false;
    } // Tiene que ser un número

    if(Number(txtNumber.value)<=0){
        return false;
    }// Mayor que 0

    return true;
} // ValidarCantidad

function getPrecio(){
return (Math.round(Math.random() * 5000)/100);
}//getPrecio

// click del botón
btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    let isValid = true;
    // Para limpiar alertas
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    // Para limpiar color de border 
    txtName.style.border = "";
    txtNumber.style.border = "";

    // Name
    // Validar que tenga información mínimo 3 letras
    if(txtName.value.length < 3){
        // Mensaje de error
        txtName.style.border = "medium red solid";
        alertValidacionesTexto.innerHTML = "<strong>Por favor ingresa un nombre de producto válido</strong><br>";
        alertValidaciones.style.display = "block";
    } // Menor que 3 <3
    
    // Number
    if(! validarCantidad()){
        // Mensaje de error
        txtNumber.style.border = "medium red solid";
        alertValidacionesTexto.innerHTML += "<strong>Proporciona la cantidad correcta</strong>";
        alertValidaciones.style.display = "block";
        isValid = false;
    } // ! validarCantidad

    if (isValid){
        //Agregar los elementos a la tabla
        cont++;
        let precio = getPrecio();
        let row=`<tr>
                        <td>${cont}</td>
                        <td>${txtName.value}</td>
                        <td>${txtNumber.value}</td>
                        <td>${precio}</td>
                </tr>
        `;
        cuerpoTabla.insertAdjacentHTML("beforeend", row);
        txtName.value ="";
        txtNumber.value = "";
        txtName.focus();
    }//isValid
}); // btnAgregar click