import React from 'react';
import PropTypes from 'prop-types';

// Función auxiliar para verificar si una cadena tiene formato de email
const isValidEmail = (str) => {
    // Expresión regular para validar el formato de un email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(str);
};

const EmailChecker = ({ email }) => {
    // Verificar si el email tiene un formato válido
    const result = isValidEmail(email);

    return (
        <div>
            <p>El email ingresado {result ? "es válido." : "no es válido."}</p>
        </div>
    );
};

// Definir los tipos de las props
EmailChecker.propTypes = {
    email: PropTypes.string.isRequired,
};

export default EmailChecker;

/*
Explicación del Código
isValidEmail Function: Esta función usa una expresión regular para verificar si la cadena tiene el formato de un email.

jsx
Copy code
const isValidEmail = (str) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(str);
};
EmailChecker Component: Este componente recibe una prop email, verifica si tiene un formato válido utilizando la función isValidEmail, y muestra un mensaje basado en el resultado.

jsx
Copy code
const EmailChecker = ({ email }) => {
  const result = isValidEmail(email);
  return (
    <div>
      <p>El email ingresado {result ? "es válido." : "no es válido."}</p>
    </div>
  );
};
PropTypes: Para asegurar que la prop email sea una cadena y sea requerida.

jsx
Copy code
EmailChecker.propTypes = {
  email: PropTypes.string.isRequired,
};
Uso del Componente
Para usar este componente en tu aplicación, puedes importarlo y pasarle la cadena que deseas verificar como una prop:

jsx
Copy code
import React from 'react';
import ReactDOM from 'react-dom';
import EmailChecker from './EmailChecker';

const App = () => {
  const sampleEmail = "test@example.com";

  return (
    <div>
      <h1>Verificador de Email</h1>
      <EmailChecker email={sampleEmail} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
Esto te dará una interfaz simple que mostrará si la cadena proporcionada es un email válido o no.






 */
