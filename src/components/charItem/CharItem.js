//char__item_selected

const CharItem = ({src, name}) => {
   const style = src.indexOf('image_not_available') > -1 ? {objectFit: 'contain'} : null;
   return (
      <li className="char__item">
            <img style={style} src={src} alt={name}/>
            <div className="char__name">{name}</div>
      </li>
   )
}

export default CharItem;