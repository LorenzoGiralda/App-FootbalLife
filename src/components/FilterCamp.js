import { useState } from 'react';
import styleFilter from './FilterCamp.module.css'


const FilterCamp = (props) => {


const [stateSelect, changeSelect] = useState('1')   

const idSelect = document.getElementById('selectNazione')


return(
<>
<div className={`text-center`}>
<div className='container justify-content-center d-flex flex-wrap p-0 mt-4'>
<div className='col-12 col-lg-6 p-2'>

<div className='bg-light p2 rounded shadow'>

<div className='d-flex flex-wrap justify-content-center'>
<div className='col-12 col-lg-6 p-2'>
<div className={styleFilter.TestoLabel}>NAZIONE</div>

<select id="selectNazione"
size={stateSelect}
onFocus={() => changeSelect('10')}
onBlur={() => changeSelect('1')}
onChange={(event) => {props.filterSelect(event.target.value); idSelect.blur()}} 
class="form-select border-black" aria-label="Default select example">

<option value='tutti' selected>Tutti</option>
{ props.countryFiltrati.map( country => 
 <option value={country}>{country}</option>   
)
}
</select>
</div>
</div>

{/* <div className='mt-3 p-2'>
<button type="button" class={`btn btn-primary w-100 p-0 ${styleFilter.TitleBtn}`}>Filtra</button>
</div> */}

</div>
</div>
</div>
</div>
</>
)};

export default FilterCamp;