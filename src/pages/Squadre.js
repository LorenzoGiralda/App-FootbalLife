import { Outlet } from 'react-router-dom'
import stileCamp from './Campionato.module.css'
import BgSquadre from '../img/bg-squadre.png';
import BgSquadreS from '../img/squadre-s.png';

const BgStyle = stileCamp.BgStyle
const TitleStyle = stileCamp.stileTitle


const Squadre = () => {
return(
<>
<div className={`container-fluid p-0 ${stileCamp.resizeDivTot}`}>
<img src={BgSquadreS} className="d-flex d-sm-none img-fluid" alt="sfondo-squadre"></img>
<img src={BgSquadre} className="d-none d-sm-flex img-fluid" alt="sfondo-squadre"></img>
</div>
<div className={BgStyle}>
<div className='d-flex justify-content-center py-4 mx-2 text-center'>
<h2 className={TitleStyle}>SCOPRI LE STATISTICHE SU VARIE SQUADRE NEL MONDO</h2>
</div>
<Outlet></Outlet>
</div>
</>
)};
    
export default Squadre;