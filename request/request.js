import { renderTasks } from "../renderFunction/render.js";
import { texts } from "../script.js";

const get = () => {
  fetch("https://webdev-hw-api.vercel.app/api/todos", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((error) => {
      console.error(error);
    });
  renderTasks();
};
const post = () => {
  fetch("https://wedev-api.sky.pro/api/todos", {
    method: "POST",
    headers: {
      "Content-type": "application/activity+json",
    },
    body: JSON.stringify( texts ),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
export { get, post };
