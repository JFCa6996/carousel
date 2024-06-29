Claro, te mostraré cómo actualizar y leer el estado usando el hook useState en React con el estado inicial { pais: '', cod_pais: '' }.

Declaración del Estado
Primero, declaramos el estado usando useState:

    javascript
Copy code
import React, { useState } from 'react';

const App = () => {
    const [selectedPais, setSelectedPais] = useState({ pais: '', cod_pais: '' });

    // Resto del código...
};
Actualizar el Estado
Para actualizar el estado, usaremos la función setSelectedPais. Por ejemplo, si quieres actualizar tanto pais como cod_pais, puedes hacerlo de la siguiente manera:

    javascript
Copy code
const handlePaisChange = (pais, cod_pais) => {
    setSelectedPais({ pais, cod_pais });
};
Leer el Estado
Para leer el estado, simplemente accede a selectedPais y sus propiedades:

    javascript
Copy code
console.log(selectedPais.pais); // Accede al nombre del país
console.log(selectedPais.cod_pais); // Accede al código del país
Ejemplo Completo con EditableForm
Ahora te mostraré cómo usar esto en conjunto con el componente EditableForm.

    EditableForm.js
javascript
Copy code
import React from 'react';

const EditableForm = ({ pais, onPais_Change }) => {
    const countries = [
        { nombre_nom: "Argentina", id_nom: "AR" },
        { nombre_nom: "Brasil", id_nom: "BR" },
        { nombre_nom: "Chile", id_nom: "CL" },
        { nombre_nom: "Colombia", id_nom: "CO" },
        { nombre_nom: "México", id_nom: "MX" },
        // Agrega más países según sea necesario
    ];

    const handleChange = (event) => {
        const selectedOption = event.target.selectedOptions[0];
        const selectedCountry = selectedOption.value;
        const selectedCode = selectedOption.getAttribute('data-cod-value');
        onPais_Change(selectedCountry, selectedCode);
    };

    return (
        <div>
            <SelectList
                options={countries}
                label="País"
                id="pais"
                value={pais}
                onChange={handleChange}
            />
        </div>
    );
};

const SelectList = ({ options, label, id, value, onChange }) => (
    <div className='select-header'>
        <label className="select-label" htmlFor={id}>{label}:</label>
        <select id={id} name={id} value={value} onChange={onChange}>
            <option value="">Seleccione un país</option>
            {options.map(option => (
                <option key={option.id_nom} value={option.nombre_nom} data-cod-value={option.id_nom}>
                    {option.nombre_nom}
                </option>
            ))}
        </select>
        <br />
    </div>
);

export default EditableForm;
App.js
javascript
Copy code
import React, { useState } from 'react';
import EditableForm from './EditableForm';

const App = () => {
    const [selectedPais, setSelectedPais] = useState({ pais: '', cod_pais: '' });

    const handlePaisChange = (pais, cod_pais) => {
        setSelectedPais({ pais, cod_pais });
    };

    return (
        <div>
            <h1>Formulario Editable</h1>
            <EditableForm
                pais={selectedPais.pais}
                onPais_Change={handlePaisChange}
            />
            <div>
                <h2>País Seleccionado</h2>
                <p>Nombre: {selectedPais.pais}</p>
                <p>Código: {selectedPais.cod_pais}</p>
            </div>
        </div>
    );
};

export default App;
Resumen
Declaración del estado: const [selectedPais, setSelectedPais] = useState({ pais: '', cod_pais: '' });
Actualizar el estado: setSelectedPais({ pais, cod_pais });
Leer el estado: selectedPais.pais y selectedPais.cod_pais
Esto debería solucionar cualquier problema relacionado con la actualización y lectura del estado en tu aplicación React.