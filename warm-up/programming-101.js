// console.log("Hello, World!");
// console.log(7);

const arr = [1, 2, 3, 4, 5];
// console.log(arr[10]);

//check eligibility to vote
function eligibilityToVote(age) {
  if (typeof age !== "number") {
    return "❌ Type Error Error Message : Only numerical values are allowed";
  }
  if (age <= 0) {
    return "Enter valid Age" + " " + age + " " + "not a valid age";
  }

  const eligibility = age >= 18 ? "✅ Eligible" : "❌ Not Eligible";
  return eligibility;
}

// console.log(eligibilityToVote(18));
// console.log(eligibilityToVote(10));
// console.log(eligibilityToVote(-9));

// check number is Even or odd

function isEvenOdd(number) {
  if (typeof number !== "number") {
    return "❌ Type Error Error Message : Only numerical values are allowed";
  }

  if (number % 2 === 0) {
    return `The Number ${number} is Even Number`;
  } else {
    return `The Number ${number} is Even Odd`;
  }
}

// console.log(isEvenOdd(18));
// console.log(isEvenOdd(10));
// console.log(isEvenOdd(-9));

for (let i = 0; i > 0; i++) {
  console.log(i);
}

// print even number from array
let array = [10, 65, 1, 5, 8, 2, 6, 2, 5, 1, 58, 254, 5, 2, 4, 27];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     console.log(array[i]);
//   } else {
//     console.log("Skipping the element because the number is odd");
//   }
// }

// find index for given number in array if not found then return -1
function findIndex(number, numArr) {
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === number) {
      return i;
    }
  }
  return -1;
}

let numArr = [
  1000, 67, 6, 1, 71, 7, 9, 75, 8, 5, 518, 815, 8, 14, -2, 5, -51, -85, 28, -4,
];

// console.log(findIndex(5188, numArr));

// write a function that return count of  negative numbers in an array

function countNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

// console.log(countNegativeNumbers(numArr));

// write a function that return that returns the largest number in array

function findLargestNumber(arr) {
  let largestNumber = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }

  return largestNumber;
}

// console.log(findLargestNumber([-3, -52, -51]));

// Write the  function that returns the smallest number in an array

function findSmallestNumber(arr) {
  let smallestNumber = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }

  return smallestNumber;
}
// console.log(findSmallestNumber([-3, -52, -51]));/

// Write the function that return the second largest number in an array
// try to thing what i'll be the edge / corner cases changes here you can ask the interviewer
// 1st edge case - what if array is empty
// 2nd edge case - what if the array contains only one element
// 3rd edge case - what if my array contains duplicate e.g [10,20,20].

function findSecondLargestNumber(arr) {
  if (arr.length < 2) {
    return null;
  }

  let largest = arr[0];
  let secondLargest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

// console.log(findSecondLargestNumber([10,20,20]));

function findSmallest(arr) {
  // your solution here

  if (!Array.isArray(arr)) {
    return false;
  }
  if (!arr.length) {
    return null;
  }
  const invalidInputs = [Infinity, -Infinity, NaN];
  let smallestNumber = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || invalidInputs.includes(arr[i])) {
      return false;
    }
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }
  return smallestNumber;
}

// console.log(findSmallest([Infinity]));

function findLargest(arr) {
  // your solution here

  if (!Array.isArray(arr)) {
    return false;
  }
  if (!arr.length) {
    return null;
  }
  const invalidInputs = [Infinity, -Infinity, NaN];
  let largestNumber = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || invalidInputs.includes(arr[i])) {
      return false;
    }
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

// console.log(findLargest([-1.5, -0.1, 0, 2.2]));





