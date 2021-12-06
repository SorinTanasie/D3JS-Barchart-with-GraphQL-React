import "./App.css";
import React, { useState, useEffect } from "react";
import { query } from "./queries/queryPosts";
import { request } from 'graphql-request';

const App = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    request("https://fakerql.goosfraba.ro/graphql", query).then((data) =>
      setPosts(data.allPosts)
    );
  }, []);

  return <div className="App"></div>;
};

export default App;
