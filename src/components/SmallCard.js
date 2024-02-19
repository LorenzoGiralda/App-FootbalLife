import styleSCard from './SmallCard.module.css'
import iconPos from '../img/icon-position.png';
import { useLoaderData } from 'react-router-dom';
import FilterCamp from './FilterCamp';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const SmallCard = () => {


const data = useLoaderData('total-Camp')

const [statoSelect, changeSelect] = useState('tutti')

const leagues = data.response

console.log(leagues)

const filterSelect = (para) => {
changeSelect(para)
}

const filtraLeagues = leagues.filter(lega => lega.country.name === statoSelect)

console.log(filtraLeagues)


// FILTRAGGIO DEI VALORI UNICI DELLA NAZIONE DA PASSARE AL FILTER SELECT
const country = leagues.map( lega =>
lega.country.name 
)


const filtraCountry = function( arr ) {
return arr.reduce(function( p, c ) {
if ( p.indexOf( c ) < 0 ) {
p.push( c );}
return p;
}, []);	
};

// console.log(filtraCountry(country))

const countryFiltrati = (filtraCountry(country)) 

return(
<div>
<FilterCamp
countryFiltrati = {countryFiltrati}
filterSelect = {filterSelect}
></FilterCamp> 


<div className='container p-0 d-flex flex-wrap'>
{statoSelect !== 'tutti' ? filtraLeagues.map( lega  => 
<div className='col-12 col-md-6 col-lg-3 p-2 d-flex'>
<Link className={styleSCard.linkSt} to={`${lega.league.id}`}>
<div className='bg-light p-2 rounded shadow d-flex flex-column w-100 h-100 justify-content-between'>
<div className='d-flex justify-content-center'>
<img style={{'width': '60px'}} className='img-fluid' src={lega.league.logo} alt={lega.league.logo}></img>
</div>
{/* <div className={`text-center mt-2 ${styleSCard.resLabel}`} mt-2>Francesco</div> */}
<h2 className={`mt-2 text-center ${styleSCard.TitleSCard}`}>{lega.league.name}</h2>
<div className='d-flex align-items-center mb-4 ms-2'>
<div className={styleSCard.boxIcon}>
<img src={iconPos} className={styleSCard.resImg} alt="img"></img></div>
<div className='ps-3'>{lega.country.name}</div>
</div>
{/* <div className='d-flex align-items-center ms-2 mb-2'>
<div className={`d-flex  justify-content-center ${styleSCard.boxIcon}`}>
<img src={iconCamp} className={styleSCard.resImg1} alt="img"></img></div>
<div className='ps-3'>{lega.country.name}</div>
</div> */}
</div>
</Link>
</div>
) : leagues.map( lega  => 
<div className='col-12 col-md-6 col-lg-3 p-2'>
<Link className={styleSCard.linkSt} to={`${lega.league.id}`}>
<div className='bg-light p-2 rounded shadow d-flex flex-column h-100 justify-content-between'>
<div className='d-flex align-items-center flex-column'>
<div>
<img style={{'width': '80px'}} className='img-fluid' src={lega.league.logo} alt={lega.league.logo}></img>
</div>
<h2 className={`mt-2 text-center ${styleSCard.TitleSCard}`}>{lega.league.name}</h2>
</div>
{/* <div className={`text-center mt-2 ${styleSCard.resLabel}`} mt-2>Francesco</div> */}
<div className='d-flex align-items-center mb-4 ms-2'>
<div className={styleSCard.boxIcon}>
<img src={iconPos} className={styleSCard.resImg} alt="img"></img></div>
<div className='ps-3'>{lega.country.name}</div>
</div>
{/* <div className='d-flex align-items-center ms-2 mb-2'>
<div className={`d-flex  justify-content-center ${styleSCard.boxIcon}`}>
<img src={iconCamp} className={styleSCard.resImg1} alt="img"></img></div>
<div className='ps-3'>{lega.country.name}</div>
</div> */}
</div>
</Link>
</div>
    ) }
</div>
</div>
    )};
    
export default SmallCard;