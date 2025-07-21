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
        alert("You can't divide by 0... Awkwarddddd")
    }
}

let numA
let operator
let numB

function operate(numA, operator, numB){
    switch(operator) {
        case "add":
            return add(numA, numB)
        
        case "subtract":
            return subtract(numA, numB)
    
   
        case "multiply":
            return multiply(numA, numB)
    
   
        case "divide":
            return divide(numA, numB)
    
        default:
            console.log("operation not defined")
            break
    }
}