import React from 'react'
import ReactDOM from 'react-dom'

import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

ReactDOM.render(
    <>
        <Info />
        <About />
        <Interests />
        <Footer />
    </>,
    document.getElementById('root')
)