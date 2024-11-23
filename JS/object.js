const user = {
    name:"zhangsan",age:20
};
const keys= Object.keys(user);
console.log(keys);

const values = Object.values(user);
console.log(values);

const entries = Object.entries(user);
console.log(entries);

const prices={
    banana:1,
    apple:2,
};

console.log(Object.entries(prices));
const newEntrise=Object.entries(prices).map((item))=>{
    return [item[0],item[1]*2];
};
