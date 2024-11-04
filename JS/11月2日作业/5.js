/**
 * 函数的返回值
 */
function withReturn() {
    return "返回值!";
}
function withoutReturn() {
    console.log("这个函数没有返回值.");
}
console.log("With return:", withReturn());
console.log("Without return:", withoutReturn());
// 示例程序

/**
 * 定义一个函数 calculateArea，接受两个参数 length 和 width。
 * 如果两个参数都被提供，返回矩形的面积（length \* width）；
 * 如果没有传递 width，则默认为正方形的面积（length \* length）。
 * 调用此函数并观察返回结果。
 */
function calculateArea(length, width) {
    if (width === undefined) {
        return length * length;
    } else {
        return length * width;
    }
}

// 测试函数
let squareArea = calculateArea(5);
let rectangleArea = calculateArea(5, 10);

console.log(squareArea);
console.log(rectangleArea);

// 独立完成
