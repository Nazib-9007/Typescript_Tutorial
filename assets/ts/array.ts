let user: string [] = []
user.push("John")
user.push("Bob")
user.push("Mosh")
console.log(user);

let userId: number[] = []
userId.push(9007)
userId.push(9001)
userId.push(9000)
console.log(userId);
//same as other data types...

// Create a specific type...

type User = {
    name: string,
    id: number,
    city: string,
    isActive: boolean
}

interface User1 {
    name: string,
    id: number,
    city: string,
    isActive: boolean
}

//this type or interface inside value can use so many user
let person: User = {
    name: "John Doe",
    id: 9007,
    city: "Washington D.C.",
    isActive: true
}
console.log(person);

let person1: User1 = {
    name: "Mosh",
    id: 9001,
    city: "Berlin",
    isActive: false
}
console.log(person1);