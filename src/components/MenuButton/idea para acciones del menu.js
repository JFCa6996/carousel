import React, { useState } from 'react';
import MyTabbedBrowser from './MyTabbedBrowser';
import MyInicio from './MyInicio';
import MyServicios from './MyServicios';
import MyContacto from './MyContacto';

function App() {

    const [componenteActual, setComponenteActual] = useState(null);
    const handleItemClick = (componente) => {
        // Establecer el componente actual según el elemento del menú seleccionado
        switch (componente) {
            case 'ARTISTAS':
                setComponenteActual(<MyTabbedBrowser />);
                break;
            case 'INICIO':
                setComponenteActual(<MyInicio />);
                break;
            case 'SERVICIOS':
                setComponenteActual(<MyServicios />);
                break;
            case 'CONTACTO':
                setComponenteActual(<MyContacto />);
                break;
            default:
                setComponenteActual(null);
        }
    };

    const handleClose = () => {
        // Restablecer el componente actual al hacer clic fuera del menú
        setComponenteActual(null);
    };

    return (
        <div>
            <div
                id="menu"
                className={`menu ${componenteActual ? 'open' : ''}`}
                onClick={handleClose}
            >
                <MenuItem onClick={() => handleItemClick('INICIO')}>INICIO</MenuItem>
                <MenuItem onClick={() => handleItemClick('SERVICIOS')}>SERVICIOS</MenuItem>
                <MenuItem onClick={() => handleItemClick('ARTISTAS')}>ARTISTAS</MenuItem>
                <MenuItem onClick={() => handleItemClick('CONTACTO')}>CONTACTO</MenuItem>
            </div>
            {componenteActual}
        </div>
    );
}

export default App;
