import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Spinner from '../components/spinner/Spinner';
import useMarvelService from '../services/MarvelService';
import './singleComicPage.scss';

const SingleComicPage = () => {
   const [comic, setComic] = useState(null);
   const {comicId} = useParams();

   const {loading, error, clearError, getComic} = useMarvelService();

   useEffect(() => {
      updateComic();
   }, [comicId])

   const onComicLoaded = (comic) => {
      setComic(comic)
   }

   const updateComic = () => {
      clearError();
      getComic(comicId).then(onComicLoaded);
   }

   const errorMessage = error ? <ErrorMessage/> : null;
   const spinner = loading ? <Spinner/> : null;
   const charBlock = !(loading || error || !comic) ? <View comic={comic}/> : null;

   return (
      <>
         {errorMessage}
         {spinner}
         {charBlock}
      </>
   )
}

const View = ({comic}) => {
   const {title, description, pages, language, thumbnail, price} = comic;
   return (
      <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
               <h2 className="single-comic__name">{title}</h2>
               <p className="single-comic__descr">{description}</p>
               <p className="single-comic__descr">{pages}</p>
               <p className="single-comic__descr">Language: {language}</p>
               <div className="single-comic__price">{price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
      </div>
   ) 
}

export default SingleComicPage;