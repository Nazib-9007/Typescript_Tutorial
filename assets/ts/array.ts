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


type User = {
    name: string,
    city: string,
    age: number,
    city_code: string,
    isActive: boolean
}

interface User1 {
    name: string,
    city: string,
    age: number,
    city_code: string,
    isActive: boolean
}

let Person: User = {
    name: "John Doe",
    city: "Dhaka",
    age: 25,
    city_code: "AE245",
    isActive: true
}
let std: User1 = {
    name: "Bob",
    city: "Chattogram",
    age: 28,
    city_code: "AG246",
    isActive: true
}
console.log(Person)
console.log(std)

//Nested Interface or Type

interface AppConfig {
    appname: string,
    version: string,
    deBug: boolean,
    port: number,
    // database: {
    //     databaseName: string,
    //     databasePort: number,
    //     host: string,
    //     username: string,
    //     password: string
    // },
    dataBase: DataBase,
    // features: {
    //     userInterface: boolean,
    //     userProfile: boolean,
    //     message: string
    // }
    features: Features
}

interface DataBase {
    databaseName: string,
    databasePort: number,
    host: string,
    username: string,
    password: string
}

interface Features {
    userInterface: boolean,
    userProfile: boolean,
    message: string
}

//Also same as "type"
