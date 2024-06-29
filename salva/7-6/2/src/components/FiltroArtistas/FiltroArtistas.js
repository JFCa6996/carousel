//import React, { useState, useEffect } from 'react';
import './FiltroArtistas.css';
import React, {useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';

const FiltroArtistas = ({ artistasPorFiltrar, onFilterChange,my_filtroCampo,my_filtroValor }) => {
    const [filtroCampo, setFiltroCampo] = useState(my_filtroCampo); // Campo inicial de filtro
    const [filtroValor, setFiltroValor] = useState(my_filtroValor); // Valor inicial de filtro

    // Manejar cambios en el selector de campos de filtro
    const handleChangeCampo = (event) => {
        setFiltroCampo(event.target.value);
        setFiltroValor("Todos")
    };

    // Manejar cambios en el selector de valores de filtro
    const handleChangeValor = (event) => {
        setFiltroValor(event.target.value);
        filtrarArtistas()
    };

    // Filtrar artistas en base al campo y valor seleccionados
    const filtrarArtistas = () => {
        if (filtroValor === 'Todos') {
            return artistasPorFiltrar;
        }
        return artistasPorFiltrar.filter(artista => {
            return artista.datas_h.some(seccion => {
                return seccion[filtroCampo] === filtroValor;
            });
        });
    };

    // Llamar a onFilterChange con los artistas filtrados cuando cambian los filtros o los artistas
    useEffect(() => {
        const artistasFiltrados = filtrarArtistas();
        onFilterChange(artistasFiltrados);
    }, [filtroCampo, filtroValor, artistasPorFiltrar]);

    const artistasFiltrados = filtrarArtistas();
    //console.log(filtroValor)
    return (
        <div className="filter-container">
            {/* Selector de campo de filtro */}
            <select className="select-container" value={filtroCampo} onChange={handleChangeCampo}>
                <option className="select-label" value="my_formato">Formato</option>
                <option className="select-label" value="my_inst">Instrumento</option>
                {/*<option className="select-label" value="my_tipo">Tipo</option>*/}
            </select>

            {/*  my_formato: "Solista" my_formato: "Duo"  my_formato: "Trio"*/}
            {/*  my_tipo: "Artista"  my_tipo: "Videos"  my_tipo: "Servicios" my_tipo: "Contacto" my_tipo: "About" my_tipo: "Banda" */}
            {/* my_inst: "Violin" my_inst: "Piano"  my_inst: "Cello" */}
            {/* id: "Seccion 1"    */}


            {/* Selector de valor de filtro  my_formato*/}

            {filtroCampo == "my_formato" && (
                <select className="select-field" value={filtroValor} onChange={handleChangeValor}>
                    <option className="select-field" value="Todos">Todos</option>
                    <option className="select-field" value="Solista">Solista</option>
                    <option className="select-field" value="Duo">Duo</option>
                    <option className="select-field" value="Trio">Trio</option>
                </select>
            )}

            {filtroCampo == "my_inst" && (
                <select className="select-field" value={filtroValor} onChange={handleChangeValor}>
                    <option className="select-field" value="Todos">Todos</option>
                    <option className="select-field" value="Violin">Violin</option>
                    <option className="select-field" value="Piano">Piano</option>
                    <option className="select-field" value="Cello">Cello</option>
                </select>
            )}

            {/*{filtroCampo == "my_tipo" && (
                <select className="select-field" value={filtroValor} onChange={handleChangeValor}>
                    <option className="select-field" value="Todos">Todos</option>
                    <option className="select-field" value="Artista">Artista</option>
                    <option className="select-field" value="Videos">Videos</option>
                    <option className="select-field" value="Servicios">Servicios</option>
                    <option className="select-field" value="Contacto">Contacto</option>
                    <option className="select-field" value="About">About</option>
                    <option className="select-field" value="Home">Home</option>
                </select>
            )}*/}

            {/* Mostrar resultados filtrados
            <ul className="result-list">
                {artistasFiltrados.map((artista, index) => (
                    <li key={index} className="result-item">{artista.nombre}</li>
                ))}
            </ul>*/}
        </div>
    );
};

export default FiltroArtistas;
