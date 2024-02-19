import stileTeam from './filterTeam.module.css'
import { useState, useEffect } from 'react';

const FilterPlayer = (props) => {


const  [statoStagione, changeStagione] = useState('')
const  [statoTorneo, changeTorneo] = useState('')
const  [statoTeam, changeTeam] = useState('')

const [statoStagioni, changeStagioni] = useState([])

const [statoSmallTeam, changeSmallTeam] = useState([])
const [statoNoDati, changeNoDati] = useState('')


const [stateSelect, changeSelect] = useState('1')  
const [stateSelect1, changeSelect1] = useState('1') 
const [stateSelect2, changeSelect2] = useState('1')  

const idPlayer = document.getElementById('selectPlayer')
const idStagione = document.getElementById('selectStagione')
const idTorneo = document.getElementById('selectTorneo')

// const [statoCountry, changeCountry] = useState('')

// const valueTorneo = (event) => {
// if(event.target.value === '' && statoTorneo !== ''){
// changeTorneo(event.target.value)
// changeStagione('')   
// }else{
// changeTorneo(event.target.value)
// console.log(event.target.value)
// }}
    
// const valueStagione = (event) => {
// if(event.target.value === '' && statoStagione !== ''){
// console.log(event.target.value)
// changeStagione(event.target.value)
// changeTeam('')
// }else{
// changeStagione(event.target.value)
// console.log(event.target.value) 
// }}


// const TotalTeam = (event) => {
// console.log(event.target.value)
// changeTeam(event.target.value)
// }


    
    /////////////////////////////////////////////////////
    
    const valueStagione = async (event) => {
    
    // changeStagione('')

    const dat = {
    torneo: statoTorneo,
    stagione: event.target.value  
    }
    
    const msgNoDati = <div style={{'display': 'flex', 'justifyContent': 'center', 'width': '100%'}}> <h5 className='mt-4 bg-white rounded lh-base p-2 fw-bold text-center'>Nessuna squadra trovata! <br></br> Seleziona un altra stagione.</h5></div>
    
        const response = await fetch("https://v3.football.api-sports.io/standings?league=" + dat.torneo + "&season=" + dat.stagione, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "353b6d4834b3e467f904d41caf26e4fc"
            }
        })
    
        const data = await response.json()
    
        console.log(data, 'responso team')
    
        const dati = data.response
    
        if(!response.ok){
        // return    
        }else if(dati.length === 0){
        changeSmallTeam([])
        changeNoDati(msgNoDati)
        }else{
        console.log(data.response)
        const filtraTeam = data.response[0].league.standings[0]
        console.log(filtraTeam, 'team')
        changeSmallTeam(filtraTeam)
        // changeStagione(event.target.value)
       // changeTeam(data.response[0])
        }
        changeTeam('')
        changeStagione(event.target.value)
    };



    const valueTorneo = async(event) => {
        
        const id = event.target.value
                
        const response = await fetch("https://v3.football.api-sports.io/leagues?id=" + id, {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "353b6d4834b3e467f904d41caf26e4fc"
        }
        })
            
        const data = await response.json()
        console.log(data,'responso Unselect')
        const filtraOk = data.response.filter(dato => dato.seasons.length > 0)
        console.log(filtraOk)
            
        if(!response.ok){
        // return    
        }else if(response.ok && filtraOk.length === 0){
        ////
        }
        else if(response.ok && statoStagione !== '' && id !== '' && filtraOk.length > 0){
        changeStagione('')
        changeTeam('')
        const filtraSezioneClassifica = data.response[0].seasons
        changeStagioni(filtraSezioneClassifica)
        }else if(response.ok && statoStagione !== '' && id === '' && statoTeam !== '' && filtraOk.length > 0){
        changeStagione('')
        changeTeam('')
        }else if(response.ok && id === '' && statoTorneo !== '' && statoStagione !== '' && statoTorneo !== ''){
        changeStagione('')
        changeTeam('')
        changeTorneo('')
        }
        else{
        const filtraSezioneClassifica = data.response[0].seasons
        changeStagioni(filtraSezioneClassifica)
        }
        changeTorneo(event.target.value)
        };


        const valueTeam = (event) => {
        changeTeam(event.target.value)
        }


// useEffect(() => {
// // valueStagione()
// },[statoTorneo])

const datiPlayer = {
stagione: statoStagione,
squadra: statoTeam  
}

const datiNull = {
stagione: '',
squadra: ''   
}

// const cambiaDisable = () => {
// changeStagione('')
// changeTeam('') 
// }

const togliDati = (event) => {
if(event.target.value === '' && statoStagione !== '' && statoTeam !== '') {
props.ciao(datiNull)
}else{
///    
}
}

return(
<>
<div className={`text-center`}>
<div className='container justify-content-center d-flex flex-wrap p-0 mt-4'>
<div className='col-12 col-lg-6 p-2'>

<div className='bg-light  rounded shadow'>

<div className='d-flex flex-wrap'>

<div className='col-12 col-lg-4 p-2'>
<div className={stileTeam.TestoLabel}>TORNEO</div>
<select id="selectPlayer"
size={stateSelect}
onFocus={() => changeSelect('10')}
onBlur={() => changeSelect('1')}
onChange={(event) => {valueTorneo(event); togliDati(event); idPlayer.blur()}}
class="form-select border-black">
<option value='' selected>Open this select menu</option>
{ props.lega.map( lega => 
<option value={lega.league.id}>{lega.league.name}</option>
)}
</select>
</div>

<div className={`col-12 col-lg-4 p-2 ${statoTorneo === '' ? 'opacity-25' : 'opacity-100'}`}>
<div className={stileTeam.TestoLabel}>STAGIONE</div>
<select
id="selectStagione"
disabled={statoTorneo === '' ? true : false}
size={stateSelect1}
onFocus={() => changeSelect1('10')}
onBlur={() => changeSelect1('1')}
onChange={(event) => {valueStagione(event); idStagione.blur()}}
class="form-select border-black">
<option value='' selected={(statoTorneo === '') || (statoTorneo !== '' && statoTeam === '' && statoStagione === '') ? true : false}>Seleziona</option>
{statoStagioni.map( dato =>
<option value={dato.year}>{dato.year}</option>
)}
</select>
</div>


<div className={`col-12 col-lg-4 p-2 ${statoStagione === '' || statoTorneo === '' ? 'opacity-25' : 'opacity-100'}`}>
<div className={stileTeam.TestoLabel}>TEAM</div>
<select
id="selectTorneo"
disabled={statoStagione === '' || statoTorneo === '' ? true : false}
size={stateSelect2}
onFocus={() => changeSelect2('10')}
onBlur={() => changeSelect2('1')}
onChange={(event) => {valueTeam(event); idTorneo.blur()}} 
class="form-select border-black">
<option value='' selected={(statoTeam ===  '') || (statoTorneo === '') ? true : false}>Seleziona</option>
{ statoSmallTeam.map( dato =>
<option value={dato.team.id}>{dato.team.name}</option>
)}
</select>
</div>

</div>

<div className='mt-3 p-2'>
<button
onClick={() => props.eventoComponent(datiPlayer)}
disabled={statoStagione  === '' || statoTorneo === '' || statoTeam === '' ? true : false}
type="button" class={`btn btn-primary w-100 p-0 ${stileTeam.TitleBtn} ${statoStagione === '' || statoTorneo === '' || statoTeam === '' ? "opacity-25" : 'opacity-100'}`}>Filtra</button>
</div>

</div>
</div>
</div>
</div>
</>
)};

export default FilterPlayer;