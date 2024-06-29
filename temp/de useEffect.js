/*
   Si pasas un array vacío ([]), el efecto solo se ejecutará una vez después del montaje inicial del componente.
   Si omites este array, el efecto se ejecutará después de cada renderizado del componente.
   Si proporcionas variables en el array, el efecto se ejecutará solo si esas variables han cambiado desde la
   última renderización del componente.
   Dentro del efecto, puedes realizar cualquier operación asíncrona, como realizar solicitudes HTTP, manipular el DOM o suscribirte a eventos.
   También puedes devolver una función de limpieza opcional, que se ejecutará antes de que el componente se desmonte o antes de que el efecto se vuelva a ejecutar.
   Por ejemplo, en el contexto de la aplicación React que lee datos de una base de datos MySQL, podríamos usar useEffect para realizar
   una solicitud HTTP al servidor backend para obtener los datos cuando el componente se monte por primera vez. El siguiente es un ejemplo simplificado:
   */