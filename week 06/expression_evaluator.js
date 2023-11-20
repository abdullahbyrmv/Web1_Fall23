const operators = new Map([
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
    ['*', (a, b) => a * b],
    ['/', (a, b) => a / b],
]);

function evaluateExpression(expression) {
    
    const [operand1, operator, operand2] = expression.split(' ');

    
    if (operators.has(operator)) {
        const operation = operators.get(operator);
        
        return operation(parseFloat(operand1), parseFloat(operand2));
    } else {
        
        return defaultOperation(parseFloat(operand1), parseFloat(operand2));
    }
}

function defaultOperation(a, b) {
    return a + b;
}


console.log(evaluateExpression("8 + 65")); 
console.log(evaluateExpression("11 - 3"));
console.log(evaluateExpression("5 ^ 3"));