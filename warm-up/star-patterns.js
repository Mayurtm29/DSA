// ****
// ****
// ****
// ****

function squareStarPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

// squareStarPattern(4)

// *
// **
// ***
// ****

function starPattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row = row + "*";
    }

    console.log(row);
  }
}

// starPattern1(4 );

// 1
// 12
// 123
// 1234
// 12345

function numberPyramidPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
}

// numberPyramidPattern(5);

// 1
// 22
// 333
// 4444
// 55555

function numberPyramidPattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + (i + 1);
    }
    console.log(row);
  }
}

// numberPyramidPattern1(5)

// 12345
// 1234
// 123
// 12
// 1

function reverseNumberPyramidPattern(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
}

// reverseNumberPyramidPattern(5);

// ***
// **
// *
function reverseStarPyramidPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

// reverseStarPyramidPattern(5);

//     *
//    **
//   ***
//  ****
// *****

function rightPyramidPattern(n) {
  for (let i = 0; i < n; i++) {
    // if we start i form 0 (i.e i=0) then spaces condition will be j < n-(i+1)
    // if we start i form 0 (i.e i=1) then spaces condition will be j < n-i+1

    let row = "";
    for (let j = 0; j < n; j++) {
      if (j < n - (i + 1)) {
        // for spaces
        row = row + " ";
      } else {
        // for star
        row = row + "*";
      }
    }
    console.log(row);
  }
}
// rightPyramidPattern(5);

// 1
// 10
// 101
// 1010
// 10101

function pyramidPattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;

    for (let j = 0; j <= i; j++) {
      row = row + toggle;
      toggle = toggle == 1 ? 0 : 1;
    }

    console.log(row);
  }
}

pyramidPattern1(5);
