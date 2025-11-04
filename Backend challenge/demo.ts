import { extractValues, calculate, makeAllPositive } from './index';
import { logExpensiveItems, applyDiscount, doubleEvenNumbers } from './clean/refactors';

console.log('--- Testes de TypeScript ---');

/*1.1
Manipulação de Tipos e Generics
Implemente uma função que recebe um array de objetos e retorna um novo array contendo apenas os valores de uma chave específica. 
Utilize Generics para garantir a tipagem.
*/

const data = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
];
console.log('1.1 - EXTRAIR NOME:', extractValues(data, 'name'));

/*1.2
Validação e Tipagem com Union Types
Implemente uma função que recebe uma string representando uma operação matemática (add, subtract, multiply, divide) e dois números. 
A função deve realizar a operação correspondente e lançar um erro caso a operação não seja suportada.
*/

console.log('1.2 - CALCULAR add:', calculate('add', 10, 5));
try {
  console.log(calculate('divide', 10, 0));
} catch (e) {
  console.log(' 1.2 - ERRO DIV:', (e as Error).message);
}

/*1.3
Imutabilidade e Manipulação de Arrays
Implemente uma função que recebe uma lista de números e retorna uma nova lista onde todos os números 
negativos são transformados em positivos, sem modificar a lista original.
*/

const numbers = [-1, 2, -3, 4];
console.log('1.3 - LISTA POSITIVOS:', makeAllPositive(numbers));
console.log('1.3 - LISTA ORIGINAL:', numbers);
