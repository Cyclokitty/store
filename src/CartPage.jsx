import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, removeItem, addItem, createOrder } from '../src/ReduxSlices/cart/cartSlice';
import CartTable from "./components/CartTable";

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
        <div className='cart-box'>
            <h1>Cart Page</h1>
            <div className="cartpage-section">
                <CartTable />
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