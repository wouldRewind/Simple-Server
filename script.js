const numContainer = document.getElementById("num"); // контейнер счёта
const clicker = document.getElementById("click"); // кнопка клика
const adress = "http://localhost:8000/"; // адрес локалки

    clicker.addEventListener("click",() => { // вешаю событие на кнопку
        numContainer.textContent = "Ожидаем ответ..."
        fetch(adress)
        .then(jsonData => jsonData.json()) // парсинг
        .then(({next}) => numContainer.textContent = next)
        .catch(err =>  numContainer.textContent = "Не удалось подключиться к серверу!")
    })


