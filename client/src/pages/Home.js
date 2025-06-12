import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/app.css'; // Import the shared CSS file

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleTitleClick = async (id) => {
    await fetch(`/api/news?id=${encodeURIComponent(id)}`);
    navigate(`/news/${id}`);
  };

  useEffect(() => {
    fetch('/api/home')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="home-root">
      {/* Header */}
      <header className="home-header">
        <h1 className="home-title">The Brainz Up</h1>
        <div className="home-date">{new Date().toLocaleDateString()}</div>
      </header>

      {/* Main Content */}
      <main className="home-main">
        {/* Main Articles */}
        <section className="home-section">
          {loading ? (
            <div>Loading...</div>
          ) : articles.length === 0 ? (
            <div>No news available.</div>
          ) : (
            <>
              <div>
                <img
                  src={articles[0].image_url}
                  alt={articles[0].title}
                  className="home-article-img-main"
                />
                <h2 className="home-main-title">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleTitleClick(articles[0].id);
                    }}
                    className="home-main-link"
                  >
                    {articles[0].title}
                  </a>
                </h2>
                <p className="home-main-summary">{articles[0].summary}</p>
              </div>
              <hr className="home-divider" />
              <div className="home-articles-row">
                {articles.slice(1).map((article, idx) => (
                  <div key={idx} className="home-article">
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="home-article-img"
                    />
                    <h3 className="home-article-title">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTitleClick(article.id);
                        }}
                        className="home-article-link"
                      >
                        {article.title}
                      </a>
                    </h3>
                    <p className="home-article-summary">{article.summary}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>

        {/* Sidebar */}
        <aside className="home-sidebar">
          <h4 className="home-sidebar-title">Trending</h4>
          <ul className="home-sidebar-list">
            <li>• Supreme Court Ruling on Tech</li>
            <li>• Summer Travel Destinations</li>
            <li>• NBA Finals Recap</li>
            <li>• Climate Change Initiatives</li>
            <li>• New York City Dining Guide</li>
          </ul>
        </aside>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        © {new Date().getFullYear()} The Brainz Up.
      </footer>
    </div>
  );
}