// // 1. Start
// // 2. Initialize counterValue with 0
// let counterValue = 0;

// // 3. Retrieve the button with data-action "decrement" and store it in btnDec
// const btnDec = document.querySelector('[data-action="decrement"]');
// // 4. Retrieve the button with data-action "increment" and store it in btnInc
// const btnInc = document.querySelector('[data-action="increment"]');
// // 5. Retrieve the span element with id "value" and store it in valueSpan
// const valueSpan = document.getElementById('value');

// // 6. Attach a click event listener to btnDec
// //     6.1 When btnDec is clicked, do Steps 6.2 and 6.3
// //     6.2 Decrease counterValue by 1
// //     6.3 Update the text content of valueSpan with the new counterValue
// btnDec.addEventListener('click', function() {
//   counterValue--;
//   valueSpan.textContent = counterValue;
// });

// // 7. Attach a click event listener to btnInc
// //     7.1 When btnInc is clicked, do Steps 7.2 and 7.3
// //     7.2 Increase counterValue by 1
// //     7.3 Update the text content of valueSpan with the new counterValue
// btnInc.addEventListener('click', function() {
//   counterValue++;
//   valueSpan.textContent = counterValue;
// });

// // 8. End

// // let counterValue = 0;

// // //<button type="button" data-action="decrement">-1</button>
// //     const btnDec = document.querySelector('[data-action="decrement"]');

// // //<button type="button" data-action="increment">+1</button>
// //     const btnInc = document.querySelector('[data-action="increment"]');

// // //<span id="value">0</span>
// //     const valueSpan = document.getElementById('value');

// // // Add click event listeners to the buttons
// //   btnDec.addEventListener('click', function() {
// //     counterValue--;
// //     valueSpan.textContent = counterValue;
// //   });

// //   btnInc.addEventListener('click', function() {
// //     counterValue++;
// //     valueSpan.textContent = counterValue;
// //   });


const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');

let counterValue = 0

btnDec.addEventListener('click', () => {
  counterValue--;
  valueSpan.textContent = counterValue;
});

btnInc.addEventListener('click', () => {
  counterValue++;
  valueSpan.textContent = counterValue;
});