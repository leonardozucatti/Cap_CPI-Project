Object.defineProperty(exports, "__esModule", { value: true });
exports.extractValues = extractValues;
exports.calculate = calculate;
exports.makeAllPositive = makeAllPositive;
// 1.1 Manipulação de Tipos e Generics
function extractValues(arr, key) {
    return arr.map(item => item[key]);
}
function calculate(op, a, b) {
    switch (op) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0)
                throw new Error('Division by zero');
            return a / b;
        default: {
            const neverOp = op;
            throw new Error(`Unsupported operation: ${neverOp}`);
        }
    }
}
// 1.3 Imutabilidade e Manipulação de Arrays
function makeAllPositive(nums) {
    return nums.map(n => (n < 0 ? -n : n));
}
