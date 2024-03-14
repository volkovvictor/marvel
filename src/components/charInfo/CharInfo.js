import { useState, useEffect } from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import SkeletonApp from '../skeletonApp/SkeletonApp';
import MarvelService from '../../services/MarvelService';

const CharInfo = (props) => {

   const [char, setChar] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   const marvelService = new MarvelService();

   useEffect(() => {
      updateChar();
   }, [props.selectedCharId])

   const onCharLoaded = (char) => {
      setChar(char);
      setLoading(false);
   }

   const onCharLoading = () => {
      setLoading(true);
      setError(false);
   }

   const onError = () => {
      setLoading(false);
      setError(true);
   }

   const updateChar = () => {
      const {selectedCharId} = props;

      if (!selectedCharId) return;

      onCharLoading()

      marvelService.getCharacter(selectedCharId)
      .then(onCharLoaded)
      .catch(onError)
   }
   
   const skeleton = char || error || loading ? null : <SkeletonApp/>
   const errorMessage = error ? <ErrorMessage/> : null;
   const spinner = loading ? <Spinner/> : null;
   const charBlock = !(loading || error || !char) ? <View char={char}/> : null;

   return (
      <div className="char__info">
         {skeleton}
         {errorMessage}
         {spinner}
         {charBlock}
      </div>
   )
}

const View = ({char}) => {
   const {name, description, thumbnail, homepage, wiki, comics} = char;
   const style = thumbnail.indexOf('image_not_available') > -1 ? {objectFit: 'contain'} : null;
   return (
      <>
         <div className="char__basics">
               <img src={thumbnail} alt={name} style={style}/>
               <div>
                     <div className="char__info-name">{name}</div>
                     <div className="char__btns">
                        <a href={homepage} className="button button__main">
                           <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                           <div className="inner">Wiki</div>
                        </a>
                     </div>
               </div>
            </div>
            <div className="char__descr">
               {description ? description : 'No info about this character'}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
               {comics.length <= 0 ? 'No comics with this character' : comics.map((item, id) => {
                  if (id > 9) return;
                  return (
                     <li className="char__comics-item" key={id}>
                        {item.name}
                     </li>
                  )
               })}
            </ul>
      </>
   )
}

export default CharInfo;