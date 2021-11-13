import React from 'react'
import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
import AboutUs from './pages/AboutUs'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  )
}

export default App
