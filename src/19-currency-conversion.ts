export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challenge:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

// Function to handle currency conversion with a 1% fee
function convertCurrency(price: number, currencySymbol: string, exchangeRate: number): string {
  const convertedPrice = ((0.01 * price) + price) * exchangeRate;
  return currencySymbol + convertedPrice.toFixed(2);
}

const product = "You don't know JS";
const price = 12.5;

// Assuming exchange rates
const usdExchangeRate = 1.18; // Example: 1 USD to EUR
const brlExchangeRate = 6.4; // Example: 1 BRL to EUR

// Using the generic convertCurrency function for both USD and BRL conversions
const priceInUSD = convertCurrency(price, "$", usdExchangeRate);
const priceInBRL = convertCurrency(price, "R$", brlExchangeRate);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price in USD: $14.79
    > Price in BRL: R$80.00

*/
