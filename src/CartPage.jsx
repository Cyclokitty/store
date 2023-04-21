import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from '../src/ReduxSlices/cart/cartSlice';


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
        <>
            <h1>Cart Page</h1>
            <div>
                {cartItems.map((item => {
                    return (
                    <div>
                        <p>
                        {item.itemName} {item.itemColour} {item.itemPrice}
                        </p>
                        
                    </div>
                    
                    )
                }))}
            </div>
            <div>Total in Cart: ${total}</div>
            <div>Number of items in cart: {amount}</div>
        </>
    )
}