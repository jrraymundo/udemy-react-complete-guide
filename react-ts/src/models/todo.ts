/**
 * When creating TypeScript models you can use either type, interface, or class
 * 
 * These models can be used to instantiate data based on the class and type definitions,
 * and it can also be used as a plain type definition for when passing props
 */

class Todo {
    // When using TypeScript, you can declare variables and their types at the start of the class
    // Note that this is unique to TypeScript
    id: string
    text: string

    constructor(todoText: string) {
        this.text = todoText
        this.id = new Date().toISOString()
    }
}

export default Todo