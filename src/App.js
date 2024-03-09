import { Component } from 'react';
import HeaderApp from './components/headerApp/HeaderApp';
import RandomChar from './components/randomChar/RandomChar';
import CharList from './components/charList/CharList';
import CharInfo from './components/charInfo/CharInfo';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

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
               <ErrorBoundary>
                  <RandomChar/>
               </ErrorBoundary>
               <div className="char__content">
                  <ErrorBoundary>
                     <CharList selectedChar={this.state.selectedChar} onSelectedChar={this.onSelectedChar}/>
                  </ErrorBoundary>
                  <ErrorBoundary>
                     <CharInfo selectedCharId={this.state.selectedChar}/>
                  </ErrorBoundary>
               </div>
               <img className="bg-decoration" src={vision} alt="vision"/>
            </main>
         </div>
      )
   }
}

export default App;
