/*Bootcamp 2024

Javascript 

EVENTOS

Consigna:
Aplica todo lo aprendido hasta el momento. Podes investigar por tu cuenta y agregar lo que creas necesario

Ejercicio 1: Manejar Evento para Mostrar un Mensaje: Selecciona un botón con el id "show-message" y agrega un evento click que muestre un mensaje de alerta diciendo "¡Hola, mundo!".*/

let showMessage = document.getElementById("show-message");

showMessage.addEventListener("click", function () {
  alert("NO ME TOQUES!");
});

/*Ejercicio 2: Cambiar el Color de Fondo al Hacer Clic: Selecciona el body y agrega un evento que cambie su color de fondo al color que prefieras.*/

let changeColor = document.querySelector(".change-color");
let bodyChange = document.querySelector("body");

changeColor.addEventListener("click", function () {
  bodyChange.style.backgroundColor = "yellow";
});

/*Ejercicio 3: Cambiar Texto al Hacer Clic: Selecciona un párrafo con la clase "click-text" y agrega un evento que cambie su texto a "Has hecho clic aquí".*/

let clickText = document.querySelector(".click-text");

console.log(clickText);

clickText.addEventListener("click", function () {
  clickText.textContent = "LO HICISTE :(";
});

/*Ejercicio 4: Cambiar el Valor de un Input al Cambiarlo: Selecciona un input de texto y crea un elemento párrafo el cual agreguemos lo que vamos escribiendo en el input.*/

let input = document.querySelector("input");
let inputText = document.querySelector(".input-text");

input.addEventListener("input", function (event) {
  inputText.textContent = event.target.value;
});

/*Ejercicio 5: Validar Formulario al Enviarlo: Selecciona un formulario con el id "signup-form"que tenga 2 inputs y agrega un evento que al enviar el formulario valide si los campos están completos. Si no lo están, muestra un mensaje de error.*/

let inputForm = document.querySelector(".input-form");
let inputForm1 = document.querySelector(".input-form1");
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (inputForm.value == "" || inputForm1.value == "") {
    alert("Formulario invalido.");
  } else {
    alert("El formulario se envio.");
    form.submit(); // reanuda el formulario
  }
});

/*Ejercicio 6: Evento para Mostrar un Mensaje al Cargar la Página: Agrega un evento al body que muestre un mensaje en consola diciendo "La página se ha cargado".*/

window.addEventListener("load", function () {
  console.log("La pagina se cargo completamente.");
});

/*Ejercicio 7: Agregar Elemento a la Lista al Hacer Clic: Selecciona un botón con el id "add-item" y agrega un evento que añada un nuevo elemento li a una lista con la clase "item-list".*/

let list = document.querySelector(".list");
let listButton = document.querySelector(".list-button");

listButton.addEventListener("click", function () {
  let listItem = document.createElement("li");
  listItem.textContent = "Nuevo item";
  list.append(listItem);
});

/*Ejercicio 8: Prevenir el Comportamiento por Defecto al Enviar Formulario: Selecciona un formulario con el id "contact-form" y agrega unos eventos para evitar que el formulario se envíe, y luego muestra un mensaje diciendo "El envío del formulario ha sido detenido".*/

let contactForm = document.querySelector(".contact-form");
let inputFormP8 = document.querySelector(".input-form_p8");
let submitformP8 = document.querySelector(".submit-form_p8");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("El envio del formulario se detuvo.");
});

/*Ejercicio 9: Contar y Mostrar Clics en un Botón: Selecciona un botón con la clase "count-button" y agrega un evento que cuente cuántas veces se ha hecho clic en él, mostrando el total en un span con el id "click-count".*/

let countButton = document.querySelector(".count-button");
let clickCount = document.querySelector(".click-count");
let counter = 0;

countButton.addEventListener("click", function () {
  counter++;
  clickCount.textContent = counter;
});

/*Ejercicio 10: Validar Email en un Formulario: Selecciona un formulario con el id "email-form" y agrega un evento que valide que el campo de email contiene un formato válido antes de enviarlo.*/

let emailForm = document.getElementById("email-form");
let inputMail = document.querySelector(".input-mail");
let submitMail = document.querySelector(".submit-mail");

emailForm.addEventListener("submit", function (event) {
  event.preventDefault;
  if (inputMail.value !== "" && inputMail.value.includes("@") === true) {
    alert("Formulario enviado");
    form.submit;
  } else {
    alert("El mail ingresado no es valido");
  }

  /*Ejercicio 11: Evento para Mostrar/Ocultar Contenido: Selecciona un botón con el id "toggle-content" y un div con la clase "content-box", y agrega un evento que muestre o oculte el contenido del div al hacer clic.*/
});

let toggleContent = document.getElementById("toggle-content");

