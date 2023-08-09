import styles from './Calculator.module.css';
import Button from '../UI/Button/Button';
import { useState } from 'react';

const Calculator = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [operand, setOperand] = useState(true);
    const [addition, setAddition] = useState(false);
    const [subtraction, setSubtraction] = useState(false);
    const [division, setDivision] = useState(false);
    const [muliplication, setMuliplication] = useState(false);
    const [percentage, setPercentage] = useState(false);
    const [equal, setEqual] = useState(true);

    let result = '';

    const clickHandler = (e) => {
        setEnteredValue(enteredValue + e.target.innerHTML);

        if(enteredValue !== null){
            setOperand(false);
        }

        if(enteredValue.includes('+')){
            setOperand(true);
            setEqual(false);
            setAddition(true);
        }
    
        if(enteredValue.includes('-')){
            setOperand(true);
            setEqual(false);
            setSubtraction(true);
        }
    
        if(enteredValue.includes('X')){
            setOperand(true);
            setEqual(false);
            setMuliplication(true);
        }
    
        if(enteredValue.includes('%')){
            setOperand(true);
            setEqual(false);
            setPercentage(true);
        }
    
        if(enteredValue.includes('÷')){
            setOperand(true);
            setEqual(false);
            setDivision(true);
        }
    }

    if(enteredValue.includes('=')){
        if(addition !== false){
        }

        if(subtraction !== false){
        }

        if(division !== false){
        }

        if(muliplication !== false){
        }

        if(percentage !== false){
        }

        return setEnteredValue(result);
    }

    return (   
    <div className={styles.calculator}>
        <div className={styles.search}>
        <input className={styles.input} placeholder='0' value={enteredValue} onChange={clickHandler}></input>
        </div>

        <div className={styles.container}>
        <div className={styles.parent}>
        <div className={styles.NumColumn}>            
        {props.numOptions.map((obj) => {
            return <Button clickHandler={clickHandler} num={obj}/>
        })}
        </div>
        <div className={styles.OperandsColumn}>
        {props.operandsOptions.map((obj) => {
            return <Button disabled={operand} clickHandler={clickHandler} num={obj}/>
        })}
        </div>
        </div>
    </div>
    <Button disabled={equal} clickHandler={clickHandler} num='='/>
    </div>
    )
}

export default Calculator;