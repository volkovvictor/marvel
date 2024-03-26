import { useState } from 'react';

import RandomChar from '../components/randomChar/RandomChar';
import CharList from '../components/charList/CharList';
import CharInfo from '../components/charInfo/CharInfo';
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';
import FindChar from '../components/findChar/FindChar';

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
         <div>
            <ErrorBoundary>
               <CharInfo selectedCharId={selectedChar}/>
            </ErrorBoundary>
            <ErrorBoundary>
               <FindChar/>
            </ErrorBoundary>
         </div>
      </div>
      <img className="bg-decoration" src={vision} alt="vision"/>
      </>
   )
}

export default MainPage;