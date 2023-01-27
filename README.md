Este proyecto es una herramienta para almacenar datos y poder llevar a cabo relevamientos técnicos, guardando en una base de datos texto e imágenes relativas al estado de funcionamiento de las instalaciones de una empresa.

<b><a href='https://createreactapp-brown.vercel.app/' target='_blank'>Visitar deploy</a></b>

Para correr el proyecto <b>localmente</b>, clone el código y siga los siguientes pasos: 

1. En la carpeta `api` se debe crear un archivo `.env` con las siguientes variables <br/>
`DB_USER=postgres` <br/>
`DB_PASSWORD=[contraseña para usuario postgres]` <br/>
`DB_HOST=localhost:5432` <br/>
Reemplazando los valores según los de la máquina local donde se levante el proyecto. 

2. Luego, se debe crear con SQL una base de datos llamada `prodeman`.
Con el comando 
CREATE DATABASE prodeman;

![image](https://user-images.githubusercontent.com/94709834/208845278-f8562a3b-82cf-49a6-94ff-de92b8e00ba6.png)

3. Luego, se debe ejecutar, desde la consola de visual studio code, el comando `npm i` tanto en el directorio `client` como en `api`. 

![image](https://user-images.githubusercontent.com/94709834/208845779-a4032ad0-3399-405b-bc6d-253fef19b97a.png)

Una vez instaladas las tecnologías y con la base de datos de nombre `prodeman` creada, se debe ejecutar el comando `npm start` en cada uno de los mismos directorios.

![image](https://user-images.githubusercontent.com/94709834/208845855-28aaff41-ee34-4f84-ab02-43e35a212329.png)

Conclusión

Con esto efectuado, se podrá hacer uso de la aplicación en el puerto <a href='http://localhost:3000' target='_blank'>http://localhost:3000</a> (donde por defecto el front-end se levanta), a menos que la consola del Visual Studio Code indique otra cosa. 

Recomiendo para probar la aplicación, registrarse como usuario. Ya que el administrador por la naturaleza de la aplicación no puede iniciar relevamientos o hacer ningún tipo de cambio en los mismos.

