// this will hold all of the Home.jsx cards
// they will display the categories/tags from the mongodb db
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from "./Card";
import thingy from '../images/thingy_yellow.jpg';
import '../App.css';

const HomeGallery = () => {
    const dispatch = useDispatch();
    const { tags } = useSelector((state) => state.tags);
    
    return (
        <ul className="gallery">
        {tags.map((tag, id) => (
            <li key={id}>
                <Card
                    avatar={<img alt='store mascot' src={thingy} style={{width: '100%', paddingTop: '20px'}}/>}
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