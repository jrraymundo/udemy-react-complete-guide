import { render, screen } from '@testing-library/react'
import Greeting from "./Greeting"

describe('Greeting component', () => {
    test ('renders Hello World as text', () => {
        // Arrange
        render(<Greeting />)
    
        // Act
        // None for this test
    
        // Assert
        const helloWorldElement =  screen.getByText('Hello World!')
        expect(helloWorldElement).toBeInTheDocument()
    })
})
