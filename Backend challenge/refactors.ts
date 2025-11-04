/* 3.1 Refatoração de Código
Original:
function processItems(items: any[]) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].price > 100) {
      console.log(items[i].name + ' is expensive');
    }
  }
}
*/

type Item = { name: string; price: number };

export function logExpensiveItems(items: readonly Item[], threshold = 100): void {
  items
    .filter(({ price }) => price > threshold)
    .forEach(({ name }) => console.log(`${name} is expensive`));
}

/* 3.2 Refatoração de Lógica Complexa
Original:
function calculateDiscount(price: number, isPremium: boolean): number {
  if (isPremium) {
    if (price > 100) return price * 0.8;
    else return price * 0.9;
  } else {
    if (price > 100) return price * 0.9;
    else return price;
  }
}
*/

export function applyDiscount(price: number, isPremium: boolean): number {
  const over100 = price > 100;
  const discount =
    isPremium ? (over100 ? 0.20 : 0.10) : (over100 ? 0.10 : 0.00);
  return price * (1 - discount);
}

/* 3.3 Melhorando Nomes e Estrutura
Original:
function c(x: number[]): number[] {
  const r = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0) {
      r.push(x[i] * 2);
    }
  }
  return r;
}
*/

export function doubleEvenNumbers(values: readonly number[]): number[] {
  return values.filter(v => v % 2 === 0).map(v => v * 2);
}
