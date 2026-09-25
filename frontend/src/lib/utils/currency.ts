// src/lib/utils/currency.ts

/**
 * Format a number as Indian Rupee currency.
 * e.g. 1500 → "₹1,500"
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
