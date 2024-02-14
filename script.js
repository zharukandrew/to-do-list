import { renderTasks } from "./renderFunction/render.js";

const tasks = [];
const input = document.querySelector(".todolist__input");
const texts = document.querySelector(".text");
const todolistButton = document.querySelector(".todolist__button");

const listInput = () => {
  const inputValue = input.value;
  if (inputValue !== "") {
    const newTask = {
      text: inputValue,
      completed: false
    };
    tasks.push(newTask);
    renderTasks();
    input.value = "";
  }
};

const del = (event) => {
  const text = event.target.closest(".text__page");
  if (text) {
    const taskIndex = text.parentElement.dataset.index;
    tasks.splice(taskIndex, 1);
    renderTasks();
  }
};

todolistButton.addEventListener("click", listInput);
texts.addEventListener("click", del);
renderTasks();
export{tasks,texts}

