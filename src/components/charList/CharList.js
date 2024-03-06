import { Component } from 'react';
import CharItem from '../charItem/CharItem';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

class CharList extends Component {
   state = {
      charList: [],
      loading: true,
      error: false,
   }

   marvelService = new MarvelService();

   componentDidMount = () => {
      this.updateList();
   }

   onListLoaded = (data) => {
      this.setState(() => {
         return {
            charList: data,
            loading: false
         }
      })
   }

   onListLoading = () => {
      this.setState({
         loading: true,
         error: false
      })
   }

   onError = () => {
      this.setState({
         loading: false,
         error: true
      })
   }

   updateList = () => {
      this.onListLoading();

      this.marvelService.getAllCharacters()
      .then(this.onListLoaded)
      .catch(this.onError)
   }

   renderList = (data) => {
      const items = data.map(item => {
         return (
            <CharItem key={item.id} src={item.thumbnail} name={item.name}/>
         )
      })

      return (
         <ul className="char__grid">
            {items}
         </ul>
      )
   }

   render() {
      const {charList, loading, error} = this.state;
      const list = this.renderList(charList);

      const errorMessage = error ? <ErrorMessage/> : null;
      const spinner = loading ? <Spinner/> : null;
      const listBlock = !(loading || error) ? list : null;

      return (
         <div className="char__list">
            {errorMessage}
            {spinner}
            {listBlock}
            <button className="button button__main button__long">
               <div className="inner">load more</div>
            </button>
         </div>
      )
   }
}

export default CharList;