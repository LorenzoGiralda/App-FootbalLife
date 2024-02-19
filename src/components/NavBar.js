import {NavLink} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { ChangeByPayload } from '../store/ActiveLinkLogic';

import Logo from '../img/logo.png'
import Home from '../img/home.png'
import Campionati from '../img/campionati.png'
import Squadre from '../img/squadre.png'
import Calciatori from '../img/calciatori.png'
import Contatti from '../img/contatti.png'

import styles from './Navbar.module.css'
import './Navbar.css'
import { useState } from "react";



const Navbar = (props) => {


const State = useSelector((state) => state.LinkActive.value)
const dispatch = useDispatch()

const [statoToggle, ChangeToggle]= useState(false)
// const [statoDisplay, ChangeDisplay]= useState(true)

const NavFont = styles.NavFont
const Black = styles.Black



return(
<>
<div style={{'zIndex': '1000'}} className={`bg-light ${styles.resticky}`}>
<div className={`pt-4 d-none d-lg-flex ${styles.divLogo}`}><img className={styles.resLogo} src={Logo} alt="Logo FootbalLife"></img></div>
<nav className="w-100 navbar navbar-expand-lg justify-content-lg-center shadow-sm p-0 p-lg-3 pb-lg-0 mb-lg-0">
  <div className={`${NavFont}`}>
  <div className="d-flex d-lg-none align-items-center me-4">
  <div className={`pt-4 pb-4 w-100  ${styles.divLogo}`}><img className={styles.resLogo} src={Logo} alt="Logo FootbalLife"></img></div>
   <button id="navi" onClick={() => ChangeToggle(!statoToggle)} className={`navbar-toggler ms-3`} style={{'height': '40px'}} type="button"> 
     <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    {/* <div className={`w-100  ${statoToggle ? 'd-block' : 'd-none'}`} id="navbarNav"> 
      <ul className="navbar-nav mt-2 mt-lg-0">
        <li className={`nav-link nav-item d-flex align-items-center me-4 ps-2 ps-lg-0' ${styles.StileLi}`}>
        <div className={styles.ResImg}><img className={State === 'home' ? Black : ''} src={Home} alt="Home"></img></div>
        <NavLink onClick={(event) => {dispatch(ChangeByPayload('home'));ChangeToggle(!statoToggle)}}  to="" className='nav-link ms-2 ms-lg-0'>Home</NavLink>
        </li>
        <li className={`nav-item d-flex align-items-center me-3 ps-2 ps-lg-0' ${styles.StileLi}`}>
        <div className={styles.ResImg}><img className={State === 'campionati' ? Black : ''} src={Campionati} alt="Home"></img></div>
        <NavLink onClick={ (event) => {dispatch(ChangeByPayload('campionati'));ChangeToggle(!statoToggle)} } to="campionati" className="nav-link ms-2 ms-lg-0">Campionati</NavLink>
        </li>
        <li className={`nav-item d-flex align-items-center me-3 ps-2 ps-lg-0' ${styles.StileLi}`}>
        <div className={styles.ResImg}><img className={State === 'squadre' ? Black : ''} src={Squadre} alt="Home"></img></div>
        <NavLink onClick={ (event) => {dispatch(ChangeByPayload('squadre'));ChangeToggle(!statoToggle)} } to="squadre" className="nav-link ms-2 ms-lg-0">Squadre</NavLink>
        </li>
        <li className={`nav-item d-flex align-items-center me-3 ps-2 ps-lg-0' ${styles.StileLi}`}>
        <div className={styles.ResImg}><img className={State === 'calciatori' ? Black : ''} src={Calciatori} alt="Home"></img></div>
        <NavLink onClick={ (event) => {dispatch(ChangeByPayload('calciatori'));ChangeToggle(!statoToggle)} } to="calciatori" className="nav-link ms-2 ms-lg-0">Calciatori</NavLink>
        </li>
        <li className={`ps-2 nav-item d-flex align-items-center me-3' ${styles.StileLi}`}>
        <div className={styles.ResImg}><img className={State === 'contatti' ? Black : ''} src={Contatti} alt="Home"></img></div>
        <NavLink onClick={ (event) => {dispatch(ChangeByPayload('contatti'));ChangeToggle(!statoToggle)}} to="contatti" className="nav-link ms-2 ms-lg-0">Contatti</NavLink>
        </li>
      </ul>
    </div> */}
  </div>
</nav>
</div>
<div style={{'zIndex': '900'}} className={`w-100 d-block d-lg-flex bg-light justify-content-center ${NavFont} ${statoToggle ? styles.resticky1 : styles.resticky2}`} id="navbarNav"> 
      <ul className="navbar-nav d-flex mt-lg-0 flex-column flex-lg-row">
        <li className={`nav-link nav-item d-flex align-items-center me-3 ps-2 ps-lg-0' ${styles.StileLi}`}>
        <div className={styles.ResImg}><img className={State === 'home' ? Black : ''} src={Home} alt="Home"></img></div>
        <NavLink onClick={(event) => {dispatch(ChangeByPayload('home'));ChangeToggle(false)}}  to="" className='nav-link ms-2'>Home</NavLink>
        </li>
        <li className={`nav-item d-flex align-items-center me-3 ps-2 ps-lg-0' ${styles.StileLi}`}>
        <div className={styles.ResImg}><img className={State === 'campionati' ? Black : ''} src={Campionati} alt="Home"></img></div>
        <NavLink onClick={ (event) => {dispatch(ChangeByPayload('campionati'));ChangeToggle(false)} } to="campionati" className="nav-link ms-2">Campionati</NavLink>
        </li>
        <li className={`nav-item d-flex align-items-center me-3 ps-2 ps-lg-0' ${styles.StileLi}`}>
        <div className={styles.ResImg}><img className={State === 'squadre' ? Black : ''} src={Squadre} alt="Home"></img></div>
        <NavLink onClick={ (event) => {dispatch(ChangeByPayload('squadre'));ChangeToggle(false)} } to="squadre" className="nav-link ms-2">Squadre</NavLink>
        </li>
        <li className={`nav-item d-flex align-items-center me-3 ps-2 ps-lg-0' ${styles.StileLi}`}>
        <div className={styles.ResImg}><img className={State === 'calciatori' ? Black : ''} src={Calciatori} alt="Home"></img></div>
        <NavLink onClick={ (event) => {dispatch(ChangeByPayload('calciatori'));ChangeToggle(false)} } to="calciatori" className="nav-link ms-2">Calciatori</NavLink>
        </li>
        <li className={`ps-2 nav-item d-flex align-items-center me-3' ${styles.StileLi}`}>
        <div className={styles.ResImg}><img className={State === 'contatti' ? Black : ''} src={Contatti} alt="Home"></img></div>
        <NavLink onClick={ (event) => {dispatch(ChangeByPayload('contatti'));ChangeToggle(false)}} to="contatti" className="nav-link ms-2 ms-lg-0">Contatti</NavLink>
        </li>
      </ul>
    </div>
</>
)};

