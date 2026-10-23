import { useState } from 'react'

import React, { StrictMode,} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Common/Header/Header.jsx'
import Bottom from './Common/Bottom/Footer.jsx'
import News from './Page/MainPage/PageNews/News.jsx'
import MainPage from './Page/MainPage/MainPage.jsx'
import Authorization from './Common/admin/authorization.jsx'
  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <Header/>
            <Routes>
                <Route path='/' index element = {<MainPage/>}/>
                <Route path='News' element={<News/>}/>
                <Route path='Authorization' element={<Authorization/>}/>
            </Routes>  
          <Bottom />
        </BrowserRouter>
    </StrictMode>
    </>
  )
}

export default App
