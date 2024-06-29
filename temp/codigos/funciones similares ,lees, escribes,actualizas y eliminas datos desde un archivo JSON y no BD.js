1. GET (Obtener datos)
Esta función ya la tienes configurada:

    javascript
Copy code
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

app.use(express.json());

app.get('/getData', (req, res) => {
    console.log('ley/getdata/datos.json.....');
    fs.readFile(path.join(__dirname, 'public', 'datos.json'), 'utf8', (err, data) => {
        if (err) {
            console.log('error leyendo /getdata/datos.json..........:');
            console.error('Error reading data:', err);
            res.status(500).send({ message: 'Error reading data' });
        } else {
            console.log('Env/getdata/datos.json.....:');
            res.send(JSON.parse(data));
        }
    });
});
2. POST (Agregar un nuevo artista)
javascript
Copy code
app.post('/data', (req, res) => {
    const newArtist = req.body;
    if (!newArtist.id || !newArtist.name) {
        return res.status(400).json({ message: 'ID and Name are required' });
    }

    fs.readFile(path.join(__dirname, 'public', 'datos.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data:', err);
            return res.status(500).json({ message: 'Error reading data' });
        }

        const artists = JSON.parse(data);
        const exists = artists.some(artist => artist.id === newArtist.id);
        if (exists) {
            return res.status(400).json({ message: 'Artist already exists' });
        }

        artists.push(newArtist);

        fs.writeFile(path.join(__dirname, 'public', 'datos.json'), JSON.stringify(artists, null, 2), err => {
            if (err) {
                console.error('Error writing data:', err);
                return res.status(500).json({ message: 'Error writing data' });
            }

            res.status(201).json(newArtist);
        });
    });
});
3. PUT (Actualizar un artista existente)
javascript
Copy code
app.put('/data/:id', (req, res) => {
    const { id } = req.params;
    const updatedArtist = req.body;

    fs.readFile(path.join(__dirname, 'public', 'datos.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data:', err);
            return res.status(500).json({ message: 'Error reading data' });
        }

        let artists = JSON.parse(data);
        const artistIndex = artists.findIndex(artist => artist.id === id);

        if (artistIndex === -1) {
            return res.status(404).json({ message: 'Artist not found' });
        }

        artists[artistIndex] = { ...artists[artistIndex], ...updatedArtist };

        fs.writeFile(path.join(__dirname, 'public', 'datos.json'), JSON.stringify(artists, null, 2), err => {
            if (err) {
                console.error('Error writing data:', err);
                return res.status(500).json({ message: 'Error writing data' });
            }

            res.json(artists[artistIndex]);
        });
    });
});
4. DELETE (Eliminar un artista)
javascript
Copy code
app.delete('/data/:id', (req, res) => {
    const { id } = req.params;

    fs.readFile(path.join(__dirname, 'public', 'datos.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data:', err);
            return res.status(500).json({ message: 'Error reading data' });
        }

        let artists = JSON.parse(data);
        const updatedArtists = artists.filter(artist => artist.id !== id);

        if (artists.length === updatedArtists.length) {
            return res.status(404).json({ message: 'Artist not found' });
        }

        fs.writeFile(path.join(__dirname, 'public', 'datos.json'), JSON.stringify(updatedArtists, null, 2), err => {
            if (err) {
                console.error('Error writing data:', err);
                return res.status(500).json({ message: 'Error writing data' });
            }

            res.status(204).send();
        });
    });
});
Completo Código del Servidor con Express y fs
javascript
Copy code
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

app.use(express.json());

// GET (Obtener datos)
app.get('/getData', (req, res) => {
    console.log('ley/getdata/datos.json.....');
    fs.readFile(path.join(__dirname, 'public', 'datos.json'), 'utf8', (err, data) => {
        if (err) {
            console.log('error leyendo /getdata/datos.json..........:');
            console.error('Error reading data:', err);
            res.status(500).send({ message: 'Error reading data' });
        } else {
            console.log('Env/getdata/datos.json.....:');
            res.send(JSON.parse(data));
        }
    });
});

// POST (Agregar un nuevo artista)
app.post('/data', (req, res) => {
    const newArtist = req.body;
    if (!newArtist.id || !newArtist.name) {
        return res.status(400).json({ message: 'ID and Name are required' });
    }

    fs.readFile(path.join(__dirname, 'public', 'datos.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data:', err);
            return res.status(500).json({ message: 'Error reading data' });
        }

        const artists = JSON.parse(data);
        const exists = artists.some(artist => artist.id === newArtist.id);
        if (exists) {
            return res.status(400).json({ message: 'Artist already exists' });
        }

        artists.push(newArtist);

        fs.writeFile(path.join(__dirname, 'public', 'datos.json'), JSON.stringify(artists, null, 2), err => {
            if (err) {
                console.error('Error writing data:', err);
                return res.status(500).json({ message: 'Error writing data' });
            }

            res.status(201).json(newArtist);
        });
    });
});

// PUT (Actualizar un artista existente)
app.put('/data/:id', (req, res) => {
    const { id } = req.params;
    const updatedArtist = req.body;

    fs.readFile(path.join(__dirname, 'public', 'datos.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data:', err);
            return res.status(500).json({ message: 'Error reading data' });
        }

        let artists = JSON.parse(data);
        const artistIndex = artists.findIndex(artist => artist.id === id);

        if (artistIndex === -1) {
            return res.status(404).json({ message: 'Artist not found' });
        }

        artists[artistIndex] = { ...artists[artistIndex], ...updatedArtist };

        fs.writeFile(path.join(__dirname, 'public', 'datos.json'), JSON.stringify(artists, null, 2), err => {
            if (err) {
                console.error('Error writing data:', err);
                return res.status(500).json({ message: 'Error writing data' });
            }

            res.json(artists[artistIndex]);
        });
    });
});

// DELETE (Eliminar un artista)
app.delete('/data/:id', (req, res) => {
    const { id } = req.params;

    fs.readFile(path.join(__dirname, 'public', 'datos.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data:', err);
            return res.status(500).json({ message: 'Error reading data' });
        }

        let artists = JSON.parse(data);
        const updatedArtists = artists.filter(artist => artist.id !== id);

        if (artists.length === updatedArtists.length) {
            return res.status(404).json({ message: 'Artist not found' });
        }

        fs.writeFile(path.join(__dirname, 'public', 'datos.json'), JSON.stringify(updatedArtists, null, 2), err => {
            if (err) {
                console.error('Error writing data:', err);
                return res.status(500).json({ message: 'Error writing data' });
            }

            res.status(204).send();
        });
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
Notas:
    Verificación de entrada: Cada función verifica si los datos de entrada son válidos.
    Manejo de archivos: Cada operación lee el archivo JSON y luego lo escribe nuevamente si hay cambios.
    Mensajes de error y estado: Las funciones manejan errores y responden con códigos de estado y mensajes apropiados.
    Axios en el Cliente
La función fetchDataAxios en el cliente no necesita cambios significativos, solo asegúrate de que la URL del servidor esté correcta y ajusta cualquier código específico según las necesidades del cliente.

    javascript
Copy code
const fetchDataAxios = async () => {
    try {
        const res = await axios.get('http://localhost:3001/getData');
        setArtistas(res.data);
        const maxId = res.data.reduce((max, artist) => artist.id > max ? artist.id : max, 0);
        setNewId(maxId + 1);
        console.log('json ok');
    } catch (err) {
        console.error('Error fetching data', err);
        console.log('json negativo');
    }
};




