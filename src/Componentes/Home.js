import 'bootstrap';
import '../css/styles.css';
import crearFraja from './Franja';
function Home(contenedor, changeToSim) {
    const fila1 = document.createElement('div');
    const fila2 = document.createElement('div');
    const fila3 = document.createElement('div');
    const col1 = document.createElement('div');
    const col2 = document.createElement('div');
    const col3 = document.createElement('div');
    const parrafo1 = document.createElement('p');
    const parrafo2 = document.createElement('p');
    const parrafo3 = document.createElement('p');
    const botonSim = document.createElement('button');
    botonSim.textContent = "Revisa nuestro simulador";
    botonSim.classList.add("btn", "btn-outline-bondi");
    botonSim.onclick = changeToSim;
    parrafo1.textContent = "El problema de la varilla consiste en maximizar las ventas de diversas longitudes de una varilla con una longiutd n, dependiendo el tamaño de esta varilla se tendran diversas combinaciones de corte en la varilla que nos permitiran obtener el precio Maximo para realizar una venta.";
    parrafo1.textContent ="Suponga que usted tiene una ferreteria en la cual vende varias de longitud n, hay clientes que le compraran la varilla directamente con la longitud n y otros que le solicitaran cortes enteros a la varilla, usted decide ponerle un precio a cada corte de la varilla, para lo cual usted le sugerira al cliente discretamente cierta combinacion, con esta combinacion es la que maximizara el precio de la varilla completa y obtendra una ganancia. La varilla de longitud n siempre se debera vender ya sea en una pieza unica o con los cortes que se soliciten."
    parrafo2.textContent = "La solución por Fuerza Bruta hace uso de la recursión ( en programación la recursion es tener una serie de pasos que solucionan un mismo problema acotando el problema hasta un caso base), con ella iremos evaluando todos los posibles cortes (Permutaciones) en base a la tabla de precios la cual depende completamente de la longitud de la varilla para buscar el corte que ofrece mayor ganancia.";
    parrafo3.textContent = "La solución optima para este problema es hacer la implementación con una estratégia de programación llamada \"Programación Dinámica\", la cual nos ayudara a reducir el número de permutaciones que se ejecutan en nuestra Fuerza Bruta, el problema de nuestra fuerza bruta es que un algoritmo que crece de forma exponencial, haciendo que se busquen TODOS los casos y al hacer esto exiten combinaciones que se repiten entre si, un ejemplo, supongamos que tenemos una varilla de longitud 4, y su tabla de precios para cada corte es la siguiente: ${1,3,5,6}, al tener una longitud de varilla igual a 4 tendriamos estas combinaciones en terminos de corte 1+3 y 3+1 ,dado que nuestra varilla siempre se va a vender con la longitud n, se obtendra una ganancia al vender cortes en la varilla, ambas cominaciones anterior en terminos de precios representarian lo siguiente $1+$5 y $5+$1, lo que se busca con \Programación Dinámica\" es procurar no encontrar todas las combinaciones dado que existiran algunas que se repiten.";
    contenedor.classList.add("container-fluid");
    fila1.classList.add("row", "justify-content-center", "align-content-center");
    fila2.classList.add("row", "justify-content-center", "align-content-center");
    col1.classList.add("col");
    col2.classList.add("col");
    col3.classList.add("col");
    col1.appendChild(crearFraja("Problema de Corte de Varillas"));
    col1.appendChild(parrafo1);
    col2.appendChild(crearFraja("Fuerza Bruta:"));
    col2.appendChild(parrafo2);
    col3.appendChild(crearFraja("Solución Optima:"));
    col3.appendChild(parrafo3);
    fila1.appendChild(col1);
    fila2.appendChild(col2);
    fila2.appendChild(col3);
    fila3.appendChild(botonSim);
    contenedor.appendChild(fila1);
    contenedor.appendChild(fila2);
    contenedor.appendChild(fila3);
    contenedor.id = "home";

    return contenedor;
}

export default Home;