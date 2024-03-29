// this will hold all of the Home.jsx cards
// they will display the categories/tags from the mongodb db
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { Card, CardGroup, Col, Container, Row} from 'react-bootstrap';
import { 
    build,
    friends,
    gifts,
    shapes,
    shiny,
    soft,
    thingy,                           
    threeD,
    tough, } from '../images/imgs';
import '../App.css';

const HomeGallery = () => {
    const { tags } = useSelector((state) => state.tags);

    const getCardImage = (tag) => {
        switch(tag.tag) {
            case '3D': 
                return threeD;
            case 'Build':
                return build;
            case 'Friends':
                return friends;
            case 'Gifts':
                return gifts;
            case 'Shapes':
                return shapes;
            case 'Shiny':
                return shiny;
            case 'Soft':
                return soft;
            case 'Tough':
                return tough;
            default:
                return thingy;
        }
    }
    
    return (
        <Container fluid='sm'>
            <Row>
                {tags.map((tag, id) => (                   
                    <Card key={id} style={{width: '30rem', height: 'auto', padding: '10px', margin: '15px'}}>
                        <Row>
                            <Card.Title>{tag.toUpperCase()}</Card.Title>
                        </Row>
                        <Row>
                            <Card.Img src={getCardImage({tag})} style={styles.cardImage} />
                        </Row>
                        <Row>
                            <Card.Text style={styles.cardText} >A really cool, {tag.toLowerCase()} thing to buy.</Card.Text>
                        </Row>
                        <Row>
                            <Link
                                to={`/${tag}`}
                                state={{ tag: `${tag}`}}
                            ><Card.Text style={{color: 'purple', textAlign: 'center'}}>Click here to see {tag} products!</Card.Text></Link>
                        </Row>
                        
                    </Card>                    
                ))}
                </Row>
            
      </Container>
    )
}

const styles = {
    cardImage: {
        objectFit: 'center',
        padding: '2rem',
    },
    cardText: {
        textAlign: 'justify'
    }
}

export default HomeGallery;