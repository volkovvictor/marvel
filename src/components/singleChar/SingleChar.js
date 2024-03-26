import { Link } from "react-router-dom";

const SingleChar = ({char}) => {
    const {name, description, thumbnail} = char;
    return (
        <div className="single">
                <img src={thumbnail} alt={name} className="single__img"/>
                <div className="single__info">
                <h2 className="single__name">{name}</h2>
                <p className="single__descr">{description}</p>
                </div>
                <Link to="/" className="single__back">Back to all</Link>
        </div>
    ) 
}

export default SingleChar;