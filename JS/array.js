const arr=[
    {
        name:"张三",age:20
    },
    {
        name:"lisi",age:22
    },
    {
        name:"wangwu",age:21
    },
]
function handler(item,index)
{
    console.log(`${index}:姓名${item.name},年龄：${item.age}`);
}
arr.forEach((item,index)=>console.log(`${index}:姓名${item.name},年龄：${item.age}`));

const findFirst = arr.find((item)=>item.age>20);
console.log(findFirst);

const findAll=arr.filter((item)=>item.age>20);
console.log(findAll);

function comparator(a,b){
    return 
}
arr.sort()