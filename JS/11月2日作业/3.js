/**
 * 箭头函数
 */
const regularFunction = function (x, y) {
  return x + y;
 };
 const arrowFunction = (x, y) => x + y;
 console.log("Regular function result:", regularFunction(10, 20)); 
 console.log("Arrow function result:", arrowFunction(10, 20)); 
// 示例程序

/**
 * 将下列函数 isEven 重写成箭头函数形式。
 * isEven 函数接受一个数字参数，返回该数字是否为偶数。
 * 然后调用该函数并在控制台输出结果。
 */
// 独立完成
function isEven(number) {
  return number % 2 === 0;
}
const reEven = (number) => number%2===0;
console.log(isEven(8));
console.log(reEven(8));