import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderApp from './components/headerApp/HeaderApp';
import {MainPage, ComicsPage, Page404, SingleComicPage} from './pages'

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
                     <Route path='/comics/:comicId' element={<SingleComicPage/>}/>
                     <Route path='*' element={<Page404/>}/>
                  </Routes>
               </main>
            </div>
      </Router>
   )
}

export default App;
