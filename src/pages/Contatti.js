import stilePlayer from './Campionato.module.css'
import stileCamp from './Campionato.module.css'
import BgContatti from '../img/bg-contatti.png'
import BgContattiS from '../img/contatti-s.jpg'
import { useState } from 'react'
import stileTeam from  '../components/filterTeam.module.css'
import { Link } from 'react-router-dom'

const BgStyle = stileCamp.BgStyle
const TitleStyle = stileCamp.stileTitle


const Contatti= (props) => {

const [statoNome, changeNome] = useState('')
const [statoCognome, changeCognome] = useState('')
const [statoTeam, changeTeam] = useState('')
const [statoMail, changeMail] = useState('')

const [toggleForm, changeToggleForm] = useState(false)

const dati = {
nome: statoNome,
cognome: statoCognome,
statoTeam: statoTeam,
mail: statoMail
}

const [statoDati, changeDati] = useState('')

console.log(statoDati, 'DATI FORM INVIATI')


return(
    <>
    <div className={`container-fluid p-0 ${stilePlayer.resizeDivTot}`}>
    <img src={BgContattiS} className="d-flex d-sm-none img-fluid" alt="sfondo-contatti"></img>
    <img src={BgContatti} className="d-none d-sm-flex img-fluid" alt="sfondo-contatti"></img>
    </div>

    <div className={BgStyle}>

    <div className='d-flex justify-content-center py-4 mx-2 text-center'>
    <h2 className={TitleStyle}>VUOI RICEVERE INFORMAZIONI? CONTATTACI!</h2>
    </div>

    <div className={`container text-center d-flex justify-content-center p-3 flex-wrap ${toggleForm ? 'd-flex' : 'd-none'}`}>
    <div className='bg-light p-3 rounded col-12 col-lg-7'>
    <h4 className='fw-bold p-0 m-0'>Servizio non attivo!</h4>
    <p className='mt-3 mb-0'>Ci scusiamo per il disagio, ma nello stesso tempo ti invitiamo a controllare la tua casella di posta elettronica, 
    dove riceverai una mail con il riepilogo della tua richiesta, appena riattiveremo il servizio.</p>
    </div>
    <Link className='fw-bold col-12 mt-2 text-white' to="../../.." relative="path">Torna alla home</Link>
    </div>

<div className={`text-center ${toggleForm ? 'd-none' : 'd-flex'}`}>
<div className='container justify-content-center d-flex flex-wrap p-0 mt-4'>

<div className='col-12 col-lg-6 p-2'>

<div className='bg-light p2 rounded shadow'>

<div className='d-flex flex-wrap'>

<div className='col-12 col-lg-6 p-2'>
<div className={stileTeam.TestoLabel}>Nome</div>
<input onChange={(event) => changeNome(event.target.value)} type="text" class="form-control"  placeholder="Mario"></input>
</div>

<div className={`col-12 col-lg-6 p-2`}>
<div className={stileTeam.TestoLabel}>Cognome</div>
<input onChange={(event) => changeCognome(event.target.value)} type="text" class="form-control"  placeholder="Rossi"></input>
</div>

<div className='col-12 col-lg-6 p-2'>
<div className={stileTeam.TestoLabel}>Team preferito</div>
<input onChange={(event) => changeTeam(event.target.value)}  type="text" class="form-control"  placeholder="Roma"></input>
</div>

<div className={`col-12 col-lg-6 p-2`}>
<div className={stileTeam.TestoLabel}>E-MAIL</div>
<input onChange={(event) => changeMail(event.target.value)}  type="text" class="form-control"  placeholder="mario.rossi@mail.com"></input>
</div>

</div>

<div className='mt-3 p-2'>
<button
onClick={ () => {changeDati(dati); changeToggleForm(true)} }
disabled={statoNome  === '' || statoCognome === '' || statoMail === '' || statoTeam === '' ? true : false}
type="button" class={`btn btn-primary w-100 p-0 ${stileTeam.TitleBtn} ${statoNome  === '' || statoCognome === '' || statoMail === '' || statoTeam === ''  ? "opacity-25" : 'opacity-100'}`}>INVIO</button>
</div>

</div>

</div>
</div>
</div>
</div>
    </>
    )};
    
    export default Contatti;