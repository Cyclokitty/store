// this will hold all of the TagPage.jsx cards
// they will display the categories/tags from the mongodb db

import { Link } from 'react-router-dom';
import Card from "./Card";
import '../App.css';

export default function TagGallery({ tags, tagRoute }) {

    return (
        <ul className="gallery">
        {tags.map((tag, id) => (
            <li key={id}>
                <Card
                    style={{width: '450px', height: '550px'}}
                    avatar={<img alt='store mascot' src={tag.variants[0].img} style={{width: '100%', paddingTop: '20px'}}/>}
                    title={tag.name}                   
                >
                    <p>{tag.description}</p>
                    <p>Available in {tag.variants.length} colours.</p>
                    <Link
                        to={`/${tagRoute}/${tag.name}`}
                        state={{ item: {tag}}}
                    ><h5 style={{color: '#400040', textAlign: 'center'}}>Click here to see {tag.name} products!</h5></Link>
                </Card>
            </li>
        ))}
      </ul>
    )
}