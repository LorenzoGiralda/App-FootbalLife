import FilterTeam from "./FilterTeam";
import SearchFilter from "./SearchFilter";
import search from '../img/Icon-search-filter.png'
import filter from '../img/icon-filter.png'
import stileTodosFilter from './TodosFilter.module.css'
// import { useState } from "react"


const TodosFilter = (props) => {

const stile = stileTodosFilter
        
return(
<>

<div className="container d-flex justify-content-center flex-wrap">
<div className="p-2 bg-transparent">
<div onClick={props.changeButton}
className={`p-2 d-flex align-items-center h-100 rounded shadow ${stile.hoverBtn} ${props.statoCountry === '' ? 'd-none' : 'd-flex'}`}>
<div><img style={{'width': '30px'}} src={props.stateBtn === false ? search : filter} alt="icon"></img></div>
<div className="ps-2">{props.stateBtn === true ? 'Filtra per nome' : 'Filtra per nazione e torneo' }</div>
</div>
</div>
{/* <div className="p-2 bg-transparent">
<div className={`p-2 d-flex align-items-center h-100 rounded shadow ${stile.hoverBtn}`}>
<div><img style={{'width': '30px'}} src={filter} alt="icon"></img></div>
<div className="ps-3">Filtra per nazione e torneo</div>
</div>
</div> */}
</div>

{props.stateBtn === true ? <FilterTeam lega={props.lega} eventoComponent={props.eventoComponent}></FilterTeam> : <SearchFilter eventoSearch={props.eventoSearch}></SearchFilter> }
</>
)};

export default TodosFilter;