import './GoToMainPage.css'
import React, {useEffect, useRef, useState} from "react";
import VideoPlayerSingle from "../VideoPlayer/VideoPlayerSingle";


const pagesData = [
    {
        Header: "",
        title1: "",
        title2: "",
        title3: "",
        title4: "",
        title5_head: "",
        title5: "",
        title6: "",
        title7: "",
        title8: "",
        title9: "",
        title10: "",
        title11: "",
        title12: "",
        title13: "",
        title14: "",
        title15: "",
        title16: "",
        title17: "",
        title18: "",
        title19: "",
        title20: "",
        logo: "",   //./logo/logo.jpg
        imagen1: "./images/fondo.jpg",
        imagen2: "",
        space: "",
        insertLine1: "insert",//baja el video
        insertLine2: "insert",//baja el video
        insertLine3: "",
        insertLine4: "",
        insertLine5: "insert",//baja el video
        insertLine6: "insert",//baja el video
        videos: "",
    },
    {
        Header: "",
        title1: "",
        title2: "",
        title3: "",
        title4: "",
        title5_head: "",
        title5: "",
        title6: "",
        title7: "",
        title8: "",
        title9: "",
        title10: "",
        title11: "",
        title12: "",
        title13: "",
        title14: "",
        title15: "",
        title16: "",
        title17: "",
        title18: "",
        title19: "",
        title20: "",
        logo: "",
        imagen1: "",
        imagen2: "",
        space: "",
        insertLine1: "insert",//encima del video
        insertLine2: "",//este
        insertLine3: "",
        insertLine4: "",
        insertLine5: "",//este
        insertLine6: "",//este
        videos: "./videos/video.mp4",
    },
    {
        Header: "AGENCIA BOOKING DE ARTISTAS ",
        title1: "",
        title2: "",
        title3: "",
        title4: "",
        title5_head: "CASTALE",
        title5: "es una agencia de booking\n de artistas y organización de",
        title6: "eventos, música para bodas fiestas temáticas, conciertos y festivales.",
        title7: "Esta  empresa  representa la profesionalidad y la pasión. Llevando la",
        title8: "música por todo el mundo en géneros como la salsa, reggetón, bachata,",
        title9: "urbano, flamenco, latin jazz, música Española, entre otros.",
        title10: "",
        title11: "",
        title12: "",
        title13: "",
        title14: "",
        title15: "",
        title16: "",
        title17: "",
        title18: "",
        title19: "",
        title20: "",
        logo: "",
        imagen1: "",
        imagen2: "./ArtistsImages/Artist3.jpg",
        space: "i",
        insertLine1: "",//este
        insertLine2: "",//este
        insertLine3: "",
        insertLine4: "",
        insertLine5: "insert",//este
        insertLine6: "insert",//este
        videos: null,
    },
    {
        Header: "",
        title1: "SI ESTÁS BUSCANDO A LOS MEJORES ARTISTAS,",
        title2: "ESTA ES TU AGENCIA.",
        title3: "",
        title4: "MÚSICA PARA BODAS ",
        title5_head: "",
        title5: "Música para bodas, música para cóctel, grupos de música ",
        title6: "para bodas de todos los estilos musicales.",
        title7: "Estilos musicales, Jazz, Flamenco, Pop, ",
        title8: "Cubano, Latino,Dance, Española, Indie.",
        title9: "",
        title10: "",
        title11: "",
        title12: "",
        title13: "",
        title14: "",
        title15: "",
        title16: "",
        title17: "",
        title18: "",
        title19: "",
        title20: "",
        logo: "",
        imagen1: "",
        imagen2: "./ArtistsImages/Artist10.jpg",
        space: "",
        insertLine1: "",//este
        insertLine2: "",//este
        insertLine3: "",
        insertLine4: "",
        insertLine5: "",//este
        insertLine6: "insert",//este
        videos: "/videos/video.mp4",
    },
    {
        Header: "",
        title1: "",
        title2: "",
        title3: "",
        title4: "",
        title5_head: "",
        title5: "",
        title6: "",
        title7: "",
        title8: "",
        title9: "",
        title10: "",
        title11: "",
        title12: "",
        title13: "",
        title14: "",
        title15: "",
        title16: "",
        title17: "",
        title18: "",
        title19: "",
        title20: "",
        logo: "",
        imagen1: "",
        imagen2: "./ArtistsImages/Artist6.jpg",
        space: "",
        insertLine1: "",//este
        insertLine2: "",//este
        insertLine3: "",
        insertLine4: "",
        insertLine5: "",//este
        insertLine6: "",//este
        videos: null,
    },
    {
        Header: "",
        title1: "",
        title2: "",
        title3: "",
        title4: "",
        title5_head: "",
        title5: "",
        title6: "",
        title7: "",
        title8: "",
        title9: "",
        title10: "",
        title11: "",
        title12: "",
        title13: "",
        title14: "",
        title15: "",
        title16: "",
        title17: "",
        title18: "",
        title19: "",
        title20: "",
        logo: "",
        imagen1: "",
        imagen2: "./ArtistsImages/Artist12.jpg",
        space: "",
        insertLine1: "",//este
        insertLine2: "",//este
        insertLine3: "",
        insertLine4: "",
        insertLine5: "",//este
        insertLine6: "",//este
        videos: null,
    },
];

