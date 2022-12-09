// All imported libraries needed for this component to run
import './index.css';
import AllRoutes from "./components/Routes";
import { fetchAllPosts } from './api/apiHelper';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchInitialData = async () => {
      setPosts(await fetchAllPosts());
    };
    fetchInitialData();
  }, []);
  console.log(posts)

  return (
    <div className="container">

    </div>

  );
}

export default App

