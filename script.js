var inputref = document.getElementById("inputfield").value.trim();
const todoArea = document
  .querySelector(".todolistarea")
  .querySelector(".ulstyle");
let todoListfLocalStorage = [];

const gettodoDataLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todolist")) || [];
};

const showTodoList = () => {
  todoListfLocalStorage = gettodoDataLocalStorage();
  todoListfLocalStorage.forEach((curTodo) => {
    var newtodo = document.createElement("li");
    newtodo.className = "listyle";
    newtodo.style.padding = "1rem";
    newtodo.style.listStyle = "none";
    newtodo.innerHTML = `${curTodo} <i class="fa-solid fa-trash" onclick=removeElement(this) style="color: white; padding-left: 1rem;"></i>
    `;
    todoArea.appendChild(newtodo);
  });
};

function removeElement(element) {
  const listItem = element.parentElement;
//   console.log(listItem)
  listItem.remove();
}
const addTodoListLocalStorage = (todo) => {
  return localStorage.setItem("todolist", JSON.stringify(todo));
};

showTodoList();

function addtodo() {
  var inputref = document.getElementById("inputfield").value.trim();
  const todoArea = document
    .querySelector(".todolistarea")
    .querySelector(".ulstyle");
  // console.log(todoArea);

  todoListfLocalStorage = gettodoDataLocalStorage();
  // console.log(todoListfLocalStorage)
  if (inputref  === "") {
    alert("Please enter a task!");
  } else {
  todoListfLocalStorage.push(inputref);

  addTodoListLocalStorage(todoListfLocalStorage);
  var newtodo = document.createElement("li");
  newtodo.className = "listyle";
  newtodo.style.padding = "1rem";
  newtodo.style.listStyle = "none";
  newtodo.innerHTML = `${inputref} <i class="fa-solid fa-trash" onclick=removeElement(this) style="color: white; padding-left: 1rem;"></i>
    `;
  document.getElementById("inputfield").value = "";
  todoArea.appendChild(newtodo);}
}
