import styles from './Counter.module.css'

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByPayload, cancel } from '../store/CounterLogic';

const Counter = () => {

const StateCounter = useSelector((state) => state.counter.value)
const dispatch = useDispatch()

return(
<div style={{'background':'rgb(241, 241, 241)'}}>
<h2>Contatore utilizzando Redux</h2>
<div className={styles.container}>
<div className={styles.counterCard}>
<div className={styles.counter}>
<h3 className={'bg-danger , text-light , p-2 , rounded'}>COUNTER</h3>
<div style={{'marginTop' : '10px'}}>
<button onClick={ () => dispatch(increment()) } className={styles.BtnCounter}>+</button> 
<button onClick={ () => dispatch(decrement()) }  className={styles.BtnCounter}>-</button>
<button onClick={ () => dispatch(incrementByPayload(5)) }  className={styles.BtnCounter}>+5</button>  
</div>
<div style={{'marginTop' : '10px'}}>Result</div>
<div className={styles.result}>{StateCounter}</div>
<p style={{'cursor': 'pointer'}} onClick={ () => dispatch(cancel()) }>Reset counter</p>
</div>
</div>  
</div>
</div>
)}

export default Counter;