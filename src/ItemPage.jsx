import { useLocation } from "react-router-dom";
import Card from "../src/components/Card";
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
                    style={{width: '300px', height: '400px'}}
                    avatar={<img alt='store mascot' src={variant.img} style={{width: '100%', paddingTop: '20px'}}/>}
                    title={variant.colour}                   
                >
                    <p>${variant.price.toFixed(2)}</p>
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