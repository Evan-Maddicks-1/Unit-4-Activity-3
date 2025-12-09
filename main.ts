/**
* @author Evan Maddicks
* @version 1.0.0
* @date 2025-12-1
* @fileoverview this program will make a shopping cart simulation
*/

//Store item names and item prices
const itemNames: string[] = [];
const itemPrices: number[] = [];

//Ask user for  number of items
const numItems = Number(prompt("Enter the number of items you are going to purchase:"));

// Loop to collect item names and prices
for (let i = 0; i < numItems; i++) {
  const name = prompt("Enter the name of item #" + (i + 1) + ":");
  const price = Number(prompt("Enter the price of " + name + ": $"));

  itemNames.push(name!);
  itemPrices.push(price);
}

// Calculate subtotal
let subtotal = 0;
for (let i = 0; i < itemPrices.length; i++) {
  subtotal += itemPrices[i];
}

// Check if discount applies (10% if subtotal > 350)
let discount = 0;
if (subtotal > 350) {
  discount = subtotal * 0.10;
}

// Calculate HST (13%)
let hst = (subtotal - discount) * 0.13;

// Calculate final total
const total = subtotal - discount + hst;

// --------- OUTPUT ---------
console.log("Your shopping cart includes: " + itemNames.join(", "));
console.log("The total amount of items in your shopping cart is " + numItems);

console.log("");
console.log("The subtotal cost of your shopping trip was $" + subtotal.toFixed(2));

if (discount > 0) {
  console.log("You are eligible for a discount of $" + discount.toFixed(2));
} else {
  console.log("You are not eligible for a discount.");
}

console.log("The HST is $" + hst.toFixed(2));
console.log("The total is $" + total.toFixed(2));
console.log("");
console.log("Done.");
