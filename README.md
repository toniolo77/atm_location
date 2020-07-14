Este proyecto fue templetizado con [Create React App](https://github.com/facebook/create-react-app).
y [Express Generator] (https://github.com/expressjs/generator) 

## Inicializacion 

En el directorio raiz se encuentran dos carpetas el backend(API) y el frontend.  Para hacer uso de la app se debe iniciar ambos servidores.

Pasos a seguir:

- Inicializacion API
    - Ir a la carpeta backend
    - Instalar dependencias con "npm install"
    - Iniciar servidor ejecutando "npm start", el cual levanta la aplicación en el modo desarrollador en el puerto 3000

- Inicializacion frontend
    - Ir a la carpeta backend
    - Instalar dependencias con "npm install"
    - Iniciar servidor ejecutando "npm start", el cual levanta la aplicación en el modo desarrollador en el puerto 3001
    - En el browser ingresar la url localhost:3001 para acceder a la gui
 

## Uso de API

Se puede hacer uso de la API para obtener los cajeros más cercanos consultado al endpoint,mediante el método GET, localhost:3000/cajeros pasandole los siguientes parámetros:
 - red [type:string]: BANELCO o LINK
 - longitude [type:number]
 - latitude [type:number]

 Como por ejemplo:
 http://localhost:3000/cajeros?red=BANELCO&longitude=-58.42342812858887&latitude=-34.58498833152743

