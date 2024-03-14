import React from 'react';
import VideoCover from 'react-video-cover';

const VideoBackground = () => {
  const videoOptions = {
    src: '/bgvideo.mp4',
    autoPlay: true,
    muted: true,
    loop: true,
    objectFit: 'cover',
  };

  return <VideoCover {...videoOptions} onError={(e) => console.error('Video Error:', e)} />;
};

export default VideoBackground;


