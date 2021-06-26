import React from 'react'

const JoinRoomTitle = ({isRoomHost}) => {
    let title = isRoomHost?"Host Meeting":"Join Meeting"
    return (
        <p className="join_room_title">
            {title}
        </p>
    )
}

export default JoinRoomTitle
