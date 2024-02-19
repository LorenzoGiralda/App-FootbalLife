import stileForm from './Form.module.css'


const FormComponent = () => {
return(
<>
<form className={`text-center`}>
<div className='container justify-content-center d-flex flex-wrap p-0 mt-4'>
<div className='col-12 col-lg-6 p-2'>

<div className='bg-light p2 rounded shadow'>

<div className='d-flex flex-wrap'>

<div className='col-12 col-lg-6 p-2'>
<div className={stileForm.TestoLabel}>NAZIONE</div>
<input type="text" className="form-control border-black" placeholder="Italia"></input>
</div>

<div className='col-12 col-lg-6 p-2'>
<div className={stileForm.TestoLabel}>TORNEO</div>
<input type="text" className="form-control border-black" placeholder="Serie a"></input>
</div>


<div className='col-12 col-lg-6 p-2'>
<div className={stileForm.TestoLabel}>SQUADRA DEL CUORE</div>
<input type="text" className="form-control border-black" placeholder="As Roma"></input>
</div>

<div className='col-12 col-lg-6 p-2'>
<div className={stileForm.TestoLabel}>E-MAIL</div>
<input type="text" className="form-control border-black" placeholder="rossi.andrea@posta.it"></input>
</div>


</div>

<div className='mt-3 p-2'>
<button type="button" class={`btn btn-primary w-100 p-0 ${stileForm.TitleBtn}`}>INVIA</button>
</div>

</div>
</div>
</div>
</form>
</>
)};

export default FormComponent;