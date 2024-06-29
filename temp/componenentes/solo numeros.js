import React from 'react';
import PropTypes from 'prop-types';

// Función auxiliar para verificar si una cadena contiene solo números
const isNumbersOnly = (str) => {
    // Expresión regular que coincide con cualquier cosa que no sea un número
    const regex = /^[0-9]+$/;
    return regex.test(str);
};

const NumberChecker = ({ text }) => {
    // Verificar si el texto solo contiene caracteres numéricos
    const result = isNumbersOnly(text);

    return (
        <div>
            <p>El texto ingresado {result ? "solo contiene números." : "contiene caracteres no permitidos."}</p>
        </div>
    );
};

// Definir los tipos de las props
NumberChecker.propTypes = {
    text: PropTypes.string.isRequired,
};

export default NumberChecker;

/*
Explicación del Código
isNumbersOnly Function: Esta función usa una expresión regular para verificar si la cadena solo contiene números.

jsx
Copy code
const isNumbersOnly = (str) => {
  const regex = /^[0-9]+$/;
  return regex.test(str);
};
NumberChecker Component: Este componente recibe una prop text, verifica si contiene solo números utilizando la función isNumbersOnly, y muestra un mensaje basado en el resultado.

jsx
Copy code
const NumberChecker = ({ text }) => {
  const result = isNumbersOnly(text);
  return (
    <div>
      <p>El texto ingresado {result ? "solo contiene números." : "contiene caracteres no permitidos."}</p>
    </div>
  );
};
PropTypes: Para asegurar que la prop text sea una cadena y sea requerida.

jsx
Copy code
NumberChecker.propTypes = {
  text: PropTypes.string.isRequired,
};
Uso del Componente
Para usar este componente en tu aplicación, puedes importarlo y pasarle la cadena que deseas verificar como una prop:

jsx
Copy code
import React from 'react';
import ReactDOM from 'react-dom';
import NumberChecker from './NumberChecker';

const App = () => {
  const sampleText = "123456";

  return (
    <div>
      <h1>Verificador de Números</h1>
      <NumberChecker text={sampleText} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
Esto te dará una interfaz simple que mostrará si la cadena proporcionada solo contiene números o si incluye caracteres no permitidos.






 */