import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { fetchAllPosts } from "../api/apiHelper";





function Posts({ posts }) {
 
    return posts.map((post) => {
        // Replace the dollar sign as it isn't the currency
        // of our people
        let amountOfSchmeckles = post.price.replace('$', '');

        // Ensuring that free returns a numeric amount of schmeckles
        if (amountOfSchmeckles === 'free')
            amountOfSchmeckles = 0

        return <div key={post._id} className="post">
            <h1><a href="#">{post.title}</a></h1>
            <span><b>Location:</b> {post.location}</span>
            <p>{post.description}</p>
            <span><b>{amountOfSchmeckles} schmeckles</b></span>
        </div>
    });

}

export default Posts;







