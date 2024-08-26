/*Based on Notion ToDo list style, create a web app that contains two lists side by side.

1. Each list name must be at the end of the amount of items.

2. Load an initial list of ToDos for each list when the page is loaded

    a. First list
        i. Buy eggs
        ii. Do laundry
        iii. Buy facturas for Seba
    b. Second list
        i. Sleep
        ii. Eat
        iii. Code
        iv. Repeat
    
3. The last list item must be an empty item allowing users to add a new item to that list. It must have a button on the right side with the text “Add”

4. Allow users to delete items, with a button to the right with the text “Delete”
    c. Extra: alert users to see if they are sure

5. Add a button to toggle light/dark mode.
    d. Do not duplicate html code.

6. Manage variable amount of lists.

(Do not copy from Notion, use provided snapshot as reference).    

Tips
1. Hardcode first. Then generalize and abstract variables.

2. Start small. Then build bigger and adapt along the way.

3. Ask for help! But after first trying to do it yourself, and then, understanding what is blocking you (“What is it that I don’t understand?“)*/

let body = document.querySelector("body");

let buttonToggle = document.getElementById("toggle-mode");

buttonToggle.addEventListener("click", function () {
  body.classList.toggle("darkMode");
});

let divGoblalLists = document.getElementById("lists");

let everyLists = [
  ["Buy eggs", "Do laundry", "Buy facturas for seba"],
  ["Buy eggs", "Do laundry", "Buy facturas"],
  ["Buy eggs", "Do laundry", "Buy facturas for seba"],
  ["Buy eggs", "Do laundry", "Buy facturas"],
  ["Buy eggs", "Do laundry", "Buy facturas for seba"],
  ["Buy eggs", "Do laundry", "Buy facturas"],
];

function createList(lists) {
  for (let index = 0; index < lists.length; index++) {
    let newDivList = document.createElement("div");

    let newList = document.createElement("ul");

    let inputList = document.createElement("input");

    let newButtonListAdd = document.createElement("button");
    newButtonListAdd.classList.add("addButton");

    let iconAdd = document.createElement("i");
    iconAdd.classList.add("fa-solid");
    iconAdd.classList.add("fa-plus");

    newButtonListAdd.append(iconAdd);

    let newTitle = document.createElement("h3");
    newTitle.textContent = `Lista Numero ${index + 1}`;
    newDivList.append(newTitle);

    array[index].forEach(function (value) {
      let newItemList = document.createElement("li");

      let buttonDeleteItemList = document.createElement("button");
      buttonDeleteItemList.classList.add("deleteButton");

      let iconDelete = document.createElement("i");
      iconDelete.classList.add("fa-solid");
      iconDelete.classList.add("fa-x");
      buttonDeleteItemList.append(iconDelete);

      newItemList.textContent = value;

      newList.append(newItemList);
      newItemList.append(buttonDeleteItemList);

      buttonDeleteItemList.addEventListener("click", function () {
        ask = confirm("Are you sure?");
        if (ask === true) {
          newItemList.remove();
          buttonDeleteItemList.remove();
        }
      });
    });

    newDivList.append(newList);
    newDivList.append(inputList);
    newDivList.append(newButtonListAdd);
    divGoblalLists.append(newDivList);

    newButtonListAdd.addEventListener("click", function () {
      let newItemList = document.createElement("li");
      let buttonDeleteItemList = document.createElement("button");
      buttonDeleteItemList.classList.add("deleteButton");

      let iconDelete = document.createElement("i");
      iconDelete.classList.add("fa-solid");
      iconDelete.classList.add("fa-x");
      buttonDeleteItemList.append(iconDelete);

      newItemList.textContent = inputList.value;
      newList.append(newItemList);
      newItemList.append(buttonDeleteItemList);

      buttonDeleteItemList.addEventListener("click", function () {
        ask = confirm("Are you sure?");
        if (ask === true) {
          newItemList.remove();
          buttonDeleteItemList.remove();
        }
      });
    });
  }
}
createList(everyLists);
