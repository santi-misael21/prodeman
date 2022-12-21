Este proyecto es una herramienta para almacenar datos y poder llevar a cabo relevamientos técnicos, guardando en una base de datos texto e imágenes relativas al estado de funcionamiento de las instalaciones de una empresa.

Para correr el proyecto seguir los siguientes pasos:

1. En la carpeta `api` se debe crear un archivo `.env` con las siguientes variables <br/>
`DB_USER=postgres` <br/>
`DB_PASSWORD=[contraseña para usuario postgres]` <br/>
`DB_HOST=localhost:5432` <br/>
Reemplazando los valores según los de la máquina local donde se levante el proyecto. 

2. Luego, se debe crear con SQL una base de datos llamada prodeman1.
Con el comando 
CREATE DATABASE prodeman;

![image](https://user-images.githubusercontent.com/94709834/208843298-ab47f00b-0ab6-497c-9e0c-d64b890a05ad.png)

3. Luego, se debe ejecutar, desde la consola de visual studio code, el comando `npm i` tanto en el directorio `client` como en `api`. 

![image](https://user-images.githubusercontent.com/94709834/208842914-07ab6386-86c4-4c50-99f8-ea5de30f551d.png)

Una vez instaladas las tecnologías y con la base de datos de nombre `prodeman` creada, se debe ejecutar el comando `npm start` en cada uno de los mismos directorios. 

![image](https://user-images.githubusercontent.com/94709834/208842982-7160aac4-b9f7-49cb-b2db-be4c51228c69.png)

Conclusión

Con esto efectuado, se podrá hacer uso de la aplicación en el puerto http://localhost:3000 (donde por defecto el front-end se levanta), a menos que la consola del Visual Studio Code indique otra cosa. 

Recomiendo para probar la aplicación, registrarse como usuario. Ya que el administrador por la naturaleza de la aplicación no puede iniciar relevamientos o hacer ningún tipo de cambio en los mismos.

