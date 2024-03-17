import { useState } from 'react';

import RandomChar from '../components/randomChar/RandomChar';
import CharList from '../components/charList/CharList';
import CharInfo from '../components/charInfo/CharInfo';
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';

import vision from '../resources/img/vision.png';

const MainPage = () => {

   const [selectedChar, setSelectedChar] = useState(null)

   const onSelectedChar = (id) => {
      setSelectedChar(id)
   }

   return (
      <>
      <ErrorBoundary>
         <RandomChar/>
      </ErrorBoundary>
      <div className="char__content">
         <ErrorBoundary>
            <CharList selectedChar={selectedChar} onSelectedChar={onSelectedChar}/>
         </ErrorBoundary>
         <ErrorBoundary>
            <CharInfo selectedCharId={selectedChar}/>
         </ErrorBoundary>
      </div>
      <img className="bg-decoration" src={vision} alt="vision"/>
      </>
   )
}

export default MainPage;