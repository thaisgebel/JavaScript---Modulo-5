let lista1 = document.querySelector(".lista1");

let lista2 = document.querySelector(".lista2");

let itemsLista1 = ["Carlitos", "Raul", "Micael"];

let itemsLista2 = ["Mondongo", "Tiramisu", "Jengibre"];

itemsLista1.forEach(function (value) {
  let createItem = document.createElement("li");
  createItem.textContent = value;
  lista1.append(createItem);
});
console.log(itemsLista1);

itemsLista2.forEach(function (value) {
  let createItem = document.createElement("li");
  createItem.textContent = value;
  lista2.append(createItem);
});
console.log(itemsLista2);
