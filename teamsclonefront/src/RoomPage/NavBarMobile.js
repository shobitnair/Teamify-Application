import React from 'react'
import {Button} from "@material-ui/core"

const NavBarMobile = () => {
    return (
        <div id="navbar">
        <Button id="nav_bt"><i class="fas fa-id-card-alt"></i></Button>
        <Button id="nav_bt"><i class="fab fa-joomla"></i></Button>
        <Button id="nav_bt"><i class="fas fa-comment-alt"></i></Button>
        <Button id="nav_bt"><i class="fas fa-bars"></i></Button>
        </div>
    )
}

export default NavBarMobile
