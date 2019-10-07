// 1) Создайте объект calculator с методами:
// 	•	read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// 	•	sum() возвращает сумму этих двух значений
// 	•	multi() возвращает произведение этих двух значений
// 	•	diff() возвращает разницу
// 	•	div() возвращает частное
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.multi() );

const calculator = {
    read: function () {
        this.x = +prompt('Введите первое число');
        this.y = +prompt('Введите второе число');
    },
    sum: function () {
        return this.x + this.y;
    },
    multi: function () {
        return this.x * this.y;
    },
    diff: function () {
        return this.x - this.y;
    },
    div: function () {
        return this.x / this.y;
    }
};

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.multi() );

// ------------------------------------------------------------------------------------------------------------------

// 2) Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(),
// при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.

const coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function () {
        setTimeout(function () {
            alert(this.message);
        }.bind(this), 3000);
    }
};

// coffeeMachine.start();

// ------------------------------------------------------------------------------------------------------------------

// 3) Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения.
// Используйте концепцию chaining для создания цепочки вызовов.

// var current = counter.inc().inc().dec().inc().dec().getValue();
// alert(current); // 1

const counter = {
    count: 0,
    inc: function () {
        this.count++;
        return this;
    },
    dec: function () {
        this.count--;
        return this;
    },
    getValue: function () {
        return this.count;
    }
};

// var current = counter.inc().inc().dec().inc().dec().getValue();
// alert(current); // 1

// ------------------------------------------------------------------------------------------------------------------

// 4) Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. Методы объекта ничего не
// реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. Для расчетов все методы
// используют функционал ранее созданного калькулятора.

// alert(me.getSum(1, 1));
// alert(me.getDiv(1, 0));

const me = {
    getSum: function (x, y) {
        this.x = x;
        this.y = y;
        return this.x + ' + ' + this.y + ' = ' + calculator.sum.call(this, this.x, this.y);
    },
    getDiff: function (x, y) {
        this.x = x;
        this.y = y;
        return this.x + ' - ' + this.y + ' = ' + calculator.diff.call(this, this.x, this.y);
    },
    getMulti: function (x, y) {
        this.x = x;
        this.y = y;
        return this.x + ' * ' + this.y + ' = ' + calculator.multi.call(this, this.x, this.y);
    },
    getDiv: function (x, y) {
        this.x = x;
        this.y = y;
        return this.x + ' / ' + this.y + ' = ' + calculator.div.call(this, this.x, this.y);
    }
};

// alert(me.getSum(1, 1));
// alert(me.getDiv(1, 0));

// ------------------------------------------------------------------------------------------------------------------

// 5) Есть следующий код:
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
      console.log(start + this.name + end);
}
// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях: 
// format.call(country, '', ''); // Ukraine
// format.apply(country, ['[',']']); // [Ukraine]
// format.call(country.capital, '', ''); // Kyiv
// format.apply(country.capital, ['', '']); // Kyiv
// format.apply(/* Ваш код */); // undefined

// ------------------------------------------------------------------------------------------------------------------

// 6) Создайте объект user с полем name. Создайте функцию format с параметрами start и end:
// function format(start, end) { console.log(start + this.name + end); }
// Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя 
// userFormat('<<<', '>>>'); // <<<John>>>

const user = {
    name: 'John'
};

function format(start, end) {
    console.log(start + this.name + end);
}

// let userFormat = format.bind(user); // #1
// let userFormat = (start, end) => format.call(user, start, end); // #2
// userFormat('<<<', '>>>'); // <<<John>>>

// ------------------------------------------------------------------------------------------------------------------

// 7) Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: разделитель и
// строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello, которая которая
// выводит приветствие тому, кто передан в ее параметре:

function concat(str1, str2, sep = ' ') {
    return console.log(str1 + sep + str2);
}

let hello = concat.bind(null, 'Hello');

// hello('World'); // Hello World
// hello('John'); // Hello John

// ------------------------------------------------------------------------------------------------------------------

// 8) Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:

function cube(numb, pow = 3) {
    if(pow != 1) {
        return numb * cube(numb, pow-1);
    }

    return numb;
}

function cubeWithFor(numb) {
    let total = numb;

    for (let i = 1; i < 3; i++) {
        total *= numb;
    }

    return total;
}

// console.log( cube(2) ); // 8
// console.log( cubeWithFor(2) ); // 8

// ------------------------------------------------------------------------------------------------------------------

// 9) Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:
// console.log( sum(1, 2, 3, 4, 5) ); // 15

function sum(...args) {
    if (args.length > 0) {
        return args[0] + sum(...args.slice(1));
    }

    return 0;
}

// console.log( sum(1, 2, 3, 4, 5) ); // 15
