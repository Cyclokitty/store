import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {  sendOrder, clearCart } from '../src/ReduxSlices/cart/cartSlice';

export default function CustomerPage() {
    const navigate = useNavigate();

    const inputRef = useRef(null);

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ streetAddress, setStreetAddress ] = useState('');
    const [ cityAddress, setCityAddress ] = useState('');
    const [ postalCode, setPostalCode ] = useState('');
    const [ province, setProvince ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ cardType, setCardType] = useState('');
    const [ card, setCard] = useState('');
    const [ cardExpiry, setCardExpiry ] = useState('');
 
    const { order } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const customer = {
        name, email, streetAddress, cityAddress, postalCode, province, country, phone, cardType, card, cardExpiry
    }

    const validateInput = (name, email, streetAddress, cityAddress, postalCode, province, country, phone, cardType, card, cardExpiry) => {
        if (!name.trim()) {
            return false;
        }
        if (!email.trim()) {
            return false;
        }
        if (!streetAddress.trim()) {
            return false;
        }
        if (!cityAddress.trim()) {
            return false;
        }
        if (!postalCode.trim()) {
            return false;
        }
        if (!province.trim()) {
            return false;
        }
        if (!country.trim()) {
            return false;
        }
        if (!phone.trim()) {
            return false;
        }
        if (!cardType.trim()) {
            return false;
        }
        if (!card.trim()) {
            return false;
        }
        if (!cardExpiry.trim()) {
            return false;
        }

        return true;
    }

    

    const submitOrderAndReset = () => {       
        const validInput = validateInput(name, email, streetAddress, cityAddress, postalCode, province, country, phone, cardType, card, cardExpiry);

        if (!validInput) {
            alert('Please complete order form.')
            return null;
        } else {
            dispatch(sendOrder({order, customer}));
            dispatch(clearCart());
            navigate('/thankyou');
        }
        
    }

    return (
        <div className='customer-info'>
            <h1>Customer Page!</h1>
            <p>Note: Please, please, please DO NOT put in your real information. This store app is my personal project and I'm not ever sending you any of the products listed here. Not a Thingy. Not a Brick. Not a Cloud. So, please don't type in your real name or address, and definitely NOT YOUR ACTUAL CREDIT CARD INFORMATION.</p>
            <p>But I thank you very much for going thru my store web app and clicking items into the cart and getting to this point. I appreciate like crazy!</p>
            <form>
                <label>Name</label>
                <input 
                    ref={inputRef}
                    id='name'
                    type='text'
                    placeholder='Your first and last name ex. Jay Smith'
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                />
                
                
                <label>Email</label>
                <input 
                    id='email'
                    type='text'
                    placeholder='ex. bingo@example.com'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Street Address</label>
                <input 
                    id='streetAddress'
                    type='text'
                    placeholder='123 Maple Road'
                    value={streetAddress}
                    required
                    onChange={(e) => setStreetAddress(e.target.value)}
                />
                <label>City</label>
                <input 
                    id='cityAddress'
                    type='text'
                    placeholder='Toronto'
                    value={cityAddress}
                    required
                    onChange={(e) => setCityAddress(e.target.value)}
                />
                <label>Province or State</label>
                <input 
                    id='province'
                    type='text'
                    placeholder='Ontario'
                    value={province}
                    required
                    onChange={(e) => setProvince(e.target.value)}
                />
                <label>Postal Code</label>
                <input 
                    id='postalCode'
                    type='text'
                    placeholder='M1P 1P1'
                    value={postalCode}
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                />
                <label>Country</label>
                <input 
                    id='country'
                    type='text'
                    placeholder='Canada'
                    value={country}
                    required
                    onChange={(e) => setCountry(e.target.value)}
                />
                <label>Phone Number</label>
                <input 
                    id='phone'
                    type='text'
                    placeholder='647-555-1234'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                
                <div>
                    <input 
                        type='radio'
                        name='cardType'
                        value='Vizza'
                        onChange={(e) => setCardType(e.target.value)}
                        checked={cardType === 'Vizza'}
                    />
                    <label htmlFor='Vizza'>Vizza</label>
                    <input 
                        type='radio'
                        name='cardType'
                        value='MonsterCard'
                        onChange={(e) => setCardType(e.target.value)}
                        checked={cardType === 'MonsterCard'}
                    />
                    <label htmlFor='MonsterCard'>MonsterCard</label>
                    <input 
                        type='radio'
                        name='cardType'
                        value='American Eggspresso'
                        onChange={(e) => setCardType(e.target.value)}
                    />
                    <label htmlFor='American Eggspresso'>American Eggspresso</label>
                </div>
                <label>Credit Card Number</label>
                <input 
                    id='card'
                    type='text'
                    placeholder='DO NOT PUT IN YOUR REAL CARD NUMBER.'
                    value={card}
                    required
                    onChange={(e) => setCard(e.target.value)}
                />
                <label>Credit Card Expiry</label>
                <input 
                    id='cardExpiry'
                    type='text'
                    placeholder='ex. 04/27'
                    value={cardExpiry}
                    onChange={(e) => setCardExpiry(e.target.value)}
                />
                
            </form>
            
            <button onClick={() => submitOrderAndReset() }>Complete Order!</button>
        </div>
    )
}