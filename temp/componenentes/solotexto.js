import React from 'react';
import PropTypes from 'prop-types';

// Función auxiliar para verificar si una cadena contiene solo texto
const isTextOnly = (str) => {
    // Expresión regular que coincide con cualquier cosa que no sea una letra (mayúscula o minúscula) o un espacio
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(str);
};

const TextChecker = ({ text }) => {
    // Verificar si el texto solo contiene caracteres alfabéticos
    const result = isTextOnly(text);

    return (
        <div>
            <p>El texto ingresado {result ? "solo contiene texto." : "contiene caracteres no permitidos."}</p>
        </div>
    );
};

// Definir los tipos de las props
TextChecker.propTypes = {
    text: PropTypes.string.isRequired,
};

export default TextChecker;


/*
Explicación del Código
isTextOnly Function: Esta función usa una expresión regular para verificar si la cadena solo contiene letras (mayúsculas o minúsculas) y espacios.

jsx
Copy code
const isTextOnly = (str) => {
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(str);
};
TextChecker Component: Este componente recibe una prop text, verifica si contiene solo texto utilizando la función isTextOnly, y muestra un mensaje basado en el resultado.

jsx
Copy code
const TextChecker = ({ text }) => {
  const result = isTextOnly(text);
  return (
    <div>
      <p>El texto ingresado {result ? "solo contiene texto." : "contiene caracteres no permitidos."}</p>
    </div>
  );
};
PropTypes: Para asegurar que la prop text sea una cadena y sea requerida.

jsx
Copy code
TextChecker.propTypes = {
  text: PropTypes.string.isRequired,
};
Uso del Componente
Para usar este componente en tu aplicación, puedes importarlo y pasarle la cadena que deseas verificar como una prop:

jsx
Copy code
import React from 'react';
import ReactDOM from 'react-dom';
import TextChecker from './TextChecker';

const App = () => {
  const sampleText = "Hello World";

  return (
    <div>
      <h1>Verificador de Texto</h1>
      <TextChecker text={sampleText} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
Esto te dará una interfaz simple que mostrará si la cadena proporcionada solo contiene texto o si incluye caracteres no permitidos.
 */
