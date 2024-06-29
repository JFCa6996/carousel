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
            first_header: "ANA GABRIELA",
            id1: "ana_gabriela",
            datas_h: [
                {
                    my_body: "",
                    id2: "ana_gabriela",
                    my_formato: "Solista",
                    my_inst: "Violin",
                    my_tipo: "Artista",
                    datas_b: [
                        {
                            id: "Seccion 1",
                            id3: "ana_gabriela_1",
                            foto: "./ArtistsImages/primera_2.jpg",
                            text1: "ANA-GABRIELLA 1 STANDS OUT AS A SEASONED",
                            text2: "VIOLINIST PERFORMANCES. HER VIBRANT STYLE",
                            text3: "NOT ONLY ENERGIZES THE CROWD AND FILLS THE",
                            text4: "DANCE FLOOR BUT ALSO ADDS A TOUCH OF ",
                            text5: "ELEGANCE AND EMOTION TO AN EVENT ESPECIALY,",
                            text6: "DURING HEARTFELT RENDITIONS OF ROMANTIC",
                            text7: " BALLADS.",
                            video: "",
                        },
                        // Other sections...
                    ]
                }
            ]
        },
        {
            first_header: "ALBERTA PEREZ",
            id1: "alberta_perez",
            datas_h: [
                {
                    my_body: "",
                    my_formato: "Trio",
                    my_inst: "Cello",
                    my_tipo: "Artista",
                    datas_b: [
                        {
                            id: "Seccion 1",
                            foto: "./ArtistsImages/tercera.jpg",
                            text1: "Juana stands out as a seasoned violinist",
                            text2: "performances. Her vibrant style not only energizes the",
                            text3: "Crowd and fills the dance floor but also adds a touch ",
                            text4: "of elegance and emotion to an event, especialy  ",
                            text5: "during heartfelt renditions of romantic ballads. ",
                            text6: "",
                        },
                        // Other sections...
                    ]
                }
            ]
        },
    ]);
    //*****************************************************Definiciones*********************************************

    const [scrollPosition, setScrollPosition] = useState(0); // Estado para la posición de desplazamiento
    const [showToTopButton, setShowToTopButton] = useState(false); // Estado para mostrar el botón de ir arriba
    const [opcionSelected, setOpcionSelected] = useState(null); // Estado para las opciones de MenuButton
    // ************************ Tramos de desplazamiento*******************
    const tramos = [0, 1500, 3000, 4500, 6000, 7500, 9000, 10500, 12000, 13500, 15000, 16500, 18000]; // Por ejemplo, cada 500px
    const { translations } = useLanguage();
    //const { language } = useLanguage();
    //const currentTranslations = translations[language];
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
            /***********************************************************************************/
            <div className="main_artist_container">
                {artistas.map((seccion_map_1_v, index1) => (
                    <div key={index1} className="seccion_map_1_v_cont">
                        {seccion_map_1_v.first_header && (
                            <div className="texto-vertical_container">
                                <p className="texto-vertical">
                                    {translations.artistSections.firstHeader[seccion_map_1_v.id1]}
                                </p>
                            </div>
                        )}
                        {seccion_map_1_v.datas_h.map((seccion2, index2) => (
                            <div key={index2} className="seccion_map_2_vh_cont">
                                {seccion2.datas_b.map((dato, index3) => (
                                    <div key={index3} className="seccion_map_3_vh_cont">
                                        {dato.id === "Seccion 1" && (
                                            <div className="foto_y_textos_cont">
                                                <div className="foto_cont">
                                                    <img className="foto" src={dato.foto} alt="Foto"/>
                                                </div>
                                                <div className="textosdefoto_cont" style={{display: "flex"}}>
                                                    <p className="text1" style={{flex: 1, margin: 0}}>
                                                        {translations.artistSections.seccion1[seccion_map_1_v.id1].text1}
                                                    </p>
                                                    <p className="text2" style={{flex: 1, margin: 0}}>
                                                        {translations.artistSections.seccion1[seccion_map_1_v.id1].text2}
                                                    </p>
                                                    <p className="text3" style={{flex: 1, margin: 0}}>
                                                        {translations.artistSections.seccion1[seccion_map_1_v.id1].text3}
                                                    </p>
                                                    <p className="text4" style={{flex: 1, margin: 0}}>
                                                        {translations.artistSections.seccion1[seccion_map_1_v.id1].text4}
                                                    </p>
                                                    <p className="text5" style={{flex: 1, margin: 0}}>
                                                        {translations.artistSections.seccion1[seccion_map_1_v.id1].text5}
                                                    </p>
                                                    <p className="text6" style={{flex: 1, margin: 0}}>
                                                        {translations.artistSections.seccion1[seccion_map_1_v.id1].text6}
                                                    </p>
                                                    <p className="text7" style={{flex: 1, margin: 0}}>
                                                        {translations.artistSections.seccion1[seccion_map_1_v.id1].text7}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                        {dato.id === "Seccion 2" && (
                                            <div className="video_watermark_cont">
                                                <div className="video_cont">
                                                    {dato.video && <VideoPlayerSingle videos={dato.video}/>}
                                                </div>
                                                <div className="watermark_cont">
                                                    {dato.watermark && (
                                                        <img className="watermark" src={dato.watermark}
                                                             alt="Marca de Agua"/>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                        {dato.id === "Seccion 3" && (
                                            <div className="textos_y_foto_cont">
                                                <div className="textos_container">
                                                    {dato.text_1_1 ? (
                                                        <p className="text_1">
                                                            <span className="text_1_1">{dato.text_1_1}</span>{' '}
                                                            {dato.text_1}
                                                        </p>
                                                    ) : (
                                                        <p className="text_1">{dato.text_1}</p>
                                                    )}
                                                    {dato.text_2 && <p className="text_2">{dato.text_2}</p>}
                                                    {dato.text_3 && <p className="text_3">{dato.text_3}</p>}
                                                    {dato.text_4 && <p className="text_4">{dato.text_4}</p>}
                                                    {dato.text_5 && <p className="text_5">{dato.text_5}</p>}
                                                    {dato.text_6 && <p className="text_6">{dato.text_6}</p>}
                                                    {dato.text_7 && <p className="text_7">{dato.text_7}</p>}
                                                    {dato.text_8 && <p className="text_8">{dato.text_8}</p>}
                                                    {dato.text_9 && <p className="text_9">{dato.text_9}</p>}
                                                </div>
                                                <div className="watermark_cont">
                                                    {dato.watermark && (
                                                        <img className="watermark" src={dato.watermark}
                                                             alt="Marca de Agua"/>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
