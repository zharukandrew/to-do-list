let todoListBlock = document.querySelector(".todolist__block");
let texts = document.querySelector(".text");
let input = document.querySelector(".todolist__input");
let textElement = document.querySelector(".text");
const listInput = () => {
  let inputValue = input.value;
  if (inputValue !== "") {
    let newText = `
      <li>
        <p class="text__page">${inputValue}<span class="span">&#10007</span></p>
      </li>`;
    texts.innerHTML += newText;
    input.value = "";
  }
};
const del = (event) => {
    let text = event.target.closest(".text__page");
    //event.target.closest(".text__page") - это метод JavaScript, который ищет ближайший родительский элемент (вверх по иерархии) у элемента, 
    //на котором произошло событие event, и который соответствует селектору ".text__page". 
    //Этот метод полезен, когда вам нужно найти определенный элемент внутри иерархии DOM.

    if (text) {
      text.parentElement.remove();
      //text.parentElement.remove(); - 
      // это JavaScript код,
      //который удаляет родительский элемент элемента text из DOM. 
      //То есть, удаляется элемент, который содержит text.
    }
  };
 //event используется для обращения к объекту события и получения информации о нем, 
 //например, элементе, 
//на котором произошло событие, и выполнения соответствующих действий.

//event.target в JavaScript представляет собой свойство объекта event, 
//которое содержит ссылку на элемент, на котором произошло событие. 

//обработчики событий
textElement.addEventListener("click", del);
todoListBlock.addEventListener("click", listInput);