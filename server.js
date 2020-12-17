// параметры сервера
const host = "localhost"; // 127.0.0.1
const port = 8000;

const http = require("http"); // модуль для создания http-сервера
const {getNext} = require("./fib"); // функция, получающая следующий член последовательности Фиббоначи  

const server = http.createServer((req,res) => {
    res.setHeader("Content-Type","application/json");
    res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500") // разрешаю отдавать данные локалке 
    res.writeHead(200) // успех
    res.end(`{
        "next": ${getNext()}
    }`) // отдаю клиенту
    
})

server.listen(port,host);