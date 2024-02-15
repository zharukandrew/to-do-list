

const get = () => {
    fetch("https://webdev-hw-api.vercel.app/api/todos", {
        method: "GET"
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Ошибка при получении данных");
        }
        return response.json();
    })
    .then((responseData) => {
        // Handle the response data here
        console.log(responseData);
    })
    .catch((error) => {
        console.error(error);
    });
};

const post = () => {
    fetch("https://webdev-hw-api.vercel.app/api/todos", {
        method: "POST",
        headers: {
            'Content-type': 'application/activity+json'
        },
        body: JSON.stringify({
            text: "Your task text here"
        })
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Ошибка при отправке запроса");
        }
        return response.json();
    })
    .then((responseData) => {
        // Handle the response data here
        console.log(responseData);
    })
    .catch((error) => {
        console.error(error);
    });
};

export { get, post };