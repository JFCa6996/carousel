
//    VideoPlayer.js:
import React from 'react';
import './VideoPlayerSingle.css'; // Archivo de estilos CSS para el reproductor de video

const  VideoPlayerSingle = (props) => {
    return (
        <div className="video-player-container">
            <video controls className="video-player">
                <source src="http://localhost:3000/videos/video.mp4" type="video/mp4"  alt="video"   />
            </video>
        </div>
    );
};

export default  VideoPlayerSingle;
