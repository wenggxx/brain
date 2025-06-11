import React, { useState, useEffect } from 'react';
export default function About() {
  const [message, setMessage] = useState('');

      useEffect(() => {
        fetch('/api/hello')
          .then(response => response.json())
          .then(data => setMessage(data));
      }, []);

      return (
        <div>
          <h1>{message.map(message => <div>{message.title}</div>)}</h1>
        </div>
      );
}