// Напишите функцию которая заполняет массив нужными данными 
// let arr = ['a', 'a', 'a', 'a','a'] // -> [4, 'a'] 
// let arr2
// console.log(arr);
// arr2 = [arr.length,'a']
// console.log(arr2);



// compact
// Убрать все не желательные элементы 
// let arr = ['hello', null, 0, true, false, 1, undefined, '', NaN]
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] == null) {k
//     arr.splice(i, 1);
//   } else if (arr[i] == false) {
//     arr.splice(i, 1);
//   } else if (arr[i] == NaN) {
//     arr.splice(i, 1);
//   }
// } console.log(arr);



// unique
// Оставить в массиве только оригинал
// let arr = ['a', 'b', true, 'a', false, 'b', true]

// let uniq = [...new Set(arr)]; //(...) - оператор Spread
// console.log(uniq);

// let uniq = arr.filter((item,index) => {
//   return index === arr.indexOf(item);
// });
// console.log(uniq);

// let uniq = arr.reduce((uniq, item) => {
//   return uniq.includes(item) ? uniq : [...uniq, item];
// }, [])
// console.log(uniq);



// Проверить массив на схожесть
// let arr = [1, 2, 3, 4, 5]
// let arr2 = [1, 2, 3, 4, 5]

// let idxArr = arr === arr2 ? true : false

// if (arr === arr2) {
//   console.log('ok');
// }else {
// console.log('fuck');
// }

// console.log(arr !== arr2)