let contentBox = document.querySelector(".content-box");
contentBox.style.display = "none";

toggleContent.addEventListener("click", function () {
  if (contentBox.style.display === "none") {
    contentBox.style.display = "block";
  } else {
    contentBox.style.display = "none";
  }
});

/*Ejercicio 12: Prevenir el Comportamiento por Defecto en un Enlace: Selecciona un enlace con la clase "no-default" y agrega un evento para evitar que el enlace navegue a otra página, mostrando en su lugar un mensaje en consola.*/

let noDefault = document.querySelector(".no-default");

noDefault.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("No se puede dirigir al link");
});

/*Ejercicio 13: Cambiar el Estilo de un Elemento: Selecciona un botón con el id "add-class" y un párrafo con la clase "text". Agrega un evento que añada una clase "highlight" al párrafo y que cambie su estilo (A lo que gustes).*/

let buttonAddClass = document.getElementById("add-class");
let text = document.querySelector(".text");

buttonAddClass.addEventListener("click", function () {
  if (text.classList.contains("highlight") === true) {
    text.classList.remove("highlight");
    text.textContent = "POR DIOS EL BOTON NOOOOO!!!!";
  } else {
    text.textContent = "...No de nuevo D: ";
    text.classList.add("highlight");
  }
});

/*Ejercicio 14: Alternar Contenido de Texto: Selecciona un botón con el id "toggle-text" y un párrafo con la clase "text-toggle". Agrega un evento que cambie el texto del párrafo entre "Texto 1" y "Texto 2".*/

let buttonToggleText = document.getElementById("toggle-text");
let textToggle = document.querySelector(".text-toggle");
let textToggle1 = document.querySelector(".text-toggle1");

textToggle1.style.display = "none";

buttonToggleText.addEventListener("click", function () {
  textToggle.classList.toggle("text-toggle");
  if (textToggle.classList.contains("text-toggle")) {
    textToggle1.style.display = "block";
    textToggle.style.display = "none";
  } else {
    textToggle.style.display = "block";
    textToggle1.style.display = "none";
  }
});

/*Ejercicio 15: Agregar Contenido HTML Dinámicamente: Selecciona un botón con el id "add-html" y un div con la clase "container". Agrega un evento click que inserte un bloque de HTML dentro del div.*/

let buttonAddHtml = document.getElementById("add-html");
let divContainer = document.querySelector(".container");
let newDiv = document.querySelector(".new-div");

newDiv.style.display = "none";

buttonAddHtml.addEventListener("click", function () {
  divContainer.classList.toggle("newDiv");
  newDiv.style.display = "block";
  if (divContainer.classList.contains("newDiv") === true) {
    divContainer.append(newDiv);
    newDiv.style.display = "block";
  } else {
    newDiv.style.display = "none";
  }
});

/*Ejercicio 16: Crear y Agregar un Nuevo Elemento al DOM: Selecciona un botón con el id "create-element". Agrega un evento que cree un nuevo párrafo p con el texto "Elemento creado" y lo añada al final de un div con la clase "content".*/

let buttonCreateElement = document.getElementById("create-element");
let divContent = document.querySelector(".content");

buttonCreateElement.addEventListener("click", function () {
  let pContent = document.createElement("p");
  pContent.textContent = "Elemento creado :D";
  divContent.append(pContent);
});

/*Ejercicio 17: Cambiar el Color de Fondo de Múltiples Elementos: Selecciona todos los elementos li dentro de una lista con la clase "color-list" y un botón con el id "change-color". Agrega un evento que cambie el color de fondo de cada li*/

let buttonChangeColor = document.getElementById("change-color");
let colorList = document.querySelectorAll(".color-list");

buttonChangeColor.addEventListener("click", function () {
  colorList.forEach(function (element) {
    element.style.backgroundColor = "#3366ff";
  });
});

/*Ejercicio 18: Crear una Lista de Ítems Dinámicamente: Selecciona un botón con el id "create-list". Agrega un evento que cree una nueva lista ul y añada cinco elementos li dentro de ella, agregando la lista al final de un div con la clase "list-container".*/

let buttonCreateList = document.getElementById("create-list");
let divListContainer = document.querySelector(".list-container");

buttonCreateList.addEventListener("click", function () {
  let list = document.createElement("ul");

  for (let index = 1; index < 6; index++) {
    let elementList = document.createElement("li");
    elementList.textContent = `Item creado ${index}`;
    list.append(elementList);
  }

  divListContainer.append(list);
});

/*Ejercicio 19: Cambiar el Tamaño de un elemento HTML: Selecciona un elemento con el id "resize-image" y agrega un evento que cambie su estilo.*/

let resizeImage = document.getElementById("resize-image");

resizeImage.addEventListener("click", function () {
  resizeImage.style.width = "50px";
  resizeImage.style.height = "50px";
});
