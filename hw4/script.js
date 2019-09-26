// 1) Напишите функцию max, которая сравнивает два числа и возвращает большее:

function max(number1, number2) {
    if (number1 > number2) return number1;
    else if (number1 < number2) return number2;
    else return 'Числа равны или вы ввели некорректные данные';
}

// console.log( max(0, -1) ); // 0

// ------------------------------------------------------------------------------------------------------------------

// 2) Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:

function min() {
    const arrArguments = [...arguments];

    let minNumber = arrArguments.reduce(function (acc, item) {
        if (item < acc) return acc = item;
        return acc;
    }, arrArguments[0]);

    return minNumber;
}

// console.log( min(0, -1, 100, 500, 100500) ); // -1

// ------------------------------------------------------------------------------------------------------------------

// 3) Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов),
// каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции массивов:
// 	•	Отфильтруйте пользователей младше 18 лет
// 	•	Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
// 	•	Сформируйте новый массив, который содержит только полное имя пользователей

const users = [
    {firstname: "userName1", lastname: 'userLastname1', age: '5'},
    {firstname: "userName2", lastname: 'userLastname2', age: '14'},
    {firstname: "userName3", lastname: 'userLastname3', age: '16'},
    {firstname: "userName4", lastname: 'userLastname4', age: '18'},
    {firstname: "userName5", lastname: 'userLastname5', age: '25'},
    {firstname: "userName6", lastname: 'userLastname6', age: '32'},
    {firstname: "userName7", lastname: 'userLastname7', age: '38'},
    {firstname: "userName8", lastname: 'userLastname8', age: '40'},
    {firstname: "userName9", lastname: 'userLastname9', age: '44'},
    {firstname: "userName10", lastname: 'userLastname10', age: '51'},
];

const youngUsers = users.filter(user => +user.age < 18);
// console.log('Пользователи младше 18 лет', youngUsers);

const modifiedUsers = users.map(user => {
    user.fullName = user.firstname + ' ' + user.lastname;
    return user;
});
// console.log('Добавленно поле fullName', modifiedUsers);

const fullnameUsers = [];
modifiedUsers.forEach(item => fullnameUsers.push(item.fullName));
// console.log('Массив fullName', fullnameUsers);

// ------------------------------------------------------------------------------------------------------------------

// 4) Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент.

function removeFirstElem(arr) {
    const newArr = [];
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

// console.log(removeFirstElem(['1', '2', '3', '4', '5']));

// ------------------------------------------------------------------------------------------------------------------

// 5) Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.

function addElemToEnd(arr) {
    const newElements = [];

    for (let i = 1; i < arguments.length; i++) {
        newElements.push(arguments[i]);
    }

    return [...arr, ...newElements];
}

// console.log(addElemToEnd(['1', '2', '3', '4', '5'], 2, 3, 4));

// ------------------------------------------------------------------------------------------------------------------

// 6) Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, поля которого
// будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.
// var source = {firstname: 'Tom', age: 10}
// var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
// console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
// console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

function extend(sourse) {
    let obj = {};

    for (let i = 1; i < arguments.length; i++) {
        obj = {
            ...obj,
            ...arguments[i]
        };
    }

    return {
        ...sourse,
        ...obj
    }
}

const source = {firstname: 'Tom', age: 10};
const s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
// console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
// console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

// ------------------------------------------------------------------------------------------------------------------

// 7)Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения -
// обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться,
// а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. Параметр author -
// опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение
// ‘Anonymous’. Функция распечатывает в консоле текст в формате:<имя_автора>, <дата> <текст_сообщения>
//
// setComment('2016-11-02', 'Everything is ok', 'John');
// John, 2016-12-22
// Everything is ok
// setComment('2016-11-02', 'You could do it better!');
// Anonymous, 2016-12-22
// You could do it better!

function setComment(date, message, author = 'Anonymous') {
    if (!date && !message) return alert('данные переданы некорректно');
    console.log(author + ", " + date + "\n" + message);
}

setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');

// ------------------------------------------------------------------------------------------------------------------

// Замыкания
// 8) Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() для получения
// текущей временной метки и служит для замера времени выполнения другого кода:
//
// var timer = createTimer();
// alert('!')  // код, время выполнения которого нужно измерить
// alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()

function createTimer() {
    let t0 = performance.now();
    return () => {
        let t1 = performance.now();
        return `Время выполнения - ${t1 - t0} миллисекунд`;
    }
}

// const timer = createTimer();
// alert( timer() );

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// P.S. не совсем понятно что нужно сделать в этом условии
// alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()

// ------------------------------------------------------------------------------------------------------------------

// 9) Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр и
// возвращает функцию, которая добавляет к первому параметру второй. Функция работает по следующему принципу:
//
// var hello = createAdder('Hello, ');
// alert( hello('John') ); // Hello, John
// alert( hello('Harry') ); // Hello, Harry
//
// var plus = createAdder(5);
// alert( plus(1) ); // 6
// alert( plus(5) ); // 10

function createAdder(arg1) {
    return arg2 => arg1 + arg2;
}

var hello = createAdder('Hello, ');
// alert( hello('John') ); // Hello, John
// alert( hello('Harry') ); // Hello, Harry

var plus = createAdder(5);
// alert( plus(1) ); // 6
// alert( plus(5) ); // 10
