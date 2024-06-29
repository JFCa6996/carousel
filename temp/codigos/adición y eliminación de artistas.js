1. Agregar un Artista Nuevo
Para agregar un nuevo artista, necesitarás una función que agregue el nuevo artista al estado de artistas.

2. Eliminar un Artista
Para eliminar un artista, necesitarás una función que elimine el artista tanto del estado de artistas como del estado de artistasSeleccionados.

    Código Completo:
    javascript
Copy code
import React, { useState } from 'react';

const App = () => {
    // Estados para los artistas y artistas seleccionados
    const [artistas, setArtistas] = useState([
        { id: '123', name: 'Artista 1' },
        { id: '456', name: 'Artista 2' },
        { id: '789', name: 'Artista 3' }
    ]);

    const [artistasSeleccionados, setArtistasSeleccionados] = useState([]);

    // Función para manejar la selección de un artista
    const handleSelectionChange = (newSelection) => {
        const selectedId = newSelection.toString().trim();
        console.log(selectedId);

        const artista = artistas.find(artista => artista.id.trim() === selectedId);

        if (artista) {
            const yaSeleccionado = artistasSeleccionados.some(a => a.id === artista.id);
            if (!yaSeleccionado) {
                setArtistasSeleccionados([...artistasSeleccionados, artista]);
            } else {
                console.log('Artista ya seleccionado');
            }
        } else {
            console.log('Artista no encontrado');
        }
    }

    // Función para actualizar el array `artistas` con los artistas seleccionados
    const actualizarArtistas = () => {
        const nuevosArtistas = artistas.map(artista => {
            const artistaActualizado = artistasSeleccionados.find(a => a.id === artista.id);
            return artistaActualizado ? artistaActualizado : artista;
        });

        setArtistas(nuevosArtistas);
    }

    // Función para agregar un nuevo artista
    const agregarArtista = (nuevoArtista) => {
        setArtistas([...artistas, nuevoArtista]);
    }

    // Función para eliminar un artista
    const eliminarArtista = (id) => {
        // Eliminar de `artistas`
        setArtistas(artistas.filter(artista => artista.id !== id));
        // Eliminar de `artistasSeleccionados`
        setArtistasSeleccionados(artistasSeleccionados.filter(artista => artista.id !== id));
    }

    return (
        <div>
            <h1>Gestión de Artistas</h1>
            <button onClick={() => handleSelectionChange(123)}>Seleccionar Artista 123</button>
            <button onClick={actualizarArtistas}>Actualizar Artistas</button>
            <button onClick={() => agregarArtista({ id: '999', name: 'Artista Nuevo' })}>Agregar Artista</button>
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
}

export default App;
Explicación del Código:
    Estado Inicial:

    javascript
Copy code
const [artistas, setArtistas] = useState([
    { id: '123', name: 'Artista 1' },
    { id: '456', name: 'Artista 2' },
    { id: '789', name: 'Artista 3' }
]);

const [artistasSeleccionados, setArtistasSeleccionados] = useState([]);
Manejo de Selección:

    javascript
Copy code
const handleSelectionChange = (newSelection) => {
    const selectedId = newSelection.toString().trim();
    const artista = artistas.find(artista => artista.id.trim() === selectedId);

    if (artista) {
        const yaSeleccionado = artistasSeleccionados.some(a => a.id === artista.id);
        if (!yaSeleccionado) {
            setArtistasSeleccionados([...artistasSeleccionados, artista]);
        } else {
            console.log('Artista ya seleccionado');
        }
    } else {
        console.log('Artista no encontrado');
    }
}
Actualización de Artistas:

    javascript
Copy code
const actualizarArtistas = () => {
    const nuevosArtistas = artistas.map(artista => {
        const artistaActualizado = artistasSeleccionados.find(a => a.id === artista.id);
        return artistaActualizado ? artistaActualizado : artista;
    });

    setArtistas(nuevosArtistas);
}
Agregar Artista:

    javascript
Copy code
const agregarArtista = (nuevoArtista) => {
    setArtistas([...artistas, nuevoArtista]);
}
Eliminar Artista:

    javascript
Copy code
const eliminarArtista = (id) => {
    setArtistas(artistas.filter(artista => artista.id !== id));
    setArtistasSeleccionados(artistasSeleccionados.filter(artista => artista.id !== id));
}
Uso de los Botones:
    Seleccionar Artista: Simula la selección de un artista con ID 123.
Actualizar Artistas: Sincroniza artistas con artistasSeleccionados.
    Agregar Artista: Agrega un nuevo artista con ID 999.
Eliminar Artista: Elimina el artista con ID 123.
Este enfoque te permite agregar, seleccionar, actualizar y eliminar artistas de manera coherente utilizando React y su estado.

    Tienes razón, en la función agregarArtista no se verifica si el nuevo artista ya existe en la lista de artistas. Para asegurarnos de que no se agreguen duplicados, debemos añadir una verificación antes de agregar el nuevo artista.

    Aquí tienes el código ajustado que incluye la verificación:

    javascript
Copy code
import React, { useState } from 'react';

const App = () => {
    // Estados para los artistas y artistas seleccionados
    const [artistas, setArtistas] = useState([
        { id: '123', name: 'Artista 1' },
        { id: '456', name: 'Artista 2' },
        { id: '789', name: 'Artista 3' }
    ]);

    const [artistasSeleccionados, setArtistasSeleccionados] = useState([]);

    // Función para manejar la selección de un artista
    const handleSelectionChange = (newSelection) => {
        const selectedId = newSelection.toString().trim();
        console.log(selectedId);

        const artista = artistas.find(artista => artista.id.trim() === selectedId);

        if (artista) {
            const yaSeleccionado = artistasSeleccionados.some(a => a.id === artista.id);
            if (!yaSeleccionado) {
                setArtistasSeleccionados([...artistasSeleccionados, artista]);
            } else {
                console.log('Artista ya seleccionado');
            }
        } else {
            console.log('Artista no encontrado');
        }
    }

    // Función para actualizar el array `artistas` con los artistas seleccionados
    const actualizarArtistas = () => {
        const nuevosArtistas = artistas.map(artista => {
            const artistaActualizado = artistasSeleccionados.find(a => a.id === artista.id);
            return artistaActualizado ? artistaActualizado : artista;
        });

        setArtistas(nuevosArtistas);
    }

    // Función para agregar un nuevo artista con verificación de duplicados
    const agregarArtista = (nuevoArtista) => {
        // Verificar si el artista ya existe en el array `artistas`
        const existe = artistas.some(artista => artista.id.trim() === nuevoArtista.id.trim());
        if (!existe) {
            setArtistas([...artistas, nuevoArtista]);
        } else {
            console.log('El artista ya existe');
        }
    }

    // Función para eliminar un artista
    const eliminarArtista = (id) => {
        // Eliminar de `artistas`
        setArtistas(artistas.filter(artista => artista.id !== id));
        // Eliminar de `artistasSeleccionados`
        setArtistasSeleccionados(artistasSeleccionados.filter(artista => artista.id !== id));
    }

    return (
        <div>
            <h1>Gestión de Artistas</h1>
            <button onClick={() => handleSelectionChange(123)}>Seleccionar Artista 123</button>
            <button onClick={actualizarArtistas}>Actualizar Artistas</button>
            <button onClick={() => agregarArtista({ id: '999', name: 'Artista Nuevo' })}>Agregar Artista</button>
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
}

export default App;
Explicación del Cambio:
    Verificación de Duplicados en agregarArtista:
    javascript
Copy code
const agregarArtista = (nuevoArtista) => {
    // Verificar si el artista ya existe en el array `artistas`
    const existe = artistas.some(artista => artista.id.trim() === nuevoArtista.id.trim());
    if (!existe) {
        setArtistas([...artistas, nuevoArtista]);
    } else {
        console.log('El artista ya existe');
    }
}
Esta verificación utiliza el método some para comprobar si ya existe un artista con el mismo id en la lista artistas. Si no existe, agrega el nuevo artista. Si ya existe, muestra un mensaje en la consola.

    Manejo de Estados:
    artistas: Mantiene la lista de todos los artistas.
    artistasSeleccionados: Mantiene la lista de los artistas seleccionados.
    Funcionalidades de los Botones:
    Seleccionar Artista: Simula la selección de un artista con ID 123.
Actualizar Artistas: Sincroniza artistas con artistasSeleccionados.
    Agregar Artista: Agrega un nuevo artista con ID 999, verificando si ya existe.
    Eliminar Artista: Elimina el artista con ID 123.
Con este ajuste, aseguras que los artistas no se duplican al agregarlos a la lista artistas.