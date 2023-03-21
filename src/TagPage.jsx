import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import './App.css';

export default function TagPage() {
    const location = useLocation();
    const { tag } = location.state;

    const [tags, setTags] = useState([]);
    
    const fetchData = async() => {
        try {
            const res = await axios(`https://madexcitingopentracker.cyclokitty.repl.co/api/${tag}`);
            setTags(res.data);
        } catch(err) {
            console.log(err);
        }
    }
    
    useState(() => {
        fetchData();
    },[])

    return (
        <div>
            <h1>{tag} Products</h1>
            <ul className="gallery">
        {tags.map((tag, id) => (
            <li key={id}>
                <h6>{tag.name}</h6>
            </li>
        ))}
      </ul>
            
        </div>
    )
}

