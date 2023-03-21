import {  useState } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import HomeGallery from './components/HomeGallery';

export default function Home() {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async() => {
        try {
            const res = await axios('https://madexcitingopentracker.cyclokitty.repl.co/api/tags');
            setTags(res.data);
            setLoading(true);
        } catch(err) {
            console.log(err);
        }
    }

    useState(() => {
        fetchData()
    },[])


  return (
    <div>
      {/* { !loading ? <Loader/> : <ul className="gallery">
        {tags.map((tag, id) => (
            <li key={id}>
                <Card
                    avatar={<img alt='store mascot' src={thingy} style={{width: '100%', paddingTop: '20px'}}/>}
                    title={tag.toUpperCase()}                   
                >
                    <p>A really cool, {tag.toLowerCase()} thing to buy.</p>
                    <h5 onClick={() => console.log(`You clicked the h5 from item: ${tag}`)} style={{color: 'purple'}}>Click Here and Look in the console</h5>
                </Card>
            </li>
        ))}
      </ul> } */}
      { !loading ? <Loader/> : <HomeGallery tags={tags}/> }
    </div>
  );
}