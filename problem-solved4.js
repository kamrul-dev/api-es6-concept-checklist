/* 
    ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
*/
// map() method apply on array and divide by 7  that return result will be a new array 
const numbers = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

const divResult = numbers.map( number => number / 7 );
console.log(divResult);
