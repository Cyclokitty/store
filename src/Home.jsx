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
      { !loading ? <Loader/> : <HomeGallery tags={tags}/> }
    </div>
  );
}