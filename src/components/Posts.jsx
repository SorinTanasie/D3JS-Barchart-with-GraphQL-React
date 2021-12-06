import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";

const Posts = ({ posts }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const temp = [
      { month: "January", totalPosts: 0 },
      { month: "February", totalPosts: 0 },
      { month: "March", totalPosts: 0 },
      { month: "April", totalPosts: 0 },
      { month: "May", totalPosts: 0 },
      { month: "June", totalPosts: 0 },
      { month: "July", totalPosts: 0 },
      { month: "August", totalPosts: 0 },
      { month: "September", totalPosts: 0 },
      { month: "October", totalPosts: 0 },
      { month: "November", totalPosts: 0 },
      { month: "December", totalPosts: 0 },
    ];

    posts.map((post) => {
      const toDate = new Date(parseInt(post.createdAt));

      const createdYear = toDate.getFullYear();
      const createdMonth = toDate.getMonth();

      if (createdYear === 2019) {
        temp[createdMonth].totalPosts += 1;
      }
    });
    setData(temp);
  }, []);

  return <div>{data? <BarChart posts={data}/>: ''}</div>;
};

export default Posts;
