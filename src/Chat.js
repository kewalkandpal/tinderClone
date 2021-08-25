import React from 'react';
import './Chat.css';
import { Avatar } from '@material-ui/core';
import {Link} from 'react-router-dom';

function Chat({name,msg,time,profile}){
    return(
        <Link to={`/chats/${name}`}>
        <div className="chat">
             <Avatar className="profile" placeholder={name} src={profile}/>
             <div className="userDetail">
                 <h3>{name}</h3>
                 <p>{msg}</p>
                 </div> 
             <div className="time">{time}</div>
        </div>
        </Link>
    )
};
export default Chat; 