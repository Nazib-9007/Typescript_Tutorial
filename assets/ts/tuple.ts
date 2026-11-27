//arrays in typescript
const names: string[] = [];
names.push("John Doe");
names.push("Mosh");
console.log(names);

//If want to there is no other mutable of any array then use "readonly" function.
const people: readonly string[] = ["Mr X"];
names.push("John Doe");
names.push("Mosh");
console.log(people);

// Create custom type
type People = [number, number];
let infoPeople: People = [1001, 90];
console.log(infoPeople);

// for interface
interface Student {
  data: [number, number],
  course: [string, string]
}
let inFo: Student = {
  data:[9000, 70],
  course: ["Optical Communication", "Software Engineering"]
}
console.log(inFo);