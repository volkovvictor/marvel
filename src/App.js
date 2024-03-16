import { useState } from 'react';
import HeaderApp from './components/headerApp/HeaderApp';
import RandomChar from './components/randomChar/RandomChar';
import CharList from './components/charList/CharList';
import CharInfo from './components/charInfo/CharInfo';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import BannerApp from './components/bannerApp/BannerApp';
import ComicsList from './components/comicsList/ComicsList';

import vision from './resources/img/vision.png';
import './App.scss'

const App = () => {

   const [selectedChar, setSelectedChar] = useState(null)

   const onSelectedChar = (id) => {
      setSelectedChar(id)
   }

   return (
      <div className="app">
         <HeaderApp/>
         {/*<main>
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
         </main>*/}
         <main>
            <BannerApp/>
            <ErrorBoundary>
               <ComicsList/>
            </ErrorBoundary>
         </main>
      </div>
   )
}

export default App;
