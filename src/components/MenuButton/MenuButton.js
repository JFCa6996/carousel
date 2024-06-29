import React, {useEffect, useState} from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FiltroArtistas from "../FiltroArtistas/FiltroArtistas";
import GoToPage from "../Page/GoToPage";
import './MenuButton.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
//import { useTranslation } from 'react-i18next';

const MenuButton = ({ artistasSinFiltro, onMenuChange  }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null); // Estado para almacenar la opción seleccionada
    const [showGoToPage, setShowGoToPage] = useState(false); // Estado para controlar la visibilidad del componente GoToPage
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú principal
    //const { t } = useTranslation();
    //const handleMenuOpen = (event) => {
     //   setAnchorEl(event.currentTarget);
    //};

    //const [anchorEl, setAnchorEl] = useState(null);

   /* const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const isMenuOpen = Boolean(anchorEl);

    /*******************/
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        setShowGoToPage(false); // Ocultar GoToPage cuando se despliega el menú
        //setcurrentComponent(false); // Ocultar currentComponent cuando se despliega el menú
    };

    /*******************/

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (option) => {
        setSelectedOption(option);
        handleMenuClose(); // Cierra el menú después de hacer clic en una opción
    };

    useEffect(() => {
        // Función para renderizar el componente correspondiente según la opción seleccionada
        renderComponent()
    }, [selectedOption]);

    // Función para renderizar el componente correspondiente según la opción seleccionada
    const renderComponent = () => {
        switch (selectedOption) {
            case 'HOME':
                onMenuChange(selectedOption)
                setMenuOpen(!menuOpen);
                setSelectedOption(null);
            case 'SERVICIOS':
                onMenuChange(selectedOption)
                setMenuOpen(!menuOpen);
                setSelectedOption(null);
            case 'CONTACTO':
                onMenuChange(selectedOption)
                setMenuOpen(!menuOpen);
                setSelectedOption(null);

            case 'ABOUT':
                onMenuChange(selectedOption)
                setMenuOpen(!menuOpen);
                setSelectedOption(null);
            default:
                //return null;
        }
    };

//<MenuItem onClick={() => handleMenuItemClick('CATALOGO')}>CATÁLOGO</MenuItem>
//                 <MenuItem onClick={() => handleMenuItemClick('SERVICIOS')}>SERVICIOS</MenuItem>
//                 <MenuItem onClick={() => handleMenuItemClick('CONTACTO')}>CONTACTO</MenuItem>
//                 <MenuItem onClick={() => handleMenuItemClick('ABOUT')}>ABOUT</MenuItem>
    return (
        <div className="menuContainer">
            <IconButton
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleMenuToggle}
                style={{background: 'transparent', color: 'white'}}
                className="menuIcon"
            >
                {showGoToPage ? <ArrowBackIcon/> : <MoreVertIcon/>}
            </IconButton>

            <div
                id="menu"
                className={`menu ${menuOpen ? 'open' : ''}`}
            >

                <MenuItem id="menu_catalog"  onClick={() => handleMenuItemClick('HOME')}>
                    HOME
                </MenuItem>
                <MenuItem id="menu_services"  onClick={() => handleMenuItemClick('SERVICIOS')}>
                    SERVICIOS
                </MenuItem>
                <MenuItem id="menu_contact" onClick={() => handleMenuItemClick('CONTACTO')}>
                    CONTACTO
                </MenuItem>
                <MenuItem id="menu_about" onClick={() => handleMenuItemClick('ABOUT')}>
                    ABOUT
                </MenuItem>

            </div>

            <div className={`currentComponent ${showGoToPage ? '' : 'open'}`}>
                {showGoToPage && <GoToPage/>}
            </div>

            {/* Renderizar el componente correspondiente */}
            {/*{renderComponent()} */}
        </div>
    );
};

export default MenuButton;


/*
import React from 'react';
import { useGlobalContext } from './GlobalContext';
import MostrarDatos from './MostrarDatos';
import ArrowBackIcon from './ArrowBackIcon';

const MenuButton = () => {
    const { mountComponent, unmountComponent } = useGlobalContext();

    return (
        <div>
            <h1>MenuButton Component</h1>
            <button onClick={() => mountComponent(<MostrarDatos />)}>Mount MostrarDatos</button>
            <button onClick={unmountComponent}><ArrowBackIcon /> Back</button>
        </div>
    );
};

export default MenuButton;

* */


/*
Este código define un componente de React llamado MenuButton. Aquí está la explicación línea por línea:

import React, { useState, useEffect } from 'react';:

Importa las funciones React, useState y useEffect desde el módulo react.
useState es un gancho que permite al componente tener estado interno.
useEffect es un gancho que permite realizar efectos secundarios en el componente, como suscripciones a eventos o limpieza de recursos.
import { IconButton, MenuItem } from '@material-ui/core';:

Importa los componentes IconButton y MenuItem desde el módulo @material-ui/core.
Estos componentes son parte del conjunto de componentes proporcionados por Material-UI, una biblioteca de componentes de interfaz de usuario para React.
import MoreVertIcon from '@material-ui/icons/MoreVert';:

Importa el icono MoreVertIcon desde el módulo @material-ui/icons.
Este icono probablemente se usará como un ícono de menú desplegable.
import ArrowBackIcon from '@material-ui/icons/ArrowBack';:

Importa el icono ArrowBackIcon desde el módulo @material-ui/icons.
Este icono probablemente se usará como un ícono de flecha hacia atrás.
import './MenuButton.css';:

Importa un archivo CSS llamado MenuButton.css que contiene estilos específicos para este componente.
import GoToPage from "../Page/GoToPage";:

Importa el componente GoToPage desde el archivo GoToPage ubicado en la carpeta ../Page (una carpeta arriba) en relación con la ubicación actual del archivo.
const MenuButton = ({ onMenuItemClick }) => { ... }:

Define un componente funcional llamado MenuButton, que recibe una prop llamada onMenuItemClick.
Esta prop se utilizará para pasar una función desde el componente padre al MenuButton, lo que permitirá que MenuButton notifique al componente padre cuando se haga clic en un elemento del menú.
const [menuOpen, setMenuOpen] = useState(false);:

Define el estado menuOpen y la función setMenuOpen utilizando el gancho useState.
Inicializa menuOpen como false, lo que indica que el menú no está abierto inicialmente.
useEffect(() => { ... }, [menuOpen]);:

Utiliza el gancho useEffect para ejecutar un efecto secundario cuando el estado menuOpen cambie.
Este efecto secundario agrega un event listener al documento para detectar clics fuera del menú y cerrar el menú si es necesario.
Además, se devuelve una función de limpieza en el useEffect para eliminar el event listener cuando el componente se desmonte o cuando el estado menuOpen cambie.
const handleMenuToggle = () => { ... }:

Define la función handleMenuToggle, que se encarga de alternar el estado del menú entre abierto y cerrado cuando se hace clic en el botón de menú.
const handleMenuItemClick = (component) => { ... }:
Define la función handleMenuItemClick, que se ejecutará cuando se haga clic en un elemento del menú.
Esta función cambia el estado del componente según el elemento del menú seleccionado y llama a la función onMenuItemClick pasada como prop con el componente seleccionado como argumento.
return ( ... );:
Devuelve la estructura JSX del componente MenuButton, que incluye un botón de menú, un menú desplegable y el contenido correspondiente al elemento del menú seleccionado (si es necesario).
export default MenuButton;:
Exporta el componente MenuButton para que pueda ser importado y utilizado en otros archivos de la aplicación.






*/
