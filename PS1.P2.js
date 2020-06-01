const evaluate = (str) => getOperator(str.charAt(1));

const getOperator = (operator) => {
    switch (operator){
        case '+':
            return (left, right) => left + right;
        case '-':
            return (left, right) => left - right;
        case '*':
            return (left, right) => left * right;
        case '/':
            return (left, right) => left / right;
    }
}

module.exports = {evaluate, getOperator};