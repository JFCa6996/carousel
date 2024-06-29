Explicación del Componente SelectList
El componente SelectList es un componente funcional en React que genera una lista desplegable (<select>) con opciones (<option>) basadas en las propiedades (props) que recibe. Aquí está el desglose detallado de cada parte:

    1. Definición del Componente
    javascript
    Copy code
    const SelectList = ({ options, label, id, value, onChange }) => (
    <div className="select-header">
        <label className="select-label" htmlFor={id}>{label}:</label>
        <select id={id} name={id} value={value} onChange={onChange}>
            {options.map(option => (
                <option key={option.consec} value={option.nombre_nom} data-cod-value={option.id_nom}>
                    {option.nombre_nom}
                </option>
            ))}
        </select>
        <br />
    </div>
    );

    export default SelectList;
    2. Propiedades (props)
    El componente recibe las siguientes propiedades:

    options: Un arreglo de objetos que contiene las opciones para el <select>.
        label: Una etiqueta para el <select>.
            id: Un identificador único para el <select> y su etiqueta.
                value: El valor seleccionado actualmente del <select>.
                    onChange: Una función de manejador de eventos que se llama cuando cambia la selección en el <select>.
                        3. Estructura del Componente
                        Etiqueta y Contenedor
                        javascript
                        Copy code
                        <div className="select-header">
                            <label className="select-label" htmlFor={id}>{label}:</label>
                            div con clase select-header actúa como contenedor para el elemento <select> y su etiqueta.
                            label con clase select-label muestra la etiqueta del <select> y se asocia con el <select> mediante el atributo htmlFor.
                                Elemento <select>
                                    javascript
                                    Copy code
                                    <select id={id} name={id} value={value} onChange={onChange}>
                                        id y name se establecen en el valor pasado a través de props.
                                        value se establece en el valor seleccionado actualmente.
                                        onChange se establece en la función pasada a través de props.
                                        Generación de Opciones
                                        javascript
                                        Copy code
                                        {options.map(option => (
                                            <option key={option.consec} value={option.nombre_nom} data-cod-value={option.id_nom}>
                                                {option.nombre_nom}
                                            </option>
                                        ))}
                                        options.map(option => ...) itera sobre el arreglo options y genera un elemento <option> para cada objeto en options.
                                        key se establece en option.consec para dar una clave única a cada opción.
                                        value se establece en option.nombre_nom, que es el valor que se envía cuando se selecciona la opción.
                                        data-cod-value se establece en option.id_nom. Este es un atributo de datos personalizado (explicado más adelante).
                                        El texto dentro de <option> es option.nombre_nom, que es lo que el usuario verá en la lista desplegable.
                                            4. Atributo data-cod-value
                                            data-cod-value es un atributo de datos personalizado que se utiliza para almacenar información adicional en el elemento HTML. En este caso, data-cod-value se utiliza para almacenar id_nom de cada opción.

                                            HTML5 data-* Atributos: HTML5 permite el uso de atributos personalizados que comienzan con data-. Estos atributos se pueden usar para almacenar datos privados que no afectan la representación de la página, pero que se pueden usar mediante JavaScript.
                                            Acceso en JavaScript: Puedes acceder al valor de data-cod-value usando getAttribute('data-cod-value') en JavaScript.
                                            Ejemplo Completo
                                            javascript
                                            Copy code
                                            import React, { useState } from 'react';
                                            import SelectList from './SelectList';

                                            const App = () => {
                                                const [selectedFormato, setSelectedFormato] = useState({ formato: '', cod_formato: '' });
                                                const [groupedFormato, setGroupedFormato] = useState({
                                                '003': [
                                            { consec: 1, nombre_nom: 'Formato A', id_nom: 'FA' },
                                            { consec: 2, nombre_nom: 'Formato B', id_nom: 'FB' },
                                                ],
                                            });

                                                const handleChange = (e) => {
                                                const { value, options, selectedIndex } = e.target;
                                                const cod_formato = options[selectedIndex].getAttribute('data-cod-value');
                                                setSelectedFormato({ formato: value, cod_formato });
                                            };

                                                return (
                                                <div>
                                            {groupedFormato['003'] && (
                                                <SelectList
                                                options={groupedFormato['003']}
                                            label="Formato"
                                            id="formato"
                                            value={selectedFormato.formato}
                                            onChange={handleChange}
                                        />
                                        )}
                        </div>
                        );
                        };

                        export default App;
                        Resumen
                        El componente SelectList genera un <select> con opciones basadas en los datos proporcionados y maneja cambios en la selección. El atributo data-cod-value se usa para almacenar id_nom de cada opción y se extrae cuando la selección cambia para actualizar el estado en el componente padre.





