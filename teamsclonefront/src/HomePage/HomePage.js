import React from 'react'
import logo from "../Resources/images/teamlogo.png"
import ConnectButtons from './connectbuttons'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="home_container">
            <div className="home_panel">
                <img src={logo} className="home_image"></img>
                <h2>Microsoft Teams</h2>
                <ConnectButtons/>
            </div>
        </div>
    )
}

export default HomePage
