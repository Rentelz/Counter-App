// Adding Variables to HTML elements

let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract');

// console.log(add , subtract);
// click Events

add.addEventListener('click', function () {
    let output = document.querySelector('#output')
    let result = Number(output.innerText) + 1;
    console.log(output);
    output.innerText = result
    if(result >= 11){
       result = 0;
    }
})

subtract.addEventListener('click' , function(){
    let output = document.querySelector('#output')
    console.log(output);
    let result = Number(output.innerText) - 1
    
    if(result <= 0){
        result = 0;
    }
    output.innerText = result
})