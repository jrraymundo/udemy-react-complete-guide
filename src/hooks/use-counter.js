import { useState, useEffect } from 'react'

/**
 * By creating custom hooks we are able to isolate some state and effect logic
 * that we can reuse in multiple components
 * 
 * All custom hooks must be named starting with the word "use"
 * And then return specific values that you want your main component to receive
 * 
 * Arguments may also be passed like a normal function
 * In this case, we add an argument called "increment" with a default value of true
 * The hook will either add or subtract the counter value depending on the argument
 */
export default function useCounter(increment = true) {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (increment) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [increment])

    return counter
}
