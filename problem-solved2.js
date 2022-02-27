/* 
    ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।
*/

// creating object
const person = {
    name: 'Kamrul Hasan',
    age: 23,
    profession: 'Web Developer',
    Adresss: 'Dhaka, Bangladesh',
    salary: 150000,
    houseRent: 20000,
    // Array inside object
    expertise: ['HTML', 'JavaScript', 'CSS', 'Bootstrap', 'Tailwindcss', 'Vanila JS', 'React Js', 'Mongo DB'],
    // Object inside object
    Device: { name: 'Samsung S8', pirce: 60000, color: 'Blue' },
    expenseCost: function (tax) {
        this.salary = this.salary - this.houseRent - tax;
        return this.salary;
    },
}

const remainingSalary = person.expenseCost(15000);

const personInfo = `Hi, I am ${person.name}. I amd ${person.age} years old. My profession is ${person.profession}. My favourite Programming Language is ${person.expertise[1]}.
After Expense, my remainig salary is  ${remainingSalary}`;
console.log(personInfo);