//declare the variable for the calculator functionality
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');

const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const equalsButton = document.querySelector('[data-equals]');

const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const memoryClearButton = document.querySelector('[data-memory-clear]');
const memoryAddButton = document.querySelector('[data-memory-add]');
const memoryDeleteButton = document.querySelector('[data-memory-delete]');
const memoryRestoreButton = document.querySelector('[data-memory-restore]');

//we will store our current and previous operations in a class
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    //create the functionality of our calculator

    clear = () => {
        //this will clear out different variables

        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;

    }

    delete = () => {
        //this function deletes single item from current operand
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber = (number) => {
        //appends numbers for the output string

        //no more than one comma allowed
        if (number === '.' && this.currentOperand.includes('.')) return ;
        this.currentOperand = this.currentOperand.toString() + number.toString();
        console.log(this.currentOperand);
    }

    chooseOperation = (operation) => {
        //check for empty string
        if (this.currentOperand === '') return;

        //call the

        if (this.previousOperand != '') {
            //call the compute function
            this.compute();
        }

        //chooses the operand the user enters
        this.operation = operation;
        
        //commit current operand to previous operand
        this.previousOperand = this.currentOperand + ' ' + this.operation;

        //clean the current operand, set string to empty
        this.currentOperand = '';
    }

    negative() {
        
    }

    compute = () => {
        //this will compute 
        let computation
        const prev = parseFloat(this.previousOperand.slice(0, -1));
        const current = parseFloat(this.currentOperand);

        //check if strings were successfully parsed to float
        if (isNaN(prev) || isNaN(current)) return;

        //do the computation on the operations
        switch(this.operation) {
            case '÷':
                computation = prev / current
                break;
            case '*':
                computation = prev * current
                break;
            case '+':
                computation = prev + current
                break;
            case '+':
                computation = prev + current
                break;
            case '-':
                computation = prev - current
                break;
            default:
                return;
        }
        

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
        
    }

    updateDisplay = () => {
        //this will update the output
        this.currentOperandTextElement.innerText = this.currentOperand; //update the current 
        this.previousOperandTextElement.innerText = this.previousOperand ;//update after an operation
    }
}

//create an instance of a calculator class
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    //for each number event listener we listen for button click
    button.addEventListener('click', () => {
        //call appendNumber func
        calculator.appendNumber(button.innerText);
        //then display the appended 
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    //for each operation event listener we listen for button click
    button.addEventListener('click', () => {
        //call chooseOperation func
        calculator.chooseOperation(button.innerText);
        //then display the appended 
        calculator.updateDisplay();
    })
})

//listen for the click on equals button
equalsButton.addEventListener('click', () => {
    //call compute func
    calculator.compute();
    //then display the computed 
    calculator.updateDisplay();
})

//listen for the click on clear button
clearButton.addEventListener('click', () => {
    //call clear func
    calculator.clear();
    //then display the computed 
    calculator.updateDisplay();
})

//listen for the delete button
deleteButton.addEventListener('click', () => {
    //call the delete function
    calculator.delete();
    //then update the returned string
    calculator.updateDisplay();
})

let memory = 0
//Making a memory store button functional
memoryAddButton.addEventListener('click',function(event){
  memory = output.value;
})

//Making memory Clear Button functional

//Making a memory Restore Button functional
memoryClearButton.addEventListener('click',function(event){
  memory = 0;
})

//Making memory Clear Button functional
memoryRestore.addEventListener('click',function(event){
  output.value = memory;
})