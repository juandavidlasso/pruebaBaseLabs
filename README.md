## Pasos para ejecutar la prueba

1. Clonar el repositorio.

2. Abrir la carpeta donde se clono el repositorio y abrir ambas carpetas (client) y (server) en una consola cmd.

3. Ejecutar el comando `npm i` en ambas consolas para instalar las dependencias.

4. Ejecutar el comando `npm run build` en la consola de client para compilar el proyecto.

5. Para el backend utilice pgAdmin para el motor de base de datos Postgres:

    - Servidor PostgreSQL -> Base de datos postgres -> Schemas -> public -> Tables
    - Ejecutar el script adjunto para crear la tabla

6. En la consola de server ejecutar el comando `npm run dev` para iniciar el servidor.

(Nota): Actualizar los valores del archivo .env del server de acuerdo a las credenciales de su motor de base de datos.

7. En la consola de client ejecutar el comando `npm start` para iniciar el modo de producción o el comando `npm run dev` para iniciar en modo de desarrollo.

8. Por defecto el cliente inicia en el puerto 3000, abrir el navegador en la siguiente url: `http://localhost:3000/profile`

9. Puede presionar el botón para comprar corns y probar el rate limiter corn/minute.

(Nota): La prueba la desarrolle con arquitectura modular tanto el backend como el frontend, donde cada modulo tiene sus propias funciones y la lógica esta separada de los componentes JSX para una mejor estructura y organización.
