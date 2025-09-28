// ------------------------------
// Part 2: JavaScript Functions
// ------------------------------

let globalVar = "I'm global!";

// Function with parameters & return value
function addNumbers(a, b) {
  return a + b;
}

// Function demonstrating local scope
function localScopeExample() {
  let localVar = "I'm local!";
  console.log(localVar); // accessible here
}

function demoFunctions() {
  console.log("Global Variable:", globalVar);
  
  // Using parameters & return values
  let sum = addNumbers(5, 7);
  console.log("Sum of 5 + 7 =", sum);

  // Local scope demonstration
  localScopeExample();
  // console.log(localVar); //  Error if uncommented, localVar is not defined
}

// ------------------------------
// Part 3: Trigger Animations with JS
// ------------------------------

const animBox = document.getElementById("animBox");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  // Toggle the animation class dynamically
  animBox.classList.toggle("move");
});
