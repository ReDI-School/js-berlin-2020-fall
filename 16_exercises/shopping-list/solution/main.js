let shoppingListElement = document.getElementById("shoppingList");
let inputElement = document.getElementById("itemToBuy");

// let items = [];

// function render() {
//     shoppingListElement = "";
//     for(let i = 0; i < items.length; i++) {
//         let liElement = document.createElement('li');
//         let removeButtonElement = document.createElement('button');

//         liElement.textContent = items[i];
//         removeButtonElement.textContent = "Delete";

//         removeButtonElement.onclick = function() {
//             console.log(i);
//             //items.splice(i, 1);
//         }

//         console.log(items);
//         liElement.appendChild(removeButtonElement);
//         shoppingListElement.appendChild(liElement);
//     }
// }

function addItem() {
  let item = inputElement.value;
  let liElement = document.createElement("li");
  let doneButtonElement = document.createElement("button");
  let priorityButtonElement = document.createElement("button");

  liElement.textContent = item;
  doneButtonElement.textContent = "Done";
  priorityButtonElement.textContent = "priority";
  liElement.appendChild(doneButtonElement);
  liElement.appendChild(priorityButtonElement);
  doneButtonElement.onclick = function () {
      if (liElement.style.textDecoration === 'line-through') {
    liElement.style.textDecoration = "";
      } else {
    liElement.style.textDecoration = "line-through";
      }
  };
  priorityButtonElement.onclick = function () {
    let priority = liElement.style.color;
    if (priority === "") {
      liElement.style.color = "green";
    } else if (priority === "green") {
      liElement.style.color = "orange";
    } else if (priority === "orange") {
      liElement.style.color = "red";
    } else {
      liElement.style.color = "";
    }
  };
  shoppingListElement.appendChild(liElement);
}
