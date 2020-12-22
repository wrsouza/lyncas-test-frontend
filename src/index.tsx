import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyle'
import { GlobalProvider } from './contexts/global';
import Loader from './components/Loader'

import Routes from './routes';

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalProvider>
        <Loader />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>        
      </GlobalProvider>
    </>
  )
}
  
  render(<App />, mainElement)
