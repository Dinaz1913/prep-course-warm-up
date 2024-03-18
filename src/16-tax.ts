export {};

/**
 * Let's try to use our knowledge about functions to try
 * and build a tool you could use in real life.
 */

/**
 * Sales Tax
 *
 * A business requires a program that calculates how much sales tax to charge
 * Sales tax is 21% of the price of the product
 */

// You are allowed to change only this function
function calculateSalesTax(price:number):number {
const taxRate = 0.21;
const salesTax = price * taxRate;
return salesTax;
}
const product = "You don't know JS";
const price = 19.99;
const salesTax = calculateSalesTax(price);

console.log("Product: " + product);
console.log("Price: £" + price.toFixed(2)); // Displaying price with two decimal places
console.log("Sales tax: £" + salesTax.toFixed(2)); // Displaying sales tax with two decimal places
console.log("Total: £" + (price + salesTax).toFixed(2)); // Displaying total with two decimal places

/* Expected output:

    > Product: You don't know JS
    > Price: £19.99
    > Sales tax: £4.20
    > Total: £24.19

*/
