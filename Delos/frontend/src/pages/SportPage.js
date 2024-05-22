import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SportPage = () => {
  const { sport } = useParams();
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchResponse = async () => {
      const res = await axios.get(`http://localhost:8000/chat/${sport}`);
      setResponse('');
      const reader = res.data.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        setResponse((prev) => prev + decoder.decode(value));
      }
    };

    fetchResponse();
  }, [sport]);

  return (
    <div>
      <h1>{sport.charAt(0).toUpperCase() + sport.slice(1)}</h1>
      <p>{response}</p>
    </div>
  );
};

export default SportPage;
