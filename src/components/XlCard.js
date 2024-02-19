import XlCardStyle from './XlCard.module.css'
import { useLoaderData, Link } from 'react-router-dom';
import closed from '../img/icon-x.png'
import stileSmallFilter from './SmallCard.module.css'


const XlCard = () => {

const data = useLoaderData('detail')

const team = data.response

const stileHover = stileSmallFilter.stileHoverClosed

const round = XlCardStyle.roundedClick


return(
<>
{team.map( squadra =>
<div className={`py-4 ${XlCardStyle.TitleSCard}`}>
<div className='container p-2'>
<div className=''>
<div className='bg-light p-2 rounded d-flex flex-wrap'>

<div className={`col-12 col-md-4 d-flex justify-content-center align-items-center p-2 ${round}`}>
<div className={`roun col-12 h-100 d-flex justify-content-center align-items-center position-relative ${round}`}
style={{'backgroundImage': `url(${squadra.venue.image})`, 'backgroundSize': 'cover'}}>
<div className='d-flex d-md-none position-absolute start-0 top-0'>
<Link to=".." relative="path">
<img className={stileHover} src={closed} alt='icona closed'
></img>
</Link> 
</div>
<div className={`col-12 p-3 d-flex justify-content-center h-100 align-items-center ${round}`}>
<img style={{'width': '120px'}}  src={squadra.team.logo} alt={squadra.team.logo}></img>
</div>
</div>

</div>

<div className='col-12 col-md-8 p-2 ps-4 d-flex flex-wrap'>
<div className='col-6 col-md-6'>
<div className={XlCardStyle.resLabel}>Nome</div>
<div>{squadra.team.name}</div>
</div>
{/* <div className='col-12 col-sm-6'>
<div className={XlCardStyle.resLabel}>Campionato</div>
<div>Serie A</div>
</div>
<div className='col-12 col-sm-6'>
<div className={XlCardStyle.resLabel}>Paese</div>
<div>Italia</div>
</div>  */}
<div className='col-12 col-sm-6 d-flex'>
<div className='col-12 col-sm-8'>
<div className={XlCardStyle.resLabel}>Anno di fondazione</div>
<div>{squadra.team.founded}</div>
</div>
<div className='d-none d-md-flex col d-flex justify-content-end'>
<Link to=".." relative="path">
<img className={stileHover} src={closed} alt='icona closed'
></img>
</Link> 
</div>
</div>



<div className='col-12 col-sm-6'>
<div className={XlCardStyle.resLabel}>Città</div>
<div>{squadra.venue.city}</div>
</div>
<div className='col-12 col-sm-6'>
<div className={XlCardStyle.resLabel}>Stadio</div>
<div>{squadra.venue.name}</div>
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

export default XlCard;



export const loader = async ( {params} ) => {

    const id = params.idTeam

    const paraId = id.toString()

    console.log(paraId,'vedemo')

	const response = await fetch("https://v3.football.api-sports.io/teams?id=" + paraId, {
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