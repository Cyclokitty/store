import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, removeItem, clearCart } from '../src/ReduxSlices/cart/cartSlice';


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
            <div>
                {cartItems.map((item => {
                    return (
                        <table>
                            <tr>
                                <td>
                                    {<img alt='store mascot' src={item.itemImg} style={{width: '50%', paddingTop: '20px'}}/>}
                                      
                                    </td>
                                <td>{item.itemName}</td>
                                <td>{item.itemColour}</td>
                                <td>${item.itemPrice.toFixed(2)}</td>
                                <td>{item.itemAmount}</td>
                                <td>
                                    <button
                                        onClick={() => dispatch(removeItem(item.itemId))}
                                    >
                                        Remove 1
                                    </button>
                                </td>
                                
                            </tr>                            
                        </table>
                    )
                }))}
            </div>
            <div className="cart-totals">
                <div>Total in Cart: ${total}</div>
                <div>Number of items in cart: {amount}</div>
            </div>
            <button
                                        onClick={() => dispatch(clearCart())}
                                    >
                                        Submit Order!
                                    </button>
        </div>
    )
}