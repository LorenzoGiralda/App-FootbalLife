import styleSearchFilter from './SearchFilter.module.css'
import search from '../img/icon-search.png'
import { useState } from 'react';

const SearchFilter = (props) => {

const [statoActive, changeStatoActive] = useState(false)

const ActiveClass = () => {
changeStatoActive(true) 
}

const DisactiveClass = () => {
changeStatoActive(false) 
}


return(
<div className=''>
<div className='container p-0  d-flex justify-content-center flex-wrap'>
<div className='col-12 col-lg-6 p-2'>
<div className='bg-light p-2 rounded shadow'>
<div className={styleSearchFilter.TitleSCard}>filtra per nome</div>
<div onBlur={DisactiveClass} onFocus={ActiveClass} className={`p-2 d-flex rounded shadow ${styleSearchFilter.activeStile}
${statoActive && styleSearchFilter.activeStr}`}
>
<div>
<img className={statoActive && styleSearchFilter.activeStrd} style={{'width': '45px', 'marginRight':'20px'}}
src={search} alt="icona search"></img>
</div> 
<input type='text' onChange={(event) => props.eventoSearch(event.target.value.toLowerCase())} className={`form-control ${styleSearchFilter.activeSt} `}></input>   
</div>
</div>    
</div>
</div>
</div>
)};

export default SearchFilter;


export const loader = async () => {

	const response = await fetch('https://v3.football.api-sports.io/countries', {
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