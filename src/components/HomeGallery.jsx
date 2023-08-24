// this will hold all of the Home.jsx cards
// they will display the categories/tags from the mongodb db
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import Card from "./Card";
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
        <ul className="gallery">
        {tags.map((tag, id) => (
            <li key={id}>
                <Card
                    avatar={<img alt={tag} src={getCardImage({tag})} style={{width: '100%', paddingTop: '20px'}}/>}
                    title={tag.toUpperCase()}                   
                >
                    <p>A really cool, {tag.toLowerCase()} thing to buy.</p>
                    <Link
                        to={`/${tag}`}
                        state={{ tag: `${tag}`}}
                    ><h5 style={{color: 'purple', textAlign: 'center'}}>Click here to see {tag} products!</h5></Link>
                </Card>
            </li>
        ))}
      </ul>
    )
}

export default HomeGallery;