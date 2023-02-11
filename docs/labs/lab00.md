# Lab 0 - Git y Representación de Números

## Objetivos

- Aprender git.
- Ganarse unos puntos extra.
- Crear una cuenta de GitHub.
- Ganar más intuición para trabajar con números binarios.

### Preparación

Por favor lean las siguientes instrucciones cuidadosamente antes de seguir con el laboratorio. La mayor parte de los problemas que tienen los estudiantes durante este laboratorio se pueden prevenir siguiendo atentamente los pasos que se indican.

Visiten este [link](https://classroom.github.com/a/M0kENuj1). Aquí encontrarán todos los archivos necesarios para completar este laboratorio. En esta página, encontrarán un botón que dice "Accept this assignment". Al presionar este botón, se creará automáticamente un repositorio en Github llamado `https://www.github.com/cc3-an/2023-lab-00-git-<USUARIO>`. Noten que el "dueño" de este repositorio es un usuario llamado `cc3-an`, y el usuario de ustedes es únicamente el sufijo del nombre del repositorio. De esta forma, nos encargamos de tener acceso siempre a su código.

**Nota**: Sepan de una vez que, si encontramos plagio en sus laboratorios, su nota será AUTOMÁTICAMENTE 0, sin posibilidad de cambiarla. De repetirse nuevamente este acontecimiento, el staff del curso organizará una reunión con ustedes y sus directores de carrera para contarles lo ocurrido y sancionarlos conforme al reglamento de la universidad.

Después de realizar esto, en la máquina virtual (o sus propias computadoras) abran una terminal en el directorio que prefieran, y ejecuten el siguiente comando:

```sh
git clone https://www.github.com/cc3-an/2023-lab-00-git-<USUARIO>
```

> Recuerden reemplazar `<USUARIO>` con su nombre de usuario de GitHub.

esto descargará en el directorio que escogieron todos los archivos base para este laboratorio.

### Ejercicio 1: Tutorial

Por favor lo primero que deben hacer es leer el tutorial de [git y GitHub](https://cc3-an.github.io/tutorials/git/) que se encuentra en la página del curso. Este tutorial les va a enseñar a utilizar git y GitHub para el resto del curso. Por favor leanlo con atención y sigan los pasos que se indican.

También es necesario que se lean el tutorial del [autograder](https://cc3-an.github.io/tutorials/autograder/) que se encuentra en la página del curso también. Este les va a enseñar a utilizar el autograder para los laboratorios. Por favor leanlo con atención y sigan los pasos que se indican.

### Ejercicio 2: GitHub

Vamos a crear un archivo llamado `hello.sh` en la carpeta del laboratorio ejecutando el siguiente commando en la terminal:

```shell
echo 'echo "Hola Mundo"' > hello.sh
```

Luego pueden correr el archivo en la terminal con `bash hello.sh`. En la terminal se imprimirá `Hola Mundo`. Ahora utilicemos git para ver los archivos que todavía no han sido rastreados utilizando `status`:

```shell
git status
```

Lo que producirá lo siguiente:

```shell
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  hello.sh

nothing added to commit but untracked files present (use "git add" to track)
```

Esto es porque hemos creado un archivo nuevo llamado `hello.sh` y no lo hemos agregado. Podemos agregarlo y hacer commit:

```shell
git add hello.sh
git commit -m "Mensaje del Commit"
git branch
git push -u origin main
```

El control de versiones git esta construido alrededor de _commits_, o _checkpoints_ en el desarrollo de diferentes versiones/etapas de su código. Para explicar los pasos de arriba un poco más:

- **git add [archivo]** le dirá a git que han hecho cambios a ese archivo y que quieren que esos cambios se guarden en el siguiente commit (staging).
- **git commit -m "mensaje"** oficialmente guarda esos cambios que acaban de agregar, y crea un _snapshot_ del contenido actual de todos los archivos en el repositorio. Ahora siempre van a tener la opción de revertir su código hacia este commit.
- **git push -u origin main** manda todo el contenido del repositorio que está en el branch "main" al repositorio remoto "origin".

Cuando estén trabajando con git, y quieran asegurarse de que tienen una copia guardada del contenido actual de su código, solo tienen que correr `git add .` y después `git commit` en la terminal. En dado caso que no tengan cambios nuevos, esto no creará ningún commit. Por último pueden hacer `git push` para que también su código esté en la nube.

## Ejercicio 3: Alfabeto Binario

Vamos a utilizar números de 4 bits. Si apilamos cinco números de 4 bits uno encima de otro en binario, podemos crear patrones e imágenes. Para ayudarlos a visualizar esto, pueden pensar que un bit en cero es blanco y un bit en uno es negro. Por ejemplo miren el siguiente patrón de bits.

<p align="center"><img src="/assets/img/labs/lab00/ex3.png" alt="Patron de Bits"/></p>

### Preguntas

1. ¿Cuáles son los cinco números en decimal (separados por una coma) que producen el patrón de arriba?
2. ¿Cuáles son los cinco digitos en hexadecimal (separados por una coma) que producen el patrón de arriba?
3. ¿Qué letra se dibuja con los siguientes números en decimal: 1,1,9,9,6?
4. ¿Qué letra se dibuja con el siguiente numero en hexadecimal: 0xF8F88?
5. ¿Cuál es el numero en hexadecimal para dibujar la letra b (minúscula)?
6. ¿Utilizarías cinco dígitos hexadecimales para dibujar la letra N? Contesten Si o No

En los archivos del laboratorio van a encontrar un archivo de texto `ex3.txt` con lo siguiente:

```
1:
2:
3:
4:
5:
6:
```

En este archivo tienen que colocar todas sus respuestas de las preguntas de arriba siguiendo ese formato por ejemplo un archivo valido sería:

```
1:1,2,3,4,5
2:0x1,0x2,0x3,0x4,0x5
3:A
4:A
5:0xcafee
6:Si/No
```

Si ya contestaron todo y creen que está correcto pueden agregar los cambios, hacer commit y subirlo al repositorio remoto ejecutando los siguientes comandos en la terminal:

```shell
git add ex3.txt
git commit -m "ex3 complete"
git push -u origin main
```

## Ejercicio 4: 1,000 billetes de $1

Imaginen que tienen mil billetes de \$1 y 10 sobres. Para este ejercicio tienen que encontrar una manera de poner una cantidad determinada de billetes de \$1 en cada uno de los sobres de tal forma que, sin importar la cantidad de dinero que se les pida (entre \$1 y \$1000), simplemente entreguen una combinación de los sobres y que siempre estén seguros de que están dando la cantidad correcta.
En los archivos del laboratorio hay un archivo de texto llamado `ex4.txt` en donde encontrarán lo siguiente:

```text
a,b,c,d,e,f,g,h,i,j
```

Cada una de las letras representa un sobre, tienen que reemplazar cada letra por la cantidad de billetes de \$1 que crean correcta, esa cantidad tiene que ser `>= 0` (en decimal) y recuerda que la suma de la cantidad de cada uno de los sobres tiene que ser igual a `1000`.

Si ya contestaron todo y creen que está correcto pueden agregar los cambios, hacer commit y subirlo al repositorio remoto ejecutando los siguientes comandos en la terminal:

```shell
git add ex4.txt
git commit -m "ex4 complete"
git push -u origin main
```

## Entrega y calificación

Por favor subir el link de su repositorio al **GES**. Siempre es necesario que suban su repositorio al GES, incluso si no completaron todos los ejercicios, de lo contrario la nota será de 0 puntos.

La calificación de este laboratorio será de 0 a 100 puntos, donde 100 puntos es la calificación máxima. La calificación se basará en la cantidad de ejercicios completados. Si tienen alguna duda sobre la calificación, por favor envíen un correo a los auxiliares.

Para subir su laboratorio al autograder deben hacer lo siguiente, estando en la carpeta del laboratorio:

```shell
autograder assignment submit
```

Si por alguna razon les pide que ingresen el id de la asignación, pueden ingresar el siguiente id: **`966a5593-4aac-44b3-9c99-bed2f5d77b6e`**.

Una vez suban su laboratorio al autograder, les va a salir un mensaje como el siguiente:

```shell
 _
|-|  __
|=| [Ll]        Autograder
"^" ====`o

=>    Assignment | Submit

✔ Got assignment info successfully!
✔ Files zipped successfully!
✔ Files uploaded successfully!
✔ Assignment submitted successfully!

╔══════════════╤══════════════════════════════════════╗
║ Id           │ e58e7f1c-96ae-477a-8851-77ba16bf7443 ║
╟──────────────┼──────────────────────────────────────╢
║ Status       │ SUBMITTED                            ║
╟──────────────┼──────────────────────────────────────╢
║ Submitted At │ 10 Feb, 2023 06:18:21 pm             ║
╚══════════════╧══════════════════════════════════════╝
```

Para ver el estado de su laboratorio pueden hacer lo siguiente:

```shell

autograder submit last
```

Si ya está calificado, les va a salir un mensaje como el siguiente:

```shell
 _
|-|  __
|=| [Ll]        Autograder
"^" ====`o

=>    Submission | Last

Please enter the assignment id:

? Assignment id:  966a5593-4aac-44b3-9c99-bed2f5d77b6e

✔ Got submission info successfully!

╔════════╤══════════════════════════════════════╗
║ Id     │ e58e7f1c-96ae-477a-8851-77ba16bf7443 ║
╟────────┼──────────────────────────────────────╢
║ Grade  │ 100                                  ║
╟────────┼──────────────────────────────────────╢
║ Status │ GRADED                               ║
╚════════╧══════════════════════════════════════╝

Stdout:

1. Hello

...

3. Binary Alphabet

...

4. 1,000 $1 Bills

...
```

Pueden subir su laboratorio **3** veces, pero solo se tomará en cuenta la entrega que tenga la calificación más alta. Si no les gusta la calificación que obtuvieron, pueden volver a subir su laboratorio hasta que obtengan la calificación que desean.
