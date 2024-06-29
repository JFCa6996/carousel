import React from 'react';

const MainPage = (props) => {
    const Header = props.Header;
    const title1 = props.title1;
    const title2 = props.title2;
    const title3 = props.title3;
    const logo = props.logo;
    const imagen1 = props.imagen1;
    const imagen2 = props.imagen2;
    const space = props.space;
    const videos = props.videos;


    const headerStyle = {
        width: '50%', // Tamaño de la imagen al 50% del contenedor
        left: '50%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: '0px', // Espacio entre el texto y la imagen
        fontsize: '40%',

    };

    const logoStyle = {
        width: '15%', // Tamaño de la imagen al 20% del contenedor
        display: 'block',
        marginLeft: '70%',
        marginRight: 'auto',
        marginTop: '18px', // Espacio entre el texto y la imagen
        borderRadius: '50%',
        position: 'absolute',
        zIndex: '1' // Asegura que esta imagen esté encima de la otra
    };

    const imagen1Style = {
        width: '100%', // Tamaño de la imagen al 20% del contenedor
        left: '0%',
        height: 'auto',

        marginTop: '0%', // Espacio entre el texto y la imagen
        position: 'relative',
        zIndex: '0'
    };

    const imagen2Style = {
        width: '100%', // Tamaño de la imagen al 20% del contenedor
        left: '0%',
        height: 'auto',

        marginTop: '0%', // Espacio entre el texto y la imagen
        position: 'relative',
        zIndex: '0'
    };

    const title1Style = {
        width: '100%', // Tamaño de la imagen al 20% del contenedor
        left: '0%',
        height: 'auto',

        marginTop: '0%', // Espacio entre el texto y la imagen
        position: 'relative',
        zIndex: '0'
    };

    const title3Style = {
        width: '100%', // Tamaño de la imagen al 20% del contenedor
        left: '0%',
        height: 'auto',
        fontSize: '40px',
        marginTop: '0%', // Espacio entre el texto y la imagen
        position: 'relative',
        zIndex: '0'
    };


// <p className='Header' style={headerStyle}>{Header}</p>
//             <img  className='logo' src={logo} style={logoStyle}/>;
//             <img  className='imagen1' src={imagen1} style={imagen1Style} alt=""/>
//             <img  className='imagen2' src={imagen2} style={imagen2Style} alt=""/>
    //const videos= "./videos/video.mp4";
    return (
        //<VideoPlayer videos={props.videos}/>
        //<video className="video" src={videos} controls></video>
        <div className="mainpage">
            <p className='Header'>{Header}</p>
            <video className="video" src={props.videos} controls></video>
            <img className='imagen1' src={imagen1} style={imagen1Style} alt=""/>
            <img className='imagen2' src={imagen2} style={imagen2Style} alt=""/>
            <div className='title3_container'><p className='title3'>{title3}</p></div>
        </div>
    );
};

export default MainPage;


/*
const data = props.data;
{data.map((item, index) => (
    <div key={index} className="contenido">
        <p className="texto_main_page">{item.texto}</p>
        <img className="imagen_fondo" src={item.url_2} alt="Imagen de fondo" />
    </div>*/
/*))}*/

// Estilo para el contenedor con la imagen de fondo
/*const contenedorStyle = {
    backgroundImage: `url(${urlImagen})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 50%',*/