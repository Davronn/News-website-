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
      <div className="container">
        <div className="home_page">
          <h1>Our Latest Posts</h1>
          <div className="cards">
            {post.length > 0 &&
              post.map((post) => (
                <div key={post.id}>
                  <div className="card">
                    <img src={post.url} alt={post.title} />
                    <div className="card_text">
                      <h2>{post.title}</h2>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
