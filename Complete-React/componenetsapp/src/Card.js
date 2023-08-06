
const Card = props => {
    return (
        <li className="todo">
                <div className="card">
                  <h2>{props.title}</h2>
                  <p>{props.subtitle}</p>
                </div>
              </li>
    )
}

export default Card;