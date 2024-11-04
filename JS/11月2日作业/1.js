/**
 * 函数声明与函数表达式
 */
function declaredFunction(){
    return "函数声明";
}
const expressedFunction=function(){
    return "函数表达式";
};
console.log(declaredFunction());
console.log(expressedFunction());
console.log(hoistedFunction());
function hoistedFunction(){
    return "可以在调用的语句后面声明";
}
// 示例程序

/**
 * 定义一个函数 multiplyByTwo，接受一个数字参数并返回其两倍。
 * 试着用函数表达式来定义 multiplyByTwo，并调用它来输出结果。
 * 然后尝试提前调用这个函数，观察结果并思考原因。
 */
function multiplyByTwo(a){
    return 2*a; 
}
console.log(multiplyByTwo(5));
// 独立完成
