//Construct the Calculator Class
class Calculator{
    constructor(currentNumber){
        this.currentNumber = currentNumber;
        this.clearcalc();
    }

    clearcalc(){
        this.currentOperand='';
        this.pastOperand= '';
        this.operation = undefined;
    };
    
    
    appendNumber(number){
        if(number==='.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    
    setOperation(operation){
        if(this.currentOperand === '') return;
        this.operation = operation;
        this.pastOperand = this.currentOperand;
        this.currentOperand = '';
    }
    
    compute(){
        var computation;
        var prev = parseFloat(this.pastOperand);
        var current =  parseFloat(this.currentOperand);
        var operator = this.operation;
        if(isNaN(prev) || isNaN(current)) return;
        switch(operator){
            case '+':
                computation = prev + current;
                computation = Number(computation.toPrecision(10));
                break;
            case '-':
                computation = prev - current;
                computation = Number(computation.toPrecision(10));
                break;
            case 'x':
                computation = prev*current;
                computation = Number(computation.toPrecision(10));
                break;
            case '/':
                computation = prev/current;
                computation = Number(computation.toPrecision(10));
                break;
            default:
                return
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }
    
    
    updateDisplay(){
        this.currentNumber.innerText = this.currentOperand;
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const currentNumber = document.querySelector('[data-first-operand');

//Logic Implementation
const calculator = new Calculator(currentNumber);

numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.setOperation(button.innerText)
    })
})

equalsButton.addEventListener('click',()=>{
    calculator.compute();
    calculator.updateDisplay();

})