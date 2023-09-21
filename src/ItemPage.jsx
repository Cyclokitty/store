import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartButton from "./components/CartBtn";
import { blue, orange, purple, green, yellow } from '../src/constants';
import './App.css';

export default function ItemPage() {
    const location = useLocation();
    const { item } = location.state;
    
    //console.log(item);
    const [cardImg, setCardImg] = useState(item.tag.variants[0].img);
    const [cardInfo, setCardInfo] = useState(item.tag.variants[0]);


    function handleBtnClick(item, currentColour) {
        let info = item.tag.variants.filter(thing => {
            if (currentColour === thing.colour) {
                return thing;
            }
        
        })
        
        setCardImg(info[0].img);
        setCardInfo(info[0]);
    }

    const btnColour = (colour) => {
        switch(colour) {
            case 'blue':
                return blue;
            case 'orange':
                return orange;
            case 'purple':
                return purple;
            case 'green':
                return green;
            case 'yellow':
                return yellow;
            default: 
                return 'grey';
        }
    }

    
    return (
        <Container style={{padding: '25px'}} fluid >
            <p>HOME{location.pathname.toUpperCase()}</p>
            <Card 
                style={{width: '65%', height: '20rem', padding: '10px', marginLeft: 'auto', marginRight: 'auto'}}
            >
                <Card.Title>{item.tag.name}</Card.Title>
                <Card.Text>{item.tag.description}</Card.Text>
                <Row>
                    <Col>
                        <Card.Img src={cardImg} style={{width: '50%'}} />
                    </Col>
                    <Col>
                        <Row>
                            { item.tag.variants.map((variant, id) => (
                                <Button 
                                    key={id} 
                                    onClick={() => handleBtnClick(item, variant.colour)} 
                                    style={{backgroundColor: btnColour(variant.colour), color: 'black', width: '20%', margin: '3px'}}                                     
                                >
                                        {variant.colour}
                                </Button>
                            )) }
                        </Row>
                        <Row>
                            <Card.Text>${cardInfo.price.toFixed(2)}</Card.Text>
                        </Row>
                        <Row>
                        <CartButton 
                            coloursList={['#ff00ff']} 
                            btnText='Add to Cart' 
                            item={
                                {
                                    itemName:item.tag.name, itemId:cardInfo._id, itemColour:cardInfo.colour, itemPrice:cardInfo.price, 
                                    itemImg: cardInfo.img,
                                    itemAmount: 1,
                                }
                            }
                             />
                        </Row>                     
                    </Col>                    
                </Row>                   
            </Card>
        </Container>
    )
}

