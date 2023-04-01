// Вывод сообщения на экран
alert('Привет мир!');

// Создание переменной
// let - создание изменяющейся переменной
// const - создание неизменяющейся переменной
let num1 = 1;
num1 = 2;
// OK
const num2 = 1;
// num2 = 2; - wrong

// types
// null:
let age = null;

// undefined
let age1;
alert(age);  // undefined

// Проверка типов данных:
typeof undefined //'undefined'
typeof 0 //'number'
typeof true //'boolean'
typeof 'foo' //'string'

// Модальные окна
// alert - выводит сообщение пользователю
alert('Привет мир!');
// prompt - дает пользователю ввести данные
let test = prompt('Test');

//confirm - true/false
let right = confirm('Are you sure?');

// if else
if (year == 2022) {
    alert("Правильно!");
    alert("Вы такой умный!");
}

let year = prompt('Какой сейчас год?', '');
if (year == 2022) {
    alert('Да вы знаток!');
} else {
    alert('А вот и неправильно!'); // любое значение, кроме 2022
}

// another type of if else
let accessAllowed = (age > 20) ? true : false;

// logic operators
// and
let x = 0, y = 0;
alert(х == 0 && у == 0); // true (true && true)

// Not
alert(!!"строка"); // true
alert(!!0); // false
alert(!!NaN); // false
alert(!!""); // false
alert(!!777); // true
alert(!!null); // false 

// OR
result = a || b;

alert( true || true ); // true
alert( false || true ); // true
alert( true || false ); // true
alert( false || false ); // false


// while
let i = 0;
while (i < 5) { // выводит 0, затем 1, затем 2, 3, 4
    alert(i);
    i++;
}


// switch
let a = 2 + 4;
switch (a) {
    case 3:
        alert('Маловато');
        break;
    case 6:
        alert('В точку!');
        break;
    case 7:
        alert('Перебор');
        break;
    default:
        alert("Нет таких значений");
}

// do while
let k = 0;
do {
    alert(k);
    k++;
} while (k < 5);

// for
for (let i = 0; i < 5; i++) { // выведет 0, затем 1, затем 2, 3, 4
    alert(i);
}

// finctions
function showMessage() {
    alert('Всем привет!');
}
showMessage();
showMessage();