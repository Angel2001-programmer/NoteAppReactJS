import "../styles/techCard.css";
const techCard = ({props}) => {
    return(
        <div className="Cardcontainer">
        <div className="techCard">
            <img className="techImg" src={props.image}></img>
           
            </div>
            <div className="textCard">
            <h1>{props.name}</h1>
            </div>
        </div>
    )
}

export default techCard;