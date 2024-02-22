let displayValue = ""; //Store The current Value

//Function to append(Attach) a value ti the display
function appendToDisplay(value){
    displayValue +=value;
    document.getElementById('display').value = displayValue;
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

// Function to calculate and display the result
function calculateResult() {
    try {
        // Use eval() to evaluate the expression in the displayValue
        const result = eval(displayValue);
        
        // Update displayValue with the result
        displayValue = result;
        document.getElementById('display').value = result;
    } catch (error) {
        // Handle errors, such as dividing by zero
        displayValue = 'Error';
        document.getElementById('display').value = 'Error';
    }
}
