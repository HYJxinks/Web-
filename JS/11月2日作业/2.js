/**
 * 函数作为值传递
 */
function performOperation(x, y, operation) {
    console.log("Performing operation...");
    return operation(x, y);
   }
   // 定义⼏个简单的操作函数
   function add(a, b) {
    return a + b;
   }
   function multiply(a, b) {
    return a * b;
   }
   console.log("Addition result:", performOperation(5, 3, add)); 
   console.log("Multiplication result:", performOperation(5, 3, multiply));
// 示例程序

/**
 * 定义一个函数 perform，它接受两个数字参数和一个操作函数 op。
 * 定义两个操作函数 subtract 和 divide，分别计算减法和除法。
 * 使用 perform 传递不同的操作函数来计算并输出结果。
 */
function perform(x,y,op){
    console.log("操作中...");
    return op(x,y);
}
function subtract(a,b)
{
    return a-b;
}
function divide(a,b){
    return a/b;
}
console.log("减法：",perform(7,5,subtract));
console.log("除法：",perform(8,4,divide));
// 独立完成
