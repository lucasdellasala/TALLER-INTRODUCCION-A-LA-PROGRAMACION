//Declarar funcion
function saludar() {
    console.log("Hola mundo");
}
//Ejecutar funcion
saludar();

//Una funcion mas divertida
//Esto solo funciona en el navegador, o con el modulo prompt instalado
function saludoInteractivo(){
    var nombre = prompt("Ingrese su nombre");
    console.log("Hola "+nombre)
}
saludoInteractivo();

//Funciones con parámetros

function sumar(a,b){
    console.log(a+b);
}

sumar(2,4);
sumar(5,9);


