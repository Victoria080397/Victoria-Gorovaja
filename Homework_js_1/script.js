//Написати фунцію аргументом якої буде чотирицифрове число і ця функція буде повертати суму цифр цього числа(Наприклад для числа 5382 сума цифр буде 18); Для визначення цілої частини користуйтесь Math.floor()

//function Summ(a) {
//    let sum = 0;
//    sum += a % 10; //378,9    9
//    a = Math.floor(a / 10); //378
//    sum += a % 10; //37.8     8
//    a = Math.floor(a / 10); //37
//    sum += a % 10; //3.7      7
//    a = Math.floor(a / 10); //3
//    sum += a;
//    return sum;
//}
//
//console.log(Summ(3789));




//[1, 35, 56743677, 'nfdkdjskf', false]


//Написати фунцію аргументом  якої буде масив чисел і ця функція буде повертати середнє арифметичне цих чисел;

//function Averg(a) {
//    let sum = 0;
//    
//    
//    for (i = 0; i < a.length; i++) {
//        sum = sum + a[i];
//    }
//    
//    let average = sum / a.length;
//    
//    
////    sum /= a.length;
////    return sum;
//}
//
//       
//    
//
//let avr = Averg([10, 5, 20, 15]);
//console.log(avr);





//console.log(avr);





//Написати фунцію аргументом якої буде масив цілих чисел і ця функція буде повертати таке значення(сума всіх парних чисел відняти сума всіх непарних);

//function Summ(a) {
//    let sum1 = 0;
//    let sum2 = 0;
//    for (let i = 0; i < a.length; i++) {
//        if (a[i] % 2 == 0) {
//            sum1 += a[i];
//        } else if (a[i] % 2 == 1) {
//            sum2 += a[i];
//        }
//    }
//    return sum1 - sum2;
//}
//
//console.log(Summ([1, 8, 24, 5, 36]));





//Написати фунцію аргументами  якої будуть два масиви цілих чисел і ця функція буде повертати масив зі спільних елементів( Наприлад вхідні масиви - [1,2,3,4,5] , [1,4,8]. Функція має повернути - [1,4] )

//function CommonEl(a, b) {
//    let arr = [];
//    for (let i = 0; i < a.length; i++) {
//        for (let j = 0; j < b.length; j++) {
//            if (a[i] == b[j]) {
//                arr.push(a[i] && b[j]);
//            }
//        }
//    }
//    return arr;
//}
//let com = CommonEl([3, 5, 7, 9], [1, 5, 8, 9]);
//console.log(com);

//function CommonEl(x, n) {
//    let result = x;
//
//    for (let i = 1; i < n; i++) {
//        result *= x;
//    }
//    return result;
//
//}
//let com = CommonEl(2, 3);
//console.log(com);

//function pow(x, n) {
//    let result = x;
//
//    for (let i = 1; i < n; i++) {
//        result *= x;
//    }
//    return result;
//
//    console.log(pow(2, 3));

//Вывести простые числа
//
//Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
//
//Другими словами, n > 1– простое, если при его делении на любое число кроме 1 и n есть остаток.
//
//Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
//
//Напишите код, который выводит все простые числа из интервала от 2 до n.
//
//Для n = 10 результат должен быть 2, 3, 5, 7.
//
//
//
//
//
//
//Функция min(a, b)
//
//Напишите функцию min(a, b), которая возвращает меньшее из чисел a и b.
//
//Пример вызовов:
//    min(2, 5) == 2
//min(3, -1) == -1
//min(1, 1) == 1
//
//
//
//
//Функция pow(x, n)
//
//Напишите функцию pow(x, n), которая возвращает x в степени n.Иначе говоря, умножает x на себя n раз и возвращает результат.
//
//pow(3, 2) = 3 * 3 = 9
//pow(3, 3) = 3 * 3 * 3 = 27
//pow(1, 100) = 1 * 1 * ... * 1 = 1
//
//
//
//
//
//
//
//Задача 
//Напишите решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
function SquareRoot(a, b) {
    let arr = [];
    let sum = 0;
    for (i = 0; i <= a.length; i++) {
        if (a[i] % 2 == 0) {
            arr.push(a[i]); //arr[4,2,16,10]
        }
        for (j = 0; j < arr.length; j++) {
            if (arr[j] ** b == arr[j]) {
                sum += arr[j];
            }
        }
    }
    return sum;
}

console.log(SquareRoot([4, 2, 5, 19, 13, 16, 10], 2));

//
//
//
//Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов.Для решения воспользуйтесь циклом
//for
