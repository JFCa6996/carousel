Para complementar la funcionalidad del servidor con las rutas necesarias para agregar, actualizar y eliminar artistas, puedes configurar las rutas POST, PUT y DELETE en tu servidor. A continuación te muestro cómo hacerlo utilizando Express y MySQL.

1. GET (Obtener datos)
Esta ruta ya la tienes configurada:

    javascript
Copy code
app.get('/data_db', (req, res) => {
    db.query('SELECT * FROM nom_artistas', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err }); // Manejar error en la consulta
        }
        res.json(results); // Enviar los datos obtenidos como JSON
        console.log('Results:', results); // Imprimir los resultados en la consola del servidor
    });
});
2. POST (Agregar un nuevo artista)
javascript
Copy code
app.post('/data_db', (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
        return res.status(400).json({ error: 'ID and Name are required' });
    }

    const query = 'INSERT INTO nom_artistas (id, name) VALUES (?, ?)';
    db.query(query, [id, name], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err });
        }
        res.status(201).json({ id, name }); // Responder con el artista creado
    });
});
3. PUT (Actualizar un artista existente)
javascript
Copy code
app.put('/data_db/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    const query = 'UPDATE nom_artistas SET name = ? WHERE id = ?';
    db.query(query, [name, id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Artist not found' });
        }
        res.json({ id, name }); // Responder con el artista actualizado
    });
});
4. DELETE (Eliminar un artista)
javascript
Copy code
app.delete('/data_db/:id', (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM nom_artistas WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Artist not found' });
        }
        res.status(204).send(); // Responder sin contenido en caso de éxito
    });
});
Completo Código del Servidor con Express y MySQL
javascript
Copy code
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Configurar conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydatabase'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// GET (Obtener datos)
app.get('/data_db', (req, res) => {
    db.query('SELECT * FROM nom_artistas', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err });
        }
        res.json(results);
        console.log('Results:', results);
    });
});

// POST (Agregar un nuevo artista)
app.post('/data_db', (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
        return res.status(400).json({ error: 'ID and Name are required' });
    }

    const query = 'INSERT INTO nom_artistas (id, name) VALUES (?, ?)';
    db.query(query, [id, name], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err });
        }
        res.status(201).json({ id, name });
    });
});

// PUT (Actualizar un artista existente)
app.put('/data_db/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    const query = 'UPDATE nom_artistas SET name = ? WHERE id = ?';
    db.query(query, [name, id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Artist not found' });
        }
        res.json({ id, name });
    });
});

// DELETE (Eliminar un artista)
app.delete('/data_db/:id', (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM nom_artistas WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Artist not found' });
        }
        res.status(204).send();
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
Notas:
    Configuración de la base de datos: Asegúrate de que los detalles de conexión (host, user, password, database) estén configurados correctamente.
    Middleware: cors se usa para permitir solicitudes desde otros dominios (útil para desarrollo front-end y back-end en diferentes puertos). bodyParser se usa para analizar JSON en las solicitudes.
    Gestión de Errores: Las rutas manejan errores y responden con códigos de estado apropiados (400, 404, 500).
    Con este código, tienes un conjunto completo de rutas para interactuar con la base de datos nom_artistas, permitiendo obtener, agregar, actualizar y eliminar artistas desde el servidor.