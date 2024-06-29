Aquí está el código actualizado para FiltroArtistas.js, con la implementación que llama a onFilterChange cada vez que los filtros cambian:

    FiltroArtistas.js:

jsx
Copy code
import React, { useState, useEffect } from 'react';
import './FiltroArtistas.css';

const FiltroArtistas = ({ artistasPorFiltrar, onFilterChange }) => {
    const [filtroCampo, setFiltroCampo] = useState('my_inst'); // Campo inicial de filtro
    const [filtroValor, setFiltroValor] = useState('Piano'); // Valor inicial de filtro

    // Manejar cambios en el selector de campos de filtro
    const handleChangeCampo = (event) => {
        setFiltroCampo(event.target.value);
    };

    // Manejar cambios en el selector de valores de filtro
    const handleChangeValor = (event) => {
        setFiltroValor(event.target.value);
    };

    // Filtrar artistas en base al campo y valor seleccionados
    const filtrarArtistas = () => {
        const artistasFiltrados = artistasPorFiltrar.filter(artista => {
            return artista.datas_h.some(seccion => {
                return seccion[filtroCampo] === filtroValor;
            });
        });
        onFilterChange(artistasFiltrados); // Llama a la función onFilterChange y pasa los artistas filtrados
    };

    // Llama a la función de filtrado cada vez que cambia el filtro
    useEffect(() => {
        filtrarArtistas();
    }, [filtroCampo, filtroValor]);

    return (
        <div className="filter-container">
            {/* Selector de campo de filtro */}
            <select className="select-container" value={filtroCampo} onChange={handleChangeCampo}>
                <option className="select-label" value="my_formato">Formato</option>
                <option className="select-label" value="my_inst">Instrumento</option>
                <option className="select-label" value="my_tipo">Tipo</option>
            </select>

            {/* Selector de valor de filtro */}
            <select className="select-field" value={filtroValor} onChange={handleChangeValor}>
                <option className="select-field" value="Violin">Violin</option>
                <option className="select-field" value="Piano">Piano</option>
                <option className="select-field" value="Tipo">Tipo</option>
            </select>

            {/* Mostrar resultados filtrados */}
            <ul className="result-list">
                {artistasFiltrados.map((artista, index) => (
                    <li key={index} className="result-item">{artista.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default FiltroArtistas;
MenuButton.js (actualizado para recibir los artistas filtrados):

jsx
Copy code
import React, { useState } from 'react';
import { IconButton, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FiltroArtistas from "../FiltroArtistas/FiltroArtistas";
import GoToPage from "../Page/GoToPage";
import './MenuButton.css';

const MenuButton = ({ artistasSinFiltro, onFilterChange }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showGoToPage, setShowGoToPage] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        setShowGoToPage(false);
    };

    const handleMenuItemClick = (option) => {
        setSelectedOption(option);
        setMenuOpen(false);
    };

    // Función para renderizar el componente correspondiente según la opción seleccionada
    const renderComponent = () => {
        switch (selectedOption) {
            case 'HOME':
                return <FiltroArtistas artistasPorFiltrar={artistasSinFiltro} onFilterChange={onFilterChange} />;
            case 'SERVICIOS':
                return <div>Servicios Component Placeholder</div>;
            case 'CONTACTO':
                return <div>Contacto Component Placeholder</div>;
            case 'ABOUT':
                return <div>About Component Placeholder</div>;
            default:
                return null;
        }
    };

    return (
        <div className="menuContainer">
            <IconButton
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleMenuToggle}
                style={{ background: 'transparent', color: 'white' }}
                className="menuIcon"
            >
                {showGoToPage ? <ArrowBackIcon /> : <MoreVertIcon />}
            </IconButton>

            <div id="menu" className={`menu ${menuOpen ? 'open' : ''}`}>
                <MenuItem id="menu_catalog" onClick={() => handleMenuItemClick('HOME')}>
                    HOME
                </MenuItem>
                <MenuItem id="menu_services" onClick={() => handleMenuItemClick('SERVICIOS')}>
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
                {showGoToPage && <GoToPage />}
            </div>

            {/* Renderizar el componente correspondiente */}
            {renderComponent()}
        </div>
    );
};

export default MenuButton;
App.js:

jsx
Copy code
import './App.css';
import React, { useState, useEffect } from 'react';
import MenuButton from "./components/MenuButton/MenuButton";

const App = () => {
    const [artistasSinFiltro, setArtistasSinFiltro] = useState([]);
    const [artistasFiltrados, setArtistasFiltrados] = useState([]);

    useEffect(() => {
        const initialArtistas = [
            // Datos de artistas...
        ];
        setArtistasSinFiltro(initialArtistas);
    }, []);

    const handleFilterChange = (artistasFiltrados) => {
        setArtistasFiltrados(artistasFiltrados);
    };

    return (
        <div className="main_container">
            <div className="menuButton">
                <MenuButton artistasSinFiltro={artistasSinFiltro} onFilterChange={handleFilterChange} />
            </div>

            {artistasFiltrados.map((artista, index) => (
                <div key={index} className="seccion_map_1_v_cont">
                    {artista.nombre}
                </div>
            ))}
        </div>
    );
};

export default App;
Con estos cambios, el componente FiltroArtistas filtra los artistas y llama a onFilterChange con los artistas filtrados. App gestiona los artistas filtrados y los pasa a MenuButton, que puede usar estos datos para renderizar el componente correcto según la opción seleccionada en el menú.





