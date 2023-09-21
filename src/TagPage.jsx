import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import TagGallery from "./components/TagGallery";
import Loader from "./components/Loader";
import './App.css';

export default function TagPage() {
    const location = useLocation();
    const { tag } = location.state;
    const [loading, setLoading] = useState(false);

    const [tags, setTags] = useState([]);

    const tagsUrl1 = 'https://madexcitingopentracker.cyclokitty.repl.co/api/';

    const tagsUrl2 = 'https://welltodoniftyautomaticparallelization.cyclokitty.repl.co/api/';

    const tagsUrl3 = 'https://bristle-sage-cartoon.glitch.me/api/';

    const tagsUrl4 = 'http://localhost:5000/api/';

    
    const fetchData = async() => {
        try {
            const res = await axios(`${tagsUrl2}${tag}`);
            setTags(res.data);
            setLoading(true);
        } catch(err) {
            console.log(err);
        }
    }
    
    useState(() => {
        fetchData();
    },[])

    return (
        <div style={{padding: '10px'}}>
            <p>HOME{location.pathname.toUpperCase()}</p>
            <h1>{tag} Products</h1>
            
          { !loading ? <Loader/> :  <TagGallery tags={tags} tagRoute={tag}/> } 
        </div>
    )
}

