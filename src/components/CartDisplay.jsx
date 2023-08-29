import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, removeItem, addItem, } from '../../src/ReduxSlices/cart/cartSlice';


export default function CartDisplay() {
    const { cartItems } = useSelector((state) => state.cart);

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
        <Container fluid='xs'>
            {cartItems.map(((item, id) => {
                return (
                <Row key={id} className="align-items-center row">
                    <Col xs={2}>
                        {<img alt='product' src={item.itemImg} style={{width: '75%'}}/>}                                     
                    </Col>
                    <Col xs={2}>{item.itemName}, {item.itemColour}</Col>
                    
                    <Col xs={2}>${item.itemPrice.toFixed(2)}</Col>
                    
                    

                    <Col xs={2}><button
                            onClick={() => dispatch(addItem(item))}
                        >
                            +1
                    </button></Col>
                        
                    <Col xs={2}>{item.itemAmount}</Col>
                    <Col xs={2}>
                    <button
                        onClick={() => dispatch(removeItem(item.itemId))}
                    >
                        -1
                    </button></Col>
                    
                </Row>
            )}))}  
                    
    </Container>         
            
    )
}