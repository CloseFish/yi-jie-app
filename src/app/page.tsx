"use client";
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';

const Page = () => {
  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      const root = ReactDOM.createRoot(rootElement);
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    }
  }, []);

  return <div id="root"></div>;
};

export default Page;
