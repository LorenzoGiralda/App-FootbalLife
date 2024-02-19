import LinkHome from '../components/LinkHome';
import bgHome from '../img/bg home.png'
import bgHomeS from '../img/home-s.jpg'
import stileHome from './HomePage.module.css'

import campionatiS from '../img/campionati-s.jpg'
import giocatoriS from '../img/giocatori-s.png'
import squadreS from '../img/squadre-s.png'

import Campionati from '../img/campionati.png'
import Squadre from '../img/squadre.png'
import Calciatori from '../img/calciatori.png'


const LinkData = [
{img: campionatiS, icon: Campionati, title: 'CAMPIONATI', link:'campionati'},
{img: squadreS, icon: Squadre, title: 'SQUADRE', link:'squadre'},
{img: giocatoriS, icon: Calciatori, title: 'CALCIATORI', link:'calciatori'}
]

const HomePage = () => {

const BgStyle = stileHome.BgStyle

return(
<>
<div className={`container-fluid p-0 ${stileHome.resizeDivTot}`}>
<img src={bgHomeS} className="d-flex d-sm-none img-fluid" alt="sfondo-home"></img>
<img src={bgHome} className="d-none d-sm-flex img-fluid" alt="sfondo-home"></img>
</div>
<div className={BgStyle}>
<div className='d-flex justify-content-center py-4 mx-2 text-center'>
<h2 className={stileHome.stileTitle}>STATISTICHE SUL CALCIO DA TUTTO IL MONDO</h2>
</div>
<LinkHome
LinkData={LinkData}
></LinkHome>
</div>
</>
)};

export default HomePage;