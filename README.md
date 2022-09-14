# AnalisisAlgoritmos-Edgardo
Proyecto donde se muestra la animación de los algoritmos de solución del problema de corte de varillas. Dichos algoritmos son, fureza bruta (árbol de recursión) y programación dinámica.

Creado con algunas herramientas como:
  - JavaScript
  - Node.js
  - Cytoscape.js
  - Anime.js
  - Zdog
  - Zfont

## Instalación

1. Clona este repositorio:
  ```
  git clone https://github.com/DavidPerezAntonio51/AnalisisAlgoritmos-Edgardo.git
  ```
2. Instala las dependencias
  ```
  cd AnalisisAlgoritmos-Edgardo
  npm install
  ```
3. Inicia el servidor local
  ```
  npm start
  ```
Se debe abrir una ventana en tu navegador, si no es así, el servidor debería estar disponible en el puerto 5000 (puerto por defecto) del localhost.

## Capturas
Algunas capturas y gifs de la animación.

**Index de la página** 

<img src="/.github/assets/edgardo_index.png">

**Página para visualizar las animaciones** 

<img src="/.github/assets/edgardo_animacion.png">

**Animación de prueba solución por fuerza bruta** 

En esta animación se intenta mostrar como es generado el árbol de recursión según la función (recursiva) que resuelve este problema.

El usuario ingresa la longitud de varilla que quiere calcular (limitado a solo 3 opciones, petición del profesor) y el respectivo precio de cada corte en la tabla de la derecha, si los precios no son especificados, se generan precios aleatoriamente, como se puede ver en el siguiente gif.

Los números que se pueden observar arriba de cada nodo del árbol representa la longitud de varilla que se está analizando en ese nodo. Los números con flechitas a un lado representan el valor máximo que regresará como resultado ese nodo (recursión). El nodo raíz contiene 2 números, el primero representa la solución final del algoritmo y el segundo representa la longitud de varilla que seleccionó el usuario en la droplist.

<img src="/.github/assets/edgardo_fuerzabruta.gif">

**Animación de prueba solución óptima**

Esta animación tiene como objetivo mostrar como se genera la tabla y como se va consultando esta tabla durante el algoritmo para calcular la solución.

Como se puede observar el usuario no ingresó precios en la tabla, aún así el algoritmo los genera automáticamente.

El resultado de este algoritmo se podrá encontrar en la última celda de la tabla.

<img src="/.github/assets/edgardo_optima.gif">

**Animación de prueba comparativa entre ambas soluciones**

Aunque no se logra apreciar correctamente, esta animación muestra la comparativa de complejidad espacial y temporal de ambos algoritmos. Esto se puede observar en el número de nodos que tiene el árbol y el número de iteraciones que toma el algoritmo de programación dinámica. Número que difiere significativamente. 

<img src="/.github/assets/edgardo_last_vidio.gif">

