
Claro, a continuación te proporciono un ejemplo de un formulario en React con varios inputs, botones y un archivo CSS para el estilo.

    Estructura del Proyecto
Asegúrate de tener la siguiente estructura de carpetas y archivos en tu proyecto de React:

    css
Copy code
my-react-app/
│
├── src/
│   ├── components/
│   │   ├── Form.js
│   │   └── Form.css
│   ├── App.js
│   └── index.js
├── package.json
└── public/
Código de Form.js
javascript
Copy code
import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
Código de Form.css
css
Copy code
    .form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-group textarea {
    resize: vertical;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
Código de App.js
javascript
Copy code
import React from 'react';
import Form from './components/Form';

const App = () => {
    return (
        <div className="App">
            <h1>React Form Example</h1>
            <Form />
        </div>
    );
};

export default App;
Código de index.js
javascript
Copy code
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
Código de index.css (opcional)
css
Copy code
body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    padding: 0;
}

.App {
    text-align: center;
    padding: 20px;
}
Con esta estructura, deberías tener un formulario estilizado con CSS que incluye inputs para nombre, correo electrónico, contraseña y un área de texto para mensajes. Al enviar el formulario, los datos se registrarán en la consola del navegador.





