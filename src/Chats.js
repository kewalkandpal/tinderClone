import React from 'react';
import Chat from './Chat';

function Chats(){
    return(
        <div className="chats">
          <Chat 
          name="Elon"
          msg="hy sundar i am fine 😀"
          time="2 min ago"
          profile="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
          />
          <Chat 
          name="Sundar pichai"
          msg="hello how are u ?"
          time="5 min ago"
          profile="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0.jpg"
          />
          <Chat 
          name="Sachin"
          msg="hello how are u ?"
          time="1 hr ago"
          profile="https://media.gettyimages.com/photos/sachin-tendulkar-of-india-celebrates-his-50th-test-century-during-day-picture-id107684365?s=612x612"
          />
          <Chat 
          name="Sehwag"
          msg="i am fine bro 😍"
          time="2 min ago"
          profile="https://media.gettyimages.com/photos/virender-sehwag-of-gemini-arabians-looks-on-during-the-opening-match-picture-id507232472?s=612x612"
          />
          
        </div>
        
    )
};
export default Chats;