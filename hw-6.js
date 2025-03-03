// Задание 1
// Дан массив: 
// [1, 5, 4, 10, 0, 3]
// Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 
// 10. После вывода значения 10 в консоль цикл должен прекратить свою работу.
 const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break
        
    } 
}

// Задание 2
// Дан массив: [1, 5, 4, 10, 0, 3] Найдите индекс значения 4
// в этом массиве.

const arrNumber = [1, 5, 4, 10, 0, 3];
console.log(arrNumber.indexOf(4));


// arrNumber.forEach ((el, index) => {
//         if (el === 4)
//             console.log(`${index}`);
// })

//вариант 2
// for (let i = 0; i < arrNumber.length; i++) {
//     if (arrNumber[i] === 4) {
//         console.log(i);
//         break
        
//     } 
// }

//вариант 3
// console.log(arrNumber.indexOf(1));


// Задание 3
// Дан массив чисел: 
// [1, 3, 5, 10, 20]. С помощью метода join
// выведите элементы массива через пробел (пустую строку 
// ' '
// ).


let arrJoin = [1, 3, 5, 10, 20];
arrJoin = arrJoin.join (' ');
console.log(arrJoin);

// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: 
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]]

const arr1 = [];

for (let i = 0; i < 3; i++) {
    const arr2 = [];
    for (let i = 0; i < 3; i++) {
        arr2.push(1);
        
    }
    arr1.push(arr2);
}
 console.log(arr1);
 
//  Задание 5
// Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

const arr3 = [1, 1, 1];
arr3.push(2,2,2);
console.log(arr3);

// Задание 6
// Дан массив: 
// [9, 8, 7, 'a', 6, 5] С помощью метода sort отсортируйте массив и удалите букву 
// 'a' из массива. Затем выведите массив.

const arr4 = [11, 9, 8, 7, 'a', 6, 5];
arr4.sort ((a,b) => a - b);
arr4.pop();
console.log(arr4);

// Задание 7
// Дан массив: [9, 8, 7, 6, 5].
// Попросите пользователя угадать число с помощью метода 
// prompt. Если значение, которое ввел пользователь, есть в массиве, выведите в 
// alert «Угадал», в противном случае — «Не угадал».
//ставим + пере prompt для преобразования формата!!!

let arrNumberGuess = [9, 8, 7, 6, 5];
const userNumber = +prompt("Попрбуйте угадать число");
if (arrNumberGuess.includes(userNumber)) {
    alert('Угадал')
    
} else {
    alert('Не угадал')
}


// Задание 8
// Дана строка: 
// 'abcdef'. Выведите в консоль 'fedcba'. Для этого задания вам пригодится метод 
// reverse(). Он располагает элементы массива в порядке, обратном исходному.
let Line = 'abcdef';
arrLine = Line.split('');
arrLine.reverse();
console.log(arrLine.join(''));

// Задание 9
// Дан массив: 
// [[1, 2, 3],[4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6]

const arrMany = [
    [1, 2, 3],
    [4, 5, 6],
];

const arrNew = [];

for (let i = 0; i < arrMany.length; i++) {
   arrNew.push(...arrMany[i]);
    
}
console.log(arrNew);


// или с помощью метода flat
// console.log(arrMany.flat());


// Задание 10
// Создайте массив с произвольными числами (диапазон от 
// 1 до 10).
// Переберите его с помощью цикла 
// for.В каждой итерации выведите в консоль сумму текущего и 
// следующего элементов массива.
// Следующий элемент массива можно получить с помощью индекса: i + 1. 
// Обратите внимание, что у последнего элемента нет следующего.

const arrNum = [7, 3, 5, 5, 4, 2, 1];
for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i + 1]) {
        console.log(arrNum[i] + arrNum[i + 1]);
    }
}

// Задание 11
// Создайте функцию, которая 
// принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.
const arrWhole = [1, 2, 3, 4, 5];
let square = arrWhole.map (i => (i ** 2));
console.log(square);

//Вариант 2
// function square(arrWhole) {
//     return arrWhole.map(i => i ** 2);
    
// }
// console.log(square([1, 2, 3]));

// Задание 12
// Создайте функцию, которая принимает на вход массив строк,
// а возвращает массив длины слов.


const arrWords = ['My', 'name', 'is', 'Viola'];
let result = arrWords.map (i => i.length);
console.log(result);


// вариант 2
// function getlength(arrWords) {
    
//     return arrWords.map(i => i.length)
// }

// console.log(getlength(arrWords));


// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел,
//  а возвращает массив, содержащий только отрицательные значения.
// Используйте метод filter()
//  для создания нового массива на основе условия проверки отрицательности числа.


const arrNegativeNumber = [5, 7, -9, 4, 3, -10];
const NegativeNumber = arrNegativeNumber.filter (i => i < 0);
console.log(NegativeNumber);

//вариант 2
// function NegativeNumber(arrNegativeNumber) {
//     return arrNegativeNumber.filter (i => i < 0);
// }
//  console.log(NegativeNumber([5, 7, -9, 4, 3, -10]));


 

// Задание 14
// Создайте массив, состоящий из 10 значений. Значения массива необходимо 
// сгенерировать с помощью метода 
// Math.random()
//  в диапазоне от 0 до 10.
// В данном массиве найдите все четные значения и добавьте их в новый массив. 
// Результат работы программы необходимо вывести в консоль — это будут два массива:
//  исходный массив и массив с четными значениями.

// Используйте цикл для генерации исходного массива и метод 
// filter()
//  для создания массива с четными числами.
function randomNumber() {
return Math.floor(Math.random() * 10);
}

const arrRandom = [];

for (let i = 0; i < 10; i++) {
    arrRandom.push(randomNumber());
    
}

console.log(arrRandom);

const arrNegative = [];

for (let i = 0; i < arrRandom.length; i++) {
    if (arrRandom[i] % 2 === 0) {
        arrNegative.push(arrRandom[i]);
    }
    
}

console.log(arrNegative);

// Задание 15
// Создайте массив, состоящий из 6 элементов. Элементы массива 
// необходимо сгенерировать с помощью 
// Math.random()в диапазоне от 1 до 10.
// Требуется найти среднее арифметическое этих цифр,
//  результат программы вывести в консоль.
// Для вычисления среднего арифметического воспользуйтесь методом reduce()
//  для суммирования всех элементов массива и разделите результат на их количество.

function average() {
    return Math.floor(Math.random() * 10);
}

const arr11 = [];

for (let i = 0; i < 6; i++) {
    arr11.push(average());
    
}
console.log(arr11);

console.log(arr11.reduce((a, b) => a + b) / arr11.length);

//2 вариант
// const averageNumber = arr11.reduce ((a, b) => a + b) / arr11.length;
//  console.log(averageNumber);
 





