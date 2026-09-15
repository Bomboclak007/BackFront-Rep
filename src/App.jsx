import { useState } from 'react'

import React, { StrictMode,} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Common/Header/Header.jsx'
import Bottom from './Common/Bottom/Bottom.jsx'

import MainPage from './Page/MainPage/MainPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <Header/>
            <Routes>
                <Route path='/' index element = {<MainPage/>}/>
                <Route path='MainPage' element={<MainPage/>}/>
            </Routes>  
          <Bottom />
        </BrowserRouter>
    </StrictMode>,
    </>
  )
}

export default App
