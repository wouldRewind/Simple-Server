// модуль с одной функцией - вычислением числа фиббоначи

const fibClicker = (beforePrev = 0, prev = 1) => () => {
    [beforePrev,prev] = [prev, beforePrev + prev]; // шаг Фиббоначи
    return prev; // возврат нового члена последовательности
}

exports.getNext = fibClicker(); //  beforePrev и prev -  в замыкании