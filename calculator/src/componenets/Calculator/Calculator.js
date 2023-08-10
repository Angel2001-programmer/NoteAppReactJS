import styles from './Calculator.module.css';
import Button from '../UI/Button/Button';
import Input from '../Input/Input';
import { useState } from 'react';

const Calculator = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [equal, setEqual] = useState(true);
    const [addition, setAddition] = useState(false);
    const [subtraction, setSubtraction] = useState(false);
    const [muliplication, setMuliplication] = useState(false);
    const [division, setDivision] = useState(false);

    let result = '';
    let newValue = null;
    let isEmpty = true;

    // Check if number is less than 0 do something
    if(enteredValue > 0){
        isEmpty = false;
    }

    const clickHandler = (e) => {
        //set User Input through buttons
        setEnteredValue(enteredValue + e.target.innerHTML+'');
      
        //Check if operation is included in the string.
        checkOprand('+', setAddition);
        checkOprand('-', setSubtraction);
        checkOprand('X', setMuliplication);
        checkOprand('÷', setDivision);
    }

    const checkOprand = (symbol, operand) => {
        if(enteredValue.includes(symbol)){
            isEmpty = true;
            setEqual(false);
            operand(true)
        }
    }

    if(enteredValue.includes('%')){
        newValue = enteredValue.replace('%', '');
        result = parseFloat(newValue.split(' ')[0]) / 100;
        setEnteredValue(result.toString());
        isEmpty = false;
    }

    if(enteredValue.includes('=')){
        return setEnteredValue('');
    }

    const equalsHandler = () => {        
        if(addition !== false){
            newValue = enteredValue.replace('+', ' ');
            result = parseInt(newValue.split(' ')[0]) + parseInt(newValue.split(' ')[1]);
            isEmpty = false;
        }
    
        if(subtraction !== false){
            newValue = enteredValue.replace('-', ' ');
            result = parseInt(newValue.split(' ')[0]) - parseInt(newValue.split(' ')[1]);
            isEmpty = false;
        }
    
        if(muliplication !== false){
            newValue = enteredValue.replace('X', ' ');
            result = parseInt(newValue.split(' ')[0]) * parseInt(newValue.split(' ')[1]);
            isEmpty = false;
        }
    
        if(division !== false){
            newValue = enteredValue.replace('÷', ' ');
            result = parseInt(newValue.split(' ')[0]) / parseInt(newValue.split(' ')[1]);
            isEmpty = false;
        }

        return setEnteredValue(result.toString());
    }

    return (   
    <div className={styles.calculator}>
        <Input placeholder={0} value={enteredValue} onChange={clickHandler}/>

        <div className={styles.container}>
        <div className={styles.parent}>
        <div className={styles.NumColumn}>            
        {props.numOptions.map((obj) => {
            return <Button clickHandler={clickHandler} value={obj}/>
        })}
        </div>
        <div className={styles.OperandsColumn}>
        {props.operandsOptions.map((obj) => {
            return <Button disabled={isEmpty} clickHandler={(e) => clickHandler(e)} value={obj}/>
        })}
        </div>
        </div>
    </div>
    <Button disabled={equal} clickHandler={() => equalsHandler()} value='='/>
    </div>
    )
}

export default Calculator;