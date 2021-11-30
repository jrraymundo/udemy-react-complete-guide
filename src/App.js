import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { sendCartData } from './redux/cart-slice';
import Notification from './components/UI/Notification'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

/**
 * This variable is created to prevent useEffect 
 * from running our async code on first load
 */
let isInitial = true

function App() {

  const dispatch = useDispatch()

  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }

    /**
     * We dispatch our sendCartData thunk 
     * to do the async task of sending the cart to our database 
     */
    dispatch(sendCartData(cart))
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && (
        <Notification 
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && (
          <Cart />
        )}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
