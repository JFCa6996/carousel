import React from 'react';
import PropTypes from 'prop-types';

// Función auxiliar para verificar si una cadena tiene formato de fecha (YYYY-MM-DD)
const isValidDate = (str) => {
    // Expresión regular para validar el formato de una fecha (YYYY-MM-DD)
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(str)) {
        return false;
    }

    // Verificar si la fecha es válida
    const date = new Date(str);
    const timestamp = date.getTime();

    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
        return false;
    }

    return str === date.toISOString().split('T')[0];
};

const DateChecker = ({ date }) => {
    // Verificar si la fecha tiene un formato válido
    const result = isValidDate(date);

    return (
        <div>
            <p>La fecha ingresada {result ? "es válida." : "no es válida."}</p>
        </div>
    );
};

// Definir los tipos de las props
DateChecker.propTypes = {
    date: PropTypes.string.isRequired,
};

export default DateChecker;
/*
Explicación del Código
isValidDate Function: Esta función usa una expresión regular para verificar si la cadena tiene el formato de una fecha en "YYYY-MM-DD". Luego verifica si la fecha es válida.

jsx
Copy code
const isValidDate = (str) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (!regex.test(str)) {
    return false;
  }

  const date = new Date(str);
  const timestamp = date.getTime();

  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    return false;
  }

  return str === date.toISOString().split('T')[0];
};
DateChecker Component: Este componente recibe una prop date, verifica si tiene un formato válido utilizando la función isValidDate, y muestra un mensaje basado en el resultado.

jsx
Copy code
const DateChecker = ({ date }) => {
  const result = isValidDate(date);
  return (
    <div>
      <p>La fecha ingresada {result ? "es válida." : "no es válida."}</p>
    </div>
  );
};
PropTypes: Para asegurar que la prop date sea una cadena y sea requerida.

jsx
Copy code
DateChecker.propTypes = {
  date: PropTypes.string.isRequired,
};
Uso del Componente
Para usar este componente en tu aplicación, puedes importarlo y pasarle la cadena que deseas verificar como una prop:

jsx
Copy code
import React from 'react';
import ReactDOM from 'react-dom';
import DateChecker from './DateChecker';

const App = () => {
  const sampleDate = "2024-06-10";

  return (
    <div>
      <h1>Verificador de Fecha</h1>
      <DateChecker date={sampleDate} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
Esto te dará una interfaz simple que mostrará si la cadena proporcionada es una fecha válida o no.






 */
