/* 
    ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
*/
//Object destructuring
const  info = {name: 'Kamrul', job: 'Web Developer', Adress: 'Dhaka,Bangladesh' };
const {name, job, Adress} = info;
console.log(name , job, Adress);

// Array destructuring
const money = [12222, 232323, 343434, 434545, 64545];
const [, balance] = money;
console.log(balance);