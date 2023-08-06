import styled from './Card.module.css';

const Card = props => {
  const getFromChild = (data) => {
        props.getFromChild2(data);
  }

  const getError = (errorState) => {
    props.getError2(errorState);
}
    return(
    <div className={styled.card}>
        <props.componenet getFromChild={getFromChild} getError={getError} data={props.data} setData={props.setData} errorState={props.errorState}/>
    </div>
    )
}

export default Card;