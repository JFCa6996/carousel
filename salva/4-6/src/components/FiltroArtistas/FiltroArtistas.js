import React, {useState} from 'react';
import './FiltroArtistas.css';

const FiltroArtistas = ({artistasPorFiltrar, onFilterChange}) => {
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
    const artistasFiltrados = artistasPorFiltrar.filter(artista => {
        return artista.datas_h.some(seccion => {
            //return seccion.datas_b.some(datos => {
                return seccion[filtroCampo] === filtroValor;
            //});
        });
    });

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


/*
* Claro, aquí tienes una explicación detallada del código:

Importación de React y useState:

import React, { useState } from 'react';
En esta línea, importamos React y la función useState desde la biblioteca 'react'. useState es un hook de React que nos
permite añadir estado a los componentes de función.
 */

/*
Importación de Estilos:

import './FiltroArtistas.css';
Aquí importamos los estilos CSS para este componente desde el archivo './FiltroArtistas.css'.
Estos estilos se aplicarán a los elementos JSX dentro de este componente.
 */

/*

Definición del Componente Funcional:

const FiltroArtistas = ({ artistas }) => { ... }
Aquí definimos nuestro componente funcional llamado FiltroArtistas. Toma un prop llamado artistas,
que presumiblemente es un arreglo de artistas que se filtrarán y mostrarán en este componente.
 */


/*

/*
Inicialización de Estados:

const [filtroCampo, setFiltroCampo] = useState('my_formato');
const [filtroValor, setFiltroValor] = useState('Solista');
Utilizamos la función useState para inicializar dos estados: filtroCampo y filtroValor,
que representan los valores seleccionados en los selectores de campo y valor
respectivamente. 'my_formato' y 'Solista' son los valores iniciales por defecto.
 */


/*
Manejadores de Cambio de Selección:

const handleChangeCampo = (event) => {
    setFiltroCampo(event.target.value);
};

const handleChangeValor = (event) => {
    setFiltroValor(event.target.value);
};
Estos son los manejadores de eventos que se ejecutan cuando cambia la selección en los selectores de campo y valor.
Actualizan los estados filtroCampo y filtroValor según la opción seleccionada por el usuario.
 */


/*
Filtrado de Artistas:

const artistasFiltrados = artistas.filter(artista => {
    return artista.datas_h.some(seccion => {
        return seccion.datas_b.some(datos => {
            return datos[filtroCampo] === filtroValor;
        });
    });
});
Aquí, artistasFiltrados se filtra utilizando el método filter(). Se compara cada artista con los valores seleccionados
en los selectores de campo y valor. El resultado es un nuevo arreglo que contiene solo los artistas que cumplen
con los criterios de filtrado.
 */


/*
Renderizado:

return (
    <div className="filter-container">
        {/* Selectores de Campo y Valor }*/
// <select className="select-container" value={filtroCampo} onChange={handleChangeCampo}>
// </select>
// <select className="select-field" value={filtroValor} onChange={handleChangeValor}>
//     {/* opciones... */}
// </select>

// {/* Lista de Resultados */}
// <ul className="result-list">
// {/* elementos de la lista... */}
// </ul>
// </div>
// );


//Aquí renderizamos el contenido del componente. Se muestran los selectores de campo y valor con sus respectivas opciones.
//Luego, se muestra la lista de resultados, que es generada por el mapeo de los artistas filtrados.

//    Exportación del Componente:


//export default FiltroArtistas;
//Finalmente, exportamos nuestro componente FiltroArtistas para que pueda ser utilizado en otros archivos de JavaScript/React.

//    Espero que esta explicación te haya sido útil. Si tienes alguna otra pregunta, ¡no dudes en preguntar!


//<select className="select-field" value={filtroValor} onChange={handleChangeValor}>
//                 {/* Generar opciones dinámicamente basadas en valores únicos */}
//                 {valoresUnicos.map((valor, index) => (
//                     <option key={index} className="select-label" value={valor}>{valor}</option>
//                 ))}
//             </select>



