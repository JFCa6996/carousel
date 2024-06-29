import React from 'react';
import PropTypes from 'prop-types';

const UpperCaseConverter = ({ text }) => {
    // Convertir el texto a mayúsculas
    const upperCaseText = text.toUpperCase();

    return (
        <div>
            <p>{upperCaseText}</p>
        </div>
    );
};

// Definir los tipos de las props
UpperCaseConverter.propTypes = {
    text: PropTypes.string.isRequired,
};

export default UpperCaseConverter;

/*
UpperCaseConverter Component: Este componente recibe una prop text, convierte el texto a mayúsculas utilizando el método toUpperCase(), y lo muestra en un elemento <p>.
jsx
 */
