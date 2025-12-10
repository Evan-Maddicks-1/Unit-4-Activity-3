/**
* @author Evan Maddicks
* @version 1.0.0
* @date 2025-12-10
* @fileoverview this program will make a shopping cart simulation
*/

//Arrays to store item names and prices
const itemNames: string [] = [];
const itemPrices: number [] = [];

//Ask how many items
const numItems = Number(prompt("How many items are you buying?"));

//Collect item names and prices
for (let i = 0; i < numItems; i++) {
  const name = prompt(`Enter the name of item #${i + 1}:`);
  const price = Number(prompt(`Enter the price of ${name}: $`));

  itemNames[i] = name || "";
  itemPrices[i] = price;
}

//Calculate subtotal
let subtotal = 0;
for (let i = 0; i < numItems; i++) {
  subtotal += itemPrices[i];
}

//Discount eligibility
let discount = 0;
if (subtotal > 350) {
  discount = subtotal * 0.10;
}

//HST (13%)
const hst = (subtotal - discount) * 0.13;

//Total
const total = subtotal - discount + hst;

//Output
console.log("Items: " + itemNames.join(", "));
console.log("Number of items: " + numItems);
console.log("Subtotal: $" + subtotal.toFixed(2));

if (discount > 0) {
  console.log("Discount: $" + discount.toFixed(2));
} else {
  console.log("No discount applied.");
}

console.log("HST: $" + hst.toFixed(2));
console.log("Total: $" + total.toFixed(2));
