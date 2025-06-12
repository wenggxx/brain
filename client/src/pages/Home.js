import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Add this line

  // Handler for clicking the main article title
  const handleTitleClick = async (id) => {
    await fetch(`/api/news?id=${encodeURIComponent(id)}`);
    navigate(`/news/${id}`); // Navigate to ShowNews with the id
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
      <style>
        {`
          .home-root {
            font-family: Georgia, Times, "Times New Roman", serif;
            background: #fff;
            color: #222;
            min-height: 100vh;
          }
          .home-header {
            border-bottom: 1px solid #e2e2e2;
            padding: 2rem 0;
            text-align: center;
          }
          .home-title {
            font-size: 3rem;
            letter-spacing: 2px;
            font-weight: bold;
            margin: 0;
          }
          .home-date {
            font-size: 1.1rem;
            color: #888;
            margin-top: 0.5rem;
          }
          .home-main {
            display: flex;
            max-width: 1200px;
            margin: 2rem auto;
            gap: 2rem;
          }
          .home-section {
            flex: 3;
          }
          .home-article-img-main {
            width: 100%;
            height: 350px;
            max-height: 350px;
            object-fit: contain;
            background: #f5f5f5;
            border-radius: 8px;
            display: block;
          }
          .home-article-img {
            width: 100%;
            height: 150px;
            max-height: 150px;
            object-fit: contain;
            background: #f5f5f5;
            border-radius: 8px;
            display: block;
          }
          .home-articles-row {
            display: flex;
            gap: 2rem;
          }
          .home-article {
            flex: 1;
          }
          .home-sidebar {
            flex: 1;
            border-left: 1px solid #e2e2e2;
            padding-left: 2rem;
          }
          .home-footer {
            border-top: 1px solid #e2e2e2;
            text-align: center;
            padding: 1rem 0;
            color: #888;
            font-size: 0.9rem;
          }
          @media (max-width: 900px) {
            .home-main {
              flex-direction: column;
              gap: 1.5rem;
              padding: 0 1rem;
            }
            .home-sidebar {
              border-left: none;
              padding-left: 0;
              border-top: 1px solid #e2e2e2;
              padding-top: 1.5rem;
            }
            .home-section {
              flex: unset;
            }
            .home-articles-row {
              flex-direction: column;
              gap: 1rem;
            }
            .home-article {
              flex: unset;
            }
          }
          @media (max-width: 600px) {
            .home-title {
              font-size: 2rem;
            }
            .home-header {
              padding: 1rem 0;
            }
            .home-main {
              margin: 1rem 0;
            }
            .home-article-img-main {
              height: 200px;
              max-height: 200px;
            }
          }
        `}
      </style>
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
                <h2 style={{ fontSize: '2rem', margin: '1rem 0 0.5rem' }}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleTitleClick(articles[0].id);
                    }}
                    style={{ color: '#222', textDecoration: 'none', cursor: 'pointer' }}
                  >
                    {articles[0].title}
                  </a>
                </h2>
                <p style={{ fontSize: '1.2rem', color: '#444' }}>{articles[0].summary}</p>
              </div>
              <hr style={{ margin: '2rem 0' }} />
              <div className="home-articles-row">
                {articles.slice(1).map((article, idx) => (
                  <div key={idx} className="home-article">
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="home-article-img"
                    />
                    <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTitleClick(article.id);
                        }}
                        style={{ color: '#222', textDecoration: 'none' }}
                      >
                        {article.title}
                      </a>
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#555' }}>{article.summary}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>

        {/* Sidebar */}
        <aside className="home-sidebar">
          <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Trending</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem', color: '#444' }}>
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