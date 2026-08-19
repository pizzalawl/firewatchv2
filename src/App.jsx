import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MapPage from './pages/MapPage'
import ReportPage from './pages/ReportPage'
import OurMissionPage from './pages/OurMissionPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/map' element={<MapPage/>}/>
          <Route path='/report' element={<ReportPage/>}/>
          <Route path='/ourmission' element={<OurMissionPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
