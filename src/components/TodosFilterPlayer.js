// import FilterTeam from "./FilterTeam";
// import SearchFilter from "./SearchFilter";
import search from '../img/Icon-search-filter.png'
import filter from '../img/icon-filter.png'
import stileTodosFilter from './TodosFilter.module.css'
import FilterPlayer from "./FilterPlayer";
import SearchFilterPlayer from "./SearchFilterPlayer";
// import { useState } from "react"


const TodosFilterPlayer = (props) => {

const stile = stileTodosFilter
        
return(
<>
<div className="container d-flex justify-content-center flex-wrap">
<div className="p-2 bg-transparent">
<div onClick={props.changeButton}
className={`p-2 d-flex align-items-center h-100 rounded shadow ${stile.hoverBtn} ${props.statoCountry.length === 0 ? 'd-none' : 'd-flex'}`}>
<div><img style={{'width': '30px'}} src={props.stateBtn === false ? search : filter} alt="icon"></img></div>
<div className="ps-2">{props.stateBtn1 === true ? 'Filtra per nome' : 'Filtra per torneo, stagione e team'}</div>
</div>
</div>
{/* <div className="p-2 bg-transparent">
<div className={`p-2 d-flex align-items-center h-100 rounded shadow ${stile.hoverBtn}`}>
<div><img style={{'width': '30px'}} src={filter} alt="icon"></img></div>
<div className="ps-3">Filtra per nazione e torneo</div>
</div>
</div> */}
</div>

{props.stateBtn1 === true ? <FilterPlayer ciao={props.ciao} statoSmallTeam={props.statoSmallTeam} lega={props.lega} eventoComponent={props.eventoComponent}></FilterPlayer> : <SearchFilterPlayer eventoSearch={props.eventoSearch}></SearchFilterPlayer> }
</>
)};

export default TodosFilterPlayer;