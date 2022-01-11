/**
 * PRIMITIVES
 * number, string, and boolean
 */

let age: number
age = 12

let userName: string
userName = 'Jerome'

let isDeveloper: boolean
isDeveloper = true

/**
 * COMPLEX TYPES
 * array, objects, array of objects
 */

// Array of strings/numbers/booleans
let hobbies: string[]
hobbies = ['Sports', 'Music', 'Video Games']

let favNumbers: number[]
favNumbers = [1, 5, 6, 3, 8, 9]

let bools: boolean[]
bools = [false, false, true]

// Object types
// The properties and types will be followed strictly, 
// creating a person object with properties not included will throw an error
let person: { name: string; age: number }
person = {
    name: 'jerome',
    age: 12
}

// Array of objects
// By adding an empty array at the end of the object type declaration
// we specify the rule that 'people' should be an array of object
let people: { name: string; age: number }[]
people = [
    {
        name: 'jerome',
        age: 12
    },
    {
        name: 'jess',
        age: 201
    }
]

/**
 * TYPE INFERENCE
 * This is a feature of TypeScript where it infers the type of a value 
 * even if you didn’t explicitly declare any types to it.
 */
let course = 'My simple string'
course = 12345 // Type 'number' is not assignable to type 'string'

/**
 * UNIONS 
 * TypeScript allows you to set multiple types for a value
 * allowing for more flexibility
 */
let newCourse: string | number = 'My simple string'
newCourse = 12345

/**
 * Type Aliases
 * These are type definitions that can be reused
 */
 type Book = {
    title: string;
    id: number;
 }

let myBook1: Book = {
    title: 'Lord of the Rings',
    id: 1
}
let myBook2: Book = {
    title: 'The Alchemist',
    id: 1
}

/**
 * FUNCTIONS & FUNCTION TYPES
 * Types can be declared on the arguments and the value returned of a function
 */

// This function is declared to return a number
function add(a: number, b: number): number {
    return a + b
}

// If a function returns no value then use void
function print(value: any): void {
    console.log(value)
}

/**
 * GENERICS
 * This feature allows us to create "type" variables, that allows for more flexible type declarations
 * It can be use in many scenarios but for this example it's used for a function
 * 
 * Think of 'T' as a placeholder variable for the type data
 * that you would pass as soon as you call the function.
 * You could pass an array of strings for 1st arg, and a string for 2nd arg
 * in that case TypeScript would substitute 'T' with string.
 * 
 * Note that the 1st arg's type takes precedence.
 * 
 * This can be a handful to process and there's more to it so check the docs for more info
 * https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#generics
 */
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray
}
const demoArray = [1, 2, 3]
const updatedArray = insertAtBeginning(demoArray, -1)