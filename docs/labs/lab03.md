# Lab 3 - RISC-V

## Objetivos

- Practicar, corriendo y debuggeando código ensamblador RISC-V.
- Escribir funciones en RISC-V con el procedimiento correcto de llamadas a funciones.

## Lecturas

![PH](/assets/img/PH.jpg)

- P&amp;H: 2.12

## Preparación

Para comenzar con el laboratorio primero tienen que tener todos los archivos base, estos se encuentran [aquí](https://classroom.github.com/a/oqSnEre7). Recuerden que deben
aceptar la asignación de **GitHub Classroom** y se les creará automáticamente un repositorio con una extensión que termina con su usuario de GitHub.
Cuando ya se haya creado el repositorio, pueden ejecutar los siguientes comandos abriendo una terminal (<kbd>CTRL</kbd> <kbd>+</kbd> <kbd>T</kbd> ):

```shell
git clone <link del repositorio>
```

> **NOTA**: Tienen que reemplazar <link del repositorio\> con el link del repositorio que se creó.

## Introducción a Lenguaje Ensamblador RISC-V

Los siguientes ejercicios utilizan un ensamblador y simulador de RISC-V. El simulador se llama **Venus** y es un proyecto open source inspirado, inicialmente, en el lengendario [_SPIM_](http://spimsimulator.sourceforge.net/) y, posteriormente, en [_MARS_](http://courses.missouristate.edu/KenVollmar/mars/).

Para utilizarlo en su computadora solo tienen que navegar al siguiente [link](http://venus.cs61c.org/).

### Cosas básicas en Venus:

A continuación, les vamos a dar una pequeña guía de Jupiter, para más información visiten la página de documentación en [https://github.com/ThaumicMekanism/venus/wiki](https://github.com/ThaumicMekanism/venus/wiki).

- Pueden crear archivos, editarlos y borrarlos desde la pestaña "Editor".
- Las etiquetas terminan con dos puntos.
- Los comentarios comienzan con el simbolo "#" o ";".
- NO PUEDEN poner más de una instrucción por línea.
- Cuando hayan terminado de editar las instrucciones que conforman su código, guarden y presionen <kbd>Simulator</kbd> para preparar la ejecución.
- Los programas siempre tienen que terminar con un `ecall` de exit y esto se logra poniendo un 10 en `a0`. Esto le indica al programa que tiene que terminar. Las instrucciones `ecall` son análogas a los "System Calls" (llamadas al sistema) y nos permiten hacer cosas como imprimir a consola o reservar memoria dinámica.

## Ejercicio 1: Factorial.

En este ejercicio, tienen que implementar la función de factorial en RISC-V que toma un sólo parámetro entero **n** y retorna **n!**. Pueden encontrar un esqueleto de esta función en el archivo **factorial.s** que se encuentra en el repositorio que clonaron. Ustedes sólo necesitan agregar las instrucciones bajo la etiqueta `factorial`, y el argumento que se pasa a la función va en el registro `a0`. Pueden resolver este problema ya sea de forma recursiva o iterativa. Asegúrense de que su función retorne de forma apropidada lo siguiente **3!** = **6**, **7!** = **5040** y **8!** = **40320**.

## Calificación

Por favor subir el link de su repositorio al GES ! de lo contrario la calificación será de 0.
