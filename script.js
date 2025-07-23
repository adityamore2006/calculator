function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    if(b != 0){
        return a/b
    }
    else{
        alert("Division by 0 is impossible... Awkward.")
    }
}

let numA = ''
let operator = ''
let numB = ''

const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display')

buttons.forEach(function(button) {
    button.addEventListener('click', function(event){
        const value = button.textContent
        //handles equal sign
        if(value === '='){
            if(numA !== '' && operator !== '' && numB !== ''){
                display.textContent = operate(parseFloat(numA), operator, parseFloat(numB))
                numA = ''
                operator = ''
                numB = ''
            }
            return;
        }

        //handles AC
        if(value === 'AC'){
            numA = ''
            operator = ''
            numB = '' 
            display.textContent = ''
            return
        }

        //handles DEL
        if(value === 'DEL'){
            operatorHelper = operator
            
            switch (operatorHelper) {
                    case 'add':
                        operatorHelper = '+';
                        break;
                    case 'subtract':
                        operatorHelper = '-';
                        break;
                    case 'multiply':
                        operatorHelper = '*';
                        break;
                    case 'divide':
                        operatorHelper = '/';
                        break;
                }

            if(numB !== ''){ //all full so delete numB

                numB = numB.slice(0, -1)

                if(numB === ''){ // if numB is empty show operator
                    display.textContent = operatorHelper
                }
                else{ // else show numB
                    display.textContent = numB
                }
            }
            else if(operatorHelper!== "") { // numA and opeartor full so delete operator
                operatorHelper = ''
                display.textContent = numA
            }
            else{ //only numA is full, so delete numA
                numA = numA.slice(0, -1)
                
                if(numA === ''){ // if numB is empty show operator
                    display.textContent = operatorHelper
                }
                else{ // else show empty display
                     display.textContent = ''
                }
               
            }
            return
        }
 
        //handles operator
        if (value === '/' || value === '*' || value === '-' || value === '+') {

            if (numA !== '' && operator === '') { //if numA is full and operator is not

                switch (value) {
                    case '+':
                        operator = 'add';
                        break;
                    case '-':
                        operator = 'subtract';
                        break;
                    case '*':
                        operator = 'multiply';
                        break;
                    case '/':
                        operator = 'divide';
                        break;
                }

                display.textContent = value; // Show the symbol, not the function name

            }

            if (numA !== '' && operator !== '' && numB !== '') { //all fields are full
                let temp = operate(parseFloat(numA), operator, parseFloat(numB))//operator is in string form so function can be called
                numA =  temp.toFixed(10)
                switch (value) {
                    case '+':
                        operator = 'add';
                        break;
                    case '-':
                        operator = 'subtract';
                        break;
                    case '*':
                        operator = 'multiply';
                        break;
                    case '/':
                        operator = 'divide';
                        break;
                }
                
                numB = ''
                display.textContent = numA
            }

            return;         

        }

        //handles numbers
        if(operator !== ''){

            if(value === '.' && numB.includes('.')){
                return
            }

            numB += value
            display.textContent = numB
        }
        else{

            if(value === '.' && numA.includes('.')){
                return
            }

            numA += value
            display.textContent = numA;
        }
    })
})

function operate(numA, operator, numB){
    switch(operator) {
        case "add":
            let addTemp = add(numA, numB)
            return parseFloat(addTemp.toFixed(10))
        
        case "subtract":
            let subtractTemp = subtract(numA, numB)
            return parseFloat(subtractTemp.toFixed(10))
    
   
        case "multiply":
            let multiplyTemp = multiply(numA, numB)
            return parseFloat(multiplyTemp.toFixed(10))
    
   
        case "divide":
            let divideTemp = divide(numA, numB)
            return parseFloat(divideTemp.toFixed(10))
    
        default:
            console.log("operation not defined")
            break
    }
}