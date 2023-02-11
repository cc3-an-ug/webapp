# Autograder

## Objetivos

- Crear una cuenta en autograders.
- Aprender a utilizar el autograder.

## Instalando el autograder

Para el curso de CC3 AN vamos a estar utilizando un autograder, este autograder nos va a permitir correr los tests de sus laboratorios y proyectos de forma automática. Esto nos va a permitir a nosotros, como staff, corregir sus tareas y proyectos de forma más rápida y eficiente.

Para poder utilizar el autograder, necesitan instalar el programa `autograder` en su computadora. Para esto, sigan los siguientes pasos:

### 1. Node.js

El autograder está escrito en Node.js, por lo que necesitan instalar Node.js en su computadora. Para esto, vamos a utilizar NVM (Node Version Manager), un programa que nos va a permitir instalar múltiples versiones de Node.js en nuestra computadora.

Para instalar NVM, sigan los siguientes pasos:

Abran una terminal ++ctrl+alt+t++. En la terminal, ejecuten el siguiente comando:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

o utilizando wget:

```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

Esto va a instalar NVM en su computadora. Ahora, necesitan hacer source de su archivo de configuración de NVM para que los cambios que hizo NVM se apliquen. Para esto, ejecuten el siguiente comando:

```shell
source ~/.bashrc
```

Si están utilizando otro shell, pueden ejecutar el comando `echo $SHELL` para ver cual es su shell y reemplazar `~/.bashrc` por el archivo de configuración de su shell.

Ahora, vamos a instalar Node.js. Para esto, ejecuten el siguiente comando:

```shell
nvm install --lts
```

Esto va a instalar la última versión LTS de Node.js en su computadora. Para verificar que Node.js se instaló correctamente, ejecuten el siguiente comando:

```shell
node --version
```

Esto debería mostrar la versión de Node.js que instaló.

### 2. Autograder

Ahora, vamos a instalar el autograder. Para esto, ejecuten el siguiente comando:

```shell
npm install -g npm@latest
npm install -g @autograder/cli@latest
```

Esto va a instalar el autograder en su computadora. Para verificar que el autograder se instaló correctamente, ejecuten el siguiente comando:

```shell
autograder --version
```

Les debería aparecer la versión del autograder que instaló. Por ejemplo:

```shell
 _
|-|  __
|=| [Ll]        Autograder
"^" ====`o

v1.3.1
```

## Utilizando el autograder

La manera más fácil de empezar a utilizar el autograder, es analizando los comandos que el autograder tiene disponibles. Para ver los comandos disponibles, ejecuten el siguiente comando:

```shell
autograder --help
```

Esto les va a mostrar los comandos disponibles. Por ejemplo:

```shell
 _
|-|  __
|=| [Ll]        Autograder
"^" ====`o

Usage: autograder [options] [command]

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  auth            autograder authentication
  course          autograder course management
  assignment      autograder assignment management
  submit          autograder submission management
  user            autograder user management
  help [command]  display help for command
```

Estos son los comandos disponibles:

- `auth`: Comandos para autenticarse en el autograder.
- `course`: Comandos para administrar los cursos.
- `assignment`: Comandos para administrar las tareas.
- `submit`: Comandos para administrar las entregas.
- `user`: Comandos para administrar el usuario.

Para ver los comandos disponibles para cada comando, ejecuten el siguiente comando:

```shell
autograder help <comando>
```

Por ejemplo, para ver los comandos disponibles para el comando `auth`, ejecuten el siguiente comando:

```shell
autograder help auth
```

Esto les va a mostrar los comandos disponibles para el comando `auth`. Por ejemplo:

```shell
 _
|-|  __
|=| [Ll]        Autograder
"^" ====`o

Usage: autograder auth [options] [command]

autograder authentication

Options:
  -h, --help         display help for command

Commands:
  signin [options]   sign in to autograders
  signup [options]   sign up to autograders
  signout [options]  sign out from autograders
  verify [options]   verify autograders account email
  forgot [options]   forgot autograders password
  reset [options]    reset autograders password
  help [command]     display help for command
```

## Creando una cuenta en el autograder

Para poder utilizar el autograder, necesitan crear una cuenta en el autograder. Para esto, sigan los siguientes pasos:

```shell
autograder auth signup
```

Esto les va a pedir que ingresen su nombre completo, correo electrónico y su contraseña. Luego, presionen enter para crear su cuenta. Por ejemplo:

