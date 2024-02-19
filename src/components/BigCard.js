import BigCardStyle from './BigCard.module.css'
import { Link, useLoaderData } from 'react-router-dom'
import Classifica from './Classifica';
import { useState } from 'react'; 
import closed from '../img/icon-x.png';

const stileTi = BigCardStyle.stileTi 
// const stileSel = BigCardStyle.stileSel
// const stileSel1 = BigCardStyle.stileSel1

const stileTi1 = BigCardStyle.stileTi1
const stileHover = BigCardStyle.stileHoverClosed
const titolo =  BigCardStyle.TitleSCard
const titoletto = BigCardStyle.TitleSCard1


const BigCard = () => {

  const dati = useLoaderData('total-league')
 
  const lega = dati.response
  
  console.log(lega, 'dati lega')
  
  // const NomeCampionato = data.response[0].league.name

  const IdCampionato = dati.response[0].league.id

  const stagioni = dati.response[0].seasons

  console.log(stagioni)


  /////"https://v3.football.api-sports.io/standings?league=" + id + "&season=" + stagione,
  
  const id = IdCampionato

  
  // const lega = props.NomeCampionato
 
   console.log(id, 'verifica id')
 
 
     const [datiClassifica, changeDatiClassifica] = useState([])
     const [caricamentoDati, changeCaricamento] = useState('')


     const FdatiClassifica = async (event) => {
 
      const stagione = event.target.value

       // console.log(stagione, id)
 
         const response = await fetch("https://v3.football.api-sports.io/standings?league=" + id + "&season=" + stagione, {
         "method": "GET",
         "headers": {
         "x-rapidapi-host": "v3.football.api-sports.io",
         "x-rapidapi-key": "353b6d4834b3e467f904d41caf26e4fc"
         }
         })

        const data = await response.json()

        // const filtraSezione = data.response.filter(league => league.standings)

        // const filtraSezioneClassifica = data.response[0].league.standings[0]


        // const filtraSezioneClassifica = data.response[0].league.standings[0]

        console.log(data.response, 'rovadddd')

         if(!response.ok){
          changeDatiClassifica([]) 
          changeCaricamento('nessun dato trovato') }
        
          else if(!response.ok && stagione === ''){
          changeDatiClassifica([]) 
          changeCaricamento('')  

         } else if(data.response.length > 0 && response.ok){

          // const data = await response.json()

          // const filtraSezioneClassifica = data.response.filter(league => league)

          const filtraSezioneClassifica = data.response[0].league.standings[0]

          console.log(filtraSezioneClassifica, 'result')

          changeDatiClassifica(filtraSezioneClassifica)
 
         }else{
          const paragrafo = <div className='w-100 mt-3' style={{'textAlign': 'center', 'fontFamily': 'Montserrat, sans-serif','fontSize': '20px'}}>Nessun dato presente!<br></br> Seleziona un'altra stagione.</div>
          changeCaricamento(paragrafo)  
          changeDatiClassifica([]) 
         }
         
        } 
 
     // const stileTi = ClassificaStyle.stileTi 
     // const stileSel = BigCardStyle.stileSel
     // const stileSel1 = BigCardStyle.stileSel1
     
  /////

 

return(
<>
<div className='d-none d-sm-block py-4'>

<div className='container p-0'>
<div className='col-12 p-2'>

<div className='bg-light d-flex flex-wrap p-2 rounded shadow'>
{lega.map( dato =>
<div className='d-flex col-12 mb-3'>
<div className='col-6 px-2'>
<div className={stileTi}>Campionato</div>
<div className='d-flex'>
<div><img style={{'width': '60px'}}  src={dato.league.logo} alt='logo'></img></div> 
<div className={`ps-3 ${titolo}`}>{dato.league.name}</div>
</div>
</div> 

<div className='px-2 col-6 d-flex'>
<div className='col-6'>
<div className={stileTi}>Nazione</div>
<div className={titolo}>{dato.country.name}</div>
</div>
<div className='col-6 d-flex justify-content-end'>
<Link to=".." relative="path">
<img className={stileHover} src={closed} alt='icona closed'
></img>
</Link> 
</div>
</div>

</div>
)}

<div className='col-12 d-flex align-items-center'>
<div className={`col-6 px-2 ${titolo}`}>Classifica finale</div>
<div className='col-6 px-2'>
<select onChange={FdatiClassifica} className={`form-select ${stileTi1}`} aria-label="Default select example">
<option selected value=''>Stagione</option>
{stagioni.map(dato =>
<option value={dato.year}>{dato.year}</option>
)}
</select>
</div>
</div>

{/* 
{datiClassifica.length > 0 ?
<div className='d-flex col-12 mt-3'>
<div className='col-1'></div>
<div className={`col-3 ${stileTi1}`}>Squadra</div>
<div className={`col-1 text-center ${stileTi1}`}>PG</div>
<div className={`col-1 text-center ${stileTi1}`}>V</div>
<div className={`col-1 text-center ${stileTi1}`}>P</div>
<div className={`col-1 text-center ${stileTi1}`}>S</div>
<div className={`col-1 text-center ${stileTi1}`}>GF</div>
<div className={`col-1 text-center ${stileTi1}`}>GS</div>
<div className={`col-1 text-center ${stileTi1}`}>DR</div>
<div className={`col-1 text-center ${stileTi1}`}>PT</div>
</div>
: caricamentoDati}

{datiClassifica.length > 0 ? datiClassifica.map( dato => 
<>
<div className='d-flex col-12 mb-2'>
<div className='col-1 text-center'>{dato.rank}</div>
<div className='col-3 d-flex overflow-auto'>
<div><img style={{'width': '40px'}} src={dato.team.logo} alt='logo'></img></div> 
<div className='ps-2 text-nowrap'>{dato.team.name}</div>
</div>
<div className='col-1 text-center'>{dato.all.played}</div>
<div className='col-1 text-center'>{dato.all.win}</div>
<div className='col-1 text-center'>{dato.all.draw}</div>
<div className='col-1 text-center'>{dato.all.lose}</div>
<div className='col-1 text-center'>{dato.all.goals.for}</div>
<div className='col-1 text-center'>{dato.all.goals.against}</div>
<div className='col-1 text-center'>{dato.goalsDiff}</div>
<div className='col-1 text-center'>{dato.points}</div>
</div>
</>
): caricamentoDati} */}


<Classifica
classifica={datiClassifica}
caricamentoDati={caricamentoDati}
></Classifica>


</div> 
 
</div>
</div>
</div>

<div className={`d-block d-sm-none bg-trasparent py-4`}>

<div className='container p-0'>
<div className='col-12 p-2'>
{lega.map( dato =>
<div className='bg-light d-flex flex-wrap p-2 rounded shadow'>

<div className='col-12 d-flex mb-2'>

<div className='col-6'>
<div >Campionato</div>
<div className='d-flex'>
<div><img style={{'width': '20px'}} src={dato.league.logo} alt='logo'></img></div> 
<div className={`ps-2 ${titoletto}`}>{dato.league.name}</div>
</div>
</div> 

<div className='px-2 col-6 d-flex'>
<div className='col-6'>
<div>Nazione</div>
<div className={titoletto}>{dato.country.name}</div>
</div>
<div className='col-6 d-flex justify-content-end'>
<Link to=".." relative="path">
<img className={stileHover} src={closed} alt='icona closed'
></img>
</Link> 
</div>
</div>

{/* <div className='px-3 col-3'>
<div className={stileTi1}>Squadre</div>
<div>20</div>
</div> */}

</div>

<div className='col-12 d-flex align-items-center'>
<div className={`pt-1 col-6 px-2 ${titoletto}`}>Classifica finale</div>
<div className='col-6 px-2'>
<select onChange={FdatiClassifica} className={`form-select ps-2 py-0 ${stileTi1}`} aria-label="Default select example">
<option selected value=''>Stagione</option>
{stagioni.map(dato =>
<option value={dato.year}>{dato.year}</option>
)}
</select>
</div>
</div>


{/* {datiClassifica.length > 0 ?
<div className='d-flex col-12 mt-3'>
<div className='col-1'></div>
<div className={`col-3 ${stileTi1}`}>Squadra</div>
<div className={`col-1 text-center ${stileTi1}`}>PG</div>
<div className={`col-1 text-center ${stileTi1}`}>V</div>
<div className={`col-1 text-center ${stileTi1}`}>P</div>
<div className={`col-1 text-center ${stileTi1}`}>S</div>
<div className={`col-1 text-center ${stileTi1}`}>GF</div>
<div className={`col-1 text-center ${stileTi1}`}>GS</div>
<div className={`col-1 text-center ${stileTi1}`}>DR</div>
<div className={`col-1 text-center ${stileTi1}`}>PT</div>
</div>
: ''}

{datiClassifica.length > 0 ? datiClassifica.map( dato => 
<>
<div className='d-flex col-12 mb-2'>
<div className='col-1 text-center'>{dato.rank}</div>
<div className='col-3 d-flex overflow-auto'>
<div><img style={{'width': '40px'}} src={dato.team.logo} alt='logo'></img></div> 
<div className='ps-2 text-nowrap'>{dato.team.name}</div>
</div>
<div className='col-1 text-center'>{dato.all.played}</div>
<div className='col-1 text-center'>{dato.all.win}</div>
<div className='col-1 text-center'>{dato.all.draw}</div>
<div className='col-1 text-center'>{dato.all.lose}</div>
<div className='col-1 text-center'>{dato.all.goals.for}</div>
<div className='col-1 text-center'>{dato.all.goals.against}</div>
<div className='col-1 text-center'>{dato.goalsDiff}</div>
<div className='col-1 text-center'>{dato.points}</div>
</div>
</>
): ''} */}

<Classifica
classifica={datiClassifica}
caricamentoDati={caricamentoDati}
></Classifica> 

</div>  
)}  
</div>
</div>
</div>
</>
)};


export default BigCard;





export const loader = async ( {params} ) => {

  const Id = params.idCampo;

const paraId = Id.toString()

const response = await fetch(" https://v3.football.api-sports.io/leagues?id=" + paraId, {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "353b6d4834b3e467f904d41caf26e4fc"
  }
})

if(!response.ok){
//    
}else{
// const data = await response.json()
console.log(response)
return response
}}