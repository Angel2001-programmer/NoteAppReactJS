import Button from '../Button/Button';
import styled from './ErrorModel.module.css';


const ErrorModel = props => {
    return(
        <div className={styled.backdrop}>
        <div className={styled.modal}>
            <div className={styled.background}>
            <div className={styled.header}>
                <h2>Invalid input</h2>
            </div>
            <p className={styled.content}>{props.message}</p>
            <div className={styled.actions}>
            <Button clickHandler={() => props.errorState(true)} text={"Okay"}></Button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default ErrorModel;


