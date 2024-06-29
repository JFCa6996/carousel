import React from 'react';
import PropTypes from 'prop-types';

const LowerCaseConverter = ({ text }) => {
    // Convertir el texto a minúsculas
    const lowerCaseText = text.toLowerCase();

    return (
        <div>
            <p>{lowerCaseText}</p>
        </div>
    );
};

// Definir los tipos de las props
LowerCaseConverter.propTypes = {
    text: PropTypes.string.isRequired,
};

export default LowerCaseConverter;
/*
Explicación del Código
LowerCaseConverter Component: Este componente recibe una prop text, convierte el texto a minúsculas utilizando el método
toLowerCase(), y lo muestra en un elemento <p>.

jsx
Copy code
const LowerCaseConverter = ({ text }) => {
  const lowerCaseText = text.toLowerCase();

  return (
    <div>
      <p>{lowerCaseText}</p>
    </div>
  );
};
PropTypes: Para asegurar que la prop text sea una cadena y sea requerida.

jsx
Copy code
LowerCaseConverter.propTypes = {
  text: PropTypes.string.isRequired,
};
Uso del Componente
Para usar este componente en tu aplicación, puedes importarlo y pasarle la cadena que deseas convertir a minúsculas como una prop:

jsx
Copy code
import React from 'react';
import ReactDOM from 'react-dom';
import LowerCaseConverter from './LowerCaseConverter';

const App = () => {
  const sampleText = "Hello, World!";

  return (
    <div>
      <h1>Convertidor a Minúsculas</h1>
      <LowerCaseConverter text={sampleText} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
Esto te dará una interfaz simple que mostrará el texto proporcionado en minúsculas.






 */
