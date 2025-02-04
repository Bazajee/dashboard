
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/navbar'
import HomePage from './page/Home'
import DashboardPage from './page/Dashboard'
import DataPage from './page/Data'
import { DataProvider } from './appState/dataState'



function MainApp() {


  return (
  <>
      <Navbar />
      <div>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/data" element={<DataPage />} />

          </Routes>
      </div>
  </>
  )
}

function App () {
  return (
    <>
      <DataProvider>
        <Router>
          <MainApp />
        </Router>
      </DataProvider>
    </>
  )
}

export default App
