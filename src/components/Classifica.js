import ClassificaStyle from './Classifica.module.css'
// import { useState } from 'react'


const Classifica = (props) => {

    // const stileTi = ClassificaStyle.stileTi 
    // const stileSel = BigCardStyle.stileSel
    // const stileSel1 = BigCardStyle.stileSel1
    
    const stileTi1 = ClassificaStyle.stileTi1

    const titoli = ClassificaStyle.TitleSCard


return(
<>

{props.classifica.length > 0 ?
<div className='d-flex col-12 mt-3'>
<div className='col-1'></div>
<div className={`col-6 col-lg-3 ${stileTi1}`}>Squadra</div>
<div className={`col-1 text-center d-flex align-items-center justify-content-center  ${stileTi1}`}>PG</div>
<div className={`col-1 text-center d-flex align-items-center justify-content-center  ${stileTi1}`}>V</div>
<div className={`col-1 text-center d-flex align-items-center justify-content-center  ${stileTi1}`}>P</div>
<div className={`col-1 text-center d-flex align-items-center justify-content-center  ${stileTi1}`}>S</div>
<div className={`d-none d-lg-flex align-items-center col-1 text-center justify-content-center  ${stileTi1}`}>GF</div>
<div className={`d-none d-lg-flex align-items-center  col-1 text-center justify-content-center  ${stileTi1}`}>GS</div>
<div className={`d-none d-lg-flex align-items-center col-1 text-center justify-content-center  ${stileTi1}`}>DR</div>
<div className={`col-1 text-center d-flex align-items-center justify-content-center ${stileTi1}`}>PT</div>
</div>
: ' '}

{props.classifica.length > 0 ? props.classifica.map( dato => 
<>
<div className='d-flex col-12 mb-2'>
<div className={`col-1 text-center ${titoli}`}>{dato.rank}</div>
<div className='col-6 col-lg-3 d-flex overflow-auto align-items-center'>
<div><img className={ClassificaStyle.resImgLogo} src={dato.team.logo} alt='logo'></img></div> 
<div className={`ps-2 text-nowrap ${titoli}`}>{dato.team.name}</div>
</div>
<div className={`col-1 text-center d-flex align-items-center justify-content-center ${stileTi1}`}>{dato.all.played}</div>
<div className={`col-1 text-center d-flex align-items-center justify-content-center  ${stileTi1}`}>{dato.all.win}</div>
<div className={`col-1 text-center d-flex align-items-center justify-content-center  ${stileTi1}`}>{dato.all.draw}</div>
<div className={`col-1 text-center d-flex align-items-center justify-content-center  ${stileTi1}`}>{dato.all.lose}</div>
<div className={`d-none d-lg-flex col-1 text-center align-items-center justify-content-center  ${stileTi1}`}>{dato.all.goals.for}</div>
<div className={`d-none d-lg-flex col-1 text-center align-items-center justify-content-center  ${stileTi1}`}>{dato.all.goals.against}</div>
<div className={`d-none d-lg-flex col-1 text-center  align-items-center justify-content-center  ${stileTi1}`}>{dato.goalsDiff}</div>
<div className={`col-1 text-center d-flex align-items-center justify-content-center  ${titoli}`}>{dato.points}</div>
</div>
</>
): props.caricamentoDati}
</>
)};

export default Classifica;