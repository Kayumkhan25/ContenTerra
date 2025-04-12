import React from 'react';

const RedditCard = ({ title, selfTextHtml, url, score }) => {
  return (
    <div className="bg-gray-100 w-96 h-96 overflow-auto rounded-lg shadow-md mx-auto p-5 m-5 hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 m-2" dangerouslySetInnerHTML={{ __html: selfTextHtml }}></p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-blue-500 mt-3 underline"
      >
        Read more
      </a>
      <p className="text-gray-500 font-semibold mt-2">Score: {score}</p>
    </div>
  );
};

export default RedditCard;
