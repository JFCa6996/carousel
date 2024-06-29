import React from 'react';
import PropTypes from 'prop-types';

// Función auxiliar para verificar si una cadena contiene solo texto y números
const isAlphanumeric = (str) => {
    // Expresión regular que coincide con cualquier cosa que no sea una letra o un número
    const regex = /^[A-Za-z0-9]+$/;
    return regex.test(str);
};

const AlphanumericChecker = ({ text }) => {
    // Verificar si el texto solo contiene caracteres alfabéticos y numéricos
    const result = isAlphanumeric(text);

    return (
        <div>
            <p>El texto ingresado {result ? "solo contiene texto y números." : "contiene caracteres no permitidos."}</p>
        </div>
    );
};

// Definir los tipos de las props
AlphanumericChecker.propTypes = {
    text: PropTypes.string.isRequired,
};

export default AlphanumericChecker;

/*
Explicación del Código
isAlphanumeric Function: Esta función usa una expresión regular para verificar si la cadena solo contiene letras y números.

jsx
Copy code
const isAlphanumeric = (str) => {
  const regex = /^[A-Za-z0-9]+$/;
  return regex.test(str);
};
AlphanumericChecker Component: Este componente recibe una prop text, verifica si contiene solo caracteres alfabéticos y numéricos utilizando la función isAlphanumeric, y muestra un mensaje basado en el resultado.

jsx
Copy code
const AlphanumericChecker = ({ text }) => {
  const result = isAlphanumeric(text);
  return (
    <div>
      <p>El texto ingresado {result ? "solo contiene texto y números." : "contiene caracteres no permitidos."}</p>
    </div>
  );
};
PropTypes: Para asegurar que la prop text sea una cadena y sea requerida.

jsx
Copy code
AlphanumericChecker.propTypes = {
  text: PropTypes.string.isRequired,
};
Uso del Componente
Para usar este componente en tu aplicación, puedes importarlo y pasarle la cadena que deseas verificar como una prop:

jsx
Copy code
import React from 'react';
import ReactDOM from 'react-dom';
import AlphanumericChecker from './AlphanumericChecker';

const App = () => {
  const sampleText = "Hello123";

  return (
    <div>
      <h1>Verificador Alfanumérico</h1>
      <AlphanumericChecker text={sampleText} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
Esto te dará una interfaz simple que mostrará si la cadena proporcionada solo contiene texto y números o si incluye caracteres no permitidos.






 */