# AMCO Examen

Realización de las pantallas de Presentación de Películas y en un modal con su vista de detalle.

## Cómo correr el proyecto

Este proyecto contiene el código fuente para la aplicación realizada con React que es examen de AMCO

### Requisitos

1. Tener intalado node js

2. Administrador de paquetes NPM 5.0.6

3. Para el deploy, tener instalado

### Instalación

Para correr en el ambiente de desarrollo:

1. Correr el commando

```
npm run build:local
```

2. Una vez terminado, se crea una carpeta 'dist' donde vienen los assets y los scripts
que genera el webpack. Luego cambiar el nombre del script que se encuenta en ./index.html
que apunta a localhost:9000

```
  <script src="http://localhost:9000/js/home.js"></script>
```
3. para correr en ambiente de desarrollo:

```
npm run build:dev
```

NOTA: estos comandos se encuentan en el archivo package.json

```
 "scripts": {
    "build:dev": "webpack-dev-server --config ./webpack.dev.config.js",
    "build": "webpack",
    "build:local": "webpack --env.NODE_ENV=local",
    "build:prod": "webpack -p --env.NODE_ENV=production"
  }
```


## Deployment Firebase

Para poder publicar la aplicación con Firebase, es necesario tener instalado el paquete  Firebase Tools

```
npm install -g firebase-tools
```

1. Iniciar una instancia de Firebase

```
firebase init
```

2. Proyecto el host remoto en donde se va a publicar la aplicación.

3. Elegir la carpeta que se va a publicar.

```
    dist (para este caso)
```

4. Cuando pregunte si se sobre escribe la página index.html, decir que no.

```

 What do you want to use as your public directory? dist
 Configure as a single-page app (rewrite all urls to /index.html)? (y/N) N

```


5. Una vez terminada la configuración. Correr el commando deploy para publicar

```
firebase deploy

```


## Autor 
Matías Ponce


## Licencia
Este proyecto está bajo la licencia MIT - Para ver más detalles [LICENSE.md](LICENSE)

