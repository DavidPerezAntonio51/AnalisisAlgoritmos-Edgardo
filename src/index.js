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
logoIpn.style.width = "70%";
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

//import * as p5 from 'p5';
//var Arr = [2,80,120]; 
/*
const canvas = (sk) => {
  sk.setup = () => {
    sk.createCanvas(sk.windowWidth,sk.windowHeight , sk.WEBGL);
  }
  sk.draw = () => {
    sk.background(250);
    sk.translate(-250, 0, 0);

    sk.push();
    sk.rotateZ(1.57);
    sk.rotateX(0);
    sk.rotateY(0);
    sk.ambientMaterial(0);
    sk.cylinder(30, 200);
    sk.pop();
    sk.translate(250, 0, 0);
    sk.push();
    sk.rotateZ(1.57);
    sk.rotateX(0);
    sk.rotateY(0);
    sk.ambientMaterial(0);
    sk.cylinder(30, 200);
    sk.pop();
    sk.translate(250, 0, 0);
    sk.push();
    sk.rotateZ(1.57);
    sk.rotateX(0);
    sk.rotateY(0);
    sk.ambientMaterial(0);
    sk.cylinder(30, 200);
    sk.pop();
  }
}
const P5 = new p5(canvas);*/
