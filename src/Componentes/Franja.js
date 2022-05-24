
function crearFraja(texto_h3) {
    const franjaOscura = document.createElement("div");
    franjaOscura.classList.add("container-fluid", "franja")
    const _subtitulo = document.createElement("h3");
    _subtitulo.classList.add("text-boticelli", "py-2");
    _subtitulo.textContent = texto_h3;
    franjaOscura.appendChild(_subtitulo);
    return (franjaOscura);
}

export default crearFraja;