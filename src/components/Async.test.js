import { render, screen } from '@testing-library/react'
import Async from './Async'

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        render(<Async />)

        /**
         * Returns an array of html elements
         * But since the rendering of the elements depend on an API call 
         * we need to use a 'find' query to return a promise and await it
         * 
         * The 'find' query takes 3 arguments.
         * The query, options, and the third that allows setting a timeout.
         * Default timeout is 1 second.
         * 
         * Example: screen.findAllByRole('listitem', { exact: true }, { timeout: xxx })
         */
        const listItemElements = await screen.findAllByRole('listitem')
        
        /**
         * Checks that the length of the array is not 0
         * meaning we expect to have at least 1 item rendered
         */
        expect(listItemElements).not.toHaveLength(0) 
    })
})