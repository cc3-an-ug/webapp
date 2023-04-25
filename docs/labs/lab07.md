# Lab 5 - ALU

## Objetivo

Este laboratorio es bastante corto. El motivo principal es que tengan más tiempo para invertir en el segundo proyecto...

## Preparación

Para este laboratorio, nuevamente, es necesario que tengan la aplicación de [Logisim](http://www.cburch.com/logisim/index.html). Adicionalmente pueden utilizar la [documentación](http://www.cburch.com/logisim/docs.html) de Logisim para refrescar el conocimiento que adquirieron en los laboratorios anteriores.

También tienen que tener todos los archivos base, estos se encuentran [aquí](https://classroom.github.com/a/byJeOiIB). Cuando ya se haya creado el repositorio, pueden ejecutar los siguientes comandos abriendo una terminal (++ctrl+alt+t++):

```shell
git clone <link del repositorio>
```

## Ejercicio 1: Arithmetic Logic Unit (ALU)

Su tarea es crear un ALU que soporte todas las operaciones que necesitan las instrucciones de un ISA simplificado RISC-V. Van a estar trabajando en el archivo **alu.circ**. Este tiene tres entradas:

| Nombre de Entrada | Ancho en Bits |                      Descripción                       |
| :---------------: | :-----------: | :----------------------------------------------------: |
|         A         |      32       |     Datos para usar por A en la operación del ALU      |
|         B         |      32       |     Datos para usar por B en la operación del ALU      |
|      ALU Op       |       4       | Selecciona la operación que el ALU debería de efectuar |

y cuatro salidas:

| Nombre de Entrada | Ancho en Bits |                     Descripción                     |
| :---------------: | :-----------: | :-------------------------------------------------: |
|        Out        |      32       |   Resultado de la operación efectuada por el ALU    |
|       Equal       |       1       |      1 si A y B son iguales, 0 de lo contrario      |
|        LT         |       1       |  1 si A es menor que B (signed), 0 de lo contrario  |
|        LTU        |       1       | 1 si A es menor que B (unsigned), 0 de lo contrario |

Esta es la lista de operaciones que necesitan implementar. Ustedes tienen que utilizar y les recomendamos utilizar los componentes de logisim que ya efectuan estas operaciones, por favor no las implementen desde 0, sería muy tardado y no es el objetivo del laboratorio.

| Valor de ALU Op | Instrucción                       |
| :-------------: | --------------------------------- |
|        0        | sll: Out = A << B[4:0]            |
|        1        | srl: Out = (unsigned) A >> B[4:0] |
|        2        | add: Out = A + B                  |
|        3        | and: Out = A & B                  |
|        4        | or: Out = A \| B                  |
|        5        | xor: Out = A ^ B                  |
|        6        | slt: Out = (A < B) ? 1 : 0 Signed |
|        7        | mul: Out = (X \* Y)[31:0]         |
|        8        | mulh: Out = (A \* B)[63:32]       |
|        9        | div: Out =(unsigned) A / B        |
|       10        | rem: Out = A % B                  |
|       11        | sub: Out = A - B                  |

Algunas cosas adicionales que tienen que tener en mente:

La salidas `Equal`, `LT`, `LTU` siempre tienen que sacar el valor correcto de comparación sin importar el valor de `ALU Op`. Ustedes no pueden modificar (mover, reemplazar, cortar, pegar, eliminar, etc) los pines de entrada ni de salida que nosotros les damos de lo contrario el checker no va a funcionar correctamente, tengan en cuenta esto para evitar problemas con el `./check`.

## Calificación

Al finalizar su circuito puede usar `./check` para probarlo de forma local, este lab se calificara con 0 o 100 unicamente.

```shell
./check
```

Si todo esta correcto les saldrá algo como esto:

```shell
   ___       __                        __
  / _ |__ __/ /____  ___  _______ ____/ /__ ____
 / __ / // / __/ _ \/ _ \/ __/ _ \/ _  / -_) __/
/_/ |_\_,_/\__/\___/\_, /_/  \_,_/\_,_/\__/_/
                   /___/

             Machine Structures
     Great Ideas in Computer Architecture
               Lab 5: Logisim ALU


Exercise      Grade  Message
----------  -------  ---------
1. ALU          100  passed

=> Score: 100/100
```

Al finalizar, recuerde hacer `add`, `commit` y `push` hacia Github. Luego envíe el link de su repositorio en el GES. Si no envía el link, no podremos ponerle nota!
