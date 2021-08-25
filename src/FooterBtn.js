import React from 'react';
import './FooterBtn.css';
import { IconButton } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function FooterBtn(){
    return(
        <div className="buttons">
            <IconButton>
                <ReplayIcon className="btnReply" fontSize="large"/>
            </IconButton>
            <IconButton>
                <CloseIcon className="btnClose" fontSize="large"/>
            </IconButton>
            <IconButton>
                <StarRateIcon className="btnStar" fontSize="large"/>
            </IconButton>
            <IconButton>
                <FavoriteIcon className="btnFav" fontSize="large"/>
            </IconButton>
            <IconButton>
                <FlashOnIcon className="btnFlash" fontSize="large"/>
            </IconButton>
        </div>
    )
};
export default FooterBtn;