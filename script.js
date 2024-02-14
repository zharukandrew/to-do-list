const tasks = [];
const input = document.querySelector(".todolist__input");
const texts = document.querySelector(".text");
const todolistButton = document.querySelector(".todolist__button")

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

const renderTasks = () => {
  let taskList = "";
  tasks.forEach((task, index) => {
    const completedClass = task.completed ? "completed" : "";
    const taskElement = `
      <li data-index="${index}">
        <p class="text__page ${completedClass}">${task.text}<span class="span">&#10007</span></p>
      </li>`;
    taskList += taskElement;
  });
  texts.innerHTML = taskList;
};

todolistButton.addEventListener("click", listInput);
texts.addEventListener("click", del);

renderTasks();