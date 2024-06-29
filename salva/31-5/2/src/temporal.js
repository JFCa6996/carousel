import './App.css'; // Archivo CSS para estilos
import React, {useEffect, useState} from 'react';

const App = () => {
    // Arreglo de artistas con datos de imagen y texto
    const artistas = [
        {
            // Sección para el artista
            first_header: "FirstHeader", // Encabezado del artista
            datas_h: [
                {
                    my_body: "",
                    datas_b: [
                        {
                            foto: "./ArtistsImages/primera.jpg",
                            text1: "Ana-Gabriella stands out as a seasoned violinist \naqui renowned for her dynamic and captivating",
                            text2: "renowned for her dynamic and captivating",
                        }
                    ]
                }
            ]
        },
        {
            // Sección para el texto
            second_header: "SecondHeader", // Encabezado del texto
            datas: [
                {
                    text_1: "Booking", // Primer texto
                    text_2: "Servicios", // Segundo texto
                    text_3: "Eventos", // Tercer texto
                    text_4: "Lo que tu quieras", // Cuarto texto
                    text_5: "", // Quinto texto
                    text_6: ""  // Sexto texto
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
            {artistas.map((seccion1, index) => (
                <div key={index} className="seccion1_container">
                    {/* Si hay un encabezado de artista, muestra la sección de artista */}
                    {seccion1.first_header && (
                        <div className="artist_container">
                            <h2 className="artist_header_container"></h2> {/* Muestra el encabezado del artista {seccion.artist_header}*/}
                            <div className="artist_containt_container">
                                {/* Mapea los datos de la sección del artista */}
                                {seccion1.datas_h.map((seccion2, idx) => (
                                    <div key={index} className="seccion2_container">
                                        {seccion.map((dato, idx) => (
                                            <div key={idx} className="artist_data_container">
                                                <img className="image1" src={dato.foto1} alt="Foto 1"/>
                                                <p className="text1">{dato.text1}</p>
                                                <p className="text2">{dato.text2}</p>
                                            </div>
                                        ))}
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
