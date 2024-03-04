import CharInfo from '../charInfo/CharInfo';
import CharItem from '../charItem/CharItem';

import './charList.scss';

const CharList = () => {
   const charItems = [];

   for (let i = 0; i < 9; i++) {
      charItems.push(<CharItem key={i}/>)
   }
   return (
      <div className="char__content">
            <div className="char__list">
               <ul className="char__grid">
                  {charItems}
               </ul>
               <button className="button button__main button__long">
                  <div className="inner">load more</div>
               </button>
            </div>
            <CharInfo/>
      </div>
   )
}

export default CharList;