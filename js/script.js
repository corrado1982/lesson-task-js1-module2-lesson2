const button = document.querySelector("button");
const innerNumbers = document.querySelector(".count");

//setInterval(startCounter, 500);



const counterFunction = function startCounter () {
    
    button.innerHTML = `<div class="button:disabled"></div>`;
    let number = 0;
const intervalFunction = setInterval(function() {

    
    number++;
    if (number === 7){
        clearInterval(intervalFunction);
        
        
    }
  
    innerNumbers.innerHTML = `<span>${number}</span>`;
    
    
}, 500);

};
button.classList.remove(".button:disabled");
button.onclick = counterFunction;
// `<span>${i}</span>`;

             //RISPOSTA

// let counter = 0;
// const button = document.querySelector("button");
// const countContainer = document.querySelector(".count");

// button.onclick = function () {
//     event.target.disabled = true;

//     // reset counter
//     counter = 0;

//     const intervalId = setInterval(function () {
//         counter++; // add 1 to counter
//         countContainer.innerHTML = counter;

//         if (counter === 7) {
//             clearInterval(intervalId);
//             button.disabled = false;
//         }
//     }, 1000);
// };