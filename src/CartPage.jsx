import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, createOrder } from '../src/ReduxSlices/cart/cartSlice';
import CartDisplay from "./components/CartDisplay";

export default function CartPage() {
    const {cartItems, total, amount} = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);

    if (cartItems.length < 1) {
        return (
            <div>Nothing in Cart</div>
        )
    }

    return (
        <div style={{padding: '20px'}}>
            <h1>Cart Page</h1>
            <div className="cartpage-section">
                <CartDisplay />
            </div>
            <div className="cart-totals cartpage-section">
                <div>Total in Cart: ${total}</div>
                <div>Number of items in cart: {amount}</div>
            </div>

            <Link to={'/customer'}>
                <button
                    onClick={() => dispatch(createOrder({cartItems, total, amount}))}
                >
                    Checkout
                </button>
            </Link>
            
        </div>
    )
}