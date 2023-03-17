import {  useState } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import Card from './components/Card';
import thingy from './images/thingy_yellow.jpg';
import './App.css';

export default function Home() {
    const [data, setData] = useState([]);
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async() => {
        try {
            const res = await axios('https://madexcitingopentracker.cyclokitty.repl.co/api/info');
            setData(res.data.data);
            setTags(res.data.tags);
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
      { !loading ? <Loader/> : <ul className="gallery">
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
      </ul> }
    </div>
  );
}