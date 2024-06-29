//Para leer los datos de un archivo JSON alojado en http://localhost:3000/arreglos/en.json y mostrarlos en tu aplicación React,
// puedes utilizar la función fetch para realizar una solicitud GET y luego actualizar el estado con los datos recibidos.
// A continuación te muestro un ejemplo de cómo hacerlo:

    /*Crear una función que realice una solicitud GET para obtener los datos.
    Utilizar useEffect para llamar a esta función cuando el componente se monte.
    Aquí tienes un ejemplo de código:*/


import React, { useState, useEffect } from 'react';

const App = () => {
    const [artistas, setArtistas] = useState([]);

    // Explicado abajo
    useEffect(() => {
        // Función para obtener los datos desde el servidor
        const fetchArtistas = async () => {
            try {
                // Realiza una solicitud GET al servidor para obtener los datos
                const response = await fetch('http://localhost:3000/arreglos/en.json');
                // Extrae el cuerpo de la respuesta como JSON
                const data = await response.json();
                // Actualiza el estado del componente con los datos obtenidos
                setArtistas(data);
            } catch (error) {
                // Maneja cualquier error que pueda ocurrir durante la solicitud
                console.error('Error al obtener los datos:', error);
            }
        };

        // Llama a la función para obtener los datos una vez que el componente está montado
        fetchArtistas();
    }, []);


    return (
        <div>
            <h1>Artistas</h1>
            {artistas.map((artista, index) => (
                <div key={index}>
                    <h2>{artista.first_header}</h2>
                    {artista.datas_h.map((data_h, i) => (
                        <div key={i}>
                            <p>Formato: {data_h.my_formato}</p>
                            <p>Instrumento: {data_h.my_inst}</p>
                            <p>Tipo: {data_h.my_tipo}</p>
                            {data_h.datas_b.map((data_b, j) => (
                                <div key={j}>
                                    <img src={data_b.foto} alt={`Foto de ${artista.first_header}`} />
                                    <p>{data_b.text1}</p>
                                    <p>{data_b.text2}</p>
                                    <p>{data_b.text3}</p>
                                    <p>{data_b.text4}</p>
                                    <p>{data_b.text5}</p>
                                    {data_b.video && <video src={data_b.video} controls />}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default App;
/*
Explicación línea por línea:

useEffect(() => { ... }, []);: Define un efecto que se ejecutará después de que el componente se haya montado en el DOM.
El array vacío [] como segundo argumento indica que este efecto solo se ejecutará una vez, después del primer renderizado del componente.
 */

//const fetchArtistas = async () => { ... };: Define una función fetchArtistas que realizará la solicitud GET al servidor para obtener los datos.

//Cuando se declara una función como async, esta automáticamente devuelve una promesa. Esto significa que dentro de la función se puede usar la
// palabra clave await para pausar la ejecución del código hasta que una operación asincrónica se complete y se resuelva la promesa devuelta.

// En el código proporcionado, la función fetchArtistas se declara como async porque realiza una operación asincrónica: una solicitud de red para
// obtener datos desde el servidor. Al marcarla como async, podemos usar await dentro de ella para esperar la respuesta del servidor antes de continuar
// con la ejecución del código.
//En este caso, await fetch('http://localhost:3000/arreglos/en.json') pausa la ejecución del código hasta que la solicitud de red se complete y se
// reciba una respuesta del servidor. De manera similar, await response.json() pausa la ejecución hasta que la respuesta se convierta en formato JSON.
// Usar async y await puede hacer que el código asincrónico sea más fácil de leer y entender, evitando la complejidad de los callbacks o las promesas encadenadas.

//try { ... } catch (error) { ... }: Utiliza un bloque try-catch para manejar errores potenciales que puedan ocurrir durante la solicitud.
// Si la solicitud es exitosa, los datos se convierten en formato JSON y se actualiza el estado del componente con esos datos.
// Si ocurre un error, se captura y se muestra en la consola.

//try: Este es el bloque donde se coloca el código que queremos ejecutar y que podría lanzar una excepción.
// catch (error): Este bloque se ejecuta si y solo si una excepción es lanzada en el bloque try. error es una variable que contendrá información sobre la excepción que ocurrió.
//El bloque try intenta realizar una solicitud a un servidor para obtener datos, convertir la respuesta en formato JSON y luego actualizar el estado del componente con esos datos.
// Si en algún momento durante este proceso se produce una excepción (por ejemplo, debido a problemas de red o un error en la respuesta del servidor), el control se transfiere
// al bloque catch, donde se maneja la excepción mostrando un mensaje de error en la consola.

//El bloque try en JavaScript se utiliza para envolver un conjunto de declaraciones que podrían lanzar una excepción, es decir, generar un error durante su ejecución.
// La idea detrás de try es permitir que el código maneje estas excepciones de manera controlada, en lugar de que causen que el programa se detenga abruptamente.
//
// Cuando se ejecuta un bloque try, el código dentro de él se evalúa normalmente. Si en algún punto se produce una excepción, el control se transfiere inmediatamente
// al bloque catch, saltándose cualquier código restante en el bloque try. Si no se produce ninguna excepción, el bloque catch se omite por completo.

//La estructura básica es la siguiente:
//
//
// try {
//     // Bloque de código que puede generar una excepción
// } catch (error) {
//     // Bloque de código para manejar la excepción
// }

//fetchArtistas();: Llama a la función fetchArtistas una vez que el componente se haya montado en el DOM, lo que desencadena la solicitud para obtener los datos
//desde el servidor.

//En resumen, este código utiliza useEffect para realizar una solicitud al servidor y obtener datos una vez que el componente se haya montado en el DOM.
// Los datos obtenidos se actualizan en el estado del componente, lo que permite que el componente renderice la información recién adquirida.



    /*Utilizamos el hook useEffect para llamar a fetchArtistas cuando el componente se monta.
    La función fetchArtistas realiza una solicitud GET a http://localhost:3000/arreglos/en.json, convierte la respuesta
    a JSON y actualiza el estado artistas con los datos recibidos.
    En el renderizado, recorremos el arreglo artistas y mostramos la información correspondiente para cada artista.
    Asegúrate de que el servidor esté configurado para servir el archivo JSON en la ruta especificada (http://localhost:3000/arreglos/en.json).*/


//Código completo para guardar el estado de artistas en un archivo JSON en http://localhost:3000/arreglos/en.json.
// Dado que estás trabajando en un entorno de desarrollo local, asumiré que puedes utilizar un servidor Node.js con Express
// para manejar las solicitudes de guardado.

    //Paso 1: Configurar el servidor Node.js con Express
    //Primero, debes tener un servidor Node.js con Express que escuche las solicitudes POST para guardar el archivo JSON.

    //Crea un nuevo directorio para tu servidor y navega a él.

    //Inicializa un proyecto Node.js:


//npm init -y
//Instala Express:


//npm install express body-parser fs

//Crea un archivo server.js con el siguiente contenido:


const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001; // Puedes cambiar el puerto si lo deseas

app.use(bodyParser.json());

app.post('/arreglos/en.json', (req, res) => {
    const artistas = req.body;
    const filePath = path.join(__dirname, 'arreglos', 'en.json');

    fs.writeFile(filePath, JSON.stringify(artistas, null, 2), (err) => {
        if (err) {
            console.error('Error al guardar el archivo:', err);
            res.status(500).send('Error al guardar el archivo');
        } else {
            res.send('Archivo guardado exitosamente');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

//Crea el directorio arreglos dentro del directorio del proyecto del servidor y asegúrate de que el archivo en.json exista (puedes crear un archivo vacío).

//Inicia el servidor:


//node server.js

//Paso 2: Crear el código de React para guardar los datos

//Ahora, actualiza tu componente React para que incluya una función que realice una solicitud POST al servidor para guardar el estado de artistas.


import React, { useState, useEffect } from 'react';

const App = () => {
    const [artistas, setArtistas] = useState([]);

    useEffect(() => {
        // Función para obtener los datos desde el servidor
        const fetchArtistas = async () => {
            try {
                const response = await fetch('http://localhost:3000/arreglos/en.json');
                const data = await response.json();
                setArtistas(data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchArtistas();
    }, []);

    const saveArtistas = async () => {
        try {
            const response = await fetch('http://localhost:3001/arreglos/en.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(artistas)
            });

            if (response.ok) {
                alert('Datos guardados exitosamente');
            } else {
                alert('Error al guardar los datos');
            }
        } catch (error) {
            console.error('Error al guardar los datos:', error);
        }
    };

    return (
        <div>
            <h1>Artistas</h1>
            {artistas.map((artista, index) => (
                <div key={index}>
                    <h2>{artista.first_header}</h2>
                    {artista.datas_h.map((data_h, i) => (
                        <div key={i}>
                            <p>Formato: {data_h.my_formato}</p>
                            <p>Instrumento: {data_h.my_inst}</p>
                            <p>Tipo: {data_h.my_tipo}</p>
                            {data_h.datas_b.map((data_b, j) => (
                                <div key={j}>
                                    <img src={data_b.foto} alt={`Foto de ${artista.first_header}`} />
                                    <p>{data_b.text1}</p>
                                    <p>{data_b.text2}</p>
                                    <p>{data_b.text3}</p>
                                    <p>{data_b.text4}</p>
                                    <p>{data_b.text5}</p>
                                    {data_b.video && <video src={data_b.video} controls />}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
            <button onClick={saveArtistas}>Guardar Artistas</button>
        </div>
    );
};

export default App;

//En este código:

    /*Se utiliza useEffect para obtener los datos desde http://localhost:3000/arreglos/en.json cuando el componente se monta.
    La función saveArtistas realiza una solicitud POST a http://localhost:3001/arreglos/en.json para guardar el estado de artistas.
    Se agrega un botón "Guardar Artistas" que llama a saveArtistas cuando se hace clic en él.
    Asegúrate de que el servidor Node.js esté ejecutándose y escuchando en el puerto correcto (en este ejemplo, 3001).*/

//Vamos a desglosar y explicar la función saveArtistas paso a paso:
//
// Definición de la Función
// javascript
// Copy code
// const saveArtistas = async () => {
// Aquí estamos definiendo saveArtistas como una función asincrónica (indicada por async), lo que permite el uso de await dentro de la función para manejar operaciones asincrónicas de forma más sencilla y clara.
//
// Bloque try
// javascript
// Copy code
// try {
// El bloque try se utiliza para envolver el código que podría lanzar una excepción (error). Si ocurre algún error en este bloque, el control se transfiere al bloque catch.
//
// Realizar la Solicitud POST
// javascript
// Copy code
// const response = await fetch('http://localhost:3001/arreglos/en.json', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(artistas)
// });
// await fetch('http://localhost:3001/arreglos/en.json', { ... }): Aquí estamos utilizando fetch para hacer una solicitud HTTP POST a la URL http://localhost:3001/arreglos/en.json. La palabra clave await indica que la ejecución de la función debe esperar hasta que la promesa de fetch se resuelva (es decir, hasta que la solicitud haya terminado y se haya recibido una respuesta).
// method: 'POST': Especifica que el método HTTP utilizado será POST. Esto indica que estamos enviando datos al servidor para que los procese.
// headers: { 'Content-Type': 'application/json' }: Establece el encabezado Content-Type de la solicitud a application/json, lo cual indica que el cuerpo de la solicitud estará en formato JSON.
// body: JSON.stringify(artistas): Convierte el estado artistas a una cadena JSON y lo incluye en el cuerpo de la solicitud. Este es el contenido que se enviará al servidor.
// Manejo de la Respuesta
// javascript
// Copy code
// if (response.ok) {
//     alert('Datos guardados exitosamente');
// } else {
//     alert('Error al guardar los datos');
// }
// if (response.ok): Verifica si la respuesta del servidor indica éxito. La propiedad ok de la respuesta es true si el código de estado HTTP está en el rango 200-299.
// alert('Datos guardados exitosamente'): Si la respuesta fue exitosa, muestra una alerta indicando que los datos se guardaron exitosamente.
// alert('Error al guardar los datos'): Si la respuesta no fue exitosa, muestra una alerta indicando que hubo un error al guardar los datos.
// Bloque catch
// javascript
// Copy code
// } catch (error) {
//     console.error('Error al guardar los datos:', error);
// }
// catch (error): Si ocurre algún error en el bloque try, el control pasa a este bloque.
// console.error('Error al guardar los datos:', error): Muestra un mensaje de error en la consola con los detalles del error ocurrido.
// Final de la Función
// javascript
// Copy code
// };
// Finaliza la definición de la función saveArtistas.
//
// Resumen
// La función saveArtistas realiza una solicitud POST a un servidor para guardar los datos actuales de artistas.
// Si la solicitud es exitosa, muestra una alerta indicando éxito; si no, muestra una alerta indicando un error.
// Cualquier error que ocurra durante el proceso se captura y se muestra en la consola.