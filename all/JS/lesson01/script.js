// Установить расширение форматирования кода
// Установить расширение “JavaScript Snippet Pack”
// Сделайте файл с вашей первой программой. 
// index.html
// script.js
// Подключите файл script.js к index.html
// В файле index.html создайте скрипт который выводит в консоль текст “Текст из index.html”
// В файле script.js вывести в консоль текст “Текст из script.js!”


console.log('Текст из script.js!');


// Создайте переменную num и присвойте ей значение 123. Выведите значение этой переменной в консоль
// Создайте переменную а и присвойте ей значение 5, переопределите переменную а на значение 7, выведите переменную а в консоль
// Создайте переменную b. Запишите в нее сумму чисел 1, 2 и 3. С помощью функции console.log выведите в консоль содержимое переменной b.
// Создайте 2 вида комментариев в вашем коде, добавьте в них произвольный текст

const num = 123;
console.log(`Переменная num = ${num}`);
let a = 5;
a = 7;
console.log(`Переменная а = ${a}`);
let b = 1 + 2 + 3;
console.log(`Сумма чисел 1, 2 и 3 = ${b}`);
/* console.log(`Сумма чисел 1, 2 и 3 = ${b}`); */


// Создайте переменную c со значением 10 и переменную d со значением 2. 
// Все созданные переменные должны быть логично названы
// Создайте переменную суммы и присвойте сумму чисел (c,d)
// Создайте переменную разности и присвойте разность чисел (c,d)
// Создайте переменную прозведения и присвойте произведение чисел (c,d)
// Создайте переменную частного и присвойте деление чисел (c,d)
// Выведите в консоль все созданные переменные
// Сложите все созданные переменные и выведите результат в консоль

let c = 10;
let d = 2;
let sum = c + d;
let diff = c - d;
let multi = c * d;
let delenie = c / d;
console.log(`Переменная c = ${c}`);
console.log(`Переменная d = ${d}`);
console.log(`Переменная суммы = ${sum}`);
console.log(`Переменная разности = ${diff}`);
console.log(`Переменная прозведения = ${multi}`);
console.log(`Переменная частного = ${delenie}`);
// let result = sum + diff + multi + delenie;
console.log(`все созданные переменные = ${c + d + sum + diff + multi + delenie}`);


// Не запуская код, определите, что выведется в консоль: 
// let a = 5 + 5 * 3 + 3;
// Не запуская код, определите, что выведется в консоль:
// let a = 8 / 2 + 2;
// Не запуская код, определите, что выведется в консоль:
// let a = (2 + 3) * (2 + 3);
// Не запуская код, определите, что выведется в консоль:
// let a = (2 + 3) * 2 + 3;
// Не запуская код, определите, что выведется в консоль:
// let a = (2 * 8) / 4;
// Не запуская код, определите, что выведется в консоль:
// let a = 2 * (8 / 4);

console.log(`a = 5 + 5 * 3 + 3 = ${5 + 5 * 3 + 3}`);
console.log(`a = 8 / 2 + 2 = ${8 / 2 + 2}`);
console.log(`a = (2 + 3) * (2 + 3) = ${(2 + 3) * (2 + 3)}`);
console.log(`a = (2 + 3) * 2 + 3 = ${(2 + 3) * 2 + 3}`);
console.log(`a = (2 * 8) / 4 = ${(2 * 8) / 4}`);
console.log(`a = 2 * (8 / 4) = ${2 * (8 / 4)}`);


// Запишите в переменную a число 1.5, а в переменную b - число 0.75. Найдите сумму значений этих переменных и выведите ее на экран.
// Создайте переменную a, запишите в нее какое-нибудь положительное или отрицательное число. Выведите на экран это число с обратным знаком.

a = 1.5;
b = 0.75;
console.log(`сумму значений переменных ${a} и ${b} = ${a + b}`);
a = 123;
console.log(`Отрицательное значение переменной ${a} = ${-a}`);


// Создайте строку с вашем именем и строку с вашей фамилией. Выведите эти данные в консоль
// Создайте переменную с текстом 'java' и переменную с текстом 'script'. С помощью этих переменных и операции сложения строк выведите в консоль строку 'javascript'.
// Создайте переменную с текстом 'hello' и переменную с текстом 'world'. С помощью этих переменных и операции сложения строк выведите в консоль строку 'hello world'.

const firstName = 'Ivan';
const lastName = 'Vasin';
console.log(`${firstName} ${lastName}`);
const java = 'java';
const script = 'script';
console.log(java + script);
const hello = 'hello';
const world = 'world';
console.log(hello + ' ' + world);


// Задание 1
// Необходимо создать переменную в которой будет храниться температура в градусах Цельсия,
// преобразовать значение в температуру по фаренгейту.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Вывести в консоль температуру в Цельсиях и Фарингейтах


let tempC = -10;
let tempF = (9 / 5) * tempC + 32;
console.log(`температура в градусах по Цельсию ${tempC}`);
console.log(`температура в градусах по Фаренгейту ${tempF}`);



// Задание 2
// Необходимо создать переменную name, записать в эту переменную свое имя.
// Необходимо также создать переменную admin и присвоить этой переменной значение
// из переменной name.
// Вывести значение переменной admin в консоль.

const name = 'Ivan';
let admin = name;
console.log(admin);


