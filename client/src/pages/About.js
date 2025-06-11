import React, { useState, useEffect } from 'react';

export default function About() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch('/api/home')
      .then(response => response.json())
      .then(data => setMessage(data));
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {message.map((row, index) => (
          <li key={index}>
            {Object.entries(row).map(([key, value]) => (
              <div key={key}>
                <strong>{key}:</strong> {value.toString()}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}