import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import { createPost, fetchAllPosts } from '../api/apiHelper';
import CreatePost from './CreatePost';

const Home = () => {
  const token = window.localStorage.getItem("strange-token");
  const [posts, setPosts] = useState([]);
  const handleFormSubmit = (event) => {
    const post = {
      title,
      description,
      price,
      willDeliver
    }
    createPost(post);
    setPosts([post, ...posts]);
  }
  useEffect(() => {
    const fetchInitialData = async () => {
      setPosts(await fetchAllPosts());
    };
    fetchInitialData();
  }, []);
  return (
    <>
      {token ? (
        <CreatePost handleFormSubmit={handleFormSubmit} />
      ) : (
        ''
      )}
      <Posts posts={posts} />
    </>
  );
};

export default Home;