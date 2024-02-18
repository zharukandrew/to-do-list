import { renderTasks } from "./renderFunction/render.js";
import { get ,post} from "./request/request.js";



const input = document.querySelector(".todolist__input");
const texts = document.querySelector(".text");
const todolistButton = document.querySelector(".todolist__button");
let tasks = [
  {
    text: "Купить чай"
  },
  {
    text: "Заварить чай"
  },
  {
    text: "Выпить чай"
  }
];

const person = {
  name: " Andrew",
  age: 29,
  isActive: false,
  skills: ['javascript', 'php']
}

const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);

const personFromJson = (JSON.parse(jsonPerson))



// const listInput = () => {
//   const inputValue = input.value;
//   if (inputValue !== "") {
//     const newTask = {
//       text: inputValue,
//       completed: false
//     };
//     tasks.push(newTask);
//     renderTasks();
//     input.value = "";
//   }
// };
const listInput = () => {
  const inputValue = input.value;
  if (inputValue !== "") {
      post(inputValue); // Call post function with the new task text
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
get();
post();
export{tasks,texts,person,personFromJson}



