import React from 'react';
import Posts from './Posts';

const Home = ({ posts }) => {
  return (
    <Posts posts={posts} />
  );
};

export default Home;