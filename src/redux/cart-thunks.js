import { uiActions } from './ui-slice'
import { cartActions } from './cart-slice'

/**
 * This function is a THUNK
 * 
 * It's basically a function that delays an action until later.
 * 
 * In more detail, its an action creator function that does NOT return the action itself 
 * but another function which eventually returns the action.
 * 
 * We are able to use dispatch as an argument in the returned callback 
 * because redux toolkit is responsible for making that possible. 
 * We can then write the side effect or async code that will run in the thunk, 
 * and we can even dispatch more actions.
 * 
 * This THUNK can then be imported in react components to be called in useEffect() as a side effect.
 * When redux sees that a function was dispatched in your react components, 
 * then it will treat it as a THUNK automatically.
 */
export const sendCartData = cart => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!'
            })
        )
            
        /**
         * The API call needs to be created in a separate function and be called within sendCartData
         * because of how the native fetch api works
         * 
         * If using axios, this may not be necessary
         */
        const sendRequest = async () => {
            const response = await fetch(
                'https://udemy-react-redux-2bf6e-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity
                    })
                }
            )

            if (!response.ok) {
                throw new Error('Sending cart data failed.')
            }
        }

        try {
            await sendRequest()
            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!'
                })
            )
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!'
                })
            )
        }
    }
}

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData= async () => {
            // Fetch api defaults to a GET method, so no need to specify
            const response = await fetch(
                'https://udemy-react-redux-2bf6e-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json'
            )

            if (!response.ok) {
                throw new Error('Could not fetch cart data!')
            }

            const data = await response.json()
            return data
        }

        try {
            const cartData = await fetchData()
            dispatch(cartActions.replaceCart({
                items: cartData.items || [], // If cartData.items is falsy then we default to []
                totalQuantity: cartData.totalQuantity
            }))
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data failed!'
                })
            )
        }
    }
}