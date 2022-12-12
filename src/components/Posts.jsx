import { useState } from "react";
import { deletePost } from "../api/apiHelper";

function Posts({ posts, handleDelete, handlePostMessage, isLoggedIn }) {
    const [message, setMessage] = useState('');
    const handleMessageChange = ev => {
        setMessage(ev.target.value);
    }
    return posts.map((post) => {
        // Replace the dollar sign as it isn't the currency
        // of our people
        let amountOfSchmeckles = post.price.replace('$', '');

        // Ensuring that free returns a numeric amount of schmeckles
        if (amountOfSchmeckles === 'free')
            amountOfSchmeckles = 0

        return (<div key={post._id} className="post">
            <h1><a href="#">{post.title}</a></h1>
            <span><b>Location:</b> {post.location}</span>
            <p>{post.description}</p>
            <span><b>{amountOfSchmeckles} schmeckles</b></span>
            {
                post.isAuthor ?
                    <div><button onClick={() => handleDelete(post._id)}>Delete</button></div> : ''
            }
            {
                isLoggedIn && !post.isAuthor ?
                    <div>
                        <input type="text" onChange={handleMessageChange} />
                        <button onClick={() => handlePostMessage(post._id, message)}>Create Message</button>
                    </div> : ''
            }
            {
                post.isAuthor ?
                    (post.message ?? []).map(msg => {
                        return (
                            <div key={msg._id}>
                                <p>{msg.content}</p>
                            </div>
                        )
                    }) : ''
            }
        </div>)
    });

}

export default Posts;







