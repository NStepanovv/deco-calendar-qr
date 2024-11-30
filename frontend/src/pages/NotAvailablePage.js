import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NotAvailablePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get('date');

  return (
    <div className="container">
      <a href="/" className="logo">
        <img src="/deco_logo.png" alt="Company Logo" />
      </a>
      <div className="content">
        <h1>Видео недоступно</h1>
        <p>{date}</p>
      </div>
      <div className="not-available-buttons">
        <button onClick={() => navigate('/')}>На главную</button>
        <button onClick={() => navigate('/video/last')}>Последнее доступное видео</button>
      </div>
    </div>
  );
};

export default NotAvailablePage;