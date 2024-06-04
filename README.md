
# El Audio de los Viernes - CRAFTECH

## Descripción

Este programa fue desarrollado para la prueba técnica de Craftech, este consiste en una página web sencilla en React y un Backend en Django, con una base de datos relacional. Esta página consiste en un contador que detectara si el día de actual es viernes y de serlo reproducir un video para animar el viernes, sin embargo aun sin ser viernes puedes pedirle a la página que reproduzca un video como si fuera viernes para animarte el día.

## Requisitos
Asegúrate de tener los siguientes requisitos antes de ejecutar la aplicación:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)


## Instrucciones para Ejecutar la Aplicación

### Paso 1: Clonar el Repositorio
Primero, clona el repositorio de la aplicación en tu máquina local usando el siguiente comando:

```bash
git clone https://github.com/OctavioGarcia1337/craftech-test.git
```

### Paso 2: Navegar al Directorio del Proyecto
Cambia al directorio del proyecto:

```bash
cd craftech-test
```
### Paso 3: Construir y Levantar los Contenedores
Usa Docker Compose para construir y levantar los contenedores. Este comando leerá el archivo docker-compose.yml en el directorio raíz del proyecto.

```bash
docker-compose up --build
```
### Paso 4: Acceder a la Aplicación
Una vez que los contenedores estén en funcionamiento, puedes acceder a la aplicación en tu navegador web. Sin alterar las configuraciones, por defecto la aplicación deberia estar disponible en:
* Frontend: http://localhost:3000
* Backend: http://localhost:8000

### Paso 5: Detener los Contenedores
Para detener y eliminar los contenedores, redes y volúmenes creados por docker-compose up, usa el siguiente comando:

```bash
docker-compose down
```

#### Archivos Importantes
```docker-compose.yml```

Este archivo define los servicios, redes y volúmenes necesarios para la aplicación. Asegúrate de revisarlo para entender cómo se estructura el entorno de Docker.

```Dockerfile```

Cada servicio definido en docker-compose.yml puede tener un Dockerfile asociado que especifica cómo se construye la imagen Docker para ese servicio.

## Instrucciones para Ejecutar la Aplicación en Google Cloud
Se presume que para el deploy en Google Cloud ya posee una cuenta en GCP, un proyecto creado y las imagenes correspondientes pusheadas a su DockerHUB

### Paso 1: Hacemos un pull de nuestra imagen de DockerHub
```
docker pull <nombre_usuario>/<nombre_imagen>
```
### Paso 2: Subir la imagen a Google Cloud Registry
```
docker images
docker tag <nombre_usuario>/<nombre_imagen> gcr.io/<id_proyecto>/<nombre_imagen_en_google_cloud>
docker images
```
### Paso 3: Pushear la imagen a Google Cloud Registry
```
docker push gcr.io/<id_proyecto>/<nombre_imagen_en_google_cloud>
```
* Si salta error, puede que no tengamos habilitada una API, para esto, vamos a Container Registry y habilitamos la API y volvemos a pushear la imagen.
* Si nos pide autenticación hacemos:
```
gcloud auth login
```
Eso nos da un link para que nos autentiquemos y copiemos el token que pegaremos en la consola cuando nos lo pida, y luego corremos
```
gcloud auth configure-docker
```
### Paso 4: Creamos y configuramos los servicios
* Vamos a Cloud Run y le damos Crear Servicio
* Seleccionamos nuestra imagen
* Configuramos el max de instancias, (en este caso con 15 sobra, incluso menos)
* Configuramos acceso público
* Configuramos el puerto q es donde escucha nuestra imagen/contenedor:
	* 8000 en este caso para el backend
	* 8080 en este caso para el frontend
* Por ultimo para el backend, configuramos las claves y secretos, de variable de entorno debemos configurar
	* DB_NAME: nombre de la base de datos
	* DB_USER: nombre del usuario de la base de datos
	* DB_PASSWORD: contraseña de la base de datos
	* DB_HOST: host de la base de datos
	* DB_PORT: puerto de la base de datos
* Le damos crear y esperamos que nos provea de las URL

En mi caso pueden visitar el servicio funcionando en:

frontend: https://gc-ct-frontend-apoeka5nza-uc.a.run.app
backend: https://gc-ct-backend-apoeka5nza-uc.a.run.app/audio/api/v1/audio

### Contacto
Email: octaviogarcia1337@gmail.com
GitHub: https://github.com/OctavioGarcia1337
