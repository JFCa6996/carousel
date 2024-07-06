
/*
npm run build
git init
git add .
git commit -m "Initial commit"
git remote add origin //https://github.com/JFCa6996/carousel.git

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
