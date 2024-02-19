import stileTeam from './filterTeam.module.css'
import { useState, useEffect } from 'react';

const FilterTeam = (props) => {


const  [statoStagione, changeStagione] = useState('')
const  [statoTorneo, changeTorneo] = useState('')

const [statoStagioni, changeStagioni] = useState([])

const dati = {
torneo: statoTorneo,
stagione: statoStagione   
}

const [stateSelect, changeSelect] = useState('1')   
const [stateSelect1, changeSelect1] = useState('1') 

const idTorn = document.getElementById('selectTorneo')
const idStagione = document.getElementById('selectStagione')


const valueTorneo = (event) => {
if(event.target.value === '' && statoTorneo !== ''){
changeTorneo(event.target.value)
changeStagione('')   
}else{
changeTorneo(event.target.value)
console.log(event.target.value)
}}
    
const valueStagione = (event) => {
console.log(event.target.value)
changeStagione(event.target.value)
}


useEffect(() => {

const loadStagioniSelect = async() => {

const id = statoTorneo
        
const response = await fetch("https://v3.football.api-sports.io/leagues?id=" + id, {
"method": "GET",
"headers": {
"x-rapidapi-host": "v3.football.api-sports.io",
"x-rapidapi-key": "353b6d4834b3e467f904d41caf26e4fc"
}
})
    
const data = await response.json()
const filtraOk = data.response.filter(dato => dato.seasons.length > 0)
console.log(filtraOk)
    
if(!response.ok){
// return    
}else if(response.ok && filtraOk.length === 0 ){
////
}else{
const filtraSezioneClassifica = data.response[0].seasons
changeStagioni(filtraSezioneClassifica)
}
    };

loadStagioniSelect()  

},[statoTorneo])


return(
<>
<div className={`text-center`}>
<div className='container justify-content-center d-flex flex-wrap p-0 mt-4'>
<div className='col-12 col-lg-6 p-2'>

<div className='bg-light p2 rounded shadow'>

<div className='d-flex flex-wrap'>

<div className='col-12 col-lg-6 p-2'>
<div className={stileTeam.TestoLabel}>TORNEO</div>
<select id="selectTorneo"
size={stateSelect}
onFocus={() => changeSelect('10')}
onBlur={() => changeSelect('1')}
onChange={(event) => {valueTorneo(event); idTorn.blur()}}
class="form-select border-black">
<option value='' selected>Open this select menu</option>
{ props.lega.map( lega => 
<option value={lega.league.id}>{lega.league.name}</option>
)}
</select>
</div>

<div className={`col-12 col-lg-6 p-2 ${statoTorneo === '' ? 'opacity-25' : 'opacity-100'}`}>
<div className={stileTeam.TestoLabel}>STAGIONE</div>
<select id="selectStagione"
disabled={statoTorneo === '' ? true : false}
size={stateSelect1}
onFocus={() => changeSelect1('10')}
onBlur={() => changeSelect1('1')}
onChange={(event) => {valueStagione(event); idStagione.blur()}}
class="form-select border-black">
<option value='' selected={statoTorneo === '' ? true : false}>Open this select menu</option>
{ statoStagioni.map( dato =>
<option value={dato.year}>{dato.year}</option>
)}
</select>
</div>

</div>

<div className='mt-3 p-2'>
<button
onClick={() => props.eventoComponent(dati)}
disabled={statoStagione  === '' || statoTorneo === '' ? true : false}
type="button" class={`btn btn-primary w-100 p-0 ${stileTeam.TitleBtn} ${statoStagione === '' || statoTorneo === '' ? "opacity-25" : 'opacity-100'}`}>Filtra</button>
</div>

</div>
</div>
</div>
</div>
</>
)};

export default FilterTeam;