import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

class CharList extends Component {
   state = {
      charList: [],
      loading: true,
      error: false,
      newListLoading: false,
      offset: 0,
      listEnded: false
   }

   marvelService = new MarvelService();

   componentDidMount() {
      this.updateList();
   }

   onListLoaded = (newList) => {
      const ended = newList.length < 9 ? true : false;

      this.setState(({charList, offset}) => {
         return {
            charList: [...charList, ...newList],
            loading: false,
            newListLoading: false,
            offset: offset + 9,
            listEnded: ended
         }
      })
   }

   onListLoading = () => {
      this.setState({
         newListLoading: true
      })
   }

   onError = () => {
      this.setState({
         loading: false,
         error: true
      })
   }

   updateList = (offset) => {
      this.onListLoading();

      this.marvelService.getAllCharacters(offset)
      .then(this.onListLoaded)
      .catch(this.onError)
   }

   renderList = (data) => {
      const items = data.map(item => {
         const style = item.thumbnail.indexOf('image_not_available') > -1 ? {objectFit: 'contain'} : null;
         
         return (
            <li key={item.id} className="char__item" onClick={() => this.props.onSelectedChar(item.id)}>
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

   render() {
      const {charList, loading, error, newListLoading, offset, listEnded} = this.state;
      const list = this.renderList(charList);

      const errorMessage = error ? <ErrorMessage/> : null;
      const spinner = loading ? <Spinner/> : null;
      const listBlock = !(loading || error) ? list : null;

      return (
         <div className="char__list">
            {errorMessage}
            {spinner}
            {listBlock}
            <button 
               className="button button__main button__long"
               disabled={newListLoading}
               style={{'display': listEnded ? 'none' : 'block'}}
               onClick={() => this.updateList(offset)}>
               <div className="inner">load more</div>
            </button>
         </div>
      )
   }
}

export default CharList;