import './App.css'
import { Footer } from './layout/Footer'
import Menu from './layout/Menu'
import {Route, Routes} from  'react-router-dom'
import {Home} from './pages/home'
import Pokemon from './pages/pokemon';

function App() {

  return (
      <div>
      <Menu />
        <div className = "container">
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path="/:uri" element={<Pokemon />} />
        </Routes>
        </div>
      <Footer />
      </div>
    )
}

export default App
