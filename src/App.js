
/*
git init

 */
    //https://github.com/JFCa6996/carousel.git

import './App.css'; // Archivo CSS para estilos
import logo from "./assets/logo/logo.jpg";
import React, {useEffect, useState, useRef} from 'react';
//import React, { useRef } from 'react';
//import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import MenuButton from "./components/MenuButton/MenuButton";
import VideoPlayerSingle from "./components/VideoPlayer/VideoPlayerSingle";
import FiltroArtistas from "./components/FiltroArtistas/FiltroArtistas";
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import { useLanguage } from './components/contexts/LanguageContext';
//import enTranslations from './components/translations/en';
//import frTranslations from './components/translations/fr';

const App = () => {

    const [artistasSinFiltro, setArtistasSinFiltro] = useState([]); // Estado para el arreglo original de artistas
    const [artistasFiltrados, setArtistasFiltrados] = useState([]); // Estado para el arreglo de artistas filtrados
    const [artistas, setArtistas] = useState([
        {
            // Sección
            first_header: "ANA GABRIELA", // Encabezado del artista
            datas_h: [
                {
                    my_body: "",
                    my_formato: "Solista",
                    my_inst: "Violin",
                    my_tipo: "Artista",
                    datas_b: [
                        {
                            id: "Seccion 1",
                            foto: "./ArtistsImages/primera_2.jpg",
                            text1: "ANA-GABRIELLA 1 STANDS OUT AS A SEASONED",
                            text2: "VIOLINIST PERFORMANCES. HER VIBRANT STYLE",
                            text3: "NOT ONLY ENERGIZES THE CROWD AND FILLS THE",
                            text4: "DANCE FLOOR BUT ALSO ADDS A TOUCH OF ",
                            text5: "ELEGANCE AND EMOTION TO AN EVENT ESPECIALY,",
                            text6: "DURING HEARTFELT RENDITIONS OF ROMANTIC",
                            text7: " BALLADS.",
                            text_1_1: "",
                            text_1: "",
                            text_2: "",
                            text_3: "",
                            text_4: "",
                            text_5: "",
                            text_6: "",
                            text_7: "",
                            text_8: "",
                            video: "",//"/videos/video.mp4",
                        },
                        {
                            id: "Seccion 1",
                            foto: "./ArtistsImages/primera_2.jpg",
                            text1: "",
                            text2: "",
                            text3: "",
                            text4: "",
                            text5: "",
                            text6: "",
                            text7: "",
                            text_1_1: "",
                            text_1: "",
                            text_2: "",
                            text_3: "",
                            text_4: "",
                            text_5: "",
                            text_6: "",
                            text_7: "",
                            text_8: "",
                            video: "",//"/videos/video.mp4",
                        },
                        {
                            id: "Seccion 1",
                            foto: "./ArtistsImages/primera.jpg",
                            text1: "ANA-GABRIELLA 1 STANDS OUT AS A SEASONED",
                            text2: "VIOLINIST PERFORMANCES. HER VIBRANT STYLE",
                            text3: "NOT ONLY ENERGIZES THE CROWD AND FILLS THE",
                            text4: "DANCE FLOOR BUT ALSO ADDS A TOUCH OF ",
                            text5: "ELEGANCE AND EMOTION TO AN EVENT ESPECIALY,",
                            text6: "DURING HEARTFELT RENDITIONS OF ROMANTIC",
                            text7: " BALLADS.",
                            text_1_1: "",
                            text_1: "",
                            text_2: "",
                            text_3: "",
                            text_4: "",
                            text_5: "",
                            text_6: "",
                            text_7: "",
                            text_8: "",
                            video: " ",
                        },
                        {
                            id: "Seccion 1",
                            foto: "./ArtistsImages/primera_3.jpg",
                            text1: "",
                            text2: "",
                            text3: "",
                            text4: "",
                            text5: "",
                            text6: "",
                            text7: "",
                            text_1_1: "",
                            text_1: "",
                            text_2: "",
                            text_3: "",
                            text_4: "",
                            text_5: "",
                            text_6: "",
                            text_7: "",
                            text_8: "",
                            video: " ",
                        },
                    ]
                }
            ]
        },
        {
            // Sección
            first_header: "ANA GABRIELA VIDEOS", // Encabezado del artista
            datas_h: [
                {
                    my_body: "",
                    my_formato: "",
                    my_inst: "",
                    my_tipo: "Videos",
                    datas_b: [

                        {
                            id: "Seccion 2",
                            foto: "",
                            text1: "",
                            text2: "",
                            text3: "",
                            text4: "",
                            text5: "",
                            text6: "",
                            text7: "",
                            text_1_1: "",
                            text_1: "",
                            text_2: "",
                            text_3: "",
                            text_4: "",
                            text_5: "",
                            text_6: "",
                            text_7: "",
                            text_8: "",
                            watermark: "./ArtistsImages/watermark.jpg",
                            video: "/videos/video.mp4",
                        },


                    ]
                }
            ]
        },


        {   // Seccion start
            first_header: "SERVICIOS", // Encabezado
            datas_h: [
                {//******************************************************
                    my_body: "",
                    my_formato: "",
                    my_inst: "",
                    my_tipo: "Servicios",
                    datas_b: [
                        {
                            id: "Seccion 3",
                            foto: "",
                            text1: "",
                            text2: "",
                            text3: "",
                            text4: "",
                            text5: "",
                            text_1_1: "TODO LO REFERENTE A LOS SERVICIOS",
                            text_1: "",
                            text_2: "",
                            text_3: "",
                            text_4: "",
                            text_5: "",
                            text_6: "",
                            text_7: "",
                            text_8: "",
                            watermark: "",
                            video: "",

                        },
                        {
                            id: "Seccion 3",
                            foto: "",
                            text1: "",
                            text2: "",
                            text3: "",
                            text4: "",
                            text5: "",
                            text_1_1: "SERVICIOS",
                            text_1: "BODAS ",
                            text_2: "EVENTOS ",
                            text_3: "CONCIEROS",
                            text_4: " ETC",
                            text_5: "",
                            text_6: "",
                            text_7: "",
                            text_8: "",
                            video: "",
                            watermark: "",

                        },
                        {
                            id: "Seccion 3",
                            foto: "",
                            text1: "",
                            text2: "",
                            text3: "",
                            text4: "",
                            text5: "",
                            text_1_1: "UN TEQUE",
                            text_1: "BLA BLA BLA ",
                            text_2: "BLA BLA BLA  ",
                            text_3: "",
                            text_4: "",
                            text_5: "",
                            text_6: "",
                            text_7: "",
                            text_8: "",
                            video: "",
                            watermark: "./ArtistsImages/watermark.jpg",

                        },
                    ]
                },//**************************************************************


            ]


        }, //***************************/
        {   // Seccion start
            first_header: "CONTACTO", // Encabezado
            datas_h: [
                {//******************************************************
                    my_body: "",
                    my_formato: "",
                    my_inst: "",
                    my_tipo: "Contacto",
                    datas_b: [
                        {
                            id: "Seccion 3",
                            foto: "",
                            text1: "",
                            text2: "",
                            text3: "",
                            text4: "",
                            text5: "",
                            text_1_1: "TODO LO REFERENTE A CONTACTO",
                            text_1: "",
                            text_2: "",
                            text_3: "",
                            text_4: "",
                            text_5: "",
                            text_6: "",
                            text_7: "",
                            text_8: "",
                            video: "",

                        },
                        {
                            id: "Seccion 3",
                            foto: "",
                            text1: "",
                            text2: "",
                            text3: "",
                            text4: "",
                            text5: "",
                            text_1_1: "CONTACTO",
                            text_1: "Direccion ",
                            text_2: "Email ",
                            text_3: "Telefono",
                            text_4: " ETC",
                            text_5: "",
                            text_6: "",
                            text_7: "",
                            text_8: "",
                            video: "",
                            watermark: "",

                        },
                        {
                            id: "Seccion 3",
                            foto: "",
                            text1: "",
                            text2: "",
                            text3: "",
                            text4: "",
                            text5: "",
                            text_1_1: "UN TEQUE",
                            text_1: "BLA BLA BLA ",
                            text_2: "BLA BLA BLA  ",
                            text_3: "",
                            text_4: "",
                            text_5: "",
                            text_6: "",
                            text_7: "",
                            text_8: "",
                            video: "",
                            watermark: "./ArtistsImages/watermark.jpg",

                        },
                    ]
                },//**************************************************************
            ]
        }, //***************************/
        {   // Seccion start
            first_header: "ABOUT", // Encabezado
            datas_h: [
                {//******************************************************
                    my_body: "",
                    my_formato: "",
                    my_inst: "",
                    my_tipo: "About",
                    datas_b: [
                        {
                            id: "Seccion 3",
                            foto: "",
                            text1: "",
                            text2: "",
                            text3: "",
                            text4: "",
                            text5: "",
                            text_1_1: "TODO LO REFERENTE A ABOUT",
                            text_1: "",
                            text_2: "",
                            text_3: "",
                            text_4: "",
                            text_5: "",
                            text_6: "",
                            text_7: "",
                            text_8: "",
                            video: "",

                        },
                        {
                            id: "Seccion 3",
                            foto: "",
                            text1: "",
                            text2: "",
                            text3: "",
                            text4: "",
                            text5: "",
                            text_1_1: "CASTALE 2",
                            text_1: "ES UNA AGENCIA DE BOOKING DE ARTISTAS ",
                            text_2: "Y ORGANIZACIÓN DE EVENTOS, MÚSICA PARA BODAS ",
                            text_3: "FIESTAS TEMÁTICAS, CONCIERTOS Y FESTIVALES.",
                            text_4: "ESTA  EMPRESA  REPRESENTA LA PROFESIONALIDAD ",
                            text_5: "Y LA PASIÓN. LLEVANDO LA MÚSICA POR TODO EL ",
                            text_6: "MUNDO EN GÉNEROS COMO LA SALSA, REGGETÓN, ",
                            text_7: "BACHATA,URBANO, FLAMENCO, LATIN JAZZ, MÚSICA ",
                            text_8: "ESPAÑOLA, ENTRE OTROS.",
                            video: "",
                            foto_text: "",

                        },
                        {
                            id: "Seccion 3",
                            foto: "",
                            text1: "",
                            text2: "",
                            text3: "",
                            text4: "",
                            text5: "",
                            text_1_1: "CASTALE 3",
                            text_1: "ES UNA AGENCIA DE BOOKING DE ARTISTAS ",
                            text_2: "Y ORGANIZACIÓN DE EVENTOS, MÚSICA PARA BODAS ",
                            text_3: "FIESTAS TEMÁTICAS, CONCIERTOS Y FESTIVALES.",
                            text_4: "ESTA  EMPRESA  REPRESENTA LA PROFESIONALIDAD ",
                            text_5: "Y LA PASIÓN. LLEVANDO LA MÚSICA POR TODO EL ",
                            text_6: "MUNDO EN GÉNEROS COMO LA SALSA, REGGETÓN, ",
                            text_7: "BACHATA,URBANO, FLAMENCO, LATIN JAZZ, MÚSICA ",
                            text_8: "ESPAÑOLA, ENTRE OTROS.",
                            video: "",
                            watermark: "./ArtistsImages/watermark.jpg",

                        },
                    ]
                },//**************************************************************


            ]


        }, //***************************/


        {    // Sección para el artista

            first_header: "JUANA CARRASCO", // Header del artista
            datas_h: [
                {
                    my_body: "",
                    my_formato: "Duo",
                    my_inst: "Piano",
                    my_tipo: "Artista",
                    datas_b: [
                        {    /*start array*/
                            id: "Seccion 1",
                            foto: "./ArtistsImages/segunda.jpg",
                            text1: "Juana stands out as a seasoned violinist",
                            text2: "performances. Her vibrant style not only energizes the",
                            text3: "Crowd and fills the dance floor but also adds a touch ",
                            text4: "of elegance and emotion to an event, especialy  ",
                            text5: "during heartfelt renditions of romantic ballads. ",
                            text6: "",
                        },
                        {
                            id: "Seccion 1",
                            foto: "./ArtistsImages/segunda.jpg",
                            text1: "HAILING FROM CUBA, ANG-GABRIELLA HONED HER CRAFT AT\n",
                            text2: "THE PROFESSIONAL CONSERVATORY OF MUSIC SCHOOL IN\n ",
                            text3: "MATANZAS CITY AND THE YMPHONY ORCHESTRA OF THE\n ",
                            text4: "ME CITY, WHERE SHE DEVELOPED HER EXCEPTIONAL\n ",
                            text5: "MUSICAL PROWESS AND STAGE PRESENCE.\n ",

                            text6: "",

                        },
                        {
                            id: "Seccion 1",
                            foto: "./ArtistsImages/segunda.jpg",
                            text1: "Hailing from Cuba, Ang-Gabriella honed her craft at\n",
                            text2: "the Professional Conservatory of Music School in\n ",
                            text3: "Matanzas City and the ymphony Orchestra of the\n ",
                            text4: "me city, where she developed her exceptional\n ",
                            text5: "musical prowess and stage presence.\n ",
                            text6: "",

                        } /*end of array*/

                    ]
                }   /*fin del header*/
            ]
        },   // End Sección para el artista
        {    // Sección para el artista

            first_header: "ALBERTA PEREZ", // Header del artista
            datas_h: [
                {
                    my_body: "",
                    my_formato: "Trio",
                    my_inst: "Cello",
                    my_tipo: "Artista",
                    datas_b: [
                        {    /*start array*/
                            id: "Seccion 1",
                            foto: "./ArtistsImages/tercera.jpg",
                            text1: "Juana stands out as a seasoned violinist",
                            text2: "performances. Her vibrant style not only energizes the",
                            text3: "Crowd and fills the dance floor but also adds a touch ",
                            text4: "of elegance and emotion to an event, especialy  ",
                            text5: "during heartfelt renditions of romantic ballads. ",
                            text6: "",
                        },
                        {
                            id: "Seccion 1",
                            foto: "./ArtistsImages/tercera.jpg",
                            text1: "Hailing from Cuba, Ang-Gabriella honed her craft at\n",
                            text2: "the Professional Conservatory of Music School in\n ",
                            text3: "Matanzas City and the ymphony Orchestra of the\n ",
                            text4: "me city, where she developed her exceptional\n ",
                            text5: "musical prowess and stage presence.\n ",
                            text6: "",

                        },
                        {
                            id: "Seccion 1",
                            foto: "./ArtistsImages/tercera.jpg",
                            text1: "Hailing from Cuba, Ang-Gabriella honed her craft at\n",
                            text2: "the Professional Conservatory of Music School in\n ",
                            text3: "Matanzas City and the ymphony Orchestra of the\n ",
                            text4: "me city, where she developed her exceptional\n ",
                            text5: "musical prowess and stage presence.\n ",
                            text6: "",

                        } /*end of array*/

                    ]
                }   /*fin del header*/
            ]
        },   // End Sección para el artista

    ]);

    //*****************************************************Definiciones*********************************************

    const [scrollPosition, setScrollPosition] = useState(0); // Estado para la posición de desplazamiento
    const [showToTopButton, setShowToTopButton] = useState(false); // Estado para mostrar el botón de ir arriba
    const [opcionSelected, setOpcionSelected] = useState(null); // Estado para las opciones de MenuButton
    // ************************ Tramos de desplazamiento*******************
    const tramos = [0, 1500, 3000, 4500, 6000, 7500, 9000, 10500, 12000, 13500, 15000, 16500, 18000]; // Por ejemplo, cada 500px
    const translations = {
        //en: enTranslations,
        //fr: frTranslations,
    };
    const { language } = useLanguage();
    const currentTranslations = translations[language];
    //**end************************************************* Definiciones********************************************

    //*********************************************************useEffects************************************************

    // para manipular opciones de MenuButton
    useEffect(() => {
        // Función para renderizar el componente correspondiente según la opción seleccionada
        renderComponent()
    }, [opcionSelected ]);
    // **end** para manipular opciones de MenuButton


    // para Filtrar los artículos con my_tipo: "Artista"*****artistasFiltrados enviados a filtrar nuevamente
    useEffect(() => {
        const artistasSeleccionados = artistas.filter(artista => artista.datas_h.some(data => data.my_tipo === "Artista") );
        setArtistasFiltrados(artistasSeleccionados);
        setArtistasSinFiltro(artistas);
        console.log(artistasFiltrados)
        console.log(artistas)
        console.log(artistasSinFiltro)
    }, [ ]);
    // **end** para Filtrar los artículos con my_tipo: "Artista"


    // Efecto para agregar un listener de evento de desplazamiento cuando el componente se monta
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // **end** Efecto para agregar un listener de evento de desplazamiento cuando el componente se monta

    //**end******************************************************useEffects******************************

    //***********************************************************Funciones*******************************

    // Funcion  filtrarArtistas*****************************************************************

    const filtrarArtistas = (tipo) => {
        if (tipo === 'Home') {
            return artistasSinFiltro.filter(artista =>
                artista.datas_h.some(data => data.my_tipo === "Artista")
            );
        } else {
            return artistasSinFiltro.filter(artista =>
                artista.datas_h.some(data => data.my_tipo === tipo)
            );
        }
    };

    //**end** Funcion  filtrarArtistas*****************************************************************

    //Funcion renderComponent
    const renderComponent = () => {
        //const opcion = opcionSelected.trim();
        // Log para verificar que la función se llama y el valor de `opcion`
        switch (opcionSelected) {
            case 'HOME':
                setArtistas(filtrarArtistas('Home'));
                break;
            case 'SERVICIOS':
                setArtistas(filtrarArtistas('Servicios'));
                //const artistasSeleccionados = artistasSinFiltro.filter(artista => artista.datas_h.some(data => data.my_tipo === "Servicios")                );
                //setArtistas(artistasSeleccionados);
                break;
            case 'CONTACTO':
                setArtistas(filtrarArtistas('Contacto'));
                //const artistasSeleccionados = artistasSinFiltro.filter(artista => artista.datas_h.some(data => data.my_tipo === "Contacto")                );
                //setArtistas(artistasSeleccionados);
                break;
            case 'ABOUT':
                setArtistas(filtrarArtistas('About'));
                break;
            default:
                console.log('nada');
                break;
        }
    };

    //**end** Funcion renderComponent

    // Función para manejar el desplazamiento y mostrar el botón de ir arriba
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        setShowToTopButton(position > 1000); // Mostrar el botón cuando la posición de desplazamiento sea mayor que 1000px
    };
    // **end** Función para manejar el desplazamiento y mostrar el botón de ir arriba

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
    // **end** Función para desplazar al siguiente tramo

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
    // **end** Función para desplazar al tramo anterior

    // Función de devolución de llamada para manejar el cambio en el filtro
    const handleFilterChange = (artistasFiltrados) => {
        // Aquí puedes hacer lo que necesites con el filtro actualizado
        setArtistas(artistasFiltrados)
    };
    // **end** Función de devolución de llamada para manejar el cambio en el filtro

    //handleMenuChange*****para manipular opciones de MenuButton
    const handleMenuChange = (opcionSelected) => {
        // Aquí puedes hacer lo que necesites con el filtro actualizado
        setOpcionSelected(opcionSelected)
    };
    //**end** handleMenuChange

    //**end**  *******************************Funciones********************************

    return (

        <div
            className="main_container">                                                                {/*Contenedor principal*/}
            <div>
                <LanguageSelector/>
            </div>
            <div className="logo_container">
                <img className="logo" src={logo} alt="logo"/>
                {/*<button className="scrollToBottom" onClick={scrollToBottom}>↓</button>*/}
            </div>

            <div className="menuButton">
                <MenuButton onMenuChange={handleMenuChange}/>
                <FiltroArtistas artistasPorFiltrar={artistasFiltrados} onFilterChange={handleFilterChange}
                                my_filtroCampo="my_inst" my_filtroValor="Todos"/>
            </div>

            {/*Inicio del mapeo del arreglo de contenidos del artista*/}
            {/*map 1*/}
            <div className="main_artist_container">
                {artistas.map((seccion_map_1_v, index) => (
                    <div key={index} className="seccion_map_1_v_cont"> {/*este es el del texto vertical*/}
                        {/* Si hay un encabezado de artista, muestra la sección de artista */}
                        {seccion_map_1_v.first_header && (
                            <div class="texto-vertical_container">
                                <p class="texto-vertical">{seccion_map_1_v.first_header}</p>
                            </div>
                        )}
                        {/*map 1* mapeo del arreglo artistas*/}
                        {seccion_map_1_v.first_header && (
                            <div className="artistas_cont">
                                {/*<h2 className="artistas_enc_cont"></h2>*/}
                                <div className="artistas_contenido_cont">
                                    {/**map 2* mapeo de la seccion del encabezado*/}
                                    {seccion_map_1_v.datas_h.map((seccion2, idx) => (
                                        <div key={index} className="seccion_map_2_vh_cont">
                                            {/*map 3* mapeo de la seccion del cuerpo con fotos y textos*/}
                                            {seccion2.datas_b.map((dato, idx) => (
                                                <div key={idx}
                                                     className="seccion_map_3_vh_cont">            {/*a este nivel no puedo fijar ancho, hacia arriba max-width:100%*/}
                                                    {dato.id == "Seccion 1" && (
                                                        <div
                                                            className="foto_y_textos_cont">                 {/*incluye img y contenedor*/}
                                                            <div
                                                                className="foto_cont">                 {/*incluye solo foto*/}
                                                                <img className="foto" src={dato.foto} alt="Foto"/>
                                                            </div>

                                                            <div className="textosdefoto_cont"
                                                                 style={{display: "flex"}}>
                                                                {/* incluye solo textos */}
                                                                <p className="text1"
                                                                   style={{flex: 1, margin: 0}}>{dato.text1}</p>
                                                                <p className="text2"
                                                                   style={{flex: 1, margin: 0}}>{dato.text2}</p>
                                                                <p className="text3"
                                                                   style={{flex: 1, margin: 0}}>{dato.text3}</p>
                                                                <p className="text4"
                                                                   style={{flex: 1, margin: 0}}>{dato.text4}</p>
                                                                <p className="text5"
                                                                   style={{flex: 1, margin: 0}}>{dato.text5}</p>
                                                                <p className="text6"
                                                                   style={{flex: 1, margin: 0}}>{dato.text6}</p>
                                                                <p className="text7"
                                                                   style={{flex: 1, margin: 0}}>{dato.text7}</p>
                                                            </div>


                                                        </div>
                                                    )}

                                                    {dato.id == "Seccion 2" && (
                                                        <div className="video_watermark_cont">
                                                            <div className="video_cont">
                                                                {dato.video && (
                                                                    <VideoPlayerSingle videos={dato.video}/>
                                                                )}
                                                            </div>
                                                            <div className="watermark_cont">
                                                                {dato.watermark && (
                                                                    <img className="watermark" src={dato.watermark}
                                                                         alt="Marca de Agua"/>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {dato.id == "Seccion 3" && (
                                                        <div className="textos_y_foto_cont">
                                                            <div className="textos_container">
                                                                {dato.text_1_1 ? (
                                                                    <p className="text_1"><span
                                                                        className="text_1_1">{dato.text_1_1}</span> {dato.text_1}
                                                                    </p>
                                                                ) : (
                                                                    <p className="text_1">{dato.text_1}</p>
                                                                )}
                                                                {dato.text_2 && (
                                                                    <p className="text_2">{dato.text_2}</p>
                                                                )}
                                                                {dato.text_3 && (
                                                                    <p className="text_3">{dato.text_3}</p>
                                                                )}
                                                                {dato.text_4 && (
                                                                    <p className="text_4">{dato.text_4}</p>
                                                                )}
                                                                {dato.text_5 && (
                                                                    <p className="text_5">{dato.text_5}</p>
                                                                )}
                                                                {dato.text_6 && (
                                                                    <p className="text_6">{dato.text_6}</p>
                                                                )}
                                                                {dato.text_7 && (
                                                                    <p className="text_7">{dato.text_7}</p>
                                                                )}
                                                                {dato.text_8 && (
                                                                    <p className="text_8">{dato.text_8}</p>
                                                                )}
                                                                {dato.text_9 && (
                                                                    <p className="text_9">{dato.text_9}</p>
                                                                )}
                                                            </div>
                                                            <div className="watermark_cont">
                                                                {dato.watermark && (
                                                                    <img className="watermark" src={dato.watermark}
                                                                         alt="Marca de Agua"/>
                                                                )}
                                                            </div>
                                                            {/*textos_y_foto_cont  */}
                                                        </div>
                                                    )}
                                                    {/*seccion_map_3_vh_cont  */}
                                                </div>
                                            ))}
                                            {/* seccion_map_2_vh_cont */}
                                        </div>
                                    ))}
                                    {/*artistas_contenido_cont */}
                                </div>
                                {/* artistas_cont */}
                            </div>
                        )}
                        {/* seccion_map_1_v_cont */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;

/*
Configuración en tu Aplicación React
Modificar las Llamadas API:

En tu código React, asegúrate de que todas las llamadas a la API apunten a la URL de tu servidor backend.

fetch('https://server-myo3.onrender.com/api/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

Asegúrate de sustituir 'https://server-myo3.onrender.com/api/data' con la ruta correcta a tu API en el servidor.

Usar Variables de Entorno (opcional pero recomendado):

Si prefieres usar variables de entorno para almacenar la URL de tu backend, crea un archivo .env en la raíz de tu proyecto React (añadiéndolo a tu .gitignore).


REACT_APP_API_URL=https://server-myo3.onrender.com

Luego, en tu código React, utiliza esta variable de entorno para las llamadas a la API:


fetch(`${process.env.REACT_APP_API_URL}/api/data`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

Despliegue en Render

Construir tu Aplicación React:

Asegúrate de que tu aplicación React está lista para producción. Puedes construirla con el siguiente comando:


npm run build

Desplegar en Render:

En Render, crea un nuevo Static Site.
Selecciona el repositorio de tu aplicación React.
Configura el directorio de construcción como build.
Configurar Variables de Entorno en Render (si estás usando variables de entorno en React):

En la configuración de tu sitio estático en Render, añade la variable de entorno REACT_APP_API_URL con el valor https://server-myo3.onrender.com.

Resumen

Al configurar tu aplicación React para que se comunique con https://server-myo3.onrender.com, asegúrate de especificar correctamente la URL de tu
servidor backend en todas las llamadas API dentro de tu aplicación React. Utiliza variables de entorno si deseas mantener la flexibilidad y facilitar
la configuración entre diferentes entornos. Este enfoque garantizará que tu aplicación React pueda interactuar correctamente con tu servidor backend desplegado en Render.






 */


/*
Pasos para Subir el Build a GitHub

Crear un Repositorio en GitHub (si no tienes uno):

Ve a GitHub y asegúrate de iniciar sesión en tu cuenta.

Crea un nuevo repositorio haciendo clic en el botón "New" en la página principal de GitHub.

Clonar el Repositorio en tu Computadora:

Abre tu terminal (o Git Bash en Windows).

Clona el repositorio de GitHub en tu computadora. Reemplaza username y repo con tu nombre de usuario y nombre de repositorio:


git clone https://github.com/JFCa/carousel.git

Cambia al directorio del repositorio clonado:

cd carousel

Mover o Copiar el Contenido de build al Repositorio:

Asegúrate de que la carpeta build de tu aplicación React esté lista en tu sistema local.

Mueve o copia todo el contenido de la carpeta build al directorio del repositorio clonado en tu computadora.

bash
Copy code
cp -r /path/to/your/build/. .
Esto copiará todo el contenido de build al directorio actual del repositorio.

Agregar, Confirmar y Subir los Cambios:

Ahora, debes agregar todos los archivos nuevos y modificados al área de preparación de Git y confirmarlos:

bash
Copy code
git add .
git commit -m "Add build files for deployment"
El mensaje "Add build files for deployment" es un ejemplo; puedes usar cualquier mensaje descriptivo que explique los cambios que estás subiendo.

Subir los Cambios a GitHub:

Finalmente, sube los cambios confirmados al repositorio en GitHub:

bash
Copy code
git push origin main
Si estás usando una rama diferente a main, reemplaza main con el nombre de tu rama.

Verificar en GitHub:

Ve a la página de tu repositorio en GitHub y verifica que los archivos de build se hayan subido correctamente.
Consideraciones Adicionales
Ignorar Archivos no Deseados: Asegúrate de que archivos sensibles o que no deben estar en tu repositorio (como contraseñas, claves API, archivos grandes) estén correctamente ignorados utilizando un archivo .gitignore.

Actualización del Repositorio: Cuando actualices tu aplicación React y generes una nueva versión de build, repite los pasos 3 a 5 para subir los cambios a GitHub.

Siguiendo estos pasos, podrás subir la carpeta build de tu aplicación React a GitHub y mantener tu repositorio actualizado con la última versión de tu aplicación lista para producción.


explicar el codigo anterior
ChatGPT
Claro, el proceso de subir la carpeta build de tu aplicación React a GitHub implica algunos pasos básicos de Git. Aquí te explico cada uno de los comandos utilizados:

Pasos para Subir el Build a GitHub
Clonar el Repositorio en tu Computadora:

bash
Copy code
git clone https://github.com/username/repo.git
Explicación: Este comando clona (descarga) el repositorio de GitHub desde la URL proporcionada (https://github.com/username/repo.git) a tu computadora local. Reemplaza username con tu nombre de usuario en GitHub y repo con el nombre de tu repositorio.
Mover o Copiar el Contenido de build al Repositorio:

bash
Copy code
cp -r /path/to/your/build/. .
Explicación: Este comando copia recursivamente (-r) todo el contenido de la carpeta build desde la ruta especificada (/path/to/your/build/) al directorio actual (.) donde te encuentras en tu terminal. Esto asegura que todos los archivos y subdirectorios dentro de build se copien al repositorio local.
Agregar, Confirmar y Subir los Cambios:

bash
Copy code
git add .
git commit -m "Add build files for deployment"
Explicación:
git add .: Este comando añade todos los archivos y cambios nuevos al área de preparación de Git. El . indica que todos los archivos y subdirectorios nuevos y modificados deben ser agregados.
git commit -m "Add build files for deployment": Después de añadir los archivos, este comando crea un nuevo commit con un mensaje descriptivo ("Add build files for deployment" en este caso). Un commit en Git representa un conjunto de cambios que se van a guardar en la historia del repositorio.
Subir los Cambios a GitHub:

bash
Copy code
git push origin main
Explicación:
git push: Este comando sube los cambios confirmados en tu repositorio local (main branch) hacia el repositorio remoto en GitHub (origin).
origin: Es el nombre predeterminado dado al repositorio remoto cuando lo clonas desde GitHub.
main: Es el nombre de la rama (branch) en tu repositorio local que estás subiendo a GitHub. Asegúrate de reemplazar main con el nombre de tu rama si estás utilizando una diferente.
Consideraciones Adicionales
Archivos no Deseados: Antes de hacer git add ., asegúrate de revisar los archivos que estás agregando para evitar subir archivos sensibles o innecesarios. Puedes configurar un archivo .gitignore para evitar que Git rastree ciertos archivos o tipos de archivos.

Actualizaciones Posteriores: Cada vez que actualices tu aplicación React y generes una nueva versión de build, repite los pasos 2 a 4 para subir los cambios actualizados a GitHub.

Este proceso te permite mantener tu repositorio de GitHub actualizado con la última versión de tu aplicación React, lista para ser desplegada en producción o compartida con otros colaboradores.






 */


/* puede estar repetido
Subir tu Build a GitHub
Crear el Build de la Aplicación:
Primero, asegúrate de que tu aplicación esté lista para producción. Corre el siguiente comando para crear el build:

bash
Copy code
npm run build
Esto generará una carpeta build en tu proyecto.

Inicializar un Repositorio en Git:
Si aún no has inicializado un repositorio de Git en tu proyecto, hazlo:

bash
Copy code
git init
Añadir y Cometer los Archivos:
Añade todos los archivos a tu repositorio y haz un commit:

bash
Copy code
git add .
git commit -m "Initial commit"
Crear un Repositorio en GitHub:
Ve a GitHub y crea un nuevo repositorio. No añadas un README ni ningún otro archivo, ya que esto puede causar conflictos.

Conectar tu Repositorio Local a GitHub:
Copia la URL de tu nuevo repositorio en GitHub y conéctalo a tu repositorio local:

bash
Copy code
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
Subir tu Código a GitHub:
Sube tu código al repositorio remoto:

bash
Copy code
git push -u origin master
Desplegar en Render
Crear una Cuenta en Render:
Si aún no tienes una cuenta, regístrate en Render.

Conectar Render a tu Repositorio de GitHub:
Una vez que hayas iniciado sesión, ve a tu panel de control y haz clic en "New" -> "Static Site".

Seleccionar tu Repositorio:
Render te pedirá que conectes tu cuenta de GitHub. Una vez conectada, selecciona el repositorio que acabas de subir.

Configurar el Despliegue:
Render te pedirá algunas configuraciones:

Branch: master o main, dependiendo de cómo hayas nombrado tu rama principal.
Build Command: npm run build
Publish Directory: build
Desplegar:
Haz clic en "Create Static Site". Render empezará a construir y desplegar tu aplicación. Una vez que el despliegue haya terminado, recibirás una URL en la que tu aplicación estará disponible.

Paso Opcional: Configurar un Dominio Personalizado
Si quieres usar un dominio personalizado, Render proporciona una guía para configurarlo en sus documentos oficiales.

Con estos pasos, tu aplicación React debería estar en GitHub y desplegada en Render. ¿Hay algún paso específico en el que necesites más detalle?