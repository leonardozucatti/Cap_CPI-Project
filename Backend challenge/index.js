Object.defineProperty(exports, "__esModule", { value: true });
exports.extractValues = extractValues;
exports.calculate = calculate;
exports.makeAllPositive = makeAllPositive;
// 1.1 Manipulação de Tipos e Generics
function extractValues(arr, key) {
    return arr.map(item => item[key]);
}

// 1.2 Validação e Tipagem com Union Types
function calculate(op, a, b) {
    switch (op) {
        case 'add':
            return a + b;
        case 'sub':
            return a - b;
        case 'mult':
            return a * b;
        case 'divide':
            if (b === 0)
                throw new Error('Div by zero');
            return a / b;
        default: {
            const neverOp = op;
            throw new Error(`Error operation: ${neverOp}`);
        }
    }
}
// 1.3 Imutabilidade e Manipulação de Arrays
function makeAllPositive(nums) {
    return nums.map(n => (n < 0 ? -n : n));
}
