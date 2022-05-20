import 'bootstrap';
import './css/styles.css'
import Ipn_Logo from './Assets/LOGO_POLI.png'
import Escom_Logo from './Assets/LOGO_ESCOM.png';
import Home from './Componentes/Home';

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
/*Variables en el DOM*/
const changeToSim = () => {
    bodyApp.remove();
}
const changeToHome = () => {
    bodyApp.appendChild(inicio);
}
const inicio = Home(changeToSim)
bodyApp.appendChild(inicio);