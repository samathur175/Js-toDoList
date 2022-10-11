const inputTaskEl = document.querySelector("#input-field");
const addBtnEl = document.querySelector("#add-btn");

addBtnEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputTaskEl.value === "") {
    alert("Add Your Task First");
  } else {
    let newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("task-div");

    let newTaskEl = document.createElement("input");
    newTaskEl.setAttribute("readonly", true);
    newTaskEl.classList.add("new-task-el");
    newTaskEl.value = inputTaskEl.value;

    let editBtnEl = document.createElement("button");
    editBtnEl.classList.add("edit-btn");
    editBtnEl.innerHTML = `Edit`;

    editBtnEl.addEventListener("click", () => {
      if ((editBtnEl.innerHTML = "Edit")) {
        newTaskEl.removeAttribute("readonly");
        editBtnEl.innerHTML = `Save`;
      } else {
        newTaskEl.setAttribute("readonly", true);
      }
    });

    let delBtnEl = document.createElement("button");
    delBtnEl.classList.add("del-btn");
    delBtnEl.innerHTML = `Delete`;

    delBtnEl.addEventListener("click", () => {
      document.body.removeChild(newTaskDiv);
    });

    newTaskDiv.appendChild(newTaskEl);
    newTaskDiv.appendChild(editBtnEl);
    newTaskDiv.appendChild(delBtnEl);
    document.body.appendChild(newTaskDiv);
  }

  inputTaskEl.value = ``;
});
