import React from 'react';

const UserDetails = props => {

    if(props.userDetails === undefined){
        return null;
    }
    const getTime = (currentTime, postTime) => {
        let diff = (currentTime.getTime() - postTime.getTime()) / 1000;
        diff /= 60;
        return Math.round(diff) >= 60 ? Math.round(diff/60) + ' hours ago' : Math.abs(Math.round(diff)) + ' mins ago';
    }
    return (
        <div className="d-flex justify-content-between user-info">

            <div className="user">
                <img src={props.userDetails.img} alt={props.userDetails.name} width="30" />
                <span>{props.userDetails.name}</span>
            </div>
            <div className="time">
                {getTime(new Date(), new Date(props.time))}  
                </div>

        </div>
    );
}
export default UserDetails;