export type SortTypes = "asc" | "desc" | null;

export const currencies = [
  { is_usd: false, label: "Pesos (MXN)" },
  { is_usd: true, label: "Dólares (USD)" },
];

export const taxOptions = [
  { tax: 8, label: "8%" },
  { tax: 16, label: "16%" },
];
