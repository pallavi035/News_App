import React, { useEffect, useState } from 'react';

const Home = () => {
  const [Allnews, setAllnews] = useState([]);

  let getAllNews = async () => {
    try {
      let res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=b8394802aead4656952d2e2009721c14');
      let data = await res.json();
      setAllnews(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <div>
      {Allnews.length > 0 ? (
        Allnews.map((article, index) => (
          <div key={index} className="article">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
};

export default Home;
