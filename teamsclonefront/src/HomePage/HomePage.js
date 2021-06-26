import React from 'react'
import logo from "../Resources/images/teamlogo.png"
import ConnectButtons from './connectbuttons'
import './HomePage.css'
import {Card} from 'semantic-ui-react'

const HomePage = () => {
    return (
        <div>
            <div className="home_container" >
            <Card className="home_panel">
                <img 
                src={logo} 
                alt="HomePageLogo"
                className="home_image"></img>
                <p style={{"font-size":'24px'}}>Microsoft Teams</p>
                <ConnectButtons/>
            </Card>
            </div>
        </div>
    )
}

export default HomePage
