function Sim(contenedor, changeToHome) {
    const botonSim = document.createElement('button');
    botonSim.textContent = "Revisa Nuestro Simulador";
    botonSim.classList.add("btn", "btn-outline-bondi");
    botonSim.onclick = changeToHome;
    contenedor.appendChild(botonSim);
    return contenedor;
}
export default Sim;