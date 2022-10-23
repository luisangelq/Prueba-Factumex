# Prueba Factumex

- Este proyecto fue creado como reto de codigo, donde se integran multiples funcionalidades como manejo de ambientes de desarrollo, Context API como manejador del estado, Hashrouting con rutas protegidas, persistencia de datos, consumo y manejo de API de terceros, manejador de imagenes.

Se trato de integrar typescript pero al ser una tecnologia donde no se tenia experiencia no se saco el maximo provecho y espero hacerlo pronto.

- Puedes ver el proyecto en https://prueba-factumex.vercel.app

## Screenshots
![App Screenshot](https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6355b66cc6db690009f576d6/screenshot_2022-10-23-21-47-57-0000.png)

## Correr el proyecto en Desarrollo
Para correr el proyecto localmente se necesitan seguir los siguientes pasos

- Descargar o clonar el repositorio

### Variables de entorno
 
Primero necesitaras crear un archivo **.env.dev** y agregar la siguiente variable

`REACT_APP_API`=https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/ **TU_NOMBRE**

- Posterior instalar los paquetes necesarios y arrancar el servidor con los siguientes comandos
```bash
  npm install

  npm start:dev
```

- Una vez que este corriendo, la clave de acceso la puedes editar en el archivo **db.json** que se encuentra en la carpeta **src**, o ingresar con las credenciales por defecto..

```bash
  Usuario: admin
  Contraseña: 1234
```


## Build Produccion
Para hacer el build a produccion necesitaras lo siguiente.

- Ejecutar el comando siguiente comando para generar la carpeta build de archivos estaticos y subirla a algun servicio de host.

```bash
  npm build:static
```

- Tambien puedes conectar el repositorio con un servicio de host y solo establecer dependiendo del servicio la variable de entorno.
`REACT_APP_API`=https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/ **TU_NOMBRE**

  
## Authors

- [Luis Angel Quiñones Guerrero](https://github.com/luisangelq)

  
## Feedback

If you have any feedback, please contact me at luisangelq3673@gmail.com
