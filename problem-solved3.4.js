/* 
    ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
*/

// Way 1 : add two numbers using arrow function
const add = (num1, num2) => {
    const add1 = num1 + 7;
    const add2 = num2 + 7;
    const addResult = add1 + add2;
    return addResult;
}
const result = add(3, 13);
console.log(result);


// way 2 :  add two numbers using arrow function
const add2 = (num3, num4) => {
    const addResult = num3 + num4;
    return addResult;
}
const result2 = add2(3 + 7, 13 + 7);
console.log(result2);