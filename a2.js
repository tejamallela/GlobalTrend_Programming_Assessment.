function evaluateExpression(expression) {
    expression = expression.replace(/\s+/g, '');

    const tokens = expression.match(/[-+]?(\d+)/g);

    let result = 0;

    for (let token of tokens) {
        result += Number(token);
    }

    return result;
}

const expression = "10 + 20 - 5 + 3";
const result = evaluateExpression(expression);
console.log(result);   
