/* 
    ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 
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
    expertise: ['HTML', 'CSS', 'Bootstrap', 'Tailwindcss', 'Vanila JS', 'React Js', 'Mongo DB'],
    // Object inside object
    Device: { name: 'Samsung S8', pirce: 60000, color: 'Blue' },
    expenseCost: function () {
        return this.salary;        
    },
}
const personSalary = person.expenseCost();
console.log(personSalary);

console.log(person.expertise[4]);

