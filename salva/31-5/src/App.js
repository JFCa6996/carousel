import './App.css'; // Archivo CSS para estilos
import React, {useEffect, useState} from 'react';

const App = () => {
    // Arreglo de artistas con datos de imagen y texto
    const artistas = [
        {
            // Sección para el artista
            artist_header: "Artista 1", // Encabezado del artista
            datos: [
                {
                    foto1: "./ArtistsImages/primera.jpg", //./ArtistsImages/Artist14.jpg Ruta de la primera imagen del artista
                    foto2: "./ArtistsImages/primera_1.jpg", // Ruta de la segunda imagen del artista
                    foto3: "./ArtistsImages/primera_2.jpg", // Ruta de la tercera imagen del artista
                    foto4: "./ArtistsImages/primera_3.jpg", // Ruta de la tercera imagen del artista
                    foto5: "./ArtistsImages/primera_3.jpg", // Ruta de la tercera imagen del artista
                    foto6: "./ArtistsImages/primera_3.jpg", // Ruta de la tercera imagen del artista
                    text1: "Ana-Gabriella stands out as a seasoned violinist\n", // Texto asociado a la primera imagen
                    text2: "Violinista", // Texto asociado a la segunda imagen
                    text3: "Es cubano",  // Texto asociado a la tercera imagen
                    text4: "Artista fulano", // Texto asociado a la primera imagen
                    text5: "Violinista", // Texto asociado a la segunda imagen
                    text6: "Artistam,m,.mv.m., xbvvmv.b;lcv;m ; \n  fulano", // Texto asociado a la primera imagen
                    text7: "Violinista", // Texto asociado a la segunda imagen
                    text8: "Es cubano",  // Texto asociado a la tercera imagen
                    text9: "Artista fulano", // Texto asociado a la primera imagen
                    text10: "Violinista", // Texto asociado a la segunda imagen
                    text11: "Es cubano",  // Texto asociado a la tercera imagen
                    text12: "Artistam,m,.mv.m., xbvvmv.b;lcv;m ; \n  fulano", // Texto asociado a la primera imagen
                    text13: "Es cubano",  // Texto asociado a la tercera imagen
                    text14: "Artista fulano", // Texto asociado a la primera imagen
                    text15: "Violinista" // Texto asociado a la segunda imagen
                }
            ]
        },
        {
            // Sección para el texto
            text_header: "1", // Encabezado del texto
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
                    foto1: "./ArtistsImages/segunda.jpg", // Ruta de la primera imagen del artista
                    foto2: "./ArtistsImages/segunda.jpg", // Ruta de la segunda imagen del artista
                    foto3: "./ArtistsImages/segunda.jpg", // Ruta de la tercera imagen del artista
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
            text_header: "1", // Encabezado del texto
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
                    foto1: "./ArtistsImages/tercera.jpg", // Ruta de la primera imagen del artista
                    foto2: "./ArtistsImages/tercera.jpg", // Ruta de la segunda imagen del artista
                    foto3: "./ArtistsImages/tercera.jpg", // Ruta de la tercera imagen del artista
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
            text_header: "1", // Encabezado del texto
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
//***********************************************************
    const [scrollPosition, setScrollPosition] = useState(0); // Estado para la posición de desplazamiento
    const [showToTopButton, setShowToTopButton] = useState(false); // Estado para mostrar el botón de ir arriba

    // Función para manejar el desplazamiento y mostrar el botón de ir arriba
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        setShowToTopButton(position > 1000); // Mostrar el botón cuando la posición de desplazamiento sea mayor que 1000px
    };

    // Efecto para agregar un listener de evento de desplazamiento cuando el componente se monta
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Función para desplazar al principio del contenido


    // Tramos de desplazamiento
    const tramos = [0, 1500, 3000, 4500, 6000, 7500, 9000, 10500, 12000, 13500, 15000, 16500, 18000]; // Por ejemplo, cada 500px

// Función para desplazar al siguiente tramo
    const scrollToBottom = () => {
        // Obtener la posición actual del scroll
        const scrollPosition = window.scrollY;

        // Encontrar el tramo actual
        let currentTramo = 0;
        for (let i = 0; i < tramos.length; i++) {
            if (scrollPosition >= tramos[i]) {
                currentTramo = i;
            }
        }

        // Encontrar el siguiente tramo
        const nextTramo = currentTramo + 1;
        if (nextTramo < tramos.length) {
            // Calcular la nueva posición del scroll
            const newPosition = tramos[nextTramo];

            // Animar el scroll hacia el siguiente tramo
            window.scrollTo({
                top: newPosition,
                behavior: 'smooth' // Para hacerlo suave
            });
        }
    };

// Función para desplazar al tramo anterior
    const scrollToTop = () => {
        // Obtener la posición actual del scroll
        const scrollPosition = window.scrollY;

        // Encontrar el tramo actual
        let currentTramo = 0;
        for (let i = 0; i < tramos.length; i++) {
            if (scrollPosition >= tramos[i]) {
                currentTramo = i;
            }
        }

        // Encontrar el tramo anterior
        const prevTramo = currentTramo - 1;
        if (prevTramo >= 0) {
            // Calcular la nueva posición del scroll
            const newPosition = tramos[prevTramo];

            // Animar el scroll hacia el tramo anterior
            window.scrollTo({
                top: newPosition,
                behavior: 'smooth' // Para hacerlo suave
            });
        }
    };


    //***********************************************************
    return (
        <div className="container">
            <div className="logo_container">
                {/*<img className="logo" src={logo} alt="logo"/>*/}
                {/*<button className="scrollToBottom" onClick={scrollToBottom}>↓</button>*/}
            </div>
            {artistas.map((seccion, index) => (
                <div key={index} className="seccion_container">
                    {/* Si hay un encabezado de artista, muestra la sección de artista */}
                    {seccion.artist_header && (
                        <div className="artist_container">
                            <h2 className="artist_header_container"></h2> {/* Muestra el encabezado del artista {seccion.artist_header}*/}
                            <div className="artist_containt_container">
                                {/* Mapea los datos de la sección del artista */}
                                {seccion.datos.map((dato, idx) => (
                                    <div key={idx} className="artist_data_container">
                                        <img className="image1" src={dato.foto1}
                                             alt="Foto 1"/> {/* Muestra la primera imagen del artista */}
                                        <p className="text1">{dato.text1}</p> {/* Muestra el primer texto */}
                                        <img className="image2" src={dato.foto2}
                                             alt="Foto 2"/> {/* Muestra la primera imagen del artista */}
                                        <p className="text2">{dato.text2}</p> {/* Muestra el primer texto */}
                                        <img className="image3" src={dato.foto3}
                                             alt="Foto 3"/> {/* Muestra la primera imagen del artista */}
                                        <p className="text3">{dato.text3}</p> {/* Muestra el primer texto */}

                                        <img className="image4" src={dato.foto4}
                                             alt="Foto 4"/> {/* Muestra la primera imagen del artista */}
                                        <p className="text4">{dato.text4}</p> {/* Muestra el primer texto */}
                                        <img className="image5" src={dato.foto5}
                                             alt="Foto 5"/> {/* Muestra la primera imagen del artista */}
                                        <p className="text5">{dato.text5}</p> {/* Muestra el primer texto */}
                                        <img className="image6" src={dato.foto6}
                                             alt="Foto 6"/> {/* Muestra la primera imagen del artista */}
                                        <p className="text6">{dato.text6}</p> {/* Muestra el primer texto */}
                                        <p className="text7">{dato.text7}</p> {/* Muestra el primer texto */}
                                        <p className="text8">{dato.text8}</p> {/* Muestra el primer texto */}
                                        <p className="text9">{dato.text9}</p> {/* Muestra el primer texto */}
                                        <p className="text10">{dato.text10}</p> {/* Muestra el primer texto */}

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