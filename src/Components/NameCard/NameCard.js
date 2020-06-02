import React from "react";

const NameCard = ({ username }) => {
    return (
        <div className="nameCard">
            <p>{username}</p>
        </div>
    );
};

export default NameCard;