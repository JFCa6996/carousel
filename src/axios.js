//npm install axios --force or --legacy-peer-deps
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [file, setFile] = useState(null); // Estado para el archivo a subir
    const [data, setData] = useState([]); // Estado para los datos de MySQL
    const [formData, setFormData] = useState({ column1: '', column2: '' }); // Estado para el formulario de datos de MySQL
    const [jsonData, setJsonData] = useState(''); // Estado para datos JSON

    // Manejar cambios en el input de archivo
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // Subir archivo al servidor
    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('File uploaded successfully', res.data);
        } catch (err) {
            console.error('Error uploading file', err);
        }
    };

    // Obtener datos de MySQL
    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/data');
            setData(res.data);
        } catch (err) {
            console.error('Error fetching data', err);
        }
    };

    // Manejar cambios en los inputs del formulario de MySQL
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Enviar datos a MySQL
    const handleSubmitData = async () => {
        try {
            const res = await axios.post('http://localhost:3000/data', formData);
            console.log('Data added successfully', res.data);
        } catch (err) {
            console.error('Error adding data', err);
        }
    };

    // Guardar datos JSON en el servidor
    const saveJsonData = async () => {
        try {
            const res = await axios.post('http://localhost:3000/save-json', JSON.parse(jsonData), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('JSON saved successfully', res.data);
        } catch (err) {
            console.error('Error saving JSON', err);
        }
    };

    // Cargar datos JSON desde el servidor
    const loadJsonData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/load-json');
            setJsonData(JSON.stringify(res.data, null, 2)); // Formatear JSON para mostrarlo en el textarea
        } catch (err) {
            console.error('Error loading JSON', err);
        }
    };

    return (
        <div>
            <h1>Upload File</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload</button>

            <h1>Fetch Data</h1>
            <button onClick={fetchData}>Fetch Data</button>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.column1} - {item.column2}</li>
                ))}
            </ul>

            <h1>Add Data</h1>
            <input
                type="text"
                name="column1"
                value={formData.column1}
                onChange={handleInputChange}
                placeholder="Column 1"
            />
            <input
                type="text"
                name="column2"
                value={formData.column2}
                onChange={handleInputChange}
                placeholder="Column 2"
            />
            <button onClick={handleSubmitData}>Submit</button>

            <h1>Save JSON Data</h1>
            <textarea
                rows="10"
                cols="30"
                value={jsonData}
                onChange={(e) => setJsonData(e.target.value)}
                placeholder="Enter JSON data here"
            ></textarea>
            <button onClick={saveJsonData}>Save JSON</button>

            <h1>Load JSON Data</h1>
            <button onClick={loadJsonData}>Load JSON</button>
            <pre>{jsonData}</pre>
        </div>
    );
};

export default App;


/*
Explicación del Componente React
Estado:

file: Para manejar el archivo a subir.
data: Para almacenar datos obtenidos de MySQL.
formData: Para manejar los datos del formulario de MySQL.
jsonData: Para manejar los datos JSON a guardar o cargar.
Funciones:

handleFileChange: Actualiza el estado cuando se selecciona un archivo.
handleFileUpload: Envía el archivo al servidor.
fetchData: Obtiene datos de MySQL del servidor.
handleInputChange: Maneja cambios en los inputs del formulario.
handleSubmitData: Envía datos del formulario a MySQL.
saveJsonData: Envía datos JSON al servidor para guardarlos.
loadJsonData: Obtiene datos JSON del servidor.
Renderizado:

Se proporcionan elementos de entrada y botones para cargar archivos, obtener y enviar datos de MySQL, y guardar y cargar datos JSON.
Los datos obtenidos de MySQL y JSON se muestran en la interfaz.
 */