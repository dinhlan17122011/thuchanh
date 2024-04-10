import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {routes}from './routes'
import Header from './components/HeaderCompoent/Header'
export function App() {
  return (
    <div>
    <Header />
    <Router>
      <Routes>
        {routes.map((route)=>{
          const Pages =  route.page
          return (
            <Route path={route.path} element={<Pages />} />
          )
        })}
      </Routes>
    </Router>
    </div>
  )
}

export default App