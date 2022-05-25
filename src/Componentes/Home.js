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
    const botonSim = document.createElement('button');
    botonSim.textContent = "Revisa nuestro simulador";
    botonSim.classList.add("btn", "btn-outline-bondi");
    botonSim.onclick = changeToSim;
    parrafo1.textContent = "Prueba";
    contenedor.classList.add("container-fluid");
    fila1.classList.add("row", "justify-content-center", "align-content-center");
    fila2.classList.add("row", "justify-content-center", "align-content-center");
    col1.classList.add("col");
    col2.classList.add("col");
    col3.classList.add("col");
    col1.appendChild(crearFraja("Problema de Corte de Varillas"));
    col1.appendChild(parrafo1);
    col2.appendChild(crearFraja("Fuerza Bruta:"));
    col3.appendChild(crearFraja("Solución Optima:"));
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