import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import DogsPage from './pages/DogsPage';
import DogPage from './pages/DogPage';
import LandingPage from './pages/LandingPage'


function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/ourdogs' element={<DogsPage />}/>
            <Route path='/dogpage' element={<DogPage />}/>
          </Routes>        
        </BrowserRouter>
        
    </div>
  )
}

export default App
