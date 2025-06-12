import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/app.css'; // Import the shared CSS file

export default function ShowNews() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/news/${encodeURIComponent(id)}`)
      .then(res => res.json())
      .then(data => {
        setArticle(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!article || !Array.isArray(article) || article.length === 0) return <div>Article not found.</div>;

  const news = article[0];

  return (
    <div className="shownews-root">
      <h1 className="shownews-title">{news.title}</h1>
      <img
        src={news.image_url}
        alt={news.title}
        className="shownews-image"
      />
      <div className="shownews-meta">
        <span>
          {news.create_dts && (
            <span>
              <span className="published">Published</span> {new Date(news.create_dts).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              {news.author || news.source ? ' | ' : ''}
            </span>
          )}
          {news.author && (
            <span>
              <span>Author</span> {news.author}
              {news.source ? ' | ' : ''}
            </span>
          )}
          {news.source && (
            <span>
              <span>Source</span> {news.source}
            </span>
          )}
        </span>
      </div>
      <div
        className="shownews-body"
        dangerouslySetInnerHTML={{ __html: news.body }}
      />
      <div>{news.content}</div>
    </div>
  );
}