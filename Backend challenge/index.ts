// 1.1 Manipulação de Tipos e Generics
export function extractValues<T extends Record<string, unknown>, K extends keyof T>(
  arr: T[],
  key: K
): Array<T[K]> {
  return arr.map(item => item[key]);
}

// 1.2 Validação e Tipagem com Union Types
export type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

export function calculate(op: Operation, a: number, b: number): number {
  switch (op) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) throw new Error('Div by zero');
      return a / b;
    default: {
      const neverOp: never = op;
      throw new Error(`Unsupported operation: ${neverOp}`);
    }
  }
}

// 1.3 Imutabilidade e Manipulação de Arrays
export function makeAllPositive(nums: readonly number[]): number[] {
  return nums.map(n => (n < 0 ? -n : n));
}
