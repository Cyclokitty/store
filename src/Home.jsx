import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import Card from './components/Card';
import thingy from './images/thingy_yellow.jpg';
import './App.css';

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async() => {
        try {
            const res = await axios('https://madexcitingopentracker.cyclokitty.repl.co/api/tags');
            setData(res.data);
            setLoading(true)
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();       
        return((prevLoading)  => prevLoading);
    }, [loading])

  return (
    <div className="gallery">
      { !loading ? <Loader/> : <ul>
        {data.map((tag, id) => (
            <li key={id}>
                <Card
                    avatar={<img alt='store mascot' src={thingy} style={{width: '100%'}}/>}
                    title={tag}
                >
                    A really cool {tag} thing to buy.
                </Card>
            </li>
        ))}
      </ul> }
    </div>
  );
}