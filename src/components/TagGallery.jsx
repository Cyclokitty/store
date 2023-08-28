import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'

export default function TagGallery2({ tags, tagRoute }) {
    return (
        <ul className='gallery'>
            {tags.map((tag, id) => (
                <li key={id}>
                <Card  style={{width: '18rem', height: '30rem', padding: '10px'}}>
                    <Card.Title>{tag.name}</Card.Title>
                    <Card.Img src={tag.variants[0].img} />
                    <Card.Text>{tag.description}</Card.Text>
                    <Card.Text>Available in {tag.variants.length} colours.</Card.Text>
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