import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import CartButton from "./components/CartBtn";
import './App.css';

export default function ItemPage() {
    const location = useLocation();
    const { item } = location.state;

    return (
        <div style={{padding: '15px'}}>
            <h1>{item.tag.name}</h1>
            <p>{item.tag.description}</p>
            <ul className="gallery">
                {item.tag.variants.map((variant, id) => (
                    
            <li key={variant._id}>
                <Card
                    style={{width: '18rem', height: '20rem', padding: '10px'}}>
                    <Card.Title>{variant.colour.toUpperCase()}</Card.Title>    
                    <Card.Img src={variant.img} />
                    <Card.Text>${variant.price.toFixed(2)}</Card.Text>
                    <CartButton coloursList={['#66ff67']} btnText='Add to Cart' item={
                        {
                            itemName:item.tag.name, itemId:variant._id, itemColour:variant.colour, itemPrice:variant.price, 
                            itemImg: variant.img,
                            itemAmount: 1,
                        }
                    } />
                    
                </Card>
            </li>
        ))}
            </ul>
        </div>
    )
}

