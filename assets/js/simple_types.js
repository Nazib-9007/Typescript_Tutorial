"use strict";
//boolean data type
let isActive = true;
let hasPermission = false;
console.log(`Permission: ${hasPermission}, then your account is ${isActive}`);
//Number data type
let decimal = 6;
let hex = 0xf00d;
console.log(`Decimal number: ${decimal} and Hex number: ${hex}`);
//string data type
let color = "Black";
let fullName = 'John Doe';
console.log(`Full name: ${fullName} and favorite color: ${color}`);
//BigInt
const hugeNumber = BigInt(9007199254740991);
console.log(`Huge number: ${hugeNumber}`);
//Symbol type
const uniqueKey = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]);
