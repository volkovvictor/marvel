import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './comicsList.scss'

const ComicsList = () => {

   const [comicsList, setComicsList] = useState([]);
   const [newListLoading, setNewListLoading] = useState(false);
   const [offset, setOffset] = useState(0);
   const [listEnded, setListEnded] = useState(false);

   const {loading, error, getAllComics} = useMarvelService();

   useEffect(() => {
      updateList(offset, true);
   }, []);

   const onListLoading = (newList) => {
      const ended = newList.length < 8;

      setComicsList(comicsList => ([...comicsList, ...newList]))
      setNewListLoading(false);
      setOffset(offset => offset + 8)
      setListEnded(ended);
   }

   const updateList = (offset, initial) => {
      initial ? setNewListLoading(false) : setNewListLoading(true);

      getAllComics(offset).then(onListLoading)
   }

   const renderList = (data) => {
      const items = data.map((item, index) => {
         const style = item.thumbnail.indexOf('image_not_available') > -1 ? {objectFit: 'contain'} : null;
         return (
            <li 
            key={index}
            tabIndex="0" 
            className="comics__item">
               <Link to={`/comics/${item.id}`}>
                     <img 
                     src={item.thumbnail} 
                     alt={item.title} 
                     className="comics__item-img"
                     style={style}/>
                     <div className="comics__item-name">{item.title}</div>
                     <div className="comics__item-price">{item.price}</div>
               </Link>
            </li>
         )
      })

      return (
         <ul className="comics__grid">
            {items}
         </ul>
      )
   }

   const list = renderList(comicsList);

   const errorMessage = error ? <ErrorMessage/> : null;
   const spinner = loading && !newListLoading ? <Spinner/> : null;

   return (
      <div className="comics__list">
         {errorMessage}
         {spinner}
         {list}
         <button 
            className="button button__main button__long"
            style={{"display": listEnded ? "none" : "block"}}
            disabled={newListLoading}
            onClick={() => updateList(offset)}>
            <div className="inner">load more</div>
         </button>
      </div>
   )
}

export default ComicsList;