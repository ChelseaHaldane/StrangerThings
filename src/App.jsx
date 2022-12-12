// All imported libraries needed for this component to run
import './index.css';
import ReactDOM from 'react-dom/client'
import AllRoutes from "./components/Routes";
import { fetchAllPosts } from './api/apiHelper';
import React, { useEffect, useState } from 'react';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return;
}

export default App

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
);