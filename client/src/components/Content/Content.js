import React, { useState, useEffect } from 'react';
import { UserResponseButtons } from '../../components/UserResponseButtons/UserResponseButtons'
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ROOM } from '../../utils/queries';
import Auth from '../../utils/auth';
import { DPad } from '../../components/Dbuttons/Dbutton';
// import { useLifeCountContext } from '../../utils/LifeCountContext';

export const Content = () => {
    const [eventResolution, setEventResolution] = useState("");
    const [visibility, setVisibility] = useState("hidden");
    // const { lifeCount, setLifeCount } = useLifeCountContext();
    // useEffect(() => {
    //     setVisibility('hidden')
    // }, [])

    const { roomName } = useParams();

    const { loading, data } = useQuery(QUERY_ROOM, {
        variables: { roomName }
    });

    console.log(data)
    const room = data?.room || {};

    if (loading) {
        return <div>Loading...</div>
    };
    return (
        <>
            {(
                // Checking if room has no event or event, render different XML
                Auth.loggedIn() && room.event.length === 0 ?
                    // If room has no event, render this 
                    <div>
                        {/* <p>You have {lifeCount} hit points left</p> */}
                        <h1>{room.roomName}</h1>
                        <p>{room.message}</p>
                        <DPad roomDirections={room.direction} setEventResolution={setEventResolution} visibility={"visible"} setVisibility={setVisibility} />
                    </div> :
                    // If room has event, render this
                    <div>
                        {/* <p>You have {lifeCount} hit points left</p> */}
                        <h1>{`${room.roomName} has an event`}</h1>
                        <UserResponseButtons userResponse={room.event[0]} setEventResolution={setEventResolution} setVisibility={setVisibility} />
                        <DPad roomDirections={room.direction} setEventResolution={setEventResolution} visibility={visibility} setVisibility={setVisibility} />
                        <div>
                            <p>{eventResolution}</p>
                        </div>
                    </div>
            )
            }
        </>
    )
}