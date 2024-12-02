import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
//import axios from 'axios';
import apiClient from '../axiosConfig';

const VideoPage = () => {
  const { weekNumber } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiClient.get(`/video/${weekNumber}/`)
      .then((response) => {
        const videoData = response.data;
        // Преобразуем относительный путь в полный
        //const fullVideoUrl = `${process.env.REACT_APP_API_BASE_URL || "http://localhost:8000"}${videoData.video_url}`;
        //const fullVideoUrl = `http://127.0.0.1${videoData.video_url}`;
        //setVideo({ ...videoData, video_url: fullVideoUrl });
        setVideo(videoData);
      })
      .catch((err) => {
        if (err.response && err.response.status === 403) {
          navigate(`/not-available?date=${err.response.data.message}`);
        } else {
          setError("Ошибка загрузки видео.");
        }
      });
  }, [weekNumber, navigate]);

  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <a href="/" className="logo">
        <img src="/deco_logo.png" alt="Company Logo" />
      </a>
      <div className="content">
        {video ? (
          <>
            <h2 className="video-title">{video.title}</h2>
            <video controls src={video.video_url} />
          </>
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
    </div>
  );
};

export default VideoPage;