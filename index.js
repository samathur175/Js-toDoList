const inputTaskEl = document.querySelector("#input-field");
const addBtnEl = document.querySelector("#add-btn");

addBtnEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputTaskEl.value === "") {
    let alertEl = document.createElement("div");
    alertEl.classList.add("alert-box");
    alertEl.innerHTML = `Please Enter Your Task First`;

    let alertCloseEl = document.createElement("button");
    alertCloseEl.classList.add("alert-close-btn");
    alertCloseEl.innerHTML = `Close`;

    alertEl.appendChild(alertCloseEl);
    document.body.appendChild(alertEl);

    alertCloseEl.addEventListener("click", () => [
      document.body.removeChild(alertEl),
    ]);
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
      newTaskEl.removeAttribute("readonly");
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
