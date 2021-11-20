const numbers = [2, 3, 4, 5];
let productOfNumbers = 1;
const elements = [1, 2, 5, 9, 4, 13, 4, 10];
const arr = [12, 15, 20, 25, 59, 79];
let productOfArr = 0;
const improvisation = [7485, 9834758, 98348, 4, 923, 2, 85, 57, 58, 3847, 34785, 905];


for (let i = 0; i < numbers.length; i++) {
    productOfNumbers *= numbers[i];
}

console.log(productOfNumbers);

for (let i = 0; i < elements.length; i++) {
    if (elements[i] === 4) {
        console.log('yes');
    }
}

for (let i = 0; i < arr.length; i++) {
    productOfArr += arr[i] / 6;
}

console.log(productOfArr);

for (let i = 0; i < improvisation.length; i++) {
   if (improvisation[i] % 2) {
       console.log(improvisation[i] + ' odd');
    }  else {
       console.log(improvisation[i] + ' even');
    }
}