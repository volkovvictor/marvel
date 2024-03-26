import { Link } from "react-router-dom";

const SingleComic = ({comic}) => {
    const {title, description, pages, language, thumbnail, price} = comic;
    return (
        <div className="single">
                <img src={thumbnail} alt={title} className="single__img"/>
                <div className="single__info">
                <h2 className="single__name">{title}</h2>
                <p className="single__descr">{description}</p>
                <p className="single__descr">{pages}</p>
                <p className="single__descr">Language: {language}</p>
                <div className="single__price">{price}</div>
                </div>
                <Link to="/comics" className="single__back">Back to all</Link>
        </div>
    ) 
}

export default SingleComic;