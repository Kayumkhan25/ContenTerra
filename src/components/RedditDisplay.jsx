import React, { useEffect, useState } from 'react';
import RedditCard from './RedditCard';

const RedditDisplay = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then((response) => response.json())
      .then((data) => {
        const postData = data.data.children.map((post) => ({
          title: post.data.title,
          selfTextHtml: post.data.selftext_html || '',  // Handle posts with no selftext
          url: post.data.url,
          score: post.data.score,
        }));
        setPosts(postData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mx-auto p-6">
      {posts.map((post, index) => (
        <RedditCard 
        
          key={index}
          title={post.title}
          selfTextHtml={post.selfTextHtml}
          url={post.url}
          score={post.score}
        />
      ))}
    </div>
  );
};

export default RedditDisplay;
