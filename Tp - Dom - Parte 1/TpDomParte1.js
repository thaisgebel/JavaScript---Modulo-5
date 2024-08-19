/*Bootcamp 2024

Javascript 

DOM 

Consigna:

Aplica todo lo aprendido hasta el momento. Podes investigar por tu cuenta y agregar lo que creas necesario

Ejercicio 1: Seleccionar un Elemento y Agregar una Clase

Consigna: Selecciona del DOM el elemento p que tiene la clase "intro" y agrégale una nueva clase llamada "highlight".*/

let highlight1 = document.querySelector(".intro");

highlight1.classList.add("highlight");

console.log(highlight1);

/*Ejercicio 2: Seleccionar un Elemento por ID y Cambiar su Texto

Consigna: Selecciona del DOM el elemento con el id "header-title" y cambia su texto a "Nuevo Título".*/

let changeTitle = (document.getElementById("header-title").innerHTML =
  "Nuevo Titulo");

console.log(changeTitle);

/*Ejercicio 3: Seleccionar Múltiples Elementos y Agregar una Clase.

Consigna: Selecciona todos los elementos li dentro de una lista y mostrarlos en consola*/

let elementslist = document.querySelectorAll("li");

elementslist.forEach(function (value) {
  console.log(value);
});

/*Ejercicio 4: Eliminar una Clase de un Elemento
Consigna: Selecciona del DOM el elemento con la clase "warning" y elimínale esa clase.*/

let eliminateClass = document.querySelector(".warning");

eliminateClass.classList.remove("warning");

console.log(eliminateClass);

/*Ejercicio 5: Seleccionar y Cambiar el Contenido de Texto

Consigna: Selecciona del DOM el elemento h1 que tiene la clase "main-title" y cambia su texto a "¡Bienvenidos!".*/

let changeText = (document.querySelector(".main-title").innerHTML =
  "¡Bienvenidos!");

console.log(changeText);

/*Ejercicio 6: Seleccionar por ID y Cambiar el Color de Fondo

Consigna: Selecciona del DOM el elemento con el id "footer" y cambia su color de fondo(El que quieras).*/

let backgroundColor = document.getElementById("footer");

backgroundColor.style.backgroundColor = "green";

/*Ejercicio 7: Seleccionar y Agregar Contenido Adicional

Consigna: Selecciona del DOM el elemento div con la clase "content" y agrega dentro de él un nuevo párrafo que diga "Contenido adicional" (O lo que quieras que diga).*/

let addContent = (document.querySelector(".contentDiv").innerHTML +=
  "<p>carlitos</p>");

console.log(addContent);

/*Ejercicio 8: Verificar y Mostrar si un Elemento Tiene una Clase

Consigna: Selecciona del DOM el elemento con la clase "header" y muestra en la consola si tiene la clase "sticky".*/

let verifyHeader = document.querySelector(".header");
if (verifyHeader.classList.contains("sticky")) {
  console.log(verifyHeader);
}
