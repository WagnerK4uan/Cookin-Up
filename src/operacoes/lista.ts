export function itensDeLista1EstaoEmLista2(
  lista1: unknown[],
  lista2: unknown[]
): boolean {
  for (let i = 0; i < lista1.length; i++) {
    if (!lista2.includes(lista1[i])) {
      return false;
    }
  }
  return true;
}