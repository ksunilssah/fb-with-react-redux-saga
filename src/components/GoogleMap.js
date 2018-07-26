import React from 'react';

const Map = props => {
    if(props.location === undefined){
        return null;
    }

    const { latitude, longitude } = props.location;
    if (latitude === '' || longitude === '') return false;
    return <div className="map-container">
        <img src={`https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDI1UcLDp3iuV9fQ7dpSmK-c-aei5Ijty0&maptype=roadmap&zoom=15&size=520x300&center=${latitude},${longitude}`} alt="Google Map" />
    </div>
}

export default Map;