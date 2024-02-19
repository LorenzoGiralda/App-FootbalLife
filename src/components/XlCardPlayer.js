import XlCardStyle from './XlCard.module.css'
import { useLoaderData, Link } from 'react-router-dom';
import closed from '../img/icon-x.png'
import stileSmallFilter from './SmallCard.module.css'


const XlCardPlayer = () => {

const data = useLoaderData('detail-player')

const team = data.response

const stileHover = stileSmallFilter.stileHoverClosed

// const round = XlCardStyle.roundedClick


return(
<>
{team.map( squadra =>
<div className={`py-4 ${XlCardStyle.TitleSCard}`}>
<div className='container p-2'>
<div className=''>
<div className='bg-light p-2 rounded d-flex flex-wrap'>

<div className='d-flex col-12 d-md-none justify-content-end'>
<Link to="../../../" relative="path">
<img className={stileHover} src={closed} alt='icona closed'
></img>
</Link> 
</div>

<div className='col-12 col-md-4 d-flex justify-content-center align-items-center p-4 pt-0 pt-md-4'>
<div className='roun col-12 h-100 d-flex justify-content-center align-items-center'>
<div className='col-12 p-3 pt-0 pt-md-4 d-flex justify-content-center h-100 align-items-center overflow-hidden'>
<img className='rounded-circle' style={{'width': '80%'}}  src={squadra.player.photo} alt={squadra.player.photo}></img>
</div>
</div>
</div>

{/* D-NONE D-LG-FLEX DATI */}
<div className='col-12 col-md-8 p-2 ps-4 d-none d-sm-flex flex-wrap'>

<div className='col-12 col-sm-6'>
<div className={XlCardStyle.resLabel}>Nome</div>
<div>{squadra.player.firstname}</div>
</div>


<div className='col-12 col-sm-6 d-flex justify-content-between'>
<div>
<div className={XlCardStyle.resLabel}>Nazionalità</div>
<div>{squadra.player.nationality}</div>
</div>
<div className='d-none d-md-flex justify-content-end'>
<Link to="../../../" relative="path">
<img className={stileHover} src={closed} alt='icona closed'
></img>
</Link> 
</div>
</div>


<div className='col-12 col-sm-6'>
<div className={XlCardStyle.resLabel}>Cognome</div>
<div>{squadra.player.lastname}</div>
</div> 

<div className='col-12 col-sm-6'>
<div className={XlCardStyle.resLabel}>Età</div>
<div>{squadra.player.age}</div>
</div>  


<div className='col-12 col-sm-6 d-flex'>
<div className='col-12 col-sm-8'>
<div className={XlCardStyle.resLabel}>Squadra</div>
<div>{squadra.statistics[0].team.name}</div>
</div>
</div>

<div className='col-12 col-sm-6'>
<div className={XlCardStyle.resLabel}>Altezza</div>
<div>{squadra.player.height}</div>
</div>

<div className='col-12 col-sm-6'>
<div className={XlCardStyle.resLabel}>Ruolo</div>
<div>{squadra.statistics[0].games.position}</div>
</div>

<div className='col-12 col-sm-6'>
<div className={XlCardStyle.resLabel}>Peso</div>
<div>{squadra.player.weight}</div>
</div>
</div>



{/* D-FLEX D-LG-NONE DATI */}
<div className='col-12 col-md-8 p-2 ps-4 d-flex d-sm-none flex-wrap'>

<div className='col-12 col-sm-6'>
<div className={XlCardStyle.resLabel}>Nome</div>
<div>{squadra.player.firstname}</div>
</div>

<div className='col-12 col-sm-6'>
<div className={XlCardStyle.resLabel}>Cognome</div>
<div>{squadra.player.lastname}</div>
</div> 

<div className='col-12 col-sm-6 d-flex'>
<div className='col-12 col-sm-8'>
<div className={XlCardStyle.resLabel}>Squadra</div>
<div>{squadra.statistics[0].team.name}</div>
</div>
</div>

<div className='col-12 col-sm-6'>
<div className={XlCardStyle.resLabel}>Ruolo</div>
<div>{squadra.statistics[0].games.position}</div>
</div>

<div className='col-12 col-sm-6 d-flex justify-content-between'>
<div>
<div className={XlCardStyle.resLabel}>Nazionalità</div>
<div>{squadra.player.nationality}</div>
</div>
<div className='d-none d-md-flex justify-content-end'>
<Link to="../../../" relative="path">
<img className={stileHover} src={closed} alt='icona closed'
></img>
</Link> 
</div>
</div>


<div className='col-12 col-sm-6'>
<div className={XlCardStyle.resLabel}>Età</div>
<div>{squadra.player.age}</div>
</div>  


<div className='col-12 col-sm-6'>
<div className={XlCardStyle.resLabel}>Altezza</div>
<div>{squadra.player.height}</div>
</div>


<div className='col-12 col-sm-6'>
<div className={XlCardStyle.resLabel}>Peso</div>
<div>{squadra.player.weight}</div>
</div>
</div>



{/* <div className='col-12 mt-3 px-3'>
<div className={XlCardStyle.resLabel}>Trofei</div>
<div>3 scudetti - 1 campionato di serie b - 9 coppe italia - 2 supercoppe italiane - 1 conference league - 1 coppa delle fiere - 1 coppa anglo italiana</div>
</div> */}
</div>
</div>
</div>
</div>
)}
</>
)};

export default XlCardPlayer;



export const loader = async ( {params} ) => {

     const id = params.idPlay
     const season = params.idSea
     const team = params.idTea

     console.log(id, season, team, 'DATI RECUPERATI DA PARAMS')

    // const paraId = id.toString()

    // console.log(paraId,'vedemo')

	const response = await fetch("https://v3.football.api-sports.io/players?id=" + id + "&season=" + season + "&team=" + team, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "353b6d4834b3e467f904d41caf26e4fc"
        }
    })

	if(!response.ok){
	// console.log('nessun dato')
	}else{
	// const data = await response.json()
	console.log(response, 'dati team xlcard')
	return response
	}}