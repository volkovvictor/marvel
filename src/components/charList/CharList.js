import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './charList.scss';

const CharList = (props) => {

   const [charList, setCharList] = useState([]);
   const [newListLoading, setNewListLoading] = useState(false);
   const [offset, setOffset] = useState(0);
   const [listEnded, setListEnded] = useState(false);

   const {loading, error, getAllCharacters} = useMarvelService()

   useEffect(() => {
      updateList(offset, true)
   }, [])

   const onListLoaded = (newList) => {
      const ended = newList.length < 9 ? true : false;

      setCharList(charList => ([...charList, ...newList]));
      setNewListLoading(false);
      setOffset(offset => offset + 9);
      setListEnded(ended);
   }

   const updateList = (offset, initial) => {
      initial ? setNewListLoading(false) : setNewListLoading(true);

      getAllCharacters(offset)
      .then(onListLoaded)
   }

   const onSelectedCharByKey = (e, id) => {
      if(e.code === "Enter") props.onSelectedChar(id)
   }

   const renderList = (data) => {
      const {selectedChar} = props;
      const items = data.map(item => {
         const style = item.thumbnail.indexOf('image_not_available') > -1 ? {objectFit: 'contain'} : null;
         const selectedClass = selectedChar && item.id === selectedChar ? "char__item_selected" : null;
         return (
            <li 
               key={item.id} 
               className={"char__item " + selectedClass}
               onClick={() => props.onSelectedChar(item.id)}
               onKeyDown={(e) => onSelectedCharByKey(e, item.id)}
               tabIndex='0'>
                  <img style={style} src={item.thumbnail} alt={item.name}/>
                  <div className="char__name">{item.name}</div>
            </li>
         )
      })

      return (
         <ul className="char__grid">
            {items}
         </ul>
      )
   }

   const list = renderList(charList);

   const errorMessage = error ? <ErrorMessage/> : null;
   const spinner = loading && !newListLoading ? <Spinner/> : null;

   return (
      <div className="char__list">
         {errorMessage}
         {spinner}
         {list}
         <button 
            className="button button__main button__long"
            disabled={newListLoading}
            style={{'display': listEnded ? 'none' : 'block'}}
            onClick={() => updateList(offset)}>
            <div className="inner">load more</div>
         </button>
      </div>
   )
}

export default CharList;