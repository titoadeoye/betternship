import { useMemo, useReducer, useState } from 'react';
import './App.css';

const initialState = {
  cart: [],
  discountCode: '',
};

function cartReducer(state, action) {
  const { payload: payload_ } = action;
  switch (action.type) {
    case 'ADD_ITEM':
      // best case: use id of product
      let updatedCart = [...state.cart];
      const existInCartIndex = state.cart.findIndex(
        el => el.title === payload_.item.title
      );
      const existInCart = state.cart[existInCartIndex];

      let payload = payload_.item;

      if (existInCart) {
        payload = { ...existInCart, quantity: existInCart.quantity + 1 };
        updatedCart.splice(existInCartIndex, 1, payload);
      } else {
        payload = { ...payload, quantity: 1, id: new Date().toISOString() };
        updatedCart = [...updatedCart, payload];
      }
      return {
        ...state,
        cart: updatedCart,
      };
    case 'EDIT_ITEM':
      return { ...state };
    case 'DELETE_ITEM':
      return {
        ...state,
        cart: state.cart.filter(item => item?.id !== payload_?.id),
      };
    case 'UPDATE_DISCOUNT_CODE':
      return {
        ...state,
        discountCode: payload_,
      };
    default:
      return state;
  }
}

const products = [
  {
    title: 'Notebook',
    price: 10,
    currencyCode: '$',
  },
  {
    title: 'Pen',
    price: 5,
    currencyCode: '$',
  },
  {
    title: 'Backpack',
    price: 30,
    currencyCode: '$',
  },
];

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [value, setValue] = useState('');

  const handleItemAdd = item => {
    dispatch({ type: 'ADD_ITEM', payload: { item } });
  };

  const handleDiscountUpdate = value => {
    dispatch({ type: 'UPDATE_DISCOUNT_CODE', payload: value });
  };

  const resetDiscountUpdate = () => {
    setValue('');
    dispatch({ type: 'UPDATE_DISCOUNT_CODE', payload: '' });
  };

  const totalPrice = useMemo(() => {
    let total = 0;
    total = state.cart.reduce((prev, currentValue) => {
      return currentValue?.price * currentValue?.quantity + prev;
    }, 0);

    if (state.discountCode === 'SAVE10') {
      return total * 0.9;
    } else {
      return total;
    }
  }, [state]);

  const handleSubmit = e => {
    e.preventDefault();
    handleDiscountUpdate(value);
  };

  return (
    <main>
      {/* display products */}
      <section className="grid grid-cols-3 gap-3">
        {products.map(product => {
          return (
            <div key={product.title} className="cursor-pointer">
              <h3>{product.title}</h3>
              <p>
                Price:{' '}
                <em>
                  {product.currencyCode}
                  {product.price}
                </em>
              </p>
              <button onClick={() => handleItemAdd(product)}>
                Add to cart
              </button>
            </div>
          );
        })}
      </section>

      {/* display cart */}
      <section>
        <h3 className="text-left">Cart</h3>
        <form onSubmit={handleSubmit} className="gap-2 flex flex-col">
          <input
            className=""
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button type="submit">Apply</button>
          <button type="text" onClick={resetDiscountUpdate}>
            Reset
          </button>
        </form>
        {state.cart?.length ? (
          <div className="space-y-3">
            {state.cart?.map(item => {
              return (
                <div key={item.id} className="cursor-pointer">
                  <h3>
                    {item.title} * {item.quantity}{' '}
                  </h3>
                  <p>
                    Price:{' '}
                    <em>
                      {item.currencyCode}
                      {item.price}
                    </em>
                  </p>
                  <p>
                    Qty: <em>{item.quantity}</em>
                  </p>
                </div>
              );
            })}
            <div className="">
              <p>
                Total price: <em>${totalPrice}</em>
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center font-semibold">No items added yet</p>
        )}
      </section>
    </main>
  );
}

export default App;
