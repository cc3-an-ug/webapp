# Git y GitHub

## Objetivos

- Aprender git.
- Crear una cuenta de GitHub.

## Cuenta de GitHub

Para este curso necesitaremos que utilicen **git**, un _sistema de control de versiones distribuido_. Los sistemas de control de versiones son las mejores herramientas para compartir y almacenar código a comparación de mandar correos con archivos adjuntos, utilizar memorias flash, o incluso compartir documentos mediante DropBox o Google Docs.

Vamos a estar usando **GitHub** para tener repositorios privados en donde van a _almacenar_ su código remotamente. Si la oración anterior no les dijo nada, no se preocupen, vamos a guiarlos en el proceso más adelante. Pero primero, necesitan crear una cuenta de **GitHub**.

¿Por qué GitHub? GitHub ahora permite a todas las cuentas gratuitas tener repositorios privados ilimitados con algunas limitaciones que no van a ser ningún problema para nosotros.

### GitHub Onboarding

Naveguen a la siguiente página: [github.com](https://github.com/). Si no tienen una cuenta de GitHub todavía, creen una en el siguiente [link](https://github.com/join/).

### Configurando git

Ahora que ya han creado su cuenta de GitHub, vamos a configurar git para que sepa quiénes son. Abran una terminal
++ctrl+alt+t++ y ejecuten los siguientes comandos listados abajo, reemplazando **NOMBRE** con su nombre y apellido (entre comillas) y **CORREO** con la dirección de correo que utilizarón para registrarse en GitHub.

```shell
git config --global user.name "NOMBRE"
```

```shell
git config --global user.email "CORREO"
```

Ahora vamos a configurar git para que sepa que editor de texto vamos a utilizar. Para esto, ejecuten el siguiente comando:

```shell
git config --global core.editor "nano"
```

> Si prefieren utilizar otro editor de texto, pueden cambiar "nano" por el nombre del editor que prefieran. Si no saben cual es el nombre del editor que prefieren, pueden ejecutar el comando `git config --global core.editor` para ver cual es el editor que git está utilizando.

Ahora vamos a configurar git para que utilice el branch `main` por defecto. Para esto, ejecuten el siguiente comando:

```shell

git config --global init.defaultBranch main
```

Por último, vamos a configurar git para que sepa que vamos a utilizar el protocolo SSH para conectarnos a GitHub (más información en el siguiente [link](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)). Para esto, ejecuten el siguiente comando:

```shell
ssh-keygen -t ed25519 -C "<correo>"
```

> Recuerden reemplazar `<correo>` con la dirección de correo que utilizarón para registrarse en GitHub.

Esto creará una llave SSH en su computadora. Ahora, ejecuten el siguiente comando:

```shell

ssh-add ~/.ssh/id_ed25519
```

Dirijanse a la siguiente página: [https://github.com/settings/ssh/new](https://github.com/settings/ssh/new) y vamos a copiar nuestra llave SSH. Para esto, ejecuten el siguiente comando:

```shell
cat ~/.ssh/id_ed25519.pub
```

debería mostrar algo como lo siguiente:

```shell
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5BBBBIHxwhpY/9j123ZcIX95H+ah1kNcMl3W7vtuDALylfqst me@andrescv.dev
```

Y peguenlo en la pagina de GitHub.

![ssh](/assets/img/common/ssh.png)

Ahora, vamos a probar que todo está funcionando correctamente. Para esto, ejecuten el siguiente comando:

```shell
ssh -T git@github.com
```

Puede que les salga un mensaje como el siguiente:

```shell
> The authenticity of host 'github.com (IP ADDRESS)' can't be established.
> RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
> Are you sure you want to continue connecting (yes/no)?
```

Si es así, escriban `yes` y presionen enter. Al finalizar les debería aparecer un mensaje como el siguiente:

```shell
Hi <USUARIO>! You've successfully authenticated, but GitHub does not provide shell access.
```

> `<USUARIO>` es su nombre de usuario de GitHub.

## git y GitHub remotes

Primero, algunas definiciones rápidas:

- Un **remote** es la página web host o servidor que va a almacenar su código remotamente en vez de tener únicamente el código de forma local en su propia computadora. Pueden pensar en esto de igual manera a como se almacena un archivo en DropBox o Google Drive pero con el poder que nos da git.

- Un **branch** es una secuencia (por aparte) de diferentes cambios a su código. Pueden pensar en los _branches_ como diferentes versiones de su código, que en algún punto fueron lo mismo. La siguiente figura muestra a que nos referimos como branches.

![branch](/assets/img/labs/lab00/branch.svg)

A lo largo de este curso, estarán trabajando en dos diferentes "_computadoras_" que generalmente tendran diferentes versiones de su código en algún tiempo. Estas dos son: su computadora personal y su remote de GitHub (sus repositorios privados de GitHub). Es esencial que entiendan la diferencia entre estas dos y como pueden compartir código entre ellas.

1. Su **computadora personal** es la que les servirá para hacer todo el trabajo (laboratorios y proyectos) que necesiten hacer durante el curso, nada nuevo aquí.
2. Su cuenta de GitHub y los **remotes** les servirán para muchos propósitos, pero la principal razón es para tener un backup o copia de respaldo, de tal manera que si algo malo le sucede a sus computadoras (esperamos no :v:), puedan recuperar su código en vez de empezar de cero nuevamente. Conceptualmente, pueden pensar en los remotes de GitHub como otra computadora que únicamente almacena su código y nada más. Siempre deben subir sus cambios a GitHub haciendo _push_ al remote (es decir actualizando los archivos en GitHub) y también pueden descargar los cambios de GitHub haciendo _pull_ (actualizando los archivos en su computadora personal).

### git cheat sheet

A continuación, les presentamos una lista de comandos que les serán útiles a lo largo del curso. Siempre pueden consultar esta lista cuando lo necesiten.

| Comando                     | Descripción                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `git init`                  | Inicializa un repositorio git en la carpeta actual.          |
| `git add <archivo>`         | Agrega un archivo al repositorio.                            |
| `git commit -m "<mensaje>"` | Hace commit de los archivos agregados al repositorio.        |
| `git status`                | Muestra el estado actual del repositorio.                    |
| `git log`                   | Muestra el historial de commits del repositorio.             |
| `git branch <nombre>`       | Crea un nuevo branch con el nombre `<nombre>`.               |
| `git checkout <nombre>`     | Cambia al branch con el nombre `<nombre>`.                   |
| `git merge <nombre>`        | Une el branch actual con el branch con el nombre `<nombre>`. |
| `git push`                  | Sube los cambios al remote.                                  |
| `git pull`                  | Descarga los cambios del remote.                             |

Para más información, pueden consultar la [documentación oficial](https://git-scm.com/docs). O también pueden consultar el siguiente [cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf).
