/*
Create a program that will determine the Boolean value.

*/    

let x = 0;
let y = 10;
while (true) {
    console.log(`is ${x} greater than ${y} ?`);
    if (x > y) {
        console.log("True");
        break; // break the infinite loop
    }
    ++x;
}
console.log(`final value of x: ${x} y: ${y}`);


x = 10; 
y = 5; 

// Create a variable that will set the number of iterations
let numberOfIterations = 10;
let iterations = 0;
let alert;

// Create  while loop,
while (iterations < numberOfIterations) {
    console.log(`${iterations} < ${numberOfIterations}`);
    if (x > y) {
        alert = true;
    } else {
        alert = false;
    }

    // Increment the iterations based on the counter, 
    // in this case it will be 
    ++iterations;
}
console.log("value of alert:", alert);
console.log(`value of iterations: ${iterations} and numberOfIterations: ${numberOfIterations}`);