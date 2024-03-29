// 1) Создайте смешанный массив, например [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'].
// Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

// const arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
// let sum = arr.reduce((acc, item) => {
//     if(!isNaN(+item)) return acc + +item;
//     return acc;
// }, 0);
//
// console.log(sum);

// ------------------------------------------------------------------------------------------------------------------

// 2) Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. Переберите массив и распечатайте
// в консоли значения его элементов, возведенные в пятую степень, не используя функцию Math.pow().

// const arr = [];
// const arrDegree = [];
//
// for (let i = 0; i < 10; i++) {
//     let item = (Math.random() * 10).toFixed(2);
//     let degreeOfNumber = 1;
//
//     arr.push(item);
//
//     for (let j = 0; j < 5; j++) {
//         degreeOfNumber *= item;
//     }
//
//     arrDegree.push(degreeOfNumber);
// }
//
// console.log('default arr', arr);
// console.log('degree arr', arrDegree);

// ------------------------------------------------------------------------------------------------------------------

// 3) Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// Добавьте в начало массива значение ‘Backbone.js’
// Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// Добавьте в массив значение ‘CommonJS’ вторым элементом
// Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”


// const arr = ['AngularJS', 'jQuery'];
// arr.unshift('Backbone.js');
// arr.push('ReactJS', 'Vue.js');
// arr.splice(1, 0, 'CommonJS');
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'jQuery') {
//         alert(arr[i] + ' - Это здесь лишнее');
//         delete arr[i];
//     }
// }
//
// console.log(arr);

// ------------------------------------------------------------------------------------------------------------------

// 4) Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. Разбейте ее на массив слов,
// и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...).
// Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

// let str = 'Как однажды Жак звонарь сломал фонарь головой';
// let arr = str.split(' ');
// let helper = arr.pop();
//
// arr.splice(4, 0, helper);
// str = arr.join(' ');
//
// console.log(str);

// ------------------------------------------------------------------------------------------------------------------

// 5) Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей.
// С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите
// его на экран. Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.


// const person = {
//     name: 'Peter',
//     age: 25,
//     country: 'Ukraine',
//     city: 'Kharkiv',
//     married: true
// };
// let option = prompt('Введите свойтво');
//
// if(option in person) {
//     alert(person[option])
// } else {
//     person[option] = prompt('Введите значение свойства');
// }
//
// console.log(person);

// ------------------------------------------------------------------------------------------------------------------

// 6) Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями,
// прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные
// переменные. Добавьте этот гаджет персоне, созданной ранее.

// const phone = {};
// phone.brand = prompt('Введите бренд');
// phone.model = prompt('Введите модель');
// phone.resolution = prompt('Введите расширение');
// phone.color = prompt('Введите цвет');
//
// person.phone = phone;
//
// console.log(person);

// ------------------------------------------------------------------------------------------------------------------

// 7) Создайте объект dates для хранения дат. Первая дата – текущая, new Date. Вторая дата – текущая дата минус 365 дней.
// Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.

// const dates = {};
//
// const now = new Date();
// let userDate = new Date(prompt('Введите дату в формате (yyyy-MM-dd)'));
//
// dates.today = now.toDateString();
// dates.yearBefore = new Date(now.setFullYear(now.getFullYear() - 1)).toDateString();
//
// if (+new Date(userDate) <= +new Date(dates.today) && +new Date(userDate) >= +new Date(dates.yearBefore)) {
//     console.log('Ваша дата в диапазоне!');
// } else {
//     console.log('Вы не попали в диапазон дат!');
// }

// ------------------------------------------------------------------------------------------------------------------

// 8) Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов,
// полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех
// чисел массива и выведите в alert полученный результат.


// const arr = [];
//
// for (;;) {
//     let userNumber = prompt('Введите число');
//
//     if (!isNaN(+userNumber) && userNumber) arr.push(+userNumber);
//     else if (userNumber) alert('Вы ввели не число!');
//     else break;
// }
//
// let total = arr.reduce((acc, item) => acc += item, 0);
//
// alert('Обащая сумма чисел - ' + total);

// ------------------------------------------------------------------------------------------------------------------

// 9) Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:

// const multiplicationTable = [];
//
// for (let i = 1; i < 10; i++) {
//     multiplicationTable[i-1] = [];
//
//     for (let j = 1; j < 10; j++) {
//         multiplicationTable[i-1].push(`${i} x ${j} = ${i * j}`);
//     }
// }
//
// console.log(multiplicationTable);

// ------------------------------------------------------------------------------------------------------------------

// 10) Создайте структуру данных, полностью описывающую html-разметку картинки.
// <img src="https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" style="border: 1px solid #ccc" width="200" />

// const htmlImg = {
//     src: 'https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
//     alt: '',
//     style: 'border: 1px solid #ccc',
//     width: 200
// };
//
// console.log(htmlImg);
