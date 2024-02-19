import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { ChangeByPayload } from '../store/ActiveLinkLogic';

import StileLinkHome from './LinkHome.module.css'


const LinkHome = (props) => {

const dispatch = useDispatch()

return(
<div className='p-3'>
<div className="container d-flex justify-content-center m-auto p-0 flex-wrap">
{ props.LinkData.map( link =>
<div className={`p-3 col-12 col-lg-4 ${StileLinkHome.hoverLink}`}>
<div className="bg-light p-2 rounded">
<Link onClick={() => dispatch(ChangeByPayload(link.link)) } className='text-decoration-none text-black' to={link.link}>
<div className='overflow-hidden mb-2'>
<img className={`img-fluid ${StileLinkHome.ImgHover}`} src={link.img} alt="campionati"></img>
</div> 
<div className='py-2 d-flex justify-content-center'>
<div className='pe-2'><img src={link.icon} alt="campionati"></img></div>
<div style={{'font-family': 'Komu-a, sans-serif', 'font-size': '40px'}}>{link.title}</div>
</div> 
</Link>
</div>
</div>
)}
</div>
</div>
)};

export default LinkHome;