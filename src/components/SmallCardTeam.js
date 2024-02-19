import { Link, useLoaderData } from 'react-router-dom'
import { useState } from "react"
import styleSCard from './SmallCard.module.css'
import iconPos from '../img/icon-position.png';
// import SearchFilter from './SearchFilter';
// import FilterCamp from './FilterCamp';
// import FilterTeam from './FilterTeam';
import TodosFilter from './TodosFilter';
// import XlCard from './XlCard';



const SmallCardTeam = () => { 

const data = useLoaderData('total-Team')

const lega = data.response

const msgNoDati = <div style={{'display': 'flex', 'justifyContent': 'center', 'width': '100%'}}> <h5 className='mt-4 bg-white rounded lh-base p-2 fw-bold text-center'>Nessuna squadra trovata! <br></br> Seleziona un altra stagione.</h5></div>

const loadTeamSmall = async(para) => {

    const response = await fetch("https://v3.football.api-sports.io/standings?league=" + para.torneo + "&season=" + para.stagione, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "353b6d4834b3e467f904d41caf26e4fc"
        }
    })

    const data = await response.json()

    console.log(data, 'responso')

    const dati = data.response

    if(!response.ok){
    // return    
    }else if(dati.length === 0){
    changeSmallTeam([])
    changeNoDati(msgNoDati)
    changeCountry('')
    }else if(dati.length === 0 && statoCountry === ''){
    changeNoDati('')
    }else{
    console.log(data.response)
    const filtraTeam = data.response[0].league.standings[0]
    const Country = data.response[0].league.country
    console.log(filtraTeam, 'team')
    changeSmallTeam(filtraTeam)
    changeCountry(Country)   
    }
};


const [statoSmallTeam, changeSmallTeam] = useState([])
const [statoNoDati, changeNoDati] = useState('')
const [statoCountry, changeCountry] = useState('')
const [statosearch, changeSearch] = useState('')

const [stateBtn, changeBtn] = useState(true)


const changeButton = () => {
if(stateBtn === true){
changeBtn(!stateBtn)
}else{
changeBtn(!stateBtn)
changeCountry('')
changeSmallTeam([])
changeSearch('')
}
}

const eventoSearch = (para) => {
changeSearch(para) 
}

let datoTeam = statoSmallTeam
const filter = datoTeam.filter(team => team.team.name.toLowerCase().includes(statosearch))

if(statosearch !== ''){
datoTeam = filter
}



return(
<>

<TodosFilter
eventoComponent={loadTeamSmall}
lega={lega}
statoCountry={statoCountry}
eventoSearch={eventoSearch}
stateBtn={stateBtn}
changeButton={changeButton}
></TodosFilter>

<div className='container p-0 d-flex flex-wrap'>
{datoTeam.length > 0 ? datoTeam.map( lega  => 
<div className='col-12 col-md-6 col-lg-3 p-2 d-flex'>
<Link className={styleSCard.linkSt} to={`${lega.team.id}`}>
<div className='bg-light p-2 rounded shadow d-flex flex-column w-100 h-100 justify-content-between'>
<div className='d-flex justify-content-center pt-2'>
<img  style={{'width': '70px'}} className='img-fluid' src={lega.team.logo} alt={lega.team.logo}></img>
</div>
{/* <div className={`text-center mt-2 ${styleSCard.resLabel}`} mt-2>Francesco</div> */}
<h2 className={`mt-2 text-center ${styleSCard.TitleSCard}`}>{lega.team.name}</h2>
{/* <div className='d-flex align-items-center mb-4 ms-2'>
<div className={styleSCard.boxIcon}>
<img src={iconPos} className={styleSCard.resImg} alt="img"></img></div>
</div> */}
<div className='d-flex align-items-center ms-2 mb-2'>
<div className={`d-flex  justify-content-center ${styleSCard.boxIcon}`}>
<img src={iconPos} className={styleSCard.resImg1} alt="img"></img></div>
<div className='ps-3'>{statoCountry}</div>
</div>  
</div>
</Link>
</div>
 ) : statoNoDati }
 {/* leagues.map( lega =>  */}
     {/* <div className='col-md-6 col-lg-3 p-2 d-flex'>
     <Link className={styleSCard.linkSt} to={`${lega.team.id}`}>
    <div className='bg-light p-2 rounded shadow d-flex flex-column w-100 h-100 justify-content-between'>
     <div className='d-flex justify-content-center'>
    <img className='img-fluid' src={lega.team.logo} alt={lega.team.logo}></img>
     </div>
    <div className={`text-center mt-2 ${styleSCard.resLabel}`} mt-2>Francesco</div> 
 <h2 className={`mt-2 text-center ${styleSCard.TitleSCard}`}>{lega.league.name}</h2>
     <div className='d-flex align-items-center mb-4 ms-2'>
    <img src={iconPos} className={styleSCard.resImg} alt="img"></img></div>
     <div className='ps-3'>{lega.team.country}</div>
    </div> 
      <div className='d-flex align-items-center ms-2 mb-2'>
    <div className={`d-flex  justify-content-center ${styleSCard.boxIcon}`}>
     <img src={iconPos} className={styleSCard.resImg1} alt="img"></img></div>
     <div className='ps-3'>{lega.country.name}</div>
    </div>   
    </div>
    </Link>
     </div>)} */}
</div>
</>    
)};

export default SmallCardTeam;