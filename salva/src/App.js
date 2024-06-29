import React from 'react';
import './App.css'; // Archivo CSS para estilos

const App = () => {
    // Arreglo de artistas con datos de imagen y texto
    const artistas = [
        {
            // Sección para el artista
            artist_header: "Artista 1", // Encabezado del artista
            datos: [
                {
                    foto1: "./ArtistsImages/Artist11.jpg", // Ruta de la primera imagen del artista
                    foto2: "./ArtistsImages/Artist11.jpg", // Ruta de la segunda imagen del artista
                    foto3: "./ArtistsImages/Artist11.jpg", // Ruta de la tercera imagen del artista
                    foto4: "./ArtistsImages/Artist11.jpg", // Ruta de la tercera imagen del artista
                    foto5: "./ArtistsImages/Artist11.jpg", // Ruta de la tercera imagen del artista
                    foto6: "./ArtistsImages/Artist11.jpg", // Ruta de la tercera imagen del artista
                    text1: "Artista fulano", // Texto asociado a la primera imagen
                    text2: "Violinista", // Texto asociado a la segunda imagen
                    text3: "Es cubano",  // Texto asociado a la tercera imagen
                    text4: "Artista fulano", // Texto asociado a la primera imagen
                    text5: "Violinista", // Texto asociado a la segunda imagen
                    text6: "Es cubano"  // Texto asociado a la tercera imagen
                }
            ]
        },
        {
            // Sección para el texto
            text_header: "", // Encabezado del texto
            texts: [
                {
                    text_1: "Booking", // Primer texto
                    text_2: "Servicios", // Segundo texto
                    text_3: "Eventos", // Tercer texto
                    text_4: "Lo que tu quieras", // Cuarto texto
                    text_5: "", // Quinto texto
                    text_6: ""  // Sexto texto
                }
            ]
        },
        {
            // Sección para el artista
            artist_header: "Artista 2", // Encabezado del artista
            datos: [
                {
                    foto1: "./ArtistsImages/Artist2.jpg", // Ruta de la primera imagen del artista
                    foto2: "./ArtistsImages/Artist2.jpg", // Ruta de la segunda imagen del artista
                    foto3: "./ArtistsImages/Artist2.jpg", // Ruta de la tercera imagen del artista
                    text1: "Artista mengano", // Texto asociado a la primera imagen
                    text2: "Pianista", // Texto asociado a la segunda imagen
                    text3: "No es cubano"  // Texto asociado a la tercera imagen
                }
            ]
        },
        {
            // Sección para el texto
            text_header: "", // Encabezado del texto
            texts: [
                {
                    text_1: "Booking 2", // Primer texto
                    text_2: "Servicios 2", // Segundo texto
                    text_3: "Eventos 2", // Tercer texto
                    text_4: "pepe", // Cuarto texto
                    text_5: "drgdg", // Quinto texto
                    text_6: "sdt"  // Sexto texto
                }
            ]
        },
        {
            // Sección para el artista
            artist_header: "Artista 3", // Encabezado del artista
            datos: [
                {
                    foto1: "./ArtistsImages/Artist8.jpg", // Ruta de la primera imagen del artista
                    foto2: "./ArtistsImages/Artist8.jpg", // Ruta de la segunda imagen del artista
                    foto3: "./ArtistsImages/Artist8.jpg", // Ruta de la tercera imagen del artista
                    text1: "Artista mengano", // Texto asociado a la primera imagen
                    text2: "Pianista", // Texto asociado a la segunda imagen
                    text3: "No es cubano"  // Texto asociado a la tercera imagen
                }
            ]
        },
        {
            // Sección para el texto
            text_header: "", // Encabezado del texto
            texts: [
                {
                    text_1: "Booking 2", // Primer texto
                    text_2: "Servicios 2", // Segundo texto
                    text_3: "Eventos 2", // Tercer texto
                    text_4: "pepe", // Cuarto texto
                    text_5: "drgdg", // Quinto texto
                    text_6: "sdt"  // Sexto texto
                }
            ]
        }
    ];

    return (
        <div className="container">
            {artistas.map((seccion, index) => (
                <div key={index} className="seccion_container">
                    {/* Si hay un encabezado de artista, muestra la sección de artista */}
                    {seccion.artist_header && (
                        <div className="artist_container">
                            <h2 className="artist_header_container">{seccion.artist_header}</h2> {/* Muestra el encabezado del artista */}
                            <div className="artist_containt_container">
                                {/* Mapea los datos de la sección del artista */}
                                {seccion.datos.map((dato, idx) => (
                                    <div key={idx} className="artist_data_container">

                                        {/*<div className="image1_container"> */}
                                        <img className="image1" src={dato.foto1}
                                             alt="Foto 1"/> {/* Muestra la primera imagen del artista */}
                                        {/*</div> */}

                                        {/*<div className="text1_container">*/}
                                        <p className="text1">{dato.text1}</p> {/* Muestra el primer texto */}
                                        {/*</div>*/}

                                        {/*<div className="image2_container">*/}
                                        <img className="image2" src={dato.foto2}
                                             alt="Foto 2"/> {/* Muestra la primera imagen del artista */}
                                        {/*</div>*/}

                                        {/*<div className="text1_container">*/}
                                        <p className="text2">{dato.text2}</p> {/* Muestra el primer texto */}
                                        {/*</div>*/}

                                        {/*<div className="image3_container">*/}
                                        <img className="image3" src={dato.foto3}
                                             alt="Foto 3"/> {/* Muestra la primera imagen del artista */}
                                        {/*</div>*/}

                                        {/*<div className="text3_container">*/}
                                        <p className="text3">{dato.text3}</p> {/* Muestra el primer texto */}
                                        {/*</div>*/}

                                        {/*<div className="image4_container">*/}
                                        <img className="image4" src={dato.foto4}
                                             alt="Foto 4"/> {/* Muestra la primera imagen del artista */}
                                        {/*</div>*/}

                                        {/*<div className="image5_container">*/}
                                        <img className="image5" src={dato.foto5}
                                             alt="Foto 5"/> {/* Muestra la primera imagen del artista */}
                                        {/*</div>*/}

                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {/* Si hay un encabezado de texto, muestra la sección de texto */}
                    {seccion.text_header && (
                        <div className="text_container">
                            <h2>{seccion.text_header}</h2> {/* Muestra el encabezado del texto */}
                            <div className="text_content_container">
                                {/* Mapea los textos de la sección de texto */}
                                {seccion.texts.map((texto, idx) => (
                                    <div key={idx} className="texts_container">
                                        <p>{texto.text_1}</p> {/* Muestra el primer texto */}
                                        <p>{texto.text_2}</p> {/* Muestra el segundo texto */}
                                        <p>{texto.text_3}</p> {/* Muestra el tercer texto */}
                                        <p>{texto.text_4}</p> {/* Muestra el cuarto texto */}
                                        <p>{texto.text_5}</p> {/* Muestra el quinto texto */}
                                        <p>{texto.text_6}</p> {/* Muestra el sexto texto */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default App;


//<div  className="image1_container">
//                                 <img className="image1" src={dato.foto1} alt="Foto 1" /> {/* Muestra la primera imagen del artista */}
//                             </div>
//                             <div  className="text_1_container">
//                               <p className="text_1">{dato.text_1}</p> {/* Muestra el primer texto */}
//                             </div>
//                             <div  className="image2_container">
//                               <img className="image2" src={dato.foto2} alt="Foto 2" /> {/* Muestra la segunda imagen del artista */}
//                             </div>
//                             <div  className="text_2_container">
//                               <p className="text_2">{dato.text_2}</p> {/* Muestra el segundo texto */}
//                             </div>
//                             <div  className="image3_container">
//                               <img className="image3" src={dato.foto3} alt="Foto 3" /> {/* Muestra la tercera imagen del artista */}
//                             </div>
//                             <div  className="text_3_container">
//                               <p className="text_3">{dato.text_3}</p> {/* Muestra el tercer texto */}
//                             </div>