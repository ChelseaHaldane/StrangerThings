import React, { useState } from "react";
import { me } from "../api/auth";

const Create = ({ posts, setPosts }) => {
    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        console.log('title, body; ', title, body);
        const token = window.localStorage.getItem("strange-token");
        const response = await fetch('https://strangers-things.herokuapp.com/api/', {  
        method: 'POST',
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                title,
                body,
                price,
                willDeliver
            }})
        });
        const data = await response.json();
        console.log('data: ', data);
        setPosts([data, ...posts]);
        setTitle('');
        setBody('');
    }
    return (<>
    <h3>
        Create a Post
    </h3>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" value={title} onChange={(ev) => setTitle(ev.target.value)}></input>
        <input type="text" placeholder="body" value={body} onChange={(ev) => setBody(ev.target.value)}></input>
        <button type="submit" className="btn btn-outline-primary">Submit</button>
    </form>
</>)
}

export default Create;