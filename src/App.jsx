// All imported libraries needed for this component to run
import './index.css';
import ReactDOM from 'react-dom/client'
import AllRoutes from "./components/Routes";
import { fetchAllPosts } from './api/apiHelper';
import React, { useEffect, useState } from 'react';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);

  const handleDelete = async () => {
    console.log('postIdToDelete: ', postIdToDelete);
    const response = await fetch(`https://strangers-things.herokuapp.com/api/${postIdToDelete}`, {
      method: 'DELETE',
    });
    const date = await response.json();
    console.log('data: ', data);
    if (data) {
      const newPosts = posts.filter(post => post.id !== postIdToDelete);
      setPosts(newPosts);
    }
  }

  useEffect(() => {
    const fetchInitialData = async () => {
      setPosts(await fetchAllPosts());
    };
    fetchInitialData();
  }, []);
  console.log(posts)

  return <>
    <h1>
      Posts
    </h1>
    {
      postId
        ? <Update posts={posts} setPosts={setPosts} postId={postId}
          setPostId={setPostId} />
        : <Create posts={posts} setPosts={setPosts} />
    }
    {
      posts.map(post => <div key={post.id}>
        <h3>{post.title}</h3>
        <div>{post.body}</div>
        <button type="button" className="btn btn-outline-primary" onClick={() => setPostId(post.id)}>Edit</button>
        <button type="button" className="btn btn-outlie-danger" onClick={() => setPostId(post.id)}>Delete</button>
      </div>)
    }
  </>
}

export default App

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
);