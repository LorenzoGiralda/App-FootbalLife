import Logo from '../img/logo.png'

const Footer = () => {
return(
<div style={{'background': '#9A9A9A'}} className="container-fluid p-2">
<div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
<div className='d-flex flex-column flex-lg-row text-center align-items-center'>
<div><img style={{'width': '100px'}}  src={Logo} alt="Logo"></img></div>    
<label className='ms-3 mt-2 mt-lg-0'><strong>Statistiche sul calcio da tutto il mondo!</strong></label>
</div>
<label className='mt-3 mt-lg-0 text-center'>Un progetto di Lorenzo Giralda</label>
</div>
</div>
)};

export default Footer;