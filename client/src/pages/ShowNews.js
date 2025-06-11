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
      <img src={news.image} alt={news.title} style={{ width: '100%', maxHeight: 400, objectFit: 'contain' }} />
      <h1>{news.title}</h1>
      <p style={{ fontSize: '1.2rem', color: '#444' }}>{news.body}</p>
      <div>{news.content}</div>
    </div>
  );
}