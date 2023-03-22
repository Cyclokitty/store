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
    
    const fetchData = async() => {
        try {
            const res = await axios(`https://madexcitingopentracker.cyclokitty.repl.co/api/${tag}`);
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
            <h1>{tag} Products</h1>
            
          { !loading ? <Loader/> :  <TagGallery tags={tags}/> } 
        </div>
    )
}

