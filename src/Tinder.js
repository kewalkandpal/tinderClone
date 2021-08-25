import React, {useState } from 'react';
import './Tinder.css';
import TinderCard from 'react-tinder-card'

function Tinder(){
  const [people,setpeople] = useState([
    {
    name:"Elon musk",
    url:"https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
  },
  {
    name:"Sundar pichai",
    url:"https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0.jpg"
  },
  {
    name:"Sachin Tandulkar",
    url:"https://media.gettyimages.com/photos/sachin-tendulkar-of-india-celebrates-his-50th-test-century-during-day-picture-id107684365?s=612x612"
  },
  {
    name:"Virendra Sehwag",
    url:"https://media.gettyimages.com/photos/virender-sehwag-of-gemini-arabians-looks-on-during-the-opening-match-picture-id507232472?s=612x612"
  },
]);

    return(
        <div className="tinder_card">
          <div className="card_center">
          {
            people.map(person =>( 
              <TinderCard className="swipe" preventSwipe={['right', 'left']} key={person.name}>
              <div style={{backgroundImage:`url(${person.url})`}} className="card">
                  <h3>{person.name}</h3>
              </div>  
              </TinderCard>
            ))
          }
          </div>
        </div>
    )
};
export default Tinder;