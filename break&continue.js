// for (let i = 0; i < 20; i++) {
//   console.log(i);
// }

// break
// continue

// for (let i = 0; i < 20; i++) {
//   if (i === 14) {
//     break;
//   }
//   console.log(i);
// }

// continue

// for (let i = 0; i < 20; i++) {
//   if (i === 14) {
//     continue;
//   }
//   console.log(i);
// }

// let arr = [45, 55, 1, 3, 5, 6, 111, 600, -7, 8, 9, 10, 11, 12, 99];
// let maxNumber = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < maxNumber) {
//     maxNumber = arr[i];
//   }
// }
// console.log(maxNumber);

// function task(a, b, ...c) {
//   let num = c.reduce((el, acc) => {
//     return el + acc;
//   });
//   return a + b + num;
// }
// console.log(task(5, 5, 1, 4, 2, 23, 3, 1));

// Начиная с массива, содержащего числа от 1 до 10, используйте filter, map и reduce,
// чтобы получить следующее. Используйте console.log для отображения результатов.
// Массив нечетных чисел. Массив чисел, делящихся на 2 или 5. Массив чисел, делящихся на 3,
// а затем возведенных в квадрат этих чисел.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(
//   arr.filter((el, idx) => {
//     if (idx % 2 !== 0) {
//       return el;
//     }
//   })
// );

// console.log(
//   arr.filter((el, idx) => {
//     if (el % 2 === 0 || el % 5 === 0) {
//       return el;
//     }
//   })
// );

// console.log(
//   arr
//     .filter((el, idx) => {
//       if (el % 3 === 0) {
//         return el;
//       }
//     })
//     .map((el) => {
//       return el ** 2;
//     })
// );

// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log();
//   }
// }


