import 'bootstrap';
import './css/styles.css'
import Ipn_Logo from './Assets/LOGO_POLI.png'
import Escom_Logo from './Assets/LOGO_ESCOM.png';
import Home from './Componentes/Home';
import Sim from './Componentes/sim';

/* Valores Constantes del DOM*/
const bodyApp = document.getElementById("app");
const logoIpn = document.createElement('img');
const logoEscom = document.createElement('img');
logoIpn.src = Ipn_Logo;
logoEscom.src = Escom_Logo;
logoIpn.classList.add("img-fluid");
logoEscom.classList.add("img-fluid");
document.getElementById("logo-escom").appendChild(logoEscom);
document.getElementById("logo-ipn").appendChild(logoIpn);
const inicio = document.createElement('div');
const sim = document.createElement('div');
/*Variables en el DOM*/
const changeToSim = () => {
    bodyApp.removeChild(inicio);
    bodyApp.appendChild(sim);
}
const changeToHome = () => {
    bodyApp.removeChild(sim);
    bodyApp.appendChild(inicio);
}
Sim(sim, changeToHome);
Home(inicio, changeToSim)
bodyApp.appendChild(inicio);