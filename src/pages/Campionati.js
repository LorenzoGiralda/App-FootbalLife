import stileCamp from './Campionato.module.css'
import BgCampionato from '../img/bg-campionato.png'
import BgCampionatoS from '../img/campionati-s.jpg'

import { Outlet } from "react-router-dom";

const Campionati= () => {

const BgStyle = stileCamp.BgStyle
const TitleStyle = stileCamp.stileTitle


return(
<>
<div className={`container-fluid p-0 ${stileCamp.resizeDivTot}`}>
<img src={BgCampionatoS} className="d-flex d-sm-none img-fluid" alt="sfondo-campionati"></img>
<img src={BgCampionato} className="d-none d-sm-flex img-fluid" alt="sfondo-campionati"></img>
</div>
<div className={BgStyle}>
<div className='d-flex justify-content-center py-4 mx-2 text-center'>
<h2 className={TitleStyle}>SCOPRI LE STATISTICHE SU VARI CAMPIONATI NEL MONDO</h2>
</div>
<Outlet></Outlet>
</div>
</>
)};
    
export default Campionati;



export const loader = async () => {

	const response = await fetch("https://v3.football.api-sports.io/leagues", {
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