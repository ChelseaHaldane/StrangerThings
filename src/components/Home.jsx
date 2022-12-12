import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import { createMessage, createPost, deletePost, fetchAllPosts, fetchAllPostsWithAuth } from '../api/apiHelper';
import CreatePost from './CreatePost';

const Home = () => {
  const token = window.localStorage.getItem("strange-token");
  const [posts, setPosts] = useState([]);
  const postSubmitted = (post) => {
    createPost(post);
    setPosts([{ ...post, _id: posts.length }, ...posts]);
  }
  const handleDelete = (id) => {
    deletePost(id, token)
    setPosts(posts.filter((post) => post._id !== id))
  }
  const handlePostMessage = (postId, message) => {
    const newMessage = createMessage(postId, token, { message: { content: message } });
    const post = posts.filter(post => post._id === postId)[0];
    const messages = posts.message ?? [];
    const newPost = { ...post, message: [newMessage, ...messages] };
    setPosts(posts.map((post) => post._id === postId ? newPost : post));
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('strange-token'))
      setIsLoggedIn(true)
  }, []);
  useEffect(() => {
    const fetchInitialData = async () => {
      if (token) {
        setPosts(await fetchAllPostsWithAuth(token));
      }
      else {
        setPosts(await fetchAllPosts());
      }
    };
    fetchInitialData();
  }, []);
  return (
    <>
      {token ? (
        <CreatePost postSubmitted={postSubmitted} />
      ) : (
        ''
      )}
      <Posts posts={posts} handleDelete={handleDelete} handlePostMessage={handlePostMessage} isLoggedIn={isLoggedIn} />
    </>
  );
};

export default Home;