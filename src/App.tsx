import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Layout from './client/layout/layout'
import HomePage from './client/pages/homePage'
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