const GoToMainPage = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        const handleEnded = () => {
            // Reiniciar el video desde el principio cuando termine
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            }
        };

        // Agregar el evento 'ended' al elemento de video
        if (videoRef.current) {
            videoRef.current.addEventListener("ended", handleEnded);
        }

        // Retirar el evento cuando el componente se desmonte
        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener("ended", handleEnded);
            }
        };
    }, []);

    // <source className="video" src={page.videos[currentVideoIndex]} type="video/mp4"/>
    return (
        <div className="gotomainpage_container">
            <div className="gotomainpage">
                {pagesData.map((page, index) => (
                    <div>
                        {page.imagen1 && (
                            <div className="imagen1_container">
                                <img className='imagen1' src={page.imagen1} alt=""/>
                            </div>
                        )}

                        {page.insertLine1 && (
                            <div className="insertLine1_container">
                                <p className='insertLine1'>{page.insertLine1}</p>
                            </div>
                        )}

                        {page.insertLine2 && (
                            <div className="insertLine2_container">
                                <p className='insertLine2'>{page.insertLine2}</p>
                            </div>
                        )}

                        {page.Header && (
                            <div className="Header_container">
                                <p className='Header'>{page.Header}</p>
                            </div>
                        )}

                        {page.title1 && (
                            <div className="title1_container">
                                <p className='title1'>{page.title1}</p>
                            </div>
                        )}

                        {page.title2 && (
                            <div className="title2_container">
                                <p className='title2'>{page.title2}</p>
                            </div>
                        )}

                        {page.title3 && (
                            <div className="title3_container">
                                <p className='title3'>{page.title3}</p>
                            </div>
                        )}

                        {page.title4 && (
                            <div className="title4_container">
                                <p className='title4'>{page.title4}</p>
                            </div>
                        )}

                        {page.title5 && (
                            <div className="title5_container">
                                <p className='title5_head'>{page.title5_head}</p>
                                {page.space && (
                                    <p className='space'>{page.space}</p>
                                )}
                                <p className='title5 '>{page.title5}</p>
                            </div>
                        )}

                        {page.title6 && (
                            <div className="title6_container">
                                <p className='title6'>{page.title6}</p>
                            </div>
                        )}

                        {page.title7 && (
                            <div className="title7_container">
                                <p className='title7'>{page.title7}</p>
                            </div>
                        )}

                        {page.title8 && (
                            <div className="title8_container">
                                <p className='title8'>{page.title8}</p>
                            </div>
                        )}

                        {page.title9 && (
                            <div className="title9_container">
                                <p className='title9'>{page.title9}</p>
                            </div>
                        )}

                        {page.insertLine5 && (
                            <div className="insertLine6_container">
                                <p className='insertLine5'>{page.insertLine5}</p>
                            </div>
                        )}

                        {page.imagen2 && (
                            <div className="imagen2_container">
                                <img className='imagen2' src={page.imagen2} alt=""/>
                            </div>
                        )}

                        {page.insertLine6 && (
                            <div className="insertLine6_container">
                                <p className='insertLine6'>{page.insertLine6}</p>
                            </div>
                        )}

                        {page.videos && (

                            <VideoPlayerSingle videos={page.videos}/>

                        )}

                    </div>
                ))}
            </div>

        </div>
    );
};
// <div className="BackToTop"><BackToTop/></div>
export default GoToMainPage;

/*
<div className="video_container">
                            </div>
<div className="video_container">
                                <video
                                    ref={videoRef}
                                    controls
                                    autoPlay
                                    className="video"
                                    >
                                    <source className="video" src="./videos/video.mp4" type="video/mp4"/>
                                </video>
                            </div>
 */
//<div style={{display: 'flex', justifyContent: 'center'}}>
//                             <div className="video_container" style={{width: '50%'}}>
//                                 {page.videos ? ( // Verifica si videos no está vacío
//                                     <video className="video" src={page.videos} controls style={{width: '100%'}}></video>
//                                 ) : (
//                                     <p></p>
//                                 )}
//                             </div>
//                         </div>


