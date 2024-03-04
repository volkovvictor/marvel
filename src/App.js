import HeaderApp from './components/headerApp/HeaderApp';
import RandomChar from './components/randomChar/RandomChar';
import CharList from './components/charList/CharList';

import vision from './resources/img/vision.png';
import './App.scss'

function App() {
   return (
   <div className="app">
      <HeaderApp/>
      <main>
         <RandomChar/>
         <CharList/>
         <img className="bg-decoration" src={vision} alt="vision"/>
      </main>
   </div>
   )
}

export default App;
