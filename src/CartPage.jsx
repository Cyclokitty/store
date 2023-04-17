import { showCart } from './ReduxSlices/cart/cartSlice';
import { useSelector } from "react-redux";


export default function CartPage() {
    const {cartItems} = useSelector((state) => state.cart);

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
                    return <div>{item.itemName}</div>
                }))}
            </div>
            
        </>
    )
}