

import { renderTasks } from "../renderFunction/render.js";
import { tasks, texts } from "../script.js";

const get = () => {
    fetch("https://webdev-hw-api.vercel.app/api/todos", {
        method: "GET"
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

const post = (taskText) => {
    fetch("https://webdev-hw-api.vercel.app/api/todos", {
        method: "POST",
        headers: {
            'Content-type': 'application/activity+json'
        },
        body: JSON.stringify({
            text: taskText,
            completed: false
        })
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

export { get, post };
