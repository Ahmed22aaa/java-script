// Q1
let num = "123";
let result = Number(num) + 7;
console.log(result);

// q2
let value = 0;
if (!value) {
    console.log("Invalid");
} else {
    console.log("Valid");
}

// q3
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}

// q4
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// q5
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

// q6
function getDay(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid day";
    }
}
console.log(getDay(2));

// q7
let words = ["a", "ab", "abc"];
let lengths = words.map(word => word.length);
console.log(lengths);

// Q8
function checkNumber(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both";
    }

    return "Not divisible by both";
}

console.log(checkNumber(15));

// q9
const square = (num) => num * num;
console.log(square(5));

// Q10
const person = {
    name: "John",
    age: 25
};

function getPersonInfo(person) {
    const { name, age } = person;

    return `${name} is ${age} years old`;
}

console.log(getPersonInfo(person));

// q11
function sumNumbers(a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log(sumNumbers(1, 2, 3, 4, 5));

// Q12
function getSuccess() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}

getSuccess().then((message) => {
    console.log(message);
});

// Q13
function findLargest(numbers) {
    return Math.max(...numbers);
}

console.log(findLargest([1, 3, 7, 2, 4]));

// Q14
function getObjectKeys(obj) {
    return Object.keys(obj);
}

const person = {
    name: "John",
    age: 30
};

console.log(getObjectKeys(person));


// Q15
function splitWords(sentence) {
    return sentence.split(" ");
}

console.log(splitWords("The quick brown fox"));

