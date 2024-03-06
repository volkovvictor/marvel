import { Component } from 'react';
import HeaderApp from './components/headerApp/HeaderApp';
import RandomChar from './components/randomChar/RandomChar';
import CharList from './components/charList/CharList';
import CharInfo from './components/charInfo/CharInfo';

import vision from './resources/img/vision.png';
import './App.scss'

class App extends Component {
   state = {
      selectedChar: null
   }

   onSelectedChar = (id) => {
      this.setState({selectedChar: id})
   }

   render() {
      return (
         <div className="app">
            <HeaderApp/>
            <main>
               <RandomChar/>
               <div className="char__content">
                  <CharList onSelectedChar={this.onSelectedChar}/>
                  <CharInfo selectedCharId={this.state.selectedChar}/>
               </div>
               <img className="bg-decoration" src={vision} alt="vision"/>
            </main>
         </div>
      )
   }
}

export default App;