export default Navbar;



   //                             !!! NAV BAR ORIGINALE !!!!

{/* <div style={{'zIndex': '1000'}} className={`bg-light ${styles.resticky}`}>
<div className={`pt-4 d-none d-lg-flex ${styles.divLogo}`}><img className={styles.resLogo} src={Logo} alt="Logo FootbalLife"></img></div>
<nav className="w-100 navbar navbar-expand-lg justify-content-lg-center shadow-sm p-0 p-lg-3 pb-lg-0 mb-lg-0">
  <div className={`${NavFont}`}>
  <div className="d-flex d-lg-none align-items-center me-4">
  <div className={`pt-4 pb-4 w-100  ${styles.divLogo}`}><img className={styles.resLogo} src={Logo} alt="Logo FootbalLife"></img></div>
  <button data-bs-toggle="collapse" className={`navbar-toggler ms-3`} data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{'height': '40px'}} type="button">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className={`collapse navbar-collapse w-100`} id="navbarNav">
      <ul className="navbar-nav mt-2 mt-lg-0">
        <li className={`nav-link nav-item d-flex align-items-center me-4 ps-2 ps-lg-0' ${styles.StileLi}`}>
        <div className={styles.ResImg}><img className={State === 'home' ? Black : ''} src={Home} alt="Home"></img></div>
        <NavLink data-bs-toggle="collapse" data-bs-target='.navbar-collapse.show'  onClick={(event) => {dispatch(ChangeByPayload('home'))}}  to="" className='nav-link ms-2 ms-lg-0'>Home</NavLink>
        </li>
        <li className={`nav-item d-flex align-items-center me-3 ps-2 ps-lg-0' ${styles.StileLi}`}>
        <div className={styles.ResImg}><img className={State === 'campionati' ? Black : ''} src={Campionati} alt="Home"></img></div>
        <NavLink onClick={ (event) => {dispatch(ChangeByPayload('campionati'))} } to="campionati" className="nav-link ms-2 ms-lg-0">Campionati</NavLink>
        </li>
        <li className={`nav-item d-flex align-items-center me-3 ps-2 ps-lg-0' ${styles.StileLi}`}>
        <div className={styles.ResImg}><img className={State === 'squadre' ? Black : ''} src={Squadre} alt="Home"></img></div>
        <NavLink onClick={ (event) => {dispatch(ChangeByPayload('squadre'))} } to="squadre" className="nav-link ms-2 ms-lg-0">Squadre</NavLink>
        </li>
        <li className={`nav-item d-flex align-items-center me-3 ps-2 ps-lg-0' ${styles.StileLi}`}>
        <div className={styles.ResImg}><img className={State === 'calciatori' ? Black : ''} src={Calciatori} alt="Home"></img></div>
        <NavLink onClick={ (event) => {dispatch(ChangeByPayload('calciatori'))} } to="calciatori" className="nav-link ms-2 ms-lg-0">Calciatori</NavLink>
        </li>
        <li className={`ps-2 nav-item d-flex align-items-center me-3' ${styles.StileLi}`}>
        <div className={styles.ResImg}><img className={State === 'contatti' ? Black : ''} src={Contatti} alt="Home"></img></div>
        <NavLink onClick={ (event) => {dispatch(ChangeByPayload('contatti'))}} to="contatti" className="nav-link ms-2 ms-lg-0">Contatti</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div> */}