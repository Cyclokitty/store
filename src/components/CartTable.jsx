import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, removeItem, addItem, createOrder } from '../../src/ReduxSlices/cart/cartSlice';

export default function CartTable() {
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
        <div>
                {cartItems.map((item => {
                    return (
                        <table key={item.id}>
                            <tr>
                                <td>
                                    {<img alt='store mascot' src={item.itemImg} style={{width: '75%', paddingTop: '20px'}}/>}
                                      
                                    </td>
                                <td>{item.itemName}</td>
                                <td>{item.itemColour}</td>
                                <td>${item.itemPrice.toFixed(2)}</td>
                                <td>
                                <button
                                        onClick={() => dispatch(addItem(item))}
                                    >
                                        +
                                </button>
                                    
                               <span className="table-amount">{item.itemAmount}</span>
                                
                                    <button
                                        onClick={() => dispatch(removeItem(item.itemId))}
                                    >
                                        -
                                    </button>
                                </td>
                                
                            </tr>                            
                        </table>
                    )
                }))}
            </div>
    )
}