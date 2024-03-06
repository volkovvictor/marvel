import HeaderApp from './components/headerApp/HeaderApp';
import RandomChar from './components/randomChar/RandomChar';
import CharList from './components/charList/CharList';
import CharInfo from './components/charInfo/CharInfo';

import vision from './resources/img/vision.png';
import './App.scss'

function App() {
   return (
   <div className="app">
      <HeaderApp/>
      <main>
         <RandomChar/>
         <div className="char__content">
            <CharList/>
            <CharInfo/>
         </div>
         <img className="bg-decoration" src={vision} alt="vision"/>
      </main>
   </div>
   )
}

export default App;
