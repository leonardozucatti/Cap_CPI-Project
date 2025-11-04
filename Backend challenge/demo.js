"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
console.log('--- Testes de TypeScript ---');
// 1.1
const data = [
    { id: 1, name: 'Alice', active: true },
    { id: 2, name: 'Bob', active: false },
];
console.log('1.1 - EXTRAIR NOME:', (0, index_1.extractValues)(data, 'name'));
// 1.2
console.log('1.2 - CALCULAR add:', (0, index_1.calculate)('add', 10, 5));
try {
    console.log((0, index_1.calculate)('divide', 10, 0));
}
catch (e) {
    console.log(' expected error:', e.message);
}
// 1.3
const numbers = [-1, 2, -3, 4];
console.log('1.3 - LISTA POSITIVOS:', (0, index_1.makeAllPositive)(numbers));
console.log('1.3 - LISTA ORIGINAL:', numbers);
