import React from 'react';

const Header = props => {
    if(props.userDetails === undefined){
        return null;
    }
    const { name, img } = props.userDetails;
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a href="/"> Facebook</a>
                    </div>
                    <div className="col text-right">
                        <span>{name}</span>
                        <img src={img} alt={name} width="30" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;