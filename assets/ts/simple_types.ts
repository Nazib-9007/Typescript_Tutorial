//boolean data type
let isActive: boolean = true;
let hasPermission: boolean = false
console.log(`Permission: ${hasPermission}, then your account is ${isActive}`);

//Number data type
let decimal: number = 6;
let hex: number = 0xf00d;
console.log(`Decimal number: ${decimal} and Hex number: ${hex}`);

//string data type
let color: string = "Black";
let fullName: string = 'John Doe';
console.log(`Full name: ${fullName} and favorite color: ${color}`);

//BigInt
const hugeNumber = BigInt(9007199254740991);
console.log(`Huge number: ${hugeNumber}`);

//Symbol type
const uniqueKey: symbol = Symbol('description');
const obj = {
  [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]);