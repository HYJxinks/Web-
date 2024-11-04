/**
 * 参数传递与默认值
 */
function greet(name = "Guest", age = 18) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
greet(); 
greet("Alice"); 
greet("Bob", 25);
// 示例程序

/**
 * 定义一个函数 introduce，它接受两个参数 name 和 city。
 * 为 city 参数设置默认值 "Unknown"。
 * 该函数输出一条欢迎信息，如 "Hello, [name]! Welcome to [city]!"。
 * 尝试只传递 name 参数，并观察输出结果。
 */
function introduce(name,city="Unknown")
{
    console.log(`Hello,${name}! Welcome to ${city}`);
}
introduce("Mike");
// 独立完成
