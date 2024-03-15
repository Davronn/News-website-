import React, { useEffect, useState } from "react";
import "../scss/home.scss";

function Home() {
  const [post, setpost] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:3000/posts");
        const data = await res.json();
        setpost(data);
      } catch (error) {
        console.log(error.massege);
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div className="home_page container">
        <h1>Our Latest Posts</h1>
        <div className="cards">
          <div className="card">
            {post.length > 0 && (post.map((post) => (
              <li>{post.title}</li>,
              <div>{post.url}</div>
            )))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
