import { tasks,texts } from "../script.js";


const renderTasks = () => {
  
    let taskList = "";
    tasks.forEach((task, index) => {
      const completedClass = task.completed ? "completed" : "";
      const taskElement = `
        <li data-index="${index}">
          <p class="text__page ${completedClass}">${task.text
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")}<span class="span">&#10007</span></p>
        </li>`;
      taskList += taskElement;
    });
    texts.innerHTML = taskList;
  };
  
  export { renderTasks };