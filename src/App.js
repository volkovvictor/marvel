import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderApp from './components/headerApp/HeaderApp';
import {MainPage, ComicsPage} from './pages'

import './App.scss'

const App = () => {
   return (
      <Router>
            <div className="app">
               <HeaderApp/>
               <main>
                  <Routes>
                     <Route path='/' element={<MainPage/>}/>
                     <Route path='/comics' element={<ComicsPage/>}/>
                  </Routes>
               </main>
            </div>
      </Router>
   )
}

export default App;
