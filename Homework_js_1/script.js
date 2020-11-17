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

function Averg(a) {
    let sum = 0;
    
    
    for (i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    
    let average = sum / a.length;
    
    
//    sum /= a.length;
//    return sum;
}

       
    

let avr = Averg([10, 5, 20, 15]);
console.log(avr);





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
