# Tutorial de Instalación de Material

El objetivo de este tutorial es dejar preparado el material que necesitarán para los laboratorios y proyectos.

## La mejor opción: Máquina virtual

Descarguen la siguiente máquina virtual y ábranla con VMware. Recuerde que usando [VMware Player](https://www.vmware.com/products/workstation-player.html) (gratuito, sin necesidad de licencia) pueden abrir y utilizar máquinas virtuales ya hechas.

[Descargar máquina virtual desde Google Drive](https://drive.google.com/file/d/1FdxtXya0jA5iSUpeSvBXxc4Vzmz1JyUm/view)

### Credenciales

- **Usuario**: student
- **Password**: student

La máquina virtual ya trae todo lo necesario para el semestre.

## Instalación Nativa

Para trabajar nativo necesitarán Ubuntu 18 o 20 en inglés, se recomienda 18.

Si su Ubuntu no se encuentra en inglés, tendra problemas en el lab 2 (cgdb). Pueden cambiar su idioma, o buscar la solución al problema en Google.

Si todavía no tienen Ubuntu instalado aquí hay un [tutorial para dual boot](https://www.youtube.com/watch?v=h9cPABYSJSI). Pongan mucha atención, sean muy cuidadosos y sobre todo hagan un backup de su información importante.

Wow... parece que son bastantes instrucciones, ¡Sería más fácil usar la máquina virtual! (?)

### Instalar git

    sudo apt update
    sudo apt install git

### Instalar Java

    sudo apt update
    sudo apt install default-jdk

### Instalar Python 3

    sudo apt update
    sudo apt install software-properties-common
    sudo add-apt-repository ppa:deadsnakes/ppa
    sudo apt update
    sudo apt install python3.7

### Instalar pip

    sudo apt update
    sudo apt install python3-pip

Las versiones recientes de Python suelen incluir todo lo que necesitamos (en la maquina virtual ya revisamos y esta todo lo que necesitan! en serio, usen la máquina virtual!), verifiquémoslo abriendo la terminal de Python con el comando `python3`, luego en la terminal escribiremos los siguientes comandos

    import os
    import sys
    import requests
    import zipfile

Si ninguno nos dio problema, Python esta listo; si alguno fallo, lo instalaremos con pip

    pip3 install nombreDelPaqueteQueDioError

### cURL

Finalmente instalamos curl

    sudo apt update
    sudo apt install curl

### CGDB

Y terminamos instalando cgdb

    sudo apt update
    sudo apt install cgdb

Casi listo! Cuando lleguemos al lab 3 y al lab 5 alli le aparecerán las instrucciones para instalar el software faltante.
