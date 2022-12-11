import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import { fetchAllPosts } from '../api/apiHelper';

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      const fetchInitialData = async () => {
          setPosts(await fetchAllPosts());
      };
      fetchInitialData();
  }, []);
  return (
    <Posts posts={posts} />
  );
};

export default Home;