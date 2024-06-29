Para enviar datos al servidor usando Axios en una aplicación React, puedes crear funciones que manejen las solicitudes POST, PUT y DELETE, dependiendo de si estás agregando, actualizando o eliminando un artista.

    A continuación, se muestra un ejemplo de cómo puedes hacer esto, además de la configuración inicial de tu useEffect para cargar datos desde la base de datos:

    Configurar Axios y cargar datos desde la base de datos.
    Agregar un nuevo artista.
    Actualizar un artista existente.
    Eliminar un artista.
1. Configurar Axios y cargar datos desde la base de datos
javascript
Copy code
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [artistas, setArtistas] = useState([]);
    const [artistasSeleccionados, setArtistasSeleccionados] = useState([]);
    const [newId, setNewId] = useState(0);

    useEffect(() => {
        loadArtistas_db();
    }, []);

    const loadArtistas_db = async () => {
        try {
            const res = await axios.get('http://localhost:3001/data_db');
            setArtistas(res.data);
            const maxId = res.data.reduce((max, artist) => artist.id > max ? artist.id : max, 0);
            setNewId(maxId + 1);
            console.log('artistas ok');
            console.log(artistas);
        } catch (err) {
            console.error('Error fetching data', err);
            console.log('artistas negativo');
        }
    };
    2. Agregar un nuevo artista
    javascript
    Copy code
    const agregarArtista = async (nuevoArtista) => {
        try {
            const existe = artistas.some(artista => artista.id.trim() === nuevoArtista.id.trim());
            if (!existe) {
                const res = await axios.post('http://localhost:3001/data_db', nuevoArtista);
                setArtistas([...artistas, res.data]);
                console.log('Artista agregado exitosamente');
            } else {
                console.log('El artista ya existe');
            }
        } catch (err) {
            console.error('Error adding artist', err);
        }
    };
    3. Actualizar un artista existente
    javascript
    Copy code
    const actualizarArtista = async (artistaActualizado) => {
        try {
            const res = await axios.put(`http://localhost:3001/data_db/${artistaActualizado.id}`, artistaActualizado);
            const nuevosArtistas = artistas.map(artista =>
                artista.id === artistaActualizado.id ? res.data : artista
            );
            setArtistas(nuevosArtistas);
            console.log('Artista actualizado exitosamente');
        } catch (err) {
            console.error('Error updating artist', err);
        }
    };
    4. Eliminar un artista
    javascript
    Copy code
    const eliminarArtista = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/data_db/${id}`);
            setArtistas(artistas.filter(artista => artista.id !== id));
            setArtistasSeleccionados(artistasSeleccionados.filter(artista => artista.id !== id));
            console.log('Artista eliminado exitosamente');
        } catch (err) {
            console.error('Error deleting artist', err);
        }
    };
    5. Component render and event handlers
    javascript
    Copy code
    return (
        <div>
            <h1>Gestión de Artistas</h1>
            <button onClick={() => handleSelectionChange(123)}>Seleccionar Artista 123</button>
            <button onClick={actualizarArtistas}>Actualizar Artistas</button>
            <button onClick={() => agregarArtista({ id: newId.toString(), name: 'Artista Nuevo' })}>Agregar Artista</button>
            <button onClick={() => eliminarArtista('123')}>Eliminar Artista 123</button>

            <h2>Artistas</h2>
            <ul>
                {artistas.map(artista => (
                    <li key={artista.id}>{artista.name}</li>
                ))}
            </ul>

            <h2>Artistas Seleccionados</h2>
            <ul>
                {artistasSeleccionados.map(artista => (
                    <li key={artista.id}>{artista.name}</li>
                ))}
            </ul>
        </div>
    );
    Explicación Detallada:
        Cargar datos: El useEffect inicializa la carga de datos desde el servidor cuando el componente se monta.
        Agregar artista: La función agregarArtista verifica si el artista ya existe antes de agregarlo. Si no existe, envía una solicitud POST al servidor y actualiza el estado con la respuesta.
        Actualizar artista: La función actualizarArtista envía una solicitud PUT al servidor para actualizar un artista existente y luego actualiza el estado con la respuesta.
        Eliminar artista: La función eliminarArtista envía una solicitud DELETE al servidor para eliminar un artista y actualiza el estado local eliminando el artista correspondiente.
        Asegúrate de que tu servidor está configurado para manejar estas rutas (/data_db, /data_db/:id para PUT y DELETE).