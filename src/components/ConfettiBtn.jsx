import confetti from "canvas-confetti";
import { increase } from '../ReduxSlices/cart/cartSlice';
import { useDispatch, useSelector } from "react-redux";

export default function ConfettiBtn({ coloursList, btnText, item}) {
    const dispatch = useDispatch();
    const { cartItems, total,  amount } = useSelector((state) => state.cart);

    function shootConfetti() {
    
        confetti({
            particleCount: 450,
            spread: 120,
            shapes:['circle'],
            scalar: 0.6,
            colors: coloursList,
        })
    }

    function dispatchIncrease(item) {
        dispatch(increase(item));
    }
    

    return (
        <>           
            <button  onClick={() => {shootConfetti(); dispatchIncrease(item);}}>{btnText}</button>
        </>
    )
}