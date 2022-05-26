Buen dia maestra.
Aqui tiene las intrucciones que usamos para emular nuestra app en su computadorea en caso de que guste hacerlo.

Primero debe de tener el proyecto descargado y abrirlo con su editor de preferencia.

Tenemos una carpeta con dependencias la cual no se podia subir a Github. 
En este enlace la puede bajar, la descomprime y la mete en el directorio del proyecto.

Depues abrimos android studio.

# Android Studio

Para compilar la App se necesitará Android Studio, conectamos el celular estando en modo desarrollador para permitir el uso de apps extrañas. Y además de eso tienen que habilitar unos puertos.

adb reverse tcp:8081 tcp:8081

dentro de la carpeta C:\Users\[nombrePC]\AppData\Local\Android\Sdk\platform-tools

Tambien se puede hacer con un dispositivo virtual, el cual se puede crear desde el 'Administrador de dispositivos' de Android Studio.

Para abrir el proyecto en android studio.

File > Open > [Carpeta del proyecto] > Seleccione la carpeta llamada 'android' > Ok.

Toma un tiempo a que se construya la aplicacion, solo hay que esperar.

# Iniciar Programa

Para iniciar el servidor es necesario escribir esto en la línea de comandos dentro de la misma carpeta que se creó

- npx react-native start

Todo lo trabajamos en Visual Studio Code, desde ahi abrimos la carpeta del proyecto. Ahi fue que clonamos el repositorio para tener todos los archivos.

# React-Native
Los pasos que tomamos para instalar todo lo usado para el desarrollo. (En caso que se necesite).

- Instalar Node.JS version LTS		https://nodejs.org/en/download/

- Instalar JDK		https://jdk.java.net/archive/

- Instalar Android Studio		https://developer.android.com/studio

- Para crear un proyecto es abrir command prompt en el directorio donde quieras crearlo y escribir lo siguiente

  - npx react-native init NOMBREPROYECTO

- En caso de que "no exista" react-native, instalar:

  - npm install -g react-native-cli

Información tomada de: 	https://reactnative.dev/docs/environment-setup
