import React from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import './Home.css'
import Navigation from './Navigation'
function Home() {
    return(
        <div className="container">
           <div className="main-cont">
                <Header/>
                <hr />
                <Body/>
                <Footer/>
           </div>
           <Navigation/>
        </div>
    )
    
}

export default Home
