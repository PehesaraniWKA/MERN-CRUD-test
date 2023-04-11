import {BrowserRouter, Routes ,Route} from 'react-router-dom'

//pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import UpdateSparepart from './components/UpdateSparepartForm'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path="/Home/UpdateSparepart/:id" element={<UpdateSparepart />} />
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
