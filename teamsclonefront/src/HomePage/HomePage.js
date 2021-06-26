import React , {useEffect} from 'react'
import logo from "../Resources/images/teamlogo.png"
import ConnectButtons from './connectbuttons'
import './HomePage.css'
import {Card} from 'semantic-ui-react'
import {connect} from 'react-redux'
import { setIsRoomHost } from '../Store/actions'

const HomePage = ({setIsRoomHostAction}) => {

    useEffect( ()=>{
        setIsRoomHostAction(false)
    } , [])

    return (
        <div>
            <div className="home_container" >
            <Card className="home_panel">
                <img 
                src={logo} 
                alt="HomePageLogo"
                className="home_image"></img>
                <p style={{"fontSize":'24px'}}>Microsoft Teams</p>
                <ConnectButtons/>
            </Card>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) =>{
    return{
        setIsRoomHostAction: (isRoomHost) =>{
            dispatch(setIsRoomHost(isRoomHost))
        }
    }
}

export default connect (null, mapDispatchToProps)(HomePage)
