

const finalProductPrice = basePrice => `The product price is ${basePrice}`

const basePrice = 100
console.log(finalProductPrice(200))



const promos = [
    {code: 'TOTALLY10', amount: 10, isActive: true},
    {code: 'PLENTY20', amount: 20, isActive: false},
    {code: 'NIFTY50', amount: 50, isActive: true},
    {code: 'WHOPPING75', amount:50, isActive: true},
    {code: 'YOLOFREE', amount:100, isActive: false}
]

// const promos = [
//   { code: 'TOTALLY10', amount: 10, isActive: true },
//   { code: 'PLENTY20', amount: 20, isActive: false },
//   { code: 'NIFTY50', amount: 50, isActive: true },
//   { code: 'WHOPPING75', amount: 75, isActive: true },
//   { code: 'YOLOFREE', amount: 100, isActive: false },
// ]

// // Use camelCase for function names, e.g., getDiscount, calculateFinalPrice
// function getDiscount(code) {
//   // Use descriptive variable names
//   let promo = promos.find(promo => promo.code === code)
//   console.log(promo)
  
//   // Check if promo is defined and active
//   if (promo !== undefined && promo.isActive) {
//     console.log(`You get a ${promo.amount}% discount!`)
//     return promo.amount / 100; // Return discount as a decimal
//   }
//   return 0; // Return 0 if no valid promo is found
// }

// function calculateFinalPrice(basePrice, userCode) {
//   if (userCode) {
//     const discount = getDiscount(userCode)
//     const finalPrice = basePrice - basePrice * discount
//     return finalPrice; // Return the final price after discount
//   } else {
//     return basePrice; // Return base price if no user code is provided
//   }
// }

// // Define promo codes with their respective discount amounts and active status
// const promos = [
//   { code: 'TOTALLY10', amount: 10, isActive: true },
//   { code: 'PLENTY20', amount: 20, isActive: false },
//   { code: 'NIFTY50', amount: 50, isActive: true },
//   { code: 'WHOPPING75', amount: 75, isActive: true },
//   { code: 'YOLOFREE', amount: 100, isActive: false },
// ]

// // Example usage
// const basePrice = 100;
// const userCode = 'TOTALLY10';
// const finalPrice = calculateFinalPrice(basePrice, userCode);
// console.log(`The final price is $${finalPrice}`);