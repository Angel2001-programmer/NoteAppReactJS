import styled from './Button.module.css';

const Button = props => {
    return(
        <button onClick={props.clickHandler} type={props.type} className={styled.button}>{props.text}</button>
    );
}

export default Button;