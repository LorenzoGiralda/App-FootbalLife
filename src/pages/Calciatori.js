import { Outlet } from 'react-router-dom'
import stilePlayer from './Campionato.module.css'
import BgCalciatori from '../img/bg-giocatori.png';
import BgCalciatoriS from '../img/giocatori-s.png'

const BgStyle = stilePlayer.BgStyle
const TitleStyle = stilePlayer.stileTitle


const Calciatori = () => {
return(
<>
<div className={`container-fluid p-0 ${stilePlayer.resizeDivTot}`}>
<img src={BgCalciatoriS} className="d-flex d-sm-none img-fluid" alt="sfondo-calciatori"></img>
<img src={BgCalciatori } className="d-none d-sm-flex img-fluid" alt="sfondo-calciatori"></img>
</div>
<div className={BgStyle}>
<div className='d-flex justify-content-center py-4 mx-2 text-center'>
<h2 className={TitleStyle}>SCOPRI LE STATISTICHE SU VARI CALCIATORI NEL MONDO</h2>
</div>
<Outlet></Outlet>
</div>
</>
)};
    
export default Calciatori;