import React from 'react';

const articles = [
  {
    title: "Global Markets Rally as Inflation Cools",
    summary: "Stocks surged worldwide after new data showed inflation slowing in major economies.",
    image: "https://static01.nyt.com/images/2023/06/11/business/11markets/11markets-superJumbo.jpg",
  },
  {
    title: "Breakthrough in Alzheimer’s Research",
    summary: "Scientists announced a promising new treatment that could slow the progression of Alzheimer’s disease.",
    image: "https://static01.nyt.com/images/2023/06/11/science/11alzheimers/11alzheimers-superJumbo.jpg",
  },
  {
    title: "Election 2025: What’s at Stake?",
    summary: "A look at the key issues and candidates shaping the upcoming national election.",
    image: "https://static01.nyt.com/images/2023/06/11/us/11election/11election-superJumbo.jpg",
  },
];

export default function Home() {
  return (
    <div style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif', background: '#fff', color: '#222', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #e2e2e2', padding: '2rem 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', letterSpacing: '2px', fontWeight: 'bold', margin: 0 }}>The Brainz Up</h1>
        <div style={{ fontSize: '1.1rem', color: '#888', marginTop: '0.5rem' }}>{new Date().toLocaleDateString()}</div>
      </header>

      {/* Main Content */}
      <main style={{ display: 'flex', maxWidth: 1200, margin: '2rem auto', gap: '2rem' }}>
        {/* Main Articles */}
        <section style={{ flex: 3 }}>
          <div>
            <img
              src={articles[0].image}
              alt={articles[0].title}
              style={{ width: '100%', maxHeight: 350, objectFit: 'cover', borderRadius: 8 }}
            />
            <h2 style={{ fontSize: '2rem', margin: '1rem 0 0.5rem' }}>{articles[0].title}</h2>
            <p style={{ fontSize: '1.2rem', color: '#444' }}>{articles[0].summary}</p>
          </div>
          <hr style={{ margin: '2rem 0' }} />
          <div style={{ display: 'flex', gap: '2rem' }}>
            {articles.slice(1).map((article, idx) => (
              <div key={idx} style={{ flex: 1 }}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{ width: '100%', maxHeight: 150, objectFit: 'cover', borderRadius: 8 }}
                />
                <h3 style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>{article.title}</h3>
                <p style={{ fontSize: '1rem', color: '#555' }}>{article.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sidebar */}
        <aside style={{ flex: 1, borderLeft: '1px solid #e2e2e2', paddingLeft: '2rem' }}>
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
      <footer style={{ borderTop: '1px solid #e2e2e2', textAlign: 'center', padding: '1rem 0', color: '#888', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} The New York Times Clone. For demonstration purposes only.
      </footer>
    </div>
  );
}