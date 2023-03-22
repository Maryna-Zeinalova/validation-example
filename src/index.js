import {validateLenght} from "mz-form-validation";

let inputValue = document.getElementById('input');
// const inputValue = '12';
const button = document.getElementById('button-addon2');
const isValid = validateLenght(inputValue.value, 3, 7);

console.log(validateLenght(inputValue, 3, 7));

button.addEventListener('click', () =>{
    if(isValid){
        button.className = 'btn btn-success'
    } else {
        button.className = 'btn btn-danger'
    }
})