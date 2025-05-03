export function expect<T>(index: number, value: T, ...args: string[]): T;
export function field<T = Record<string, unknown>>(tbl: unknown, index: string, ...args: string[]): T[keyof T];
export function range(num: number, min: number, max: number): number;
