import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import './ChatScreen.css';

function ChatScreen() {
    const [inputs,setInput] = useState("");
    const [msg, setMsg] = useState([
        {
            name: "Elon",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
            message: "hey"
        },
        {
            name: "Elon",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
            message: "hello dear kaise ho?"
        },
        {
            message: "hlo"
        },
        {
            message: "i am fine & h r u?"
        }
    ]);

    const sendMsg = (e)=>{
        e.preventDefault();
        if(inputs){

            setMsg([...msg, {message:inputs}]);
            setInput("");
        }
    };
    return (
        <>
        <div className="chatScreen">
            <p>you matched with elon on 24/8/2021</p>
            {
                msg.map(msg => (
                    msg.name ? (

                        <div className="chats_Msgs">
                            <Avatar className="chatScreen_image" alt={msg.name} src={msg.image} />
                            <p className="chatScreen_msg">{msg.message}</p>
                        </div>
                    ) : (
                        <div className="chats_Msgs">
                            <p className="chatScreen_UserMsg">{msg.message}</p>
                        </div>
                    )
                ))
            }
        </div>
           <form className="send_msg">
           <input type="text" placeholder="type your message..." value={inputs} onChange={(e)=>setInput(e.target.value)}/>
           <button  onClick={sendMsg} type="submit" className="btn">SEND</button>
         </form>
         </>
    )
};

export default ChatScreen;