```shell
 _
|-|  __
|=| [Ll]        Autograder
"^" ====`o

=>    Auth | Sign Up

Please enter your details:

? Full Name:  Andrés Castellanos
? Email:  andres.cv@galileo.edu
? Password:  ••••••••••••••

╔═══════╤══════════════════════════════════════╗
║ Id    │ 5bac3a00-7b5c-4f47-abc1-c73a89e0c7fe ║
╟───────┼──────────────────────────────────────╢
║ Email │ andres.cv@galileo.edu                ║
╟───────┼──────────────────────────────────────╢
║ Name  │ Andrés Castellanos                   ║
╚═══════╧══════════════════════════════════════╝

Please check your email and enter the token below.
```

Una vez que crearon su cuenta, el autograder les va a enviar un correo electrónico con un token. Para verificar su cuenta, necesitan ingresar el token que recibieron en el correo electrónico. Para esto, ejecuten el siguiente comando:

```shell
autograder auth verify
```

Esto les va a pedir que ingresen el token que recibieron en el correo electrónico. Luego, presionen enter para verificar su cuenta. Por ejemplo:

```shell
 _
|-|  __
|=| [Ll]        Autograder
"^" ====`o

=>    Auth | Verify Email

Please enter the verification token:

? Token:  •••••••••••••••••

✔ Email verified successfully.
```

## Ingresando a su cuenta en el autograder

Ahora, vamos a ingresar a su cuenta en el autograder. Para esto, ejecuten el siguiente comando:

```shell
autograder auth signin
```

Esto les va a pedir que ingresen su correo electrónico y su contraseña. Luego, presionen enter para ingresar a su cuenta. Por ejemplo:

```shell
 _
|-|  __
|=| [Ll]        Autograder
"^" ====`o

=>    Auth | Sign In

Please enter your credentials:

? Email:  me@andrescv.dev
? Password:  ••••••••••••••

✔ Signed in successfully!
```

## Registrandose al curso de CC3 AN

Ahora, vamos a registrarse al curso de CC3 AN. Para esto, ejecuten el siguiente comando:

```shell
autograder course enroll
```

Esto les va a pedir que ingresen el código del curso. El código del curso es **`cceaffc2-612c-47c4-9edc-27d9871b19ee`**. Luego, presionen enter para registrarse al curso. Por ejemplo:

```shell
 _
|-|  __
|=| [Ll]        Autograder
"^" ====`o

=>    Course | Enroll

Please enter the course id:

? Course id:  cceaffc2-612c-47c4-9edc-27d9871b19ee

✔ Enrolled successfully!

╔═════════════╤══════════════════════════════════════╗
║ Id          │ cceaffc2-612c-47c4-9edc-27d9871b19ee ║
╟─────────────┼──────────────────────────────────────╢
║ Title       │ CC3 AN 2023                          ║
╟─────────────┼──────────────────────────────────────╢
║ Description │ Machine Structures                   ║
╚═════════════╧══════════════════════════════════════╝
```

Para verificar que se registraron al curso, ejecuten el siguiente comando:

```shell
autograder course list
```

Esto les va a mostrar los cursos en los que se registraron. Por ejemplo:

```shell
 _
|-|  __
|=| [Ll]        Autograder
"^" ====`o

=>    Course | List

✔ Got all courses successfully!

╔══════════════════════════════════════╤═════════════╤════════════════════╗
║ Id                                   │ Title       │ Description        ║
╟──────────────────────────────────────┼─────────────┼────────────────────╢
║ cceaffc2-612c-47c4-9edc-27d9871b19ee │ CC3 AN 2023 │ Machine Structures ║
╚══════════════════════════════════════╧═════════════╧════════════════════╝
```

Listo 🎉. Ya se registraron al curso de CC3 AN. Para enviar sus laboratorios y proyectos, las instrucciones estarán en el repositorio de cada laboratorio y proyecto.

## Cerrando sesión en el autograder

Siempre que terminen de utilizar el autograder y **NO** estén utilizando una computadora que puedan confiar que nadie más la va a utilizar (labs de la U, computadora prestada, etc.), deben cerrar sesión en el autograder. Para esto, ejecuten el siguiente comando:

```shell
autograder auth signout
```

**CUIDADO**: si no cierran sesión en el autograder, cualquier persona que tenga acceso a su computadora, puede utilizar su cuenta en el autograder para enviar sus laboratorios y proyectos. Lo cual les puede perjudicar sus calificaciones.
