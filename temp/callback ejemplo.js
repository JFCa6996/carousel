
/*Para incluir otra línea de asignación en el fragmento de código que has proporcionado, puedes modificar la función de
devolución de llamada (callback function) para que incluya las dos asignaciones. Aquí tienes un ejemplo de cómo podrías hacerlo:

Supongamos que quieres añadir otra asignación para nombre, entonces podrías hacerlo de la siguiente manera:*/

onFormato_Change={formato => setArtistasSeleccionados({...artistasSeleccionados,formato,nombre: 'nuevoNombre'})}

/*En este ejemplo, además de actualizar el formato, también se está asignando un nuevo valor a nombre dentro
del estado artistasSeleccionados.
 */

/*Si necesitas que la segunda asignación dependa de otro valor, puedes recibir ese valor como argumento en la función.
Aquí tienes un ejemplo más complejo:
 */


onFormato_Change={(formato, nuevoValor) => setArtistasSeleccionados({...artistasSeleccionados,formato,otroCampo: nuevoValor})}

/*Y si llamas a esta función desde algún evento o función, deberías pasar ambos argumentos:*/

const handleFormatoChange = (formato) => {
    const nuevoValor = 'valorDeterminado'; // Puedes calcular o determinar este valor de alguna manera
    onFormato_Change(formato, nuevoValor);
}

// Uso en algún lugar del JSX
<button onClick={() => handleFormatoChange('nuevoFormato')}>Cambiar Formato</button>

/*Con esto, el estado artistasSeleccionados se actualizará tanto con el nuevo formato como con otroCampo
(o cualquier otro campo que necesites actualizar).
 */