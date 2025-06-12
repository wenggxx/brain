import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div style={{ maxWidth: 800, margin: '2rem auto', fontFamily: 'Georgia, serif' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.2rem', lineHeight: 1.1 }}>{news.title}</h1>
      <img
        src={news.image_url}
        alt={news.title}
        style={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'contain',
          borderRadius: 8,
          background: '#f5f5f5',
          marginBottom: '1.2rem'
        }}
      />
      <div
        style={{
          fontSize: '0.95rem',
          color: '#111',
          marginBottom: '2.2rem',
          fontFamily: 'Georgia, serif',
          borderTop: '1px solid #e2e2e2',
          borderBottom: '1px solid #e2e2e2',
          padding: '0.7rem 0',
          marginTop: '1.2rem'
        }}
      >
        <span>
          {news.create_dts && (
            <span>
              <span style={{ color: '#888' }}>Published</span> {new Date(news.create_dts).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              {news.author || news.source ? ' | ' : ''}
            </span>
          )}
          {news.author && (
            <span>
              <span style={{ color: '#888' }}>Author</span> {news.author}
              {news.source ? ' | ' : ''}
            </span>
          )}
          {news.source && (
            <span>
              <span style={{ color: '#888' }}>Source</span> {news.source}
            </span>
          )}
        </span>
      </div>
      <div
        style={{ fontSize: '1.2rem', color: '#444', marginBottom: '2rem', lineHeight: 1.7 }}
        dangerouslySetInnerHTML={{ __html: news.body }}
      />
      <div>{news.content}</div>
    </div>
  );
}