function getPin(){
    const pinNumber = Math.round(Math.random()*10000);
    const pinString = pinNumber + '';
    if(pinString.length == 4){
        return pinNumber;
    }
    else {
        return getPin();
    }
}

function generatePin(){
    document.getElementById('generate-pin').addEventListener('click',function(){
        const pin = getPin();
        const pinValue = document.getElementById('get-pin');
        pinValue.value = pin;
    })
}

document.getElementById('calc-field').addEventListener('click',function(event){
    const numbers = event.target.innerText;
    const inputNumbers = document.getElementById('input-field');
    if(isNaN(numbers)){
        if(numbers == 'C'){
            inputNumbers.value = '';
        }
    }
   else{
    const previousNumber = inputNumbers.value;
    const newNumber = previousNumber + numbers;
    inputNumbers.value = newNumber;
    
   }
})

function verifyPin(){
    const pin = document.getElementById('get-pin').value;
    const typedPin = document.getElementById('input-field').value;
    const success = document.getElementById('verified');
    const failed = document.getElementById('not-verified');
    if(pin == typedPin){
        failed.style.display= 'none'
        success.style.display = 'block';
    }
    else{
        success.style.display = 'none';
        failed.style.display= 'block'
    }
    
}

