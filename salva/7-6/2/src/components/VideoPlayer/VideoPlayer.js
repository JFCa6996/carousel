import React from 'react';
import ReactPlayer from 'react-player';

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url480p: '/videos/video.mp4',
            url720p: '/videos/video.mp4',
            url1080p: '/videos/video.mp4',
            selectedQuality: 'auto', // 'auto' para permitir que el reproductor seleccione automáticamente la calidad del video
        };
    }

    render() {
        return (
            <div>
                <h2>Reproductor de Video Adaptativo</h2>
                <ReactPlayer
                    //url={this.state.url}
                    url={this.state}
                    playing={true}
                    controls={true}
                    width="100%"
                    height="auto"
                    config={{
                        file: {
                            attributes: {
                                poster: 'https://example.com/video_poster.jpg', // Poster del video
                            },
                            tracks: [], // Puedes agregar pistas de subtítulos si es necesario
                            hlsOptions: { // Opciones de configuración de HLS
                                capLevelToPlayerSize: true, // Ajustar la calidad del video según el tamaño del reproductor
                            },
                        },
                    }}
                    config={{
                        file: {
                            attributes: {
                                poster: 'https://example.com/video_poster.jpg', // Poster del video
                            },
                            tracks: [], // Puedes agregar pistas de subtítulos si es necesario
                            hlsOptions: { // Opciones de configuración de HLS
                                capLevelToPlayerSize: true, // Ajustar la calidad del video según el tamaño del reproductor
                            },
                        },
                    }}
                />
                <div>
                    <button onClick={() => this.setState({selectedQuality: 'auto'})}>Auto</button>
                    <button onClick={() => this.setState({selectedQuality: '480p'})}>480p</button>
                    <button onClick={() => this.setState({selectedQuality: '720p'})}>720p</button>
                    <button onClick={() => this.setState({selectedQuality: '1080p'})}>1080p</button>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;
