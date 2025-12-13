console.log("Hello, World!");
console.log(7);

const arr = [1, 2, 3, 4, 5];
console.log(arr[10]);

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

console.log(eligibilityToVote(18));
console.log(eligibilityToVote(10));
console.log(eligibilityToVote(-9));

// check number is Even or odd

function isEvenOdd(number) {
  if (typeof number !== "number") {
    return "❌ Type Error Error Message : Only numerical values are allowed";
  }

  if(number%2===0){
    return `The Number ${number} is Even Number`
  }else{
    return   `The Number ${number} is Even Odd`
  }
}

console.log(isEvenOdd(18));
console.log(isEvenOdd(10));
console.log(isEvenOdd(-9));
