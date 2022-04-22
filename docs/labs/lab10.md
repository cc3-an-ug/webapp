# Lab 7 - SIMD Intrinsics y Loop Unrolling

## Objetivos

- Aprender acerca de las instrucciones SIMD y hacer data level parallelism.
- Escribir código con funciones SIMD para hacer ciertas optimizaciones.
- Aprender acerca de loop unrolling y por qué este funciona.

## Preparación

Tienen que tener todos los archivos base, estos se encuentran [aquí](https://classroom.github.com/a/X0ZZNHpp). Recuerden que tienen que aprovechar el uso de Git y subir el link de su repositorio al GES, así como al autograder, de lo contrario su nota será de **0**.

## Ejercicio 1: Familiarizándose con las funciones SIMD.

Dado el gran número disponible de instrucciones SIMD, queremos que ustedes aprendan cómo encontrar aquellas que necesitarán para determinadas aplicaciones. Intel proporciona una variedad de herramientas relacionadas a intrinsics, las cuales pueden encontrar [aquí](https://software.intel.com/en-us/isa-extensions) (estas no son necesarias para este laboratorio). Nosotros estamos, particularmente, interesados en la [Guía Intel Intrinsics](https://software.intel.com/sites/landingpage/IntrinsicsGuide/). Abran esta página y, una vez estén dentro, hagan click en todos los checkboxes que empiecen con **_SSE_** (desde SSE hasta SSE4.2). Hagan su mejor esfuerzo para interpretar esta nueva sintaxis y terminología.

Encuentren la instrucción de 128 bits para las siguientes operaciones SIMD:

1. Cuatro divisiones de punto flotante con precisión simple (float):
   - **a**) `__m128 _mm_div_ss(__m128 a, __m128 b)`
   - **b**) `__m128 _mm_cvtsi64_ss(__m128 a, __int64 b)`
   - **c**) `float _mm_cvtss_f32(__m128 a)`
   - **d**) `__m128_mm_div_ps(__mm128 a, __mm128 b)`
   - **e**) `__m128 _mm_load_ps(float const* mem_addr)`
   - **f**) `__m128 _mm_loadu_ps(float const* mem_addr)`
2. Dieciséis operaciones de máximo sobre enteros de 8 bits con signo (char):
   - **a**) `__m128i _mm_max_epi16 (__m128i a, __m128i b)`
   - **b**) `__m128i _mm_max_epi32 (__m128i a, __m128i b)`
   - **c**) `__m128i _mm_max_epi8 (__m128i a, __m128i b)`
   - **d**) `__m128i _mm_max_epu16 (__m128i a, __m128i b)`
   - **e**) `__m128i _mm_max_epu32 (__m128i a, __m128i b)`
   - **f**) `__m128i _mm_max_epu8 (__m128i a, __m128i b)`
   - **g**) `__m128d _mm_max_pd (__m128d a, __m128d b)`
   - **h**) `__m64 _mm_max_pi16 (__m64 a, __m64 b)`
   - **i**) `__m128 _mm_max_ps (__m128 a, __m128 b)`
   - **j**) `__m64 _mm_max_pu8 (__m64 a, __m64 b)`
   - **k**) `__m128d _mm_max_sd (__m128d a, __m128d b)`
   - **l**) `__m128 _mm_max_ss (__m128 a, __m128 b)`
3. Shift right aritmético sobre ocho enteros de 16 bits con signo (short):
   - **a**) `__m128i _mm_add_epi16(__m128i a, __m128i b)`
   - **b**) `__m128i _mm_maskz_abs_epi8(__mmask16 k, __m128i a)`
   - **c**) `__m128i _mm_srai_epi16(__m128i a, __m128i count)`
   - **d**) `__m128i _mm_slli_epi64(__m128i a, int count)`
   - **e**) `__m128i _mm_srai_epi32(__m128i a, __m128i count)`
   - **f**) `__m128i _mm_sra_epi16(__m128i a, __m128i count)`

Escriban sus respuestas en el archivo **ex1.txt**. Ustedes tienen que colocar únicamente la letra de la opción que consideren correcta; ejemplo de un archivo correcto:

```
1: a
2: a
3: a
```

## Ejercicio 2: Escribiendo Código SIMD

Para el ejercicio 2, ustedes deben vectorizar el siguiente código para lograr obtener, aproximadamente, cuatro veces la velocidad en comparación a la implementación que se muestra a continuación:

```c
static int sum_naive(int n, int *a) {
  int sum = 0;
  for (int i = 0; i < n; i++) {
   sum += a[i];
  }
  return sum;
}
```

Pueden encontrar útiles las siguientes intrinsics :

|                     SIMD                      |                              Descripción                              |
| :-------------------------------------------: | :-------------------------------------------------------------------: |
|        `__m128i _mm_setzero_si128( )`         |                devuelve un vector de 128 bits de ceros                |
|     `__m128i _mm_loadu_si128(__m128i *p)`     |       devuelve el vector de 128 bits guardado en el puntero `p`       |
| `__m128i _mm_add_epi32(__m128i a, __m128i b)` | devuelve el vector ($a_0 + b_0$, $a_1 + b_1$, $a_2 + b_2$, $a3 + b3$) |
| `void _mm_storeu_si128(__m128i *p,__m128i a)` |     guarda el vector de 128 bits representado por el puntero `p`      |

El archivo que deben modificar es **sum.c**. Usen las intrinsics SSE para implementar la función `sum_vectorized()`. Para compilar su código, ejecuten el siguiente comando:

```shell
make sum
```

Para ejecutar su código, corran el siguiente comando:

```
./sum
```

## Ejercicio 3: Loop Unrolling

Afortunadamente, aún pueden obtener más mejoras en el rendimiento. Cuidadosamente, tomen el código que crearon en el ejercicio previo y hagan un "unroll" del vector SIMD. Esto debería mejorar el rendimiento en , aproximadamente, un factor de dos. Como un ejemplo de un "loop unroll", consideren la función `sum_unrolled()` que se les proporciona:

```c
static int sum_unrolled(int n, int *a) {
  int sum = 0;

  // unrolled loop
  for (int i = 0; i < n / 4 * 4; i += 4) {
    sum += a[i+0];
    sum += a[i+1];
    sum += a[i+2];
    sum += a[i+3];
  }

  // tail case
  for (int i = n / 4 * 4; i < n; i++) {
    sum += a[i];
  }

  return sum;
}
```

Además, siéntanse libres de darle un vistazo al artículo de Wikipedia: [Loop Unrolling](http://en.wikipedia.org/wiki/Loop_unrolling), para más información. Dentro de **sum.c**, copien su código de `sum_vectorized()` hacia `sum_vectorized_unrolled()` y hagan un unroll de cuatro. Para compilar su código, corran el siguiente comando:

```shell
make sum
```

Para ejecutar su código, corran el siguiente comando:

```
./sum
```

## Calificación

Al terminar, deben de subir su laboratorio al autograder con:

```shell
./submit <TOKEN>
```

No olviden subir el link de su repositorio en Github al GES.
