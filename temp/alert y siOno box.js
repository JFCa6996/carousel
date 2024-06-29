Aquí tienes un ejemplo de cómo crear un cuadro de mensaje de "Sí" o "No" en React con un diseño básico usando CSS:

    Componente React
jsx
Copy code
import React from 'react';
import './ConfirmationDialog.css';

const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="dialog-overlay">
            <div className="dialog-box">
                <p>{message}</p>
                <div className="dialog-buttons">
                    <button className="confirm-button" onClick={onConfirm}>Sí</button>
                    <button className="cancel-button" onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationDialog;
CSS
css
Copy code
    /* ConfirmationDialog.css */
    .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.dialog-box {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.dialog-buttons {
    margin-top: 20px;
}

.confirm-button, .cancel-button {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.confirm-button {
    background-color: #4CAF50;
    color: white;
}

.cancel-button {
    background-color: #f44336;
    color: white;
}
Uso del Componente
jsx
Copy code
import React, { useState } from 'react';
import ConfirmationDialog from './ConfirmationDialog';

const App = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleConfirm = () => {
        alert("Confirmed!");
        setIsDialogOpen(false);
    };

    const handleCancel = () => {
        alert("Cancelled!");
        setIsDialogOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpenDialog}>Open Confirmation Dialog</button>
            {isDialogOpen && (
                <ConfirmationDialog
                    message="Are you sure you want to proceed?"
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};

export default App;
Explicación
ConfirmationDialog Component:

    Recibe message, onConfirm y onCancel como props.
    Muestra el mensaje y dos botones: "Sí" y "No".
    Los botones disparan las funciones onConfirm y onCancel cuando se hacen clic.
    CSS:

Se asegura de que el cuadro de diálogo aparezca centrado en la pantalla y con un fondo semitransparente para resaltar el diálogo.
    Uso del Componente:

    App es un componente que utiliza useState para manejar la visibilidad del cuadro de diálogo.
    Cuando el botón para abrir el diálogo es presionado, el estado cambia y el cuadro de diálogo se muestra.
    Las funciones handleConfirm y handleCancel manejan las acciones de confirmación y cancelación, respectivamente.
    Puedes ajustar el CSS y la funcionalidad según tus necesidades específicas.


    codigo para mensaje al usuario similar al de alert con css
ChatGPT
Claro, aquí tienes un ejemplo de cómo crear un cuadro de mensaje similar a alert en React, pero con estilos personalizados usando CSS:

    Componente React
jsx
Copy code
import React from 'react';
import './AlertBox.css';

const AlertBox = ({ message, onClose }) => {
    return (
        <div className="alert-overlay">
            <div className="alert-box">
                <p>{message}</p>
                <button className="close-button" onClick={onClose}>OK</button>
            </div>
        </div>
    );
};

export default AlertBox;
CSS
css
Copy code
    /* AlertBox.css */
    .alert-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.alert-box {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 300px;
}

.close-button {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
}
Uso del Componente
jsx
Copy code
import React, { useState } from 'react';
import AlertBox from './AlertBox';

const App = () => {
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const handleOpenAlert = () => {
        setIsAlertOpen(true);
    };

    const handleCloseAlert = () => {
        setIsAlertOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpenAlert}>Show Alert</button>
            {isAlertOpen && (
                <AlertBox
                    message="This is an alert message!"
                    onClose={handleCloseAlert}
                />
            )}
        </div>
    );
};

export default App;
Explicación
AlertBox Component:

    Recibe message y onClose como props.
    Muestra el mensaje y un botón "OK".
    El botón dispara la función onClose cuando se hace clic.
    CSS:

alert-overlay: Hace que el fondo del cuadro de alerta sea semitransparente y centra el cuadro de alerta en la pantalla.
    alert-box: Define el estilo del cuadro de alerta, incluyendo el fondo blanco, el padding, el borde redondeado y una sombra.
    close-button: Estiliza el botón "OK".
    Uso del Componente:

    App es un componente que utiliza useState para manejar la visibilidad del cuadro de alerta.
    Cuando se presiona el botón para mostrar el alerta, el estado cambia y el cuadro de alerta se muestra.
    La función handleCloseAlert maneja la acción de cerrar el cuadro de alerta.
    Este ejemplo proporciona una manera básica de implementar un cuadro de alerta en React con estilos personalizados, y puedes ajustarlo según tus necesidades.


    Para usar el componente AlertBox fuera de JSX, puedes crear una función que maneje la creación y destrucción del componente dinámicamente. Aquí te muestro cómo hacerlo:

    Crear un contenedor dinámico en el DOM.
    Renderizar el componente en el contenedor.
    Eliminar el contenedor cuando se cierre la alerta.
    Implementación
1. Crear el contenedor dinámico y renderizar el componente
Primero, crea una función para manejar la visualización de la alerta.

    jsx
Copy code
import React from 'react';
import ReactDOM from 'react-dom';
import './AlertBox.css';

const AlertBox = ({ message, onClose }) => {
    return (
        <div className="alert-overlay">
            <div className="alert-box">
                <p>{message}</p>
                <button className="close-button" onClick={onClose}>OK</button>
            </div>
        </div>
    );
};

export const showAlert = (message) => {
    // Crear un contenedor dinámico
    const container = document.createElement('div');
    document.body.appendChild(container);

    // Función para eliminar el contenedor del DOM
    const handleClose = () => {
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    };

    // Renderizar el componente AlertBox en el contenedor
    ReactDOM.render(<AlertBox message={message} onClose={handleClose} />, container);
};

export default AlertBox;
2. Estilos CSS
Asegúrate de tener el archivo CSS para el componente AlertBox.

    css
Copy code
    /* AlertBox.css */
    .alert-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.alert-box {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 300px;
}

.close-button {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
}
3. Usar la función showAlert fuera de JSX
Ahora puedes llamar a showAlert desde cualquier parte de tu aplicación para mostrar la alerta.

    jsx
Copy code
import React from 'react';
import { showAlert } from './AlertBox';

const App = () => {
    const handleShowAlert = () => {
        showAlert("This is an alert message!");
    };

    return (
        <div>
            <button onClick={handleShowAlert}>Show Alert</button>
        </div>
    );
};

export default App;
Explicación
showAlert Function:

    Crea un nuevo div y lo agrega al body del documento.
    Define una función handleClose que desmonta el componente y elimina el contenedor del DOM.
    Usa ReactDOM.render para montar el componente AlertBox en el contenedor dinámico.
    CSS:

Define estilos para alert-overlay y alert-box para que el cuadro de alerta aparezca centrado y estilizado adecuadamente.
    Uso de showAlert:

    La función showAlert puede ser llamada desde cualquier parte de la aplicación, incluso fuera del contexto de un componente React, para mostrar el cuadro de alerta.
    Con esta implementación, puedes mostrar un cuadro de alerta dinámicamente en tu aplicación React sin necesidad de incluirlo directamente en JSX.








