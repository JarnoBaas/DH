import React from "react";
import CodeEditor from "./CodeEditor";
import { useState } from 'react';
import Codewithchat from "./Codewithchat";
import Newchatroom from "./newchatroom";

const RoomSelector = (name) => {
    const [joined, setJoined] = useState(false);
    const [room, setRoom] = useState("");

    const [username, setUsername] = useState("");

    
    const exitRoom = () => {
        setJoined(false)
    }

    const enterRoom = () => {
        setUsername(name.name)
        setJoined(true)
        //console.log({value})
    }

    return (
        <div>
             {joined == false ? <div>
                 <input placeholder="Roomname" id="Something" onChange={(e) => setRoom(e.target.value)}/>
                 <button onClick={() => enterRoom()}>Enter room</button>
                 </div> 
                 : <div>
                    <Codewithchat roomName={room} exitFunc={exitRoom} username={username}/>
                 </div>}
        </div>
        
    )
}

export default RoomSelector;