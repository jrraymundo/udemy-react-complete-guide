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