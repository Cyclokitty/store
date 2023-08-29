import confetti from "canvas-confetti";
import { addItem } from '../ReduxSlices/cart/cartSlice';
import { useDispatch,  } from "react-redux";

export default function CartButton({ coloursList, btnText, item}) {
    const dispatch = useDispatch();

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
        dispatch(addItem(item));
    }
    

    return (
        <>           
            <button  onClick={() => {shootConfetti(); dispatchIncrease(item);}}style={styles.btn} >{btnText}</button>
        </>
    )
}

const styles = {
    btn: {
        backgroundColor: 'white',
        border: 'none',
        width: '50%',
        color: 'purple'
    }
}