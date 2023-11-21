import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Post.css'; // Import the CSS file for styling

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from JSONPlaceholder API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="blog-container">
      <h1 className="blog-title">React Blog</h1>
      <div className="posts-list">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
