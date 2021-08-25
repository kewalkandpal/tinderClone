import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

function Header({toBack}){
    const history = useHistory();
    return(
        <div className="header">
            {
                toBack?
                    (
                    <IconButton onClick={()=> history.replace(toBack)}>
                    <ArrowBackIosIcon className="header_icon" fontSize="large"/>
                    </IconButton>     
                    )
                :(
                        <IconButton>
                        <PersonIcon className="header_icon" fontSize="large"/>
                        </IconButton>
                )
            }

            <Link to="/">
            <img className="tinder_logo" src="https://media.designrush.com/inspirations/129349/conversions/_1513706350_604_tin-preview.jpg" alt="tinder_logo" />
            </Link>
            <Link to="/chats">
            <IconButton>
            <ForumIcon className="header_icon" fontSize="large"/>
            </IconButton>
            </Link>
        </div>
    )
}
export default Header;