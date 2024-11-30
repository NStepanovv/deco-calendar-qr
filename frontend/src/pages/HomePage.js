import React from 'react';

const HomePage = () => (
  <div className="container">
    <header className="header">
      <a href="/" className="logo">
        <img src="/deco_logo.png" alt="Company Logo" />
      </a>
    </header>
    <div className="content">
      <h1>Добро пожаловать!</h1>
      <p>Сканируйте QR-коды на календаре, чтобы смотреть видео, доступные каждую неделю.</p>
      <p>Если вы отсканируете QR-код раньше времени, вы увидите дату, с которой видео будет доступно.</p>
    </div>
  </div>
);

export default HomePage;