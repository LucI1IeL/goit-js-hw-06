// // 1. Start
// // 2. Retrieve the input element with ID 'name-input' and store it in inName
// const inName = document.getElementById('name-input');
// // 3. Retrieve the span element with ID 'name-output' and store it in outName
// const outName = document.getElementById('name-output');

// // 4. Attach an input event listener to inName
// //     4.1 When there is input in inName, do Steps 4.2 to 4.4
// //     4.2 Retrieve the current value from the input event's target and store it in inValue
// //     4.3 If inValue is not empty, set the text content of outName to inValue
// //     4.4 If inValue is empty, set the text content of outName to 'Anonymous'
// inName.addEventListener('input', function(event) {
//   const inValue = event.target.value;
//   outName.textContent = inValue ? inValue : 'Anonymous';
// });
// // 5. End

// // //<input type="text" id="name-input" placeholder="Please enter your name" />
// // const inName = document.getElementById('name-input');
// // //<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
// // const outName = document.getElementById('name-output');

// //   inName.addEventListener('input', function(event) {
// //     // Get the current value of the input
// //     const inValue = event.target.value;

// //     // If the input is empty, the span should display the "Anonymous" string.
// //     outName.textContent = inValue ? inValue : 'Anonymous';
// // });


const inName = document.getElementById('name-input');
const outName = document.getElementById('name-output');

inName.addEventListener('input', (event) => {
  const inValue = event.target.value;

  // outName.textContent = inValue ? inValue : 'Anonymous';
  
  if (inValue !== "") {
    outName.textContent = inValue;
  };
